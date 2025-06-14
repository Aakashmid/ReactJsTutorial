import React, { useRef } from 'react'
import useFetch from '../use-fetch'

export const ScrollToTopBottom = () => {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products",
        {}
    );

    const bottomRef = useRef(null);


    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }


    if (error) {
        return <h1>Error occured ! Please try again.</h1>;
    }

    if (pending) {
        return <h1>Loading ! Please wait</h1>;
    }


    return (
        <div className='max-w-lg mx-auto  text-center'>
            <h1 className='text-xl font-bold'>Scroll To Top And Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button className='border rounded-lg p-2' onClick={handleScrollToBottom}>Scroll To Bottom</button>
            <ul style={{ listStyle: "none" }} className='flex flex-col gap-4'>
                {data && data.products && data.products.length
                    ? data.products.map((item) => <li>{item.title}</li>)
                    : null}
            </ul>
            <button className='border rounded-lg p-2' onClick={handleScrollToTop}>Scroll To Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page</h3>
        </div>
    )
}
