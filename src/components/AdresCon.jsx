import BigText from "./BigText";
import Text from "./Text";

export default function AddCont() {
    return (
        <div className="flex flex-col py-3 items-center gap-12">
            <BigText context="Contact us" />
            <div className="w-[624px] text-base font-normal text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
            <div className="flex gap-12">
                <div className="border-solid border-2 border-slate-300 rounded-lg shadow-xl  flex w-[294px] p-5 flex-col items-start gap-[10px]">
                    <h2 className="text-2xl font-semibold">Address</h2>
                    <div className="text-lg font-normal text-slate-400">
                        1328 Oak Ridge Drive, Saint Louis, Missouri
                    </div>
                </div>
                <div className="border-solid border-2 border-slate-300 rounded-lg shadow-xl  flex w-[294px] p-5 flex-col items-start gap-[10px]">
                    <h2 className="text-2xl font-semibold">Address</h2>
                    <div className="text-lg font-normal text-slate-400">
                        1328 Oak Ridge Drive, Saint Louis, Missouri
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "14px", padding: "50px"}}>
                <div className="p-3 w-fit flex flex-col bg-slate-100  gap-2">
                    <div className="text-lg font-semibold">
                        Leave a Message
                    </div>
                    <div className="flex gap-5">
                        <input className="rounded p-2 text-slate-500" type="text" value="Your Name" />
                        <input className="rounded p-2 text-slate-500" type="text" value="Your Email" />
                    </div>
                    <input className="rounded p-2 text-slate-500" type="text" value="Subject" />
                    <input className="flex text-slate-500 rounded w-[478px] h-[134px] pt-4 pr-3 pb-3 pl-5 items-start" type="text" value="Write a Message" />
                    <button className="flex rounded w-fit py-3 px-3 bg-sky-500 text-white" type="button">Send Message</button>
                </div>
            </div>
        </div>
    )
}
