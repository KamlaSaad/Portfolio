import './App.css';
import Nav from "./Nav/nav";
import About from "./About/about";
import Work from "./Works/work";
import Nums from "./Nums/nums";
import Services from "./Services/services";
import Carousel from "./Carousel/carousel";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import News from "./News/news";
import Logo from "./logo";
function App() {
  const backG={background:'url(img/banner.jpg)'};
  return (
    <div className="App">
       <Nav/>
       <div className="home" style={backG}>
            <h1>I'm Marek Doe</h1>
            <p>Creative designer and developer</p>
            <button>Discover</button>
        </div>
        <About/>
        <Work/>
        <Nums/>
        <Services/>
        <Carousel/>
        <Logo/>
        <News/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
