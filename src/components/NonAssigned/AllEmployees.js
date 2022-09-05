import React from "react";
import "../Header/Header.css";
import Card from "../NonAssigned/Card";

const AllEmployees = ({ users }) => {
    const cardComponent = users.map((user,i) => {
        return <Card id={users[i].id} name={users[i].name} />
    })
    return(
        <div className="header-right flex flex-wrap ">
            {cardComponent}
        </div>
    );
}

export default AllEmployees;