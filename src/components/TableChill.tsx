const TableChill = ({ items, deletingChill, modal }: any) => {
  return (
    <table className="table table-light table-striped text-center my-3">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">amount</th>
          <th scope="col">date</th>
          {modal === false && <th scope="col"></th>}
        </tr>
      </thead>
      <tbody>
        {items.map((chill: any, index: number) => {
          const dateChill: string = new Date(chill.dateChill).toDateString();
          return (
            <tr key={index}>
              <td className="mx-2">{chill.name}</td>
              <td className="mx-2">$ {chill.subTotal}</td>
              <td className="mx-2">{dateChill}</td>
              {modal === false && (
                <td>
                  <button onClick={() => deletingChill(chill.id)}>X</button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableChill;
