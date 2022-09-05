import React from "react";
import AllEmployees from "../NonAssigned/AllEmployees";
import "aos/dist/aos.css";
import 'tachyons';
import { users } from "../../users";

const View = () =>{
    return( 
      <>
        <div >
            <AllEmployees users={users}/>
        </div>
      </>
    );
}

export default View;