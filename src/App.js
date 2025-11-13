import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App(){
  return(
    <>
    <Navbar/>
    <h1>hello sai</h1>
    </>
  )
}

export default App;


// function App() {

//   const [fetchdata,setFetchData]=useState([])

//   async function fetchData(){
//     debugger;
//     const response=await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data=await response.json()
//     console.log(data)
//     setFetchData(data);

//   }

//   useEffect(()=>{
//     fetchData() 
//   },[])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 5.0 
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

