import React from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CustomTabs from './Components/Tabs/CustomTabs';
function App() {
  return (
    <div className="App">
      <Header/>
      <CustomTabs/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
