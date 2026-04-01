
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './components/navbar/navbar'
import Review from './Components/Review/Review'
import Options from './Components/Options/Options'
import Subscription from './Components/Subscription/Subscription'


 const fetchCard = async() =>{
    const res = await fetch("/public/data.json");
    return res.json();
  }

function App() {
const [selectedCard, setSelectedCard] = useState([]);
 
   const cardPromise = fetchCard();
  return (
   
    <>
    <Navbar selectedCard={selectedCard}></Navbar>
    <Banner></Banner>
    <Review></Review>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <Cards cardPromise={cardPromise}  selectedCard={selectedCard}
  setSelectedCard={setSelectedCard}></Cards>
    </Suspense>
  <Options></Options>
  <Subscription></Subscription>
    
    </>
  )
}

export default App
