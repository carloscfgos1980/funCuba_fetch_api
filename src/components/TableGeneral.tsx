const TableGeneral = ({ arrive, departure, days, amount }: any) => {
  return (
    <table className="table table-light table-striped text-center my-3">
      <thead>
        <tr>
          <th scope="col">Arrive</th>
          <th scope="col">Departure</th>
          <th scope="col">Days</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="mx-2">{arrive}</td>
          <td className="mx-2">{departure}</td>
          <td className="mx-2">{days}</td>
          <td className="mx-2">$ {amount}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableGeneral;
