import React, { useEffect } from 'react'

export default function useClickOutside(ref,handler) {
  useEffect(()=>{
    const listner = (event)=>{
        if(!ref.current.contains(event.target )){
            handler()
        }
    }

    window.addEventListener('mousedown',listner)
    window.addEventListener('touchstart',listner)

    return ()=>{
        window.removeEventListener('mousedown',listner)
        window.removeEventListener('touchstart',listner)
    }


  },[ref,handler])
}
