import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios, { all } from "axios";
import { useParams } from "next/navigation";
let api = "https://dev.to/api/articles";
export default function Detail() {
    let [data, setAllData] = useState([])
    const params = useParams()
    // console.log(params, 'params')
    let DetailApi = async () => {
        let receiver = await axios.get(`https://dev.to/api/articles/${params.id || ""}`);
        setAllData(receiver.data);
        console.log(receiver.data, "data of receiver")
        // console.log(receiver.data.title);
    }

    useEffect(() => {
        DetailApi(api)
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <div>
                        {data.title}
                    </div>
                    <div>
                        {/* {data.user.profile_img} */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}