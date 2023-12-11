import Fcbook from "../components/Logo/FcbIcon";
import InLink from "../components/Logo/InLink";
import Inst from "../components/Logo/Inst";
import Twit from "../components/Logo/Twit";
import Logo from "./Logo/Logo";
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

    const icons = [
        {
            faceBook: Fcbook,
            inLink: InLink,
            inst: Inst,
            twit: Twit
        }
    ]

    return (
        <div className="w-full justify-center items-center">
            <div className="w-6/12 flex flex-col gap-5">
                <div>
                    {
                        about.map((el, i) => {
                            return (
                                <div key={i} className="flex justify-between">
                                    <div>
                                        <h3>{el.about}</h3>
                                        <p>{el.desc}</p>
                                        <div>{el.eMail}</div>
                                        <div>{el.contact}</div>
                                    </div>
                                    <div>
                                        {
                                            linkList.map((items, ind) => {
                                                <ul key={ind}>
                                                    <div>{items.home}</div>
                                                    <div>{items.blog}</div>
                                                    <div>{items.contact}</div>
                                                </ul>
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            icons.map((sector, id) => {
                                                <div key={id}>
                                                    <div>{sector.faceBook}</div>
                                                    <div>{sector.inLink}</div>
                                                    <div>{sector.inst}</div>
                                                    <div>{sector.twit}</div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                <div className="flex justify-between">
                    <Logo />
                    <div>
                        <div>Terms of Use</div>
                        <div>Privacy Policy</div>
                        <div>Cookie Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}