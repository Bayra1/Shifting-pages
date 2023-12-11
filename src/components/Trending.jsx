import Badge from "./Badge";
import Hey from "./imgs/Rectangle 39.png";
import BigText from "./BigText";

export default function Trending() {
    const CardData = [
        {
            img: Hey.src,
            bybadge: "Technology",
            title: "The impact of Technology on the Workplace: How Technology is Changing"
        },

        {
            img: Hey.src,
            bybadge: "Technology",
            title: "The impact of Technology on the Workplace: How Technology is Changing"
        },

        {
            img: Hey.src,
            bybadge: "Technology",
            title: "The impact of Technology on the Workplace: How Technology is Changing"
        },

        {
            img: Hey.src,
            bybadge: "Technology",
            title: "The impact of Technology on the Workplace: How Technology is Changing"
        },
    ]


    return (
        <div className=" w-full flex flex-col items-center">
            <div className="flex flex-col gap-5">
                <BigText context="Trending" />
                <div className="flex gap-5">
                    {
                        CardData.map((data, index) => {
                            return (
                                <div className="relative flex bg-blue-500 shadow-lg shadow-blue-500/50" key={index}>
                                    <img className="w-[289px] h-[320px]" src={data.img} alt="" />
                                    <div className="absolute flex flex-col gap-4 top-[172px] bottom-[28px] left-[28.5px] right-[34.5px]">
                                        <div className="flex py-1 px-[10px] items-center rounded-lg w-fit text-white bg-blue-500">{data.bybadge}</div>
                                        <div className="text-lg font-semibold text-white">{data.title}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}