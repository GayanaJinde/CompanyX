import React from "react";
import AllEmployees from "../NonAssigned/AllEmployees";
import "aos/dist/aos.css";
import 'tachyons';

const View = () =>{
    return( 
      <>
        <div className="mh7 mv4 ">
            <AllEmployees />
        </div>
      </>
    );
}

export default View;