import { BrowserRouter , Link,Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Link to="/home">Home Page</Link><br />
      <Link to="/details">Details Page</Link>
     <Routes> 
      <Route exact path="/home" element={<Home/>}/>
      <Route  exact path="/details" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

const Home = () => {

  return (
    <div>
       <h1>Home Page</h1>
      <h2>My Industry</h2>
      <h4>React</h4>
      <h4>React Native</h4>
      <h4>Node</h4>
      <h4>Mongo</h4> 

    </div>
  );
}
const Details = () => {

  return (
    <div>
      <h1>Give you Details</h1>
      <p>Name </p>
      <input type="text" /><br />

      <p>Number</p>
      <input type="number" /><br />

      <p>Blood Grp</p>
      <input type="text" /><br />
    </div>
  );

}


export default App;
