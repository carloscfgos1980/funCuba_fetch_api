import Instagram from "../instagram.svg";
import Facebook from "../facebook.svg";
import Email from "../envelope-at-fill.svg";

// import '../../'

const Footer = () => {

    return (
        <div className="container-fluid bg-dark">
            <h3 className="text-light text-center py-2">Contact us</h3>
            <div className="row justify-content-around">
                <div className="col-sm-10 d-flex justify-content-around align-items-end">
                    <div className="email">
                        <img width='50p%' className='orange px-2 rounded' src={Email} alt="Email" />
                        <p className="align-bottom">
                            fun.cuba@gmail.com
                        </p>
                    </div>
                    <div className="instagram">
                        <a className="" href='https://www.instagram.com/fun.cuba/' target="_blank" rel="noreferrer">
                                <img className="orange p-1 rounded" width='40p%' src={Instagram} alt="Instagram" />
                            <p className="align-bottom">@fun.cuba</p>
                        </a >
                    </div>
                    <div className="facebook">
                            <a className="" href='https://www.facebook.com/profile.php?id=61565170058709' target="_blank" rel="noreferrer">
                                <img className="orange p-1 rounded"  width='40p%' src={Facebook} alt="Facebook" />
                            <p className="align-bottom">@fun.cuba</p>
                            </a>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Footer;