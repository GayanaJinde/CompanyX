import React , { useEffect, useState } from "react";
import '../../../Header/Header.css';
import EmployeeCards from "../EmployeeCards/EmployeeCards";
import '../../../button.css';

const Organization = ({companies}) => {
    
    const [employees, setEmployees] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [chosen, setChooseField] = useState(null);
    
    const onSelect = (event) =>{
        setChooseField(event.target.value);
    }

      
    const onSubmit = (event) => {
        fetch(`http://localhost:3000/employees/${chosen}`)
        .then(response => response.json())
        .then(
            (employees) => {
                setEmployees(employees);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            } 
        );
    }

    if(employees === [] || employees === null){
        return(
            <div className="f3 white">
                NO EMPLOYEES TO SHOW!
            </div>
        );
    }else {
        return(
            <div className="header-left" >
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label class="db fw4 lh-copy f2 ma3 ml0 mb1 light-gray" for="inputCompany">Organization</label>
                        <select  class="w-50 db h3 f5 bg-near-white ba b--sliver gray" id="inputCompany" onChange={onSelect} >
                            <option selected value={null}>Choose...</option>
                            {companies.map((company,i) => (
                                <option value={companies[i].company} >{companies[i].company}</option>
                            ))
                            }
                        </select>
                        <div class="dib fw4 lh-copy f3 ma4 mb0 ml0 ">
                            <input type="button" value="Submit" Class={"btn btn-light"} onClick={onSubmit}/>
                        </div>
                    </div>
                </div>
                <div class="form-row mv4">
                    <div className="header-right flex flex-wrap ">
                            {employees.map((employee,i) => (
                                <EmployeeCards email={employees[i].email} firstName={employees[i].first_name} id={employees[i].employee_id}/>
                            ))
                            }
                        </div>
                    </div>
            </div>
            );
        }
}

export default Organization;