import { useRef, useState } from "react"
import useClickOutside from ".";

export default function UseClickOutsideTest() {
    const [showModal, setShowModal] = useState(false);
    const ref = useRef(null);
    useClickOutside(ref, () => setShowModal(false));
    return (
        <div className="mx-auto w-md text-center mt-10" ref={ref}>
            {showModal ?
                <>
                    <h1 className="text-xl font-bold">Random contned</h1>
                    <div className="">hello this is random contend for test useClick outside , click outside to confirm that its working or not </div>
                </>
                :
                <button onClick={()=>setShowModal(true)} className="p-1 border rounded-lg hover:bg-gray-200 cursor-pointer ">ShowModal</button>
            }
        </div>
    )
}
