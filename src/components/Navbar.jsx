import Logo from "@/components/Logo/Logo";

export default function Navbar() {
    const menuData = ["Home", "Blog", "Contact"]
    return (
        <div className="w-full py-8 flex justify-center items-center">
            <div className=" w-6/12 flex justify-between ">
                <Logo />
                <div className="flex gap-10">
                    {
                        menuData.map((el, i) => {
                            return (
                                <button key={i}>{el}</button>
                            )
                        })}
                </div>
                <input type="text" placeholder="search smt ?" className=" p-2 border-solid rounded-lg bg-grey-500 shadow-lg shadow-indigo-500/40"></input>
            </div>
        </div>
    )
}