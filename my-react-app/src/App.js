import React, {useEffect, useState} from 'react';
import './App.css';


import TransactionList from './TransactionList';
function App() {
  const[accountData, setAccountData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/transactions")
     .then((response)=> response.json())
     .then((data)=>{
      setAccountData(data)
     })
  },[])
  return (
    <div>
      <TransactionList data={accountData}/>
    </div>
  )

}

export default App;
