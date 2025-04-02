import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
 
  const [ toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchData()
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  async function fetchData() {
    try {
      const r = await fetch(`http://localhost:3001/toys`)
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const data = await r.json()
      setToys(data)
    }catch (error) {console.error("❌ Caught error:", error);}
  }

  async function handleLike(obj) {
    try { 
      const r = await fetch(`http://localhost:3001/toys/${obj.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const data = await r.json()
      const updatedList = toys.map(toy => (
        toy.id === data.id ? data : toy))
        setToys(updatedList)
    }catch (error) {console.error("❌ Caught error:", error);}
  }
  
  async function handleNewToy(newToy) {
    try {
      const r = await fetch (`http://localhost:3001/toys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newToy)
      })
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const data = await r.json()
      const updatedList = [...toys, data]
      setToys(updatedList)
    }catch (error) {console.error("❌ Caught error:", error);}
  }

  async function handleDelete(id) {
    try {
      const r = await fetch(`http://localhost:3001/toys/${id}`, {
        method: 'DELETE'
      })
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const updatedList = toys.filter(toy => toy.id !== id)
      setToys(updatedList)
    }catch (error) {console.error("❌ Caught error:", error);}
  }
  

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
      handleNewToy={handleNewToy}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        handleLike={handleLike}
        handleDelete={handleDelete}
        />
    </>
  );

 
}


export default App;
