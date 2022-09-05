import React from "react";
import "../../../Header/Header.css";
import EmployeeCards from "../EmployeeCards/EmployeeCards";

const EmployeeList = ({ users }) => {
    const cardComponent = users.map((user,i) => {
        return <EmployeeCards id={users[i].id} name={users[i].name} />
    })
    return(
        <div className="header-right flex flex-wrap ">
            {cardComponent}
        </div>
    );
}

export default EmployeeList;