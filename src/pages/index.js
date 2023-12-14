import AllBlog from "@/components/AllBlog";
import Trending from "../components/Trending";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Caraousel";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className=" w-full box-border">
      <Navbar/>
      <Carousel/>
      <Trending/>
      <AllBlog />
      <Footer/>
      
    </div>
  )
}

