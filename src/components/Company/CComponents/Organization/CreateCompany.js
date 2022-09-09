import React, { useState } from "react";

const CreateCompany = () => {
    const [company, setCompany] = useState('');
    const [established, setEstablished] = useState('');

    const onCompanyChange = (event) => {
        setCompany(event.target.value);
    }

    const onEstablishedChange = (event) => {
        setEstablished(event.target.value);
    }

    const onEnter = (event) => {
        fetch('http://localhost:3000/company/create', {
            method : 'post',
            headers : { 'content-Type' : 'application/json'},
            body : JSON.stringify({
                established : established,
                company : company
            })
        })
        .then(response => response.json())
        .then(
            (result)=> {
               console.log(result);
            }
        );
    }

    return(
        <div className="header-left" >
        <article class="mw7 center bg-light-gray shadow-5 br3 pa3 pa6-ns mv5 ba b--black-10"> 
            <form>
                <legend className="f1 fw7 gh0 mh0 mb5 center red athelas">Create User</legend>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputFirstName">Company</label>
                        <input 
                            type="text" 
                            class="pa2 input-reset ba bg-transparent w-100 measure" 
                            id="inputFirstName" 
                            placeholder="First Name"
                            onChange={onCompanyChange}
                        required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputLastName">Established Date</label>
                        <input 
                            type="date" 
                            class="pa2 input-reset ba bg-transparent w-100 measure" 
                            id="inputLastName" 
                            placeholder="YYYY-MM-DD"
                            onChange={onEstablishedChange}
                        required/>
                    </div>
                </div>
                
                <div class="dib fw4 lh-copy f3 ma5 mb0 ml0 grow center">
                    <input type="button" value="Enter" Class={"btn btn-light"} onClick={onEnter}/>
                </div>
                
            </form>
        </article>
        </div>
    
    );
}

export default CreateCompany;