import './App.css';

const User = (props) => {
  return (
    <>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <h1>{props.age}</h1>
      <hr />
    </>
  );
}


function App() {
  const name = "nika kobaidze";
  const car = <h1>Subariki</h1>;

  const props = {
    firstName: "nika",
    lastName: "giorgadze111",
    age: "21"
  }
  return (
    <div className="App">
      <h1>HELLO REACT</h1>
      <p>{name}</p>
      <User {...props} />
      {/* <User /> */}
    </div>
  );
}


// every component must start capital letter
const GetNameComponent = () => {
  return <h2>NIKOO</h2>;
}



export default App;