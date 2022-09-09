import React, {useEffect, useState} from "react";
import 'tachyons';
import '../../components/button.css';

const Card = ({ id, firstName, email }) => {
    const [companies, setCompanies] = useState([]);
    const [company, setCompany] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3000/company")
        .then(res => res.json())
        .then(
          (result) => {
            setCompanies(result);
          }
        );
      }, []);

    const onCompanyChange = (event) => {
        setCompany(event.target.value);
    }

   const onLink = ()=> {
        fetch(`http://localhost:3000/link/${id}`,{
            method : 'put',
            headers : { 'content-Type' : 'application/json'},
            body : JSON.stringify({
                id : id,
                firstName : firstName,
                email : email,
                company : company
            })
        })
        .then(res => res.json())
        .then(console.log);
    }

    return(
        <article class="mw-50 center bg-white shadow-5 br3 pa3 pa4-ns ma4 ba b--black-10">
            <div className="tc ">
                <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty" alt="profile"/>
                <h2 class="f2 fw4 purple mt1">{id}</h2>
                <h1 class="f3 mb1">{firstName}</h1>
                <h1 class="f3 mb2">{email}</h1> 
                <label class="db fw4 lh-copy f3 ma2 ml0 mb1 center" for="inputCompany">Company</label>
                <select onChange={onCompanyChange} class="w-70 db h2 f6 bg-near-white ba b--sliver gray center" id="inputCompany">
                    <option selected value={null}>Choose...</option>
                    {companies.map((company,i) => (
                        <option value={companies[i].company} >{companies[i].company}</option>
                    ))
                    }
                </select>
                <div class="dib fw4 lh-copy f4 ma3 mb0 grow center">
                    <input type="button" value="link" Class={"btn btn-light"} onClick={onLink}/>
                </div>
            </div>
        </article>
    );
}

export default Card;