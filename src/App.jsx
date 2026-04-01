
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './components/navbar/navbar'
import Review from './Components/Review/Review'
import Options from './Components/Options/Options'
import Subscription from './Components/Subscription/Subscription'
import Footer from './Components/Footer/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const fetchCard = async() =>{
    const res = await fetch("/public/data.json");
    return res.json();
  }

function App() {
const [selectedCard, setSelectedCard] = useState([]);

const [selectedType, setSelectedType] = useState("Products");
 
   const cardPromise = fetchCard();
  return (
   
    <>
    <ToastContainer />
    <Navbar selectedCard={selectedCard}></Navbar>
    <Banner></Banner>
    <Review></Review>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <Cards cardPromise={cardPromise}  selectedCard={selectedCard}
  setSelectedCard={setSelectedCard}    selectedType={selectedType}
  setSelectedType={setSelectedType}></Cards>
    </Suspense>
  

  {
  selectedType === "Products" && (
    <>
      <Options></Options>
      <Subscription></Subscription>
      <Footer></Footer>
    </>
  )
}
    
    </>
  )
}

export default App
