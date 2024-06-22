import Style from  '../css/module1.module.css'
// for using style of module.css file we always have to import this every componet in which  we want to use it 

import '../css/extStyle.css'
// by importing file like this , it is globally imported means its class can be used in another components  so we use css module
export const LearnExtCss = () => {
  return (
    <>
        <p className='txt-size-40'> 
            This is heading 
        </p>

        <br />
        <button className={`${Style['btn-primary']}`}>Submit</button>
    </>
  )
}
