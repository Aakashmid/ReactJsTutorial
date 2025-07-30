
const TrendingCard = ({ img, number }: { img?: string, number?: number }) => {
    return (
        <div className=" h-full w-full relative  ">
            <div className="movie-poster h-full w-full">
                <img src={img} className="h-full w-full  object-cover rounded-[0.5rem]" alt="" />
            </div>
            <div className="absolute z-10 h-fit bottom-0 -left-2.5"><span className=" text-[4.25rem] font-bold text-stroke  ">{number}</span></div>
        </div>
    )
}

export default TrendingCard