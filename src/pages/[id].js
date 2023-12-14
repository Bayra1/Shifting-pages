import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios, { all } from "axios";
import { useParams } from "next/navigation";
import Anonymous from "../components/imgs/Anonymous.png";
let api = "https://dev.to/api/articles";
export default function Detail() {
    let [data, setAllData] = useState([])
    const params = useParams()
    // console.log(params, 'params')
    let DetailApi = async () => {
        let receiver = await axios.get(`https://dev.to/api/articles/${params.id || ""}`);
        setAllData(receiver.data);
        // console.log(receiver.data, "data of receiver")
        // console.log(receiver.data.title);
    }

    useEffect(() => {
        DetailApi(api)
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-6">
                    {/* Heading */}
                    <div className="flex flex-col gap-6">
                        <div className="text-3xl font-semibold">
                            {data.title}
                        </div>
                        <div className="flex gap-6">
                            <div className="flex gap-2">
                                <img className="w-7 rounded-full h-7" src={data?.user?.profile_image} alt="" />
                                <div>{data?.user?.name}</div>
                            </div>
                            <div>{data.readable_publish_date}</div>
                        </div>
                    </div>
                    {/* Img and Detailed information */}
                    <div className="w-[854px] flex flex-col gap-8">
                        <img className="rounded" src={data?.social_image} alt=""></img>
                        <div>{data?.body_markdown}</div>

                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}