import { useState } from "react";
import Badge from "../components/Badge"
import  BigText  from "../components/BigText";
let api = "https://dev.to/api/articles"
export default function Carousel() {
    const Images = [
        {
            url: "https://images.unsplash.com/photo-1701979396507-4f4f8db40269?q=80&w=4498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D2"
        },

        {
            url: "https://unsplash.com/photos/an-aerial-view-of-the-golden-gate-bridge-in-the-clouds-AHfHZijwjYc"
        },

        {
            url: "https://images.unsplash.com/photo-1682019323081-94c07163c3e9?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const before = () => {
        if (currentIndex === 0) {
            setCurrentIndex(Images.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    };

    const after = () => {
        const lastImg = currentIndex === Images.length - 1;
        if (lastImg) {
            setCurrentIndex(0)
        } else {
            const NewI = currentIndex + 1
            setCurrentIndex(NewI)
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="relative">
                    <div
                        style={{ backgroundImage: `url(${Images[currentIndex].url})` }}
                        className="w-[1216px] h-[600px] rounded bg-no-repeat"
                    ></div>
                    {/* content on picture of Carousel */}
                    <div className="absolute top-[335px] bottom-[13px] right-[605px] left-[11px] flex w-[598px] rounded gap-10 bg-white p-10">
                        <div className="flex flex-col gap-4">
                            <Badge context="Technology" />
                            <BigText context="Grid system for better Design User Interface" />
                            <div className="text-slate-400">
                                August 20, 2022
                            </div>
                        </div>
                    </div>
                    {/* content on picture of Carousel */}
                </div>
                <div className="flex gap-5 mt-5 justify-end">
                    <div className="border-solid bg-slate-200 rounded flex py-2 px-5 justify-center items-center">
                        <button onClick={before}>
                            &lt;
                        </button>
                    </div>
                    <div className="border-solid bg-slate-200 rounded flex py-2 px-5 justify-center items-center">
                        <button onClick={after}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}