import React from "react";

const Register = () =>{
    return( 
        <article class="mw7 center bg-light-blue shadow-5 br3 pa3 pa6-ns mv5 ba b--black-10"> 
            <form>
                <legend className="f1 fw6 gh0 mh0 mb5 center">Create New User</legend>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma2" for="inputFirstName">First Name</label>
                        <input type="text" class="pa2 input-reset ba bg-transparent w-100 measure" id="inputFirstName" placeholder="First Name"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma2" for="inputLastName">Last Name</label>
                        <input type="text" class="pa2 input-reset ba bg-transparent w-100 measure" id="inputLastName" placeholder="Last Name"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="db fw4 lh-copy f3 ma2" for="inputAddress">Address</label>
                    <input type="text" class="pa2 input-reset ba bg-transparent w-100 measure" id="inputAddress" placeholder="Apartment, City or street"/>
                </div>
                <div class="form-group">
                    <div class="form-group"> 
                        <label class="db fw4 lh-copy f3 ma2" for="date">Date</label>
                        <input class="pa2 input-reset ba bg-transparent w-70 measure" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label class="db fw4 lh-copy f3 ma2" for="inputCompany">Company</label>
                        <select class="w-70 db h2 f6 bg-near-white ba b--sliver gray" id="inputCompany">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div class="db fw4 lh-copy f3">
                    <button type="submit" class="f4 link dim ba bw2 ph3 pv2 ma5 ml0 mb2 dib dark-blue">Register</button>
                </div>
            </form>
        </article>
    );
}

export default Register;