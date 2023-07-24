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

  function submitForm(data){
    return setAccountData([...accountData, data])
  }

  async function searchFunction(searchTerms){
  
        const filtered = accountData.filter(dataItem => {
          return dataItem.description.includes(searchTerms)
          
        })
        setAccountData(filtered)
      
    }




  return (
    <div>
      <SearchBar searchFunction={searchFunction}/>
      <AddNewTransaction handleSubmit={submitForm}/>
      <TransactionList data={accountData}/>
    </div>
  )

}


export default App 
