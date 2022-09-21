import { useState} from 'react'
import { PropTypes } from "prop-types";



export const CounterApp = ({value}) => {
  console.log (`render`);
  const [ counter, setCounter,] = useState(value)

  const handleAdd = ()=> {
setCounter( (counter)=> counter + 2);
}
const handleSubstarct = () => setCounter(counter -2);
const handleReset = () => setCounter(value);



  
  
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    
    <button onClick={ handleAdd }>+1</button>
    <button onClick={ handleSubstarct }>-1</button>
    <button onClick={ handleReset }>reset</button>

    




    </>
  )
}
CounterApp.prototype={
    CounterApp: PropTypes.string.isRequired, 
   value:PropTypes.string,
}
