import './App.css';
import {useState} from "react"; 
import Axios from 'axios';
import React from 'react';

function App() {
   const [first_name,setFirstName]=useState("");
   const [last_name,setLastName]=useState("");
   const [number,setNumber]=useState(0);
   const [email_id,setEmailId]=useState("");
   const [message,setMessage]=useState("");

     
   
    // const handlePrint=()=> {
    //   var value=React.findDOMNode(this.refs.storagetype).value;
    //   if (value==="1") {
    //     local();
    //   }else if(value==="2")
    //   {
    //     insert();      }
    // }

    const local=()=>{
      localStorage.setItem("first_name",first_name);
      localStorage.setItem("last_name",last_name);
      localStorage.setItem("number",number);
      localStorage.setItem("email_id",email_id);
      localStorage.setItem("message",message);
      alert("the data has been enetred to local storage check out!")
    }
      const insert=() =>{        
               //sending an object to backend
           Axios.post("http://localhost:3001/createform",{
             first_name: first_name,
             last_name:last_name,
             number: number,
             email_id:email_id,
             message:message,
             
          }).then(()=> {alert("successfully inserted to database")
      });
      }
      
  return (
    <div className="App">
      <div className="container" >
      <h1 > Contact Us </h1>
      <h3>we love questions and feedback - and we're happy to help!</h3>
      </div>
          
      <div className="information">
        
        <label>Enter your first Name:</label>
        <input  type="text" name="first_name" placeholder="What's your first name"  autoComplete='off' onChange={(event) =>{
          setFirstName(event.target.value) ;
        }}>
        </input>
        <label>Enter your last name</label>
        <input type="text" name="last_name" placeholder="What's your last name?" autoComplete='off' onChange={(event) =>{
          setLastName(event.target.value);
        }} >
        </input>
        <label>Enter contact number
        </label>
        <input type="number" name="contact"  placeholder="What's Your Contact Number?" autoComplete='off' onChange={(event) =>{
          setNumber(event.target.value);
        }}></input>
        <label> Enter Your Email ID </label>
        <input type="text" name="email_id" placeholder="What's your email id?" autoComplete='off' onChange={(event) =>{
          setEmailId(event.target.value);
        }}></input>
        <label>Type your message here</label>
        <div className="message">
        <textarea name="message" rows="4" cols="50" placeholder="Type your message here" autoComplete='off' onChange={(event)=>{
          setMessage(event.target.value);
        }}></textarea></div>
        <label >Storage Medium:</label>
         <select>
           <option>select a storage medium</option> 
           <option  value="1">Local Storage</option>
           <option value="2">DataBase</option>
           </select>
           
        <button type="submit" name="submit"  onClick={insert}>Submit</button>
        <button type="submit" name="localsubmit" onClick={local}> local storage submit</button>
        </div></div>
    
  );
}
export default App;
