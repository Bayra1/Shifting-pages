import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import  useState  from "react";

let api = "https://dev.to/api/articles";

export default function Detail() {
    const [data, setData] = useState([]);

    const GetData = async (api) => {
        let res = await axios.get(api);
        setData(res.data)
    }
    console.log(res.data);

    return (
        <div>
            <Navbar/> 
            <div className="flex justify-center items-center">
                Hello World
            </div>
            <Footer/>
        </div>
    )
}