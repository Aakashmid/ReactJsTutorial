
export const LearnEvent = () => {
  const handler1 = (e) => {
    e.preventDefault() // Prevents the form from being submitted
    console.log('Button clicked');
  }

const handler2=(message)=>{
  console.log(message);
}
  return (
    <>

      {/* without argument  */}
      <button onClick={handler1}>Click button</button>{/* onclicke call handler1 function  , write event in camelCase*/}

      {/* with argument */}
      <button onClick={() => handler2('Button was clicked!')}>Click Me</button>
    </>
  )
}
