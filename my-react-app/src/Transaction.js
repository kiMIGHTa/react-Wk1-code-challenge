function Transaction({date, description, category, amount, handlesDelete}){
    return (
        <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
          <td onClick={handlesDelete}>X</td>
        </tr>
      );
    }

export default Transaction