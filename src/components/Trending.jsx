export default function Trending() {
    const data = [
        {
            url: "https://cdn.pixabay.com/photo/2023/10/10/15/04/aster-8306687_1280.jpg",
            badge: "Technology",
            content: "The Impact of Technology on the Workplace: How Technology is Changing"
        }

    ];

    return (
        <div className="w-72 h-80  rounded-xl">
                {data.map((el, i) => (
                    <div key={i}>
                        <div className=" w-full relative">
                            <img src={el.url} alt="" />
                        </div>
                        <div className="flex w-[230px] h-[120px] flex-col flex-start gap-4 absolute top-0">
                            <div>{el.badge}</div>
                            <div>{el.content + 'asd'}</div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
