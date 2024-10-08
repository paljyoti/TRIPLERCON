import "./App.css";
// import AboutUs from "./component/AboutUs";
import Blog from "./component/Blog";
import Choose from "./component/Choose";
import Footer from "./component/Footer";
import Header from "./component/Header";
import IamgeScale from "./component/IamgeScale";
import Marqee from "./component/Marqee";
import Navbar from "./component/Navbar";
import Offer from "./component/Offer";
import Services from "./component/Services";
import AboutUs from "./component/AboutUs"
import Vision from "./component/Vision";

function App() {
  return (
    <>
    <div className="app">
    <Navbar/>
    <Header/>
    <Marqee/>
    <AboutUs/>
    {/* <Services/> */}
    <Choose/>
    <IamgeScale/>
    <Vision/>
    <Blog/>
    <Offer/>
    <Footer/>
    </div>
  
    </>
  );
}

export default App;
