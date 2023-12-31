import { useState } from "react"


function App (){
  let [num , setNum] = useState(0)
  let [text , setText] = useState('')
  let [array , setArray] = useState([])


  function Addtodo(event){
event.preventDefault()
console.log(text);
if(text === ''){
  alert('please enter text')
  return
}
array.push(text)
setArray([...array])
setText('')

  }
  function deleteTodo(index){
    console.log(index);
    console.log(array);
     const newArray = [...array]
     console.log(newArray);
    newArray.splice(index , 1)
    setArray([...newArray])

  }
  function editTodo(index){
    console.log(index);
    const newArray = [...array]
    const newtodo = prompt('enter new todo')
    if(newtodo === ''){
      alert('please enter todo')
      return
    }
    newArray[index] = newtodo
    setArray(newArray)

  }

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

    <h1>todo with react {text}</h1>


    <form onSubmit={Addtodo}>
      <input type="text" placeholder="enter your todo" onChange={(e) => setText(e.target.value)} value={text} />
     
      <button type="submit">todo</button>
    </form>
     <ul>
    {array.map((item , index) =>{
     return <li>{item}
    <button onClick={()=>deleteTodo(index)}>delete</button>
    <button onClick={()=>editTodo(index)}>edit</button></li>


    })}
    </ul>
  </>
  )
}

export default App