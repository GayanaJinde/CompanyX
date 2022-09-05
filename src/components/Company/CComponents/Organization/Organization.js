import React from "react";
import '../../../Header/Header.css'
import Button from "../../../UI/Button/Button";

const Organization = () => {
    return(
            <div className="header-left" data-aos="fade-right">
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label class="db fw4 lh-copy f2 ma3 ml0 mb1 light-gray" for="inputCompany">Organization</label>
                        <select class="w-50 db h3 f5 bg-near-white ba b--sliver gray" id="inputCompany">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div class="db fw4 lh-copy f3 ma5 mb0 ml0 ">
                    <Button text={"Submit"} btnClass={"btn-light"} href={"#"} />
                    <Button text={"Create"} btnClass={"btn-light"} href={"#"} />
                </div>
            </div>
    );
}

export default Organization;