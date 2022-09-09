import React, {useEffect, useState} from "react";
import Organization from "./CComponents/Organization/Organization";
import "aos/dist/aos.css";
import 'tachyons';

const Company = () =>{
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(()=>{
    fetch("https://still-oasis-80942.herokuapp.com/company")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result, "result");
        setIsLoaded(true);
        setCompanies(result);
      },
      (error)=>{
        setIsLoaded(true);
        setError(error);
      }
    );
  }, [])

      return( 
        <>
          <div className="mh7 mv5" >
              <Organization companies = { companies }/>
          </div>
        </>
      );
}

export default Company;