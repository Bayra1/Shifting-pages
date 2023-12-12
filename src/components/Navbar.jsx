import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const MoveContact = () => router.push(`Contact`)
    const DirectHome = () => router.push(`Home`) 
    const GoBlog = () => router.push(`Blog`)
    return (
        <div className="w-full py-8 flex justify-center items-center">
            <div className=" w-6/12 flex justify-between ">
                <Logo />
                <div className="flex gap-10">
                    <button className="hover:text-blue-400" onClick={DirectHome}>Home</button>
                    <button className="hover:text-blue-400" onClick={GoBlog}>Blog</button>
                    <button className="hover:text-blue-400" onClick={MoveContact}>Contact</button>
                </div>
                <input type="text" placeholder="search smt ?" className=" p-2 border-solid rounded-lg bg-grey-500 shadow-lg shadow-indigo-500/40"></input>
            </div>
        </div>
    )
}