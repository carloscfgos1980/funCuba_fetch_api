import country_list from "./contentText/countries";



const FormSelectCountry = ({getCountry}:any) => {
    return (
        <select 
            className="form-select"
            aria-label="Default select example"
            defaultValue={"DEFAULT"}
            onChange={(e) => getCountry(e.target.value)}
                >
                <option value="DEFAULT" disabled>Select country</option>
                {country_list.map((country: string, index: number) => {
                    return(
                        <option value={country} key={index}>{country}</option>
                    )
                })}
        </select>
    )
}

export default FormSelectCountry;