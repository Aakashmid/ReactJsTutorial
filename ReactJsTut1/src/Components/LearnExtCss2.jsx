import Style from  '../css/module1.module.css'

export const LearnExtCss2 = () => {
  return (
    <>
        {/* for using this class we does not  need to import css file of it because it is global and imported in LearnExtCss component  */}
        <p className='txt-size-40'> 
            This is heading 
        </p>

        <br />

        {/* but to use class of module.css we have to import it  */}
        <button className={`${Style['btn-primary']}`}>Submit</button>
    </>
  )
}