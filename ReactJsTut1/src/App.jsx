import { FirstTestComponent } from './Components/FirstTestComponent'
import { LearnEvent } from './Components/LearnEvent'
import { Learnjsx } from './Components/LearnJsx'
import { LearnProps } from './Components/LearnProps'
import { LearnUseEffect } from './Components/LearnUseEffect'
import { LearnUseState } from './Components/LearnUseState'
import { LearnUseMemo } from './Components/LearnUseMemo'
import { LiftingStateUp } from './Components/LiftingStateUp'
import { LearnUseCallback } from './Components/LearnUseCallback'
function App() {
  // const showdata=(d)=>{
  //   console.log(d);
  // }
  return (
    <>
      {/* <FirstTestComponent /> */}

      {/* jsx is combination of js and xml */}
      {/* <Learnjsx />  */}

      {/* <LearnProps name="Aakash Kumar Jha" roll={5} /> */}

      {/* <LearnEvent/> */}

      {/* <LiftingStateUp printData={showdata}/> */}

      {/* <LearnUseState/> */}

      {/* <LearnUseEffect/> */}

      {/* <LearnUseMemo/> */}

    <LearnUseCallback/>
    </>
  )
}

export default App
