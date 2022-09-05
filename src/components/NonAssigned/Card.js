import React from "react";
import 'tachyons';
import Button from "../UI/Button/Button";

const Card = ({ id, name }) => {
    return(
        <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty" alt="profile"/>
                <h1 class="f3 mb2">{name}</h1>
                <h2 class="f2 fw4 purple mt0">{id}</h2>
                <label class="db fw4 lh-copy f3 ma3 ml0 mb1 center" for="inputCompany">Company</label>
                <select class="w-70 db h2 f6 bg-near-white ba b--sliver gray center" id="inputCompany">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                <div class="db fw4 lh-copy f3 ma5 mb0 ml0 center">
                    <Button text={"link"} btnClass={"btn-light"} href={"#"} />
                </div>
            </div>
        </article>
    );
}

export default Card;