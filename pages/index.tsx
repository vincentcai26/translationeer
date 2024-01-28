import { useEffect, useRef } from "react"
import Home from "../components/Home"

export default function Index() {
  const randNum = useRef("0");
  useEffect(()=>{
    randNum.current = (Math.random() * 5 + 1).toFixed();
  },[])
  // ${(Math.random()*5+1).toFixed(0)}`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url('/images/jumbo1.jpg');`
     
  return (
    <div className="home-container">
      <Home></Home>
    </div>
  )
}
