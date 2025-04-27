import React, { useState } from 'react'
import MenuList from './MenuList'

export default function MenuItem({ item }) {
    const [showChildren, setShowChildren] = useState(false);

    const hasChildren = item.children && item.children.length > 0;
    return (
        <li className='menu-item list-none text-white '>
            <div className=" flex gap-4 items-center hover:bg-blue-950 px-3 py-1 rounded-lg">
                {item.label}
                {hasChildren &&
                    <span className="p-1 cursor-pointer text-2xl font-bold" onClick={() => setShowChildren(!showChildren)}>{!showChildren ? '+' : '-'}</span>
                }
            </div>
            <div className="ml-4 flex flex-col gap-2">
                {
                    hasChildren && showChildren && <MenuList list={item.children} />
                }
            </div>
        </li>
    )
}
