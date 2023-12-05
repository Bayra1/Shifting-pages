function IndividualCard() {
    return (
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
    )
}
export default IndividualCard;