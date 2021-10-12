import React, {useState} from "react";

function App() {

  const [myList, setMyList] = useState([]);
  const handleAddList = () => {
    const id = myList.length+1;
    const input = document.getElementById("add-list").value;
    // Prüffen ob nicht Leer oder schon vorhanden 
    setMyList(myList => [...myList, {id,name:input.trim()}]);
    document.getElementById("add-list").value = '';
  }

  const handelInputChange = (e) =>{
    if (e.key === 'Enter') {
      handleAddList();
    }
  }

  const showMyList = myList.map(({name,id})=>(
    <>
    <option key={id}>{name}</option>
    </>
    ))


  const showListQuanty = () =>{
    const quanty = myList.length;
    let req;
    if(quanty < 1){ req = "Keine Einträge"}
    if(quanty === 1){ req =  "Ein Eintrag"}
    if(quanty > 1){ req = quanty+" Einträge"}
    return req;
  }  

  const allLists = showListQuanty();

  return (
    <div className="App">
      <div>
        <h1>{allLists}</h1>
      <select>{showMyList}</select>
      </div>
      <input onKeyDown={handelInputChange} type="text" id="add-list" />
      <button onClick={handleAddList}>Hinzufügen</button>
      
    </div>
  );
}
export default App;