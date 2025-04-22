import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Carrosel from './components/Carrosel';
import Footer from './components/Footer';
import Card from './components/Card';
import { GiCarDoor } from 'react-icons/gi';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Cardstudents from './components/Cardstudents';
import CardQuestion from './components/CardQuestion';

function App() {
  return (
    <div className="font-sans bg-[#fdfae6] min-h-screen">
      <Header />
      <Banner />
      <Carrosel/>
      <Card/>
      <Card1/>
      <Card3/>
      <Card2/>
      <Cardstudents/>
      <CardQuestion/>
      <Footer/>
    </div>
  );
}

export default App;
