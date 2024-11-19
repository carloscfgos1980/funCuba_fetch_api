


export default function SimpleAlert({message, alertToggle}:any) {
  return (
      <div className='d-flex justify-content-between bg-warning'>
        <p className="ps-3 pt-3">{message}</p>
        <p><button type="button" className="btn btn-warning" onClick={alertToggle}>X</button></p>
      </div>
  );
}
