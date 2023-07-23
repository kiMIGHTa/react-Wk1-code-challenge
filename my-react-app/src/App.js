import React, {useEffect, useState} from 'react';
import AddNewTransaction from './AddNewTransaction';
import TransactionList from './TransactionList';
import SearchBar from './SearchBar';

import './App.css';


function App() {
  const[accountData, setAccountData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/transactions")
     .then((response)=> response.json())
     .then((data)=>{
      setAccountData(data)
      })
  },[])

  function searchFunction(searchTerms){
    fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => {
        const filtered = data.filter(item => {
          return item.description.includes(searchTerms)
          
        })
        setAccountData(filtered)
        console.log(filtered)
      })
    }




  return (
    <div>
      <SearchBar searchFunction={searchFunction}/>
      <AddNewTransaction data={accountData}/>
      <TransactionList data={accountData}/>
    </div>
  )

}


export default App 
