
const GeneresCell = ({ genres }: { genres: string[] }) => {
    return (
        <>
            {genres.map((genre, idx) => {
                return (
                    <span
                        key={idx}
                        className="bg-green-300 p-1 rounded-xl mr-2"
                    >
                        {genre}
                    </span>
                );
            })}
        </>
    );
}


export default GeneresCell;