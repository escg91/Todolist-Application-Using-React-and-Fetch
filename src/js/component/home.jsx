import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [tasks, setTasks] = useState(["estudiar", "cocinar", "pasear el perro", "lavar la ropa"]);

  const [newTask, setNewTask] = useState("");

  const removeTask = (index) => {
	
  console.log(index);
   let newTasks = [...tasks]
   newTasks.splice(index, 1)
   setTasks(newTasks)
   console.log(newTasks)
}
  function addTask(e){
	
	if(e.code=="Enter" && newTask!=""){
		
		setTasks([...tasks, newTask])
		setNewTask("")
	}
  }
  function createUser() {
	fetch('https://assets.breatheco.de/apis/fake/todos/user/escg91', {
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json"
      }
    })

    .then((response)=>response.json())
    .then((data)=>console.log(data))
    
  }
  function getToDoList() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/escg91',{
method: 'GET',
headers: {
  'Content-type': 'application/json'
},
  
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    
  }

  function updateToDoList () {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/escg91' , {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
        body: {label: Datos, done: false}
      })
        .then ((response) => response.json ())
        .then ((data) => console.log (data))
      }
   
  
  useEffect(() => {
    
  
	getToDoList();

  }, [])
  
  return (
    <div className="container-fluid d-flex mt-5 justify-content-center">
      <ul className="list-group w-50">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          
          <input
            className="form-control"
            type="text" onKeyDown={e=>addTask(e)}
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            name="task"
            id="task"
          />
        </li>
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center ">
            {task}
            <button onClick={()=>removeTask(index)}className="badge bg-danger hover-hidden">X</button>
          </li>
        ))}
        
        <li className="list-group-item text-center disabled text-muted d-flex justify-content-center align-items-center">
			<small className="w-100">{tasks.length} items.</small>
		</li>
        
      </ul>
    </div>
  );
};

export default Home;
