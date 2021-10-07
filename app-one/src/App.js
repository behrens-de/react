import './App.css';

function App() {

  const Greet = ({name="Max"}) => <h1>{"Hello "+name}</h1>

  return (
    <div className="App">
     <Greet name="Jan"/>
     <Greet/>
    </div>
  );
}

export default App;
