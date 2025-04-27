import React from 'react'

export default function Suggestion({ data , handleClick }) {
    return (
        <div className=" border border-gray-500 rounded-xl overflow-hidden">
            <ul className="">
                {data && data.length > 0 && data.map((item, index) => {
                    return <React.Fragment key={index}>
                        <li onClick={handleClick} key={index} className="p-2 hover:bg-gray-200 cursor-pointer">{item}</li>
                        {index < data.length - 1 && <hr />}
                    </React.Fragment>
                })
                }
            </ul>
        </div>
    )
}
