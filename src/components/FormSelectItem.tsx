const FormSelectItem = ({ getItemId, items }: any) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      defaultValue={"DEFAULT"}
      onChange={(e) => getItemId(e.target.value)}
    >
      <option value="DEFAULT" disabled>
        Select
      </option>
      {items.map((item: any, index: number) => {
        return (
          <option value={item.id} key={index}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelectItem;
