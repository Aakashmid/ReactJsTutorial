import { useState } from "react"

export const LearnForm = () => {

    // for example 1 
    // const [firstname,setFirstname]=useState('')
    // const [Lastname,setLastname]=useState('')

    // const handleFirstname=(e)=>{
    //     setFirstname(e.target.value) //e.target.value give value of element on which even is occuring 
    // }
    // const handleLastname=(e)=>{
    //     setLastname(e.target.value)
    // }

    // for example 2 
    const [formdata, setFormdata] = useState({
        firstname: '',
        lastname: ''
    })

    const handleChange=(e)=>{
        setFormdata({...formdata, [e.target.name]:e.target.value})
    }

    const showFormData=(e)=>{
        e.preventDefault()  //  prevent default behaviour of form submit 
        console.log(formdata)
    }
    return (
        <>

            {/* we can use either default value of onchange , preffered way is onchange  */}

            {/* Example 1 : in this example we are handling every element one by one  */}
            {/* <form action="">
        FirstName : <input type="text" name="FirstName" onChange={handleFirstname} value={firstname} />
        <br />
        <br />
        LastName : <input type="text" name="LastName" onChange={handleLastname} value={Lastname}/>
    </form> */}


            {/* Example 2 :  */}
            <form action="#" onSubmit={showFormData}>
                FirstName : <input type="text" name="firstname" onChange={handleChange} value={formdata.firstname} />
                <br />
                <br />
                LastName : <input type="text" name="lastname" onChange={handleChange} value={formdata.lastname} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
