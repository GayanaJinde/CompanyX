import React, { useEffect, useState} from "react";
import './Register.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'tachyons';

const Register = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState(undefined);
    const [companies, setCompanies] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [joinedDate, setJoinedDate] = useState('');
    const [company, setCompany] = useState(null);
   
    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const onAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onJoinedDateChange = (event) => {
        setJoinedDate(event.target.value);
    }

    const onCompanyChange = (event) => {
        setCompany(event.target.value);
    }

    const onRegister = () => {
        fetch('https://still-oasis-80942.herokuapp.com/register', {
            method : 'post',
            headers : { 'content-Type' : 'application/json'},
            body : JSON.stringify({
                firstName : firstName,
                lastName : lastName,
                address : address,
                email : email,
                joinedDate : joinedDate,
                company : company
            })
        })
        .then(response => response.json())
        .then(
            (result)=> {
                if(result !== "unable to register!"){
                    setResult({type: 'success', result});
                    setIsLoaded(true);
                }else{
                    console.log(result);
                    setResult({type: 'error', result});
                    setIsLoaded(true);
                }
            })
        .catch(
            (error) => {
                setResult({type: 'error', error});
                setIsLoaded(true);
              }
        );
    }

    useEffect(()=>{
        fetch("https://still-oasis-80942.herokuapp.com/company")
        .then(res => res.json())
        .then(
          (result) => {
            setCompanies(result);
          }
        );
      }, [])

    return( 
        <div className="header-left" data-aos="fade-right">
        <article class="mw7 center bg-light-gray shadow-5 br3 pa3 pa6-ns mv5 ba b--black-10"> 
            <form>
                <legend className="f1 fw7 gh0 mh0 mb5 center red athelas">Create User</legend>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputFirstName">First Name</label>
                        <input 
                            type="text" 
                            class="pa2 input-reset ba bg-transparent w-100 measure" 
                            id="inputFirstName" 
                            placeholder="First Name"
                            onChange={onFirstNameChange}
                        required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputLastName">Last Name</label>
                        <input 
                            type="text" 
                            class="pa2 input-reset ba bg-transparent w-100 measure" 
                            id="inputLastName" 
                            placeholder="Last Name"
                            onChange={onLastNameChange}
                        required/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputAddress">Address</label>
                    <input 
                        type="text" 
                        class="pa2 input-reset ba bg-transparent w-100 measure" 
                        id="inputAddress" 
                        placeholder="Apartment, City or street"
                        onChange={onAddressChange}
                    required/>
                </div>
                <div class="form-group">
                    <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputAddress">Work Email</label>
                    <input 
                        type="email" 
                        class="pa2 input-reset ba bg-transparent w-100 measure" 
                        id="email" 
                        placeholder="123@gmail.com"
                        onChange={onEmailChange}
                    required/>
                </div>
                <div class="form-group">
                    <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="joinedDate">Date of Joining</label>
                    <input 
                        type="date" 
                        class="pa2 input-reset ba bg-transparent w-100 measure" 
                        id="date" 
                        placeholder="YYYY-MM-DD"
                        onChange={onJoinedDateChange}
                    required/>
                </div>
                    <div class="form-group ">
                        <label class="db fw4 lh-copy f3 ma3 ml0 mb1" for="inputCompany">Company</label>
                        <select onChange={onCompanyChange} class="w-70 db h2 f6 bg-near-white ba b--sliver gray" id="inputCompany">
                            <option selected value={null}>Choose...</option>
                            {companies.map((company,i) => (
                                <option value={companies[i].company} >{companies[i].company}</option>
                            ))
                            }
                        </select>
                    </div>
                <div class="dib fw4 lh-copy f3 ma5 mb0 ml0 grow center">
                    <input type="button" value="Register" Class={"btn btn-light"} onClick={onRegister}/>
                </div>
                <div class="form-group ">
                    <div class="db fw4 lh-copy f3 ma5 mb0 ml0 center">
                        {result?.type === 'success' && <legend className="f3 fw7 gh0 mh0 mb5 center green athelas">REGISTERED!</legend>}
                        {result?.type === 'error' && <legend className="f3 fw7 gh0 mh0 mb5 center red athelas">COULD NOT REGISTER USER</legend>}
                    </div>
                </div>
            </form>
        </article>
        </div>
    );
}

export default Register;