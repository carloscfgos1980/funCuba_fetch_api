import logo from '../../FunCuba-logo.jpeg';

const FunCubaLogo = () => {
    return (
        <div >
            <img src={logo} 
                width="40%"
                className="d-inline-block align-center rounded-circle"
                style={{borderStyle:"solid", borderWidth: "20%", borderColor: "orange"}}
                alt="logo" />
        </div>
    )
}

export default FunCubaLogo;