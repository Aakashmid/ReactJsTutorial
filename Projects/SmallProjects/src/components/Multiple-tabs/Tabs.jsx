import React from 'react'
import { useState } from 'react';
export default function Tabs({ tabContents, onChangeTab }) {
    const [selectedTab, setSelectedTab] = useState(1);
    const handleClickTab = (index) => {
        setSelectedTab(index);
        onChangeTab(index);
    }
    return (
        <div className='w-full'>
            <div className="tabs flex items-center mx-auto w-fit mt-20 ">
                {tabContents.map((tab, index) => {
                    return (
                        <button disabled={selectedTab === index+1} key={index} className={` p-2 text-black cursor-pointer transition-all tab-${index+1} ${selectedTab === index+1 ? 'bg-green-600' :'bg-amber-200 '}  `} onClick={() => handleClickTab(index+1)}>
                            {tab.title}
                        </button>
                    )
                })}
            </div>

            <div className="content px-10 w-fit mx-auto">
                {tabContents.length >= selectedTab && tabContents[selectedTab-1].content}
            </div>
        </div>
    )
}
