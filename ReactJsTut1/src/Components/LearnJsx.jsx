
export const Learnjsx = () => {
    let model="A2FG4"
    return (
        <>
            {/*conversion of html in js  */}
            {/* React.createElement("h1","null","LearnJsx") */}
            <h1>LearnJsx</h1>

            {/* Expression in Jsx */}

            <h2>Price :{10+20}</h2>
            <h2>Model - LG {model}</h2>

            {/* Attribute in jsx */}
            <h2 className="bg-primary">LearnJSX 3</h2>
            <h2 className={model}>LearnJSX 4</h2>

        </>
    )
}