import Transaction from "./Transaction";
import "./TransactionList.css"

function TransactionList({data}){
    return(
    <table className="transaction-table" >
      <tbody>
        <tr>
          <th>
            <h3 >Date</h3>
          </th>
          <th>
            <h3 >Description</h3>
          
          </th>
          <th>
            <h3 >Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>

      
               {
          data.map(dataItem => {
            return <Transaction key={dataItem.id} date={dataItem.date} description={dataItem.description} category={dataItem.category} amount={dataItem.amount} />
          })
        }
      </tbody>
    </table>
  );
}


export default TransactionList