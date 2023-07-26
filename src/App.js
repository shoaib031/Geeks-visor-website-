import logo from './logo.svg';
import './App.css';

import HeaderSection from './components/HeaderSection';
import PopUpBox from './components/PopUpBox';
import NavigationSection from './components/NavigationSection';
import TechnologiesSection from './components/TechnologiesSection';
import DigitalMarketing from './components/DigitalMarketing';
import Industries from './components/Industries'
import Choose from './components/Choose'
import Clients from './components/Clients'
import RecentWork from './components/RecentWork'
import UserSaying from './components/UserSaying'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
       <NavigationSection />
       <HeaderSection />
      <PopUpBox />
        <TechnologiesSection /> 
       <DigitalMarketing /> 
       <Industries /> 
       <Choose />   
       <Clients />
       <RecentWork /> 
       <UserSaying />  
       <ContactUs /> 
       <Footer />  
    </div>
  );
}

export default App;