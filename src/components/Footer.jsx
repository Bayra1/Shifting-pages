import Fcbook from "../components/Logo/FcbIcon";
import InLink from "../components/Logo/InLink";
import Inst from "../components/Logo/Inst";
import Twit from "../components/Logo/Twit";
import Single from "./Logo/Single";
export default function Footer() {
    const about = [
        {
            about: "About",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            eMail: "Email : info@jstemplate.net",
            contact: "Phone : 880 123 456 789"
        }
    ];

    const linkList = [
        {
            home: "Home",
            blog: "Blog",
            contact: "Contact"
        }
    ]

    return (
        <div className="mt-14 bg-slate-200 w-full flex justify-center items-center">
            <div className="w-6/12 flex flex-col gap-5">
                <div className="">
                    {
                        about.map((el, i) => {
                            return (
                                <div key={i} className="flex justify-between">
                                    <div className="w-[289px] flex flex-col items-start gap-6">
                                        <h3 className="text-2xl font-semibold">{el.about}</h3>
                                        <p>{el.desc}</p>
                                        <div>{el.eMail}</div>
                                        <div>{el.contact}</div>
                                    </div>
                                    <div>
                                        {
                                            linkList.map((items, ind) => {
                                                return (
                                                    <ul key={ind}>
                                                        <div>{items.home}</div>
                                                        <div>{items.blog}</div>
                                                        <div>{items.contact}</div>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="flex gap-4">
                                        <Fcbook />
                                        <InLink />
                                        <Inst />
                                        <Twit />
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                <div className="py-[25px]  flex justify-between">
                    <div className="flex gap-3">
                        <Single />
                        <div>
                            <div>Meta Blog</div>
                            <div>© All Rights Reserved.</div>
                        </div>
                    </div>
                    <div className="flex">
                        <div>Terms of Use</div>
                        <div>Privacy Policy</div>
                        <div>Cookie Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}