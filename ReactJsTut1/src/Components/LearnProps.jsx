
export const LearnProps = (props) => {
  return (
    <>
    {/* props - use value passed by parent to child */}
    <h1 className="">{props.name}</h1>
    <h1 className="">{props.roll}</h1>
    </>
  )
}
