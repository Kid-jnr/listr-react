import './List.css';
import React, { useState, useEffect } from "react";

function List( {usersList}) {

  let  [currentArray,setCurrentArray]=useState([]);

  useEffect(() => {
    setCurrentArray([...usersList])
  }, [usersList])

  // Sorting the array ahead of time 
  let ascArray = [...usersList].sort( (a,b)=> a.name > b.name ? 1 : -1);
  let dscArray = [...usersList].sort( (a,b)=> a.name < b.name ? 1 : -1);
 

  function handleUpdate(e) {
    let sortType = e.target.value;
    
    if(sortType === "asc"){
      setCurrentArray([...ascArray]);
     
    } else{
      setCurrentArray([...dscArray]);

    }
  }
  
  return (
    <>
      <div className="sort-wrapper">
        <label htmlFor="male">Ascending 🔼 </label>
        <input type="radio" name="sort" value="asc" onChange={handleUpdate} />
        <label htmlFor="male">Descending 🔽</label>
        <input type="radio" name="sort" value="dsc" onChange={handleUpdate}/>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Address</th>
            <th>Birth year</th>
          </tr>

        </thead>

        <tbody>
        { currentArray.map(user =>(
          <tr key={user.name}>
            <td>{user.name}</td>
            <td> {user.address}</td>
            <td>{user.birth_year}</td>
          </tr>

        )) }

        </tbody>
      </table>
    </>
  )
}

export default List
