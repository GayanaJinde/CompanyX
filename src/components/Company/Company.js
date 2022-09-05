import React, { useEffect} from "react";
import Organization from "./CComponents/Organization/Organization";
import EmployeeList from "./CComponents/EmployeeList/EmployeeList";
import AOS from "aos";
import "aos/dist/aos.css";
import 'tachyons';
import { users } from "../../users";

const Company = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return( 
      <>
        <div className="ma5 " data-aos="fade-right">
            <Organization users={users}/>
        </div>
        <div data-aos="fade-right">
            <EmployeeList users={users}/>
        </div>
      </>
    );
}

export default Company;