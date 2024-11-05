const FormSelectRate = ({ getRate }: any) => {
  return (
    <div className="col-3">
      <select
        className="form-select"
        onChange={(e) => getRate(e.target.value)}
        aria-label="Default select example"
      >
        <option selected>Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
        <option value="3">5</option>
      </select>
    </div>
  );
};

export default FormSelectRate;
