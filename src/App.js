import './App.css';
import Header from './components/Header'
import List from './components/List';
import React, { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);
  const restApiUrl = "https://listr-api01.herokuapp.com/";

  useEffect( ()=>{
    fetch(restApiUrl)
    .then(res => res.json())
    .then((users) => {
      setUsers(users)
    })
    .catch(console.log)
  }, []);

  return users ? (
    <div className="App">
      <Header/>
      <h1> 😎🔥🔥 </h1>
      <List usersList={users} />
    </div>
  ) : (
    // Added a loading text incase of bad network
    <div className="loading">
      <h1>😕 Loading...</h1>
    </div>
  );
}


export default App;
