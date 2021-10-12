import React, {useState} from "react";

function App() {

  const [myList, setMyList] = useState([]);
  const handleAddList = () => {
    const id = myList.length+1;
    const input = document.getElementById("add-list").value;
    setMyList(myList => [...myList, {id,name:input}]);
    document.getElementById("add-list").value = '';
  }

  const handelInputChange = (e) =>{
    if (e.key === 'Enter') {
      handleAddList();
    }
  }

  const showMyList = myList.map(({name,id})=>(
    <>
    <option key={id}>{id}({name}</option>
    </>
    ))

  return (
    <div className="App">
      <div>
      <select>{showMyList}</select>
      </div>
      <input onKeyDown={handelInputChange} type="text" id="add-list" />
      <button onClick={handleAddList}>Hinzufügen</button>
      
    </div>
  );
}
export default App;