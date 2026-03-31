
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cards from './Components/Cards/Cards'
import Navbar from './components/navbar/navbar'
import Review from './Components/Review/Review'


 const fetchCard = async() =>{
    const res = await fetch("/public/data.json");
    return res.json();
  }

function App() {

 
   const cardPromise = fetchCard();
  return (
   
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Review></Review>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <Cards cardPromise={cardPromise}></Cards>
    </Suspense>
  
    
    </>
  )
}

export default App
