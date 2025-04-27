import { use, useEffect, useState } from "react";

export default function RandomGenerator() {
    const [bgColor, setBgColor] = useState('#000000');
    const [colorType, setColorType] = useState("hex");

    const geneateRgbColor = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`
    }

    const generateRandomColor = () => {
        if (colorType === "hex") {  // generate random hex color
            let hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            let hex = "#";
            for (let i = 0; i < 6; i++) {
                hex += hexChars[Math.floor(Math.random() * hexChars.length)]
            }
            setBgColor(`${hex}`)
        } else {
            setBgColor(geneateRgbColor());
        }
    }

    useEffect(() => {
        generateRandomColor();
    }, [colorType])

    return <>
        <div className={`h-screen w-screen`} style={{ background: bgColor }}>
            <h1 className="text-center lg:text-2xl   pt-4 font-bold">Random Color Generator</h1>
            <div className="flex flex-col lg:flex-row items-center gap-5  p-5 w-fit mx-auto lg:text-lg font-medium  ">
                <button onClick={() => setColorType("rgb")} className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Create RGB color</button>
                <button onClick={() => setColorType("hex")} className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Create Hex color</button>
                <button onClick={() => generateRandomColor()} className="p-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Generate random color </button>
            </div>
            <div className="content w-fit mx-auto">
                <h1 className="text-3xl lg:text-[3rem] ">{colorType==='hex' ? "Hex color "+bgColor : "RGB color "+bgColor}</h1>
            </div>
        </div>
    </>
}