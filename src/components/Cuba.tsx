const cuba = ({ img, text }: any) => {
  return (
      <div className="box row">
        
        <p className="lead" >
          <img className="float-start mx-4 col-10 col-sm-4" width="30%" src={img} alt="city" />
          {text}
          </p>
      </div>
  );
};

export default cuba;
