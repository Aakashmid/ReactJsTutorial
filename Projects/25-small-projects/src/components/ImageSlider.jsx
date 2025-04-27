import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaDotCircle } from "react-icons/fa";

export default function ImageSlider({ page, limit, url }) {
    const [images, setImages] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchImages = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            console.log(data);
            if (data.length > 0) {
                setImages(data)
            } else {
                setErrorMsg("No images found")
            }
        } catch (err) {
            setErrorMsg(err);
        }
        finally {
            setLoading(false);
        }
    }

    const handleSlideLeft = () => {
        if (currentSlide === 0) {
            setCurrentSlide(images.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const handleSlideRight = () => {
        if (currentSlide === images.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    useEffect(() => {
        fetchImages();
    }, [url])

    return <div className="">
        {/* lg:hover:bg-transparent
        lg:hover:bg-transparent */}
        <div className="w-full lg:w-fit mx-auto mt-10  overflow-hidden rounded-2xl border border-gray-400">


            {loading && <div className=" w-full lg:w-[50rem] aspect-[5/3]  " ><h2 className="mx-auto w-fit mt-20">
                Loading...
            </h2></div>}
            {errorMsg !== null  && !loading?
                <div className="w-full lg:w-[50rem] aspect-[5/3]">
                    <h2 className="w-fit mx-auto mt-20">
                        Images not found
                    </h2>
                </div>
                :
                <div className="relative flex items-center">
                    {/* left slide button */}
                    <button onClick={() => handleSlideLeft()} className="cursor-pointer absolute h-full px-2 hover:bg-gray-300/5 " ><FaArrowAltCircleLeft color="white" size={'2rem'} /></button>

                    {images.map((image, index) => (
                        <div key={image.id} className={`${currentSlide !== index && 'hidden'}`}><img src={image.download_url} className=" w-full lg:w-[50rem] aspect-[5/3]  object-cover " alt="" /></div>
                    ))}

                    {/* right slide button */}
                    <button onClick={() => handleSlideRight()} className="cursor-pointer absolute h-full px-2 hover:bg-gray-300/5   right-0"><FaArrowAltCircleRight color="white" size={'2rem'} /></button>
                    
                    <div className="slide-indicator absolute bottom-5  left-1/2 -translate-x-1/2 flex gap-2  items-center">
                        {images.map((_, index) => {
                            return <span onClick={() => setCurrentSlide(index)} key={index} className={`cursor-pointer w-2 h-2 rounded-full ${currentSlide === index ? 'bg-gray-500' : 'bg-gray-200'} `}></span>
                        })}
                    </div>
                </div>
            }
        </div>
    </div>
}