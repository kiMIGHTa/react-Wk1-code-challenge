import { useState } from "react"
import Transaction from "./Transaction"


function AddNewTransaction(){
    let x=15

    const [formData, setFormData] = useState({
        id:x+1,
        date:"",
        description:"",
        category:"",
        amount: null
    })

    function handleChange(e){
        e.preventDefault()
        setFormData({...formData, [e.target.name]: e.target.value})

    }

    function submitChange(e, data){
        e.preventDefault()
        return <Transaction key={data.id} date={data.date} description={data.description} category={data.category} amount={data.amount} />

    }

    return(
        <div>
            <form onSubmit={(e)=>{submitChange(e,formData)}}>             
            <input type="date" name="date" placeholder="date" onChange={handleChange}/>
            <input type="text" name="description" placeholder="description" onChange={handleChange}/>
            <input type="text" name="category" placeholder="category" onChange={handleChange}/>
            <input type="number" name="amount" placeholder="amount" onChange={handleChange}/>
            <button>Add Transaction</button>
            </form>
        </div>
    )

}

export default AddNewTransaction