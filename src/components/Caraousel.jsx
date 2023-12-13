import CarouselImg from "../components/imgs/BigImage.png";
import Badge from "./Badge";
import BigText from "./BigText";
let api = "https://dev.to/api/articles"
export default function Carousel() {
    // const [data, setData] = useState();


console.log(api);

    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="relative">
                    <img src={CarouselImg.src} alt="Carousel" />
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
                        <button>
                            &lt;
                        </button>
                    </div>
                    <div className="border-solid bg-slate-200 rounded flex py-2 px-5 justify-center items-center">
                        <button>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}