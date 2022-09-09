import React from "react";

const EmployeeCards = ({ id, firstName, email }) => {

    const onUnLink = ()=> {
        fetch(`http://localhost:3000/unlink/${id}`,{
            method : 'put',
            headers : { 'content-Type' : 'application/json'},
            body : JSON.stringify({
                id : id,
                firstName : firstName,
                email : email
            })
        })
        .then(res => res.json())
        .then(console.log);
    }

    return(
        <article class="mw-50 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty" alt="profile"/>
                <h2 class="f2 fw4 purple mt1">{id}</h2>
                <h1 class="f3 mb1">{firstName}</h1>
                <h1 class="f3 mb2">{email}</h1> 
                <div class="dib fw4 lh-copy f3 ma5 mb0 ml0 grow center">
                    <input type="button" value="Unlink" Class={"btn btn-light"} onClick={onUnLink}/>
                </div>
            </div>
        </article>
    );
}

export default EmployeeCards;