const TableAir = ({ items, deleteAirB, modal }: any) => {
  return (
    <table className="table table-light table-striped text-center my-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">rooms</th>
          <th scope="col">amount</th>
          {modal === false && <th scope="col"></th>}
        </tr>
      </thead>
      <tbody>
        {items.map((air: any, index: number) => {
          return (
            <tr key={index}>
              <td className="mx-2">{air.name}</td>
              <td className="mx-2">{air.hab}</td>
              <td className="mx-2">$ {air.subTotal}</td>
              {modal === false && (
                <td>
                  <button onClick={() => deleteAirB(air.id)}>X</button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableAir;
