import useWindowResize from ".";

export default function WindowResizeTest() {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;
    return (
        <div className="text-center w-lg mx-auto">
            <h1 className="text-xl font-bold">
                WindowResizeTest
            </h1>
            <p className="">Width: {width}</p>
            <p className="">Height: {height}</p>
        </div>
    )
}
