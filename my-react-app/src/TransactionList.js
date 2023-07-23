import Transaction from "./Transaction";

function TransactionList({data}){
    return(
    <table className="table table-light">
      <tbody>
        <tr>
          <th>
            <h3 >Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
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