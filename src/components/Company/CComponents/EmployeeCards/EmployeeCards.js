import React from "react";
import Button from "../../../UI/Button/Button";

const EmployeeCards = ({ id, name }) => {
    return(
        <article class="mw5 grow center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty" alt="profile"/>
                <h1 class="f3 mb2">{name}</h1>
                <h2 class="f2 fw4 purple mt0">{id}</h2>
                <div class="db fw4 lh-copy f3 ma5 mb0 ml0">
                    <Button text={"Unlink"} btnClass={"btn-light"} href={"#"} />
                </div>
            </div>
        </article>
    );
}

export default EmployeeCards;