import React from 'react'


// lift state up - we pass data from child to parent  function , we props and pass parameter to props printaData function 

export const LiftingStateUp = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        let data="this is data"
        props.printData(data)
    }
    
    return (
        <>
            <button onClick={handleClick}> Click to call</button>
        </>
    )
}
