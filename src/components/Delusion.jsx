import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Delusion() {
    const router = useRouter()
    const BackToHome = () => router.push(`Home`)
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Navbar/>
            <div className="flex w-[642px] h-[208px] justify-center items-center gap-10">
                <div style={{fontSize: "72px", fontWeight: "400px", paddingRight: "50px", borderRight: "solid 2px grey"}}>404</div>
                <div className="flex flex-col gap-2">
                    <div className="text-2xl font-semibold">Oops It looks like you are in wrong position</div>
                    <div className="w-[392px] text-lg font-normal ">We're sorry, This page is unknown or does not exist the page you are looking for.</div>
                    <button onClick={BackToHome} className="w-fit text-base p-2 rounded bg-sky-400 text-white">Back to Home</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
