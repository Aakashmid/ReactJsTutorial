
export const LearnMap = () => {
    const data=['item1','item2','item3','item4','item5']
  return (
   <>
   {/* here item is value and i is index value  */}
    {data.map((item,i)=>(
        <li>{i+1} {item}</li>
        ))}
   </>
  )
}
