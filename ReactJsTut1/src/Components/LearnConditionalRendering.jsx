import { useState } from "react"

export const LearnConditionalRendering = () => {
    const status = false
    const [islogin, setislogin] = useState(false)
    return (
        <>
            {/* if status is true than h1 will show  */}
            {status && <h1>Aakash You Have to  manage your work</h1>}

            {/* using ternery operator */}

            {/* if condition is true than first componet work else second component */}
            {islogin ? (
                <>
                    <h1>Dashboad page </h1>
                    <button onClick={() => setislogin(false)}>logout </button>
                </>
            ) :
                (
                    <>
                        <h1>Login page </h1>
                        <button onClick={() => setislogin(true)}>Login </button>
                    </>
                )}

        </>
    )
}
