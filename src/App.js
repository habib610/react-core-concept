import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {
const nayoks=['sakib', 'razzak', 'josim', 'bappi', 'shuvo', 'alomgir', 'shavanan', 'purnima']


const products = [
  {name: "PhotoShop", price:'65$'},
  {name: "Illustrator", price:'95$'},
  {name: "Pdf Reader", price:'15$'}
];
  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <p>I am react Person</p>

    <Users></Users>

      <Counter></Counter>
      <ul>
      {nayoks.map(nayok => <li>{nayok}</li>)}

      {products.map(product => <li>{product.name}</li>)}
      </ul>
      {
        products.map(pd =><Product name={pd}></Product>)
      }
        <Product name={products[0]}></Product>
        <Product name={products[1]}></Product>
      </header>
    </div>
    // codes goes here 
   
  );
}
function Counter(){
  const [count, setCounter] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCounter(count - 1)}>Decrease</button>
      <button onClick={() => setCounter(count + 1)}>Increase</button>
    </div>
    
  )
}

function Users(){
  const [user, setUsers] = useState([])
 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data)
    
    )
  },[])
  return (
    <div>
      <h1>Dynamic User {user.length}</h1>
      <ul>
        {
          user.map(users=> <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){

  const style={
    backgroundColor: 'darkgray',
    color: 'white',
    padding: '10px',
    margin: '10px',
    float: 'left',
    width: '200px',
    height: '250px'
  }
  const {name, price} = props.name;
  console.log(name, price)
  return (
    <div style={style}>
      <h2>{name} </h2>
      <h1> {price}</h1>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
