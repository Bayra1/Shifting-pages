import { useEffect, useRef, useState } from "react";
import BigText from "./BigText";
import { useRouter } from "next/router";
import axios from "axios";

let api = "https://dev.to/api/articles?username=gereltuyamz";

export default function AllBlog() {
    const [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(3);
    const [isSeenLoadMore, setIsSeenLoadMore] = useState(false);
    const firstData = useRef('');
    const router = useRouter();

    const fetchApi = async (api) => {
        let response = await axios.get(api);
        firstData.current = response.data;
        setData(response.data);
    };

    const navigateToPost = () => router.push(`ViewAllCards`);

    const LoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
        setIsSeenLoadMore(true)
    };

    const Sorting = (label) => {
        setData(firstData.current.filter((element) => element.tags === label));
    };

    useEffect(() => {
        fetchApi(api);
    }, []);

    return (
        <div className="flex w-full justify-center items-center bg-white">
            <div className=" flex flex-col gap-[32px] p-7 ">
                {/* Guidelines about this section */}
                <div className="flex gap-6 flex-col">
                    <BigText context="All Blog Post" />
                    <div className="w-full flex justify-between">
                        <div className="flex gap-8">
                            <button className="hover:text-green-400 text-yellow-400" onClick={() => Sorting('webdev')}>webdev</button>
                            <button className="hover:text-green-400 " onClick={() => Sorting('programming')}>programming</button>
                            <button className="hover:text-green-400 " onClick={() => Sorting('nextjs')}>nextjs</button>
                        </div>
                        <button className="hover:text-green-500" onClick={navigateToPost}>View All</button>
                    </div>
                </div>

                {/* Cards section */}
                <div className="flex justify-center items-center flex-wrap gap-5">
                    {data.slice(0, visibleItems).map((item, index) => (
                        <div className="flex border border-solid rounded-lg bg-blue-500 bg-opacity-5 p-2 flex-col items-start gap-5 w-fit" key={index}>
                            <img className="w-[360px] h-[240px] rounded" src={item.social_image} alt="" />
                            <div className="flex flex-col w-min gap-5 p-2 items-start min-w-fit">
                                <div className="flex py-1 px-[10px] items-center rounded-lg w-fit bg-zinc-400 text-blue-500">{item.tags}</div>
                                <div className="text-2xl font-semibold leading-7">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button => (More Content) */}
                <div className="flex justify-center items-center">
                    {(!isSeenLoadMore &&
                        <button
                            onClick={LoadMore}
                            className="border-solid bg-slate-400 rounded flex py-2 px-5 justify-center items-center"
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}