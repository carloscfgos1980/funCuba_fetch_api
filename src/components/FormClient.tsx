import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addClient, Client } from "../redux/filteredTripPlan";
import FormSelectCountry from "./FormSelectCountry";
import SimpleAlert from "./SimpleAlert";
import country_list from "./contentText/countries";

const FormClient = ({ toggle }: any) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<Client>({
    name: "",
    lastName: "",
    country: "",
    email: "",
  });
  const [alertOn, setAlertOn] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const updateInput = (e: any) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };

  const getCountry = (country:string)=> setStatus({
    ...status,
        country
  })

  const clientData = {
    name: status.name,
    lastName: status.lastName,
    country: status.country,
    email: status.email,
  };

  const alertToggle = () => {
        setAlertOn(!alertOn);
  }


  const addingClient = () => {
    if(!status.email.includes('@')){
      setMessage('invalid email!');
      alertToggle();
    } else if(status.name.length < 1 || status.lastName.length < 1){
      setMessage('please fill name and last name field!');
      alertToggle();
    } else if(!country_list.includes(status.country)){
      setMessage('please, choose a country!');
      alertToggle();
    }
    else {
      dispatch(addClient(clientData));
      toggle();
      setAlertOn(false);
    }  
  };
  
  return (
    <div>
      {alertOn && <SimpleAlert message={message} alertToggle={alertToggle}/>} 
      <h1 className="display-5 text-center mt-2 mb-4">Fill ur data</h1>
      <Form className="container-fluid">
        <div className="row justify-content-around align-items-end">
          <div className="form-floating col-6 col-sm-2 my-2">
            <input
              name="name"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="your name"
              onChange={updateInput}
            />
            <label htmlFor="floatingName">Your name</label>
          </div>
          <div className="form-floating col-6 col-sm-2 my-2">
            <input
              name="lastName"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Last Name"
              onChange={updateInput}
            />
            <label htmlFor="floatingLastName">Last Name</label>
          </div>
          <div className="form-floating col-7 col-sm-4 my-2">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={updateInput}
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="col-5 col-sm-3 my-2">
            <FormSelectCountry getCountry={getCountry}/>
          </div>
        </div>
      </Form>
      <div className="text-end mt-3 me-4">
        <h3
          className="btn btn-secundary px-5 bg-dark text-light"
          onClick={addingClient}
        >
          Submit
        </h3>
      </div>
    </div>
  );
};

export default FormClient;
