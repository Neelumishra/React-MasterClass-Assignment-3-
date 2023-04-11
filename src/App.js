import React from 'react';
import './style.css';

export default function App() {
  const [greet, setGreet] = React.useState([
    'Good Morning',
    'Good Night',
    'Hello',
    'byee',
  ]);
  const [count, setCount] = React.useState(0);
  function onhandleChange() {
    setCount(Math.floor(Math.random() * 4));
    console.log(count);
  }
  return (
    <div>
      <h1>{greet[count]}</h1>
      <button onClick={onhandleChange}>Change Greeting</button>
    </div>
  );
}
