import BigText from "../components/BigText";
import Badge from "./Badge";
import DescDate from "./DescDate";
import Beach from "../components/imgs/Rectangle 38.png";
export function AllBlog() {
    const fourGuides = ["∙All", "∙Design", "∙Travel", "∙Fashion", "∙Technology", "∙Branding"]


    const Cards = () => {
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
    }


    return (
        <div className="w-full flex flex-col gap-[32px] p-7">
            <div>
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

            {/* Cards */}
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

        </div>
    )
}
