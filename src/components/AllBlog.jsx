import BigText from "../components/BigText";
import Badge from "./Badge";
import DescDate from "./DescDate";
import Beach from "../components/imgs/Rectangle 38.png";
import { useState } from "react";

function IndividualCard() {
    return (
        <div className="flex border border-solid rounded-lg bg-blue-500 bg-opacity-5 p-2 flex-col items-start gap-5 w-fit">
            <img className="w-[360px] h-[240px]" src={Beach.src} alt="Beach" />
            <div className="flex flex-col gap-5">
                <Badge context="Technology" />
                <div className="w-[344px]">
                    <BigText context="The Impact of Technology on the Workplace: How Technology is Changing" />
                </div>
                <DescDate />
            </div>
        </div>
    )
}
function LoadMoreButton() {
    return (
   alert("hey How you doing man !")
    );
}


export default function AllBlog() {
    const fourGuides = ["∙ All", "∙ Design", "∙ Travel", "∙ Fashion", "∙ Technology", "∙ Branding"]

    return (
        <div className="flex w-full justify-center items-center bg-white">
            <div className=" flex flex-col gap-[32px] p-7 ">
                {/* Guidenlines about this section */}
                <div className="flex gap-6 flex-col">
                    <BigText context="All Blog Post" />
                    <div className="w-full flex justify-between">
                        <div className="flex gap-8">
                            {fourGuides.map((single, i) => {
                                return <button key={i}>{single}</button>
                            })}
                        </div>
                        <button>View All</button>
                    </div>
                </div>

                {/* Cards section */}


                <div className="flex gap-5">
                    <div className="flex gap-5">
                        <IndividualCard />
                        <IndividualCard />
                        <IndividualCard />
                    </div>
                </div>

                {/* Button => (More Content) */}
                <div className="flex justify-center items-center">
                    <button onClick={LoadMoreButton} className="border-solid bg-slate-400 rounded flex py-2 px-5 justify-center items-center">
                        Load More
                    </button>
                </div>

            </div>
        </div>
    )
}



    // const Cards = () => {
    //     <div className="flex border border-solid rounded-lg bg-blue-500 bg-opacity-5 p-2 flex-col items-start gap-5 w-fit">
    //         <img className="w-[360px] h-[240px]" src={Beach.src} alt="Beach" />
    //         <div className="flex flex-col gap-5">
    //             <Badge context="Technology" />
    //             <div className="w-[344px]">
    //                 <BigText context="The Impact of Technology on the Workplace: How Technology is Changing" />
    //             </div>
    //             <DescDate />
    //         </div>
    //     </div>
    // }

