import FunCubaLogo from "./headerComponents/FunCubaLogo";
import FunCubaTitle from "./headerComponents/FunCubaTitle";
import FunNav from "./headerComponents/FunNav";


const Header = () => {
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row d-flex justify-content-between px-2">
                <div className="col-8 col-sm-3 align-self-center text-start">
                    <FunCubaLogo/>
                </div>
                <div className="col-sm-4 align-self-center py-2">
                    <FunCubaTitle/>
                </div>
                <div className="col-sm-5 align-self-end text-end">
                    <FunNav/>
                </div>
            </div>

        </div>
    )
}

export default Header