

import React from 'react'
import Tabs from './Tabs'

const RenderComp1 = () => {
    return <div className="text-blue text-xl font-medium">
        Random Component
    </div>
}

export default function TabContents() {
    const tabContents = [
        { id: 1, title: 'Tab 1', content: 'Tab 1 content' },
        { id: 2, title: 'Tab 2', content: 'Tab 2 content' },
        { id: 3, title: 'Tab 3', content: <RenderComp1 /> },
    ]

    const handleChangeTab = (index) => {
        console.log(index)
    }
    return (
        <Tabs tabContents={tabContents} onChangeTab={handleChangeTab} />
    )
}
