import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addClient, Client } from "../redux/filteredTripPlan";

const FormClient = ({ toggle }: any) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<Client>({
    name: "",
    lastName: "",
    country: "",
    email: "",
  });

  const updateInput = (e: any) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };

  const clientData = {
    name: status.name,
    lastName: status.lastName,
    country: status.country,
    email: status.email,
  };
  const addingClient = () => {
    dispatch(addClient(clientData));
    toggle();
  };

  return (
    <div>
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
          <div className="form-floating col-5 col-sm-2 my-2">
            <input
              name="country"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Country"
              onChange={updateInput}
            />
            <label htmlFor="floatingCountry">Country</label>
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
