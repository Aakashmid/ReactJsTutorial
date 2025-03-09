import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({ list = [] }) {
    return (
        <div className=' menu-list '>
            {list && list.length > 0 && list.map((item, index) => {
                return (
                    <MenuItem key={index} item={item} />
                )
            })}
        </div>
    )
}
