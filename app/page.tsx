import { Footer } from "components/Footer";
import { Hero } from "components/Hero";
import { Navbar } from "components/NavBar";

export default function Home() {
  return (
      <div className='w-screen'>
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
  )
}