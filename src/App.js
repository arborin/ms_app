import styles from './App.module.css';

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

  const props = {
    firstName: "nika",
    lastName: "giorgadze111",
    age: "21"
  }

  const isGreen = true;

  return (
    <div className={styles.App}>
      <h1>HELLO REACT</h1>
      <p>{name}</p>
      <User {...props} />
      {props.age > 18 ? <h1>AGE MORE 18</h1> : <h1>UNDER 18</h1>}
      {props.age && <h2 style={{ color: 'red' }} > DISPLAY</h2>}
    </div >
  );
}



export default App;