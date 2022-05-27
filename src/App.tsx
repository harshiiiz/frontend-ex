
import './App.css';
import Brands from './components/Brands';
import Features from './components/Features';
import Header from './components/Header';
import Headline from './components/Headline';
import Clients from './components/Clients';
import Trynew from './components/Trynew';
import Footer from './components/Footer';
import Topbar from './components/Topbar';




function App() {

  const para2='This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com';
  
  return (
    <>
    <div className="mobcontainer">
    <Topbar/>
     <Header para2={para2}/>
     <Brands/>
     <Features para2={para2}/>
     <Headline para2={para2}/>
     <Clients/>
     <Trynew para2={para2}/>
     <Footer/>
    </div>
    <div className='tabcontainer' >
     <Topbar/>
     <Header para2={para2}/>
     <Brands/>
     <Features para2={para2}/>
     <Headline para2={para2}/>
     <Clients/>
     <Trynew para2={para2}/>
     <Footer/>
    </div>
    </>
  );
}

export default App;
