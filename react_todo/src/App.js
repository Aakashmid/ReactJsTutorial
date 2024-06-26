
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Tasks } from './components/Tasks';
function App() {
  const [state, setState] = useState({ items: [], text: '' });
  const handleTextChange = (e) => {
    setState({ items: state.items, text: e.target.value })
  }

  const AddTask = (e) => {
    if (state.text !== "") {
      const items=[...state.items,state.text];
      setState({items:items,text:""});
    }
  }

  const DeletTask=(id)=>{
    const olditems=state.items;
    const items=olditems.filter((item,i)=>{
        return id !== i
    })
    setState({items:items,text:''})
  }

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto shadow-lg text-white p-3">
          <h1 className="text-center  ">ToDo List</h1>
          <div className="row">
            <div className="col-9">
              <input type="text" className='form-control' placeholder='Enter your task...' value={state.text} onChange={handleTextChange} />
            </div>
            <div className="col-3">
              <button className="btn btn-primary px-5" onClick={AddTask}>Add</button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled my-5 row">
                {/* using props to send itemsto Tasks Component and also passing delete function handler so on click delete button we can hadle it  */}
                <Tasks items={state.items} deleteTask={DeletTask}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
