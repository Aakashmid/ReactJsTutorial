import React, { useLayoutEffect, useState } from 'react'

export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useLayoutEffect(()=>{
        const handleResize = ()=>{
            setWindowSize({width:window.innerWidth,height:window.innerHeight})
        }
        window.addEventListener('resize',handleResize);

        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])

    return windowSize;
}
