import { use, useEffect, useState } from "react";

export default function ScrollbarProgress() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products?limit=30&select=title,price')
            const result = await response.json();
            if (result && result.products.length > 0) {
                console.log(result);
                setData(result.products);
            }
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    }

    const handleScrollPercentage = () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

        // console.log(scrollTop);
        // console.log(scrollHeight);
        // console.log(clientHeight);
        // console.log(scrollPercent);
        setScrollPercentage(scrollPercent);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => handleScrollPercentage())

        return () => {
            window.removeEventListener('scroll', () => { handleScrollPercentage })
        }
    }, [])

    // console.log(scrollPercentage);
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="w-full ">
            <div className="header fixed w-full">
                <div className="py-5  bg-amber-800">
                    <h2 className="text-white text-3xl mx-auto w-fit">Scroll Progress tracker</h2>
                </div>
                <div className="w-full h-2 bg-green-400">
                    <div style={{ width: `${scrollPercentage}%` }} className={`bg-amber-400  h-full  `}></div>
                </div>
            </div>

            <div className="main-container pt-24 ">
                <div className="flex flex-col items-center  gap-5">
                    {data && data.length > 0 && data.map((item, index) => {
                        return (
                            <div key={index} className="bg-gray-200 rounded-lg p-2 text-center">
                                <h2>Title - {item.title}</h2>
                                <p>Price - {item.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}