import React, { useState } from "react";

const CreateCompany = () => {
    const [result, setResult] = useState(undefined);
    const [company, setCompany] = useState('');
    const [established, setEstablished] = useState('');

    const onCompanyChange = (event) => {
        setCompany(event.target.value);
    }

    const onEstablishedChange = (event) => {
        setEstablished(event.target.value);
    }

    const onEnter = (event) => {
        fetch('https://still-oasis-80942.herokuapp.com/create', {
            method : 'post',
            headers : { 'content-Type' : 'application/json'},
            body : JSON.stringify({
                established : established,
                company : company
            })
        })
        .then(response => response.json())
        .then(
            (companyReturned)=> {
                if(companyReturned !== "unable to create new company!"){
                    setResult({type: 'success', result});
                    console.log(companyReturned);
                }else{
                    setResult({type: 'error', result});
                    console.log(companyReturned);
                }
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
                    <div class="form-group col-md-6">
                        <div class="dib fw4 lh-copy f3 ma5 mb0 ml0 grow center">
                            <input type="button" value="Enter" Class={"btn btn-light"} onClick={onEnter}/>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <div class="db fw4 lh-copy f3 ma5 mb0 ml0 center">
                            {result?.type === "success" && <legend className="f3 fw7 gh0 mh0 mb5 center green athelas">CREATED!</legend>}
                            {result?.type === "error" && <legend className="f3 fw7 gh0 mh0 mb5 center red athelas">COMPANY ALREADY EXISTS!   or   ENTER ALL FIELDS</legend>}
                        </div>
                    </div>
                </div>
            </form>
        </article>
        </div>
    
    );
}

export default CreateCompany;