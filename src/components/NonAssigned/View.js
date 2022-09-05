import React from "react";
import AllEmployees from "../NonAssigned/AllEmployees";
import "aos/dist/aos.css";
import 'tachyons';
import { users } from "../../users";

const View = () =>{
    return( 
      <>
        <div className="mh7 mv4 ">
            <AllEmployees users={users}/>
        </div>
      </>
    );
}

export default View;