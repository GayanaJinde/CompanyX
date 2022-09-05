import React, { useEffect} from "react";
import './Register.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../UI/Button/Button";

const Register = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return( 
        <div className="header-left" data-aos="fade-right">
        <article class="mw7 center bg-light-gray shadow-5 br3 pa3 pa6-ns mv5 ba b--black-10"> 
            <form>
                <legend className="f1 fw7 gh0 mh0 mb5 center red athelas">Create User</legend>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputFirstName">First Name</label>
                        <input type="text" class="pa2 input-reset ba bg-transparent w-100 measure" id="inputFirstName" placeholder="First Name"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputLastName">Last Name</label>
                        <input type="text" class="pa2 input-reset ba bg-transparent w-100 measure" id="inputLastName" placeholder="Last Name"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputAddress">Address</label>
                    <input type="text" class="pa2 input-reset ba bg-transparent w-100 measure" id="inputAddress" placeholder="Apartment, City or street"/>
                </div>
                <div class="form-group">
                    <div class="form-group"> 
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="date">Date of Birth</label>
                        <input class="pa2 input-reset ba bg-transparent w-70 h2 measure" type="date" id="date" name="date" placeholder="MM/DD/YYYY" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputCompany">Company</label>
                        <select class="w-70 db h2 f6 bg-near-white ba b--sliver gray" id="inputCompany">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div class="db fw4 lh-copy f3 ma5 mb0 ml0">
                    <Button text={"Register"} btnClass={"btn-light"} href={"#"} />
                </div>
            </form>
        </article>
        </div>
    );
}

export default Register;