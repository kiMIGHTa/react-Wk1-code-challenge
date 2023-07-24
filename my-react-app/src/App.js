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
    <div className='container'>
      <div className='header'>
        <h1>BANK OF FLAT-IRON</h1>
      </div>
      <div>
      <SearchBar className="search-bar" searchFunction={searchFunction}/>
      </div>
      <AddNewTransaction className="add-transaction-form" handleSubmit={submitForm}/>
      <TransactionList className="transaction-list" data={accountData}/>
    </div>
  )

}


export default App 
