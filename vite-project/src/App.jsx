import { useState } from "react"


function App (){
  let [num , setNum] = useState(0)
  function Addnum(){
    setNum(num + 1)
  }
  function Subnum(){
    if(num === 0){
      alert('ab nahi ho sakta')
      return
    }
    setNum(num - 1)
  }
  return(
    <>
    <h1>hello world | vite {num}</h1>
    <button onClick={Addnum}>add</button>
    <button onClick={Subnum}>subtract</button>
  </>
  )
}

export default App