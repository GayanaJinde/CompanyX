import React from "react";
import "../Header/Header.css";
import Card from "../NonAssigned/Card";

class AllEmployees extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/view")
        .then(res => res.json())
        .then(
            (result)=> {
                if(result !== "No Employees"){
                    this.setState({
                        users : result,
                        isLoaded : true,
                    });
                }else {
                    this.setState({error: result, isLoaded: true})
                }
            }
        );
    }

    render(){
        const { error, isLoaded, users } = this.state;
        if(error){
            return (<div class="form-group ">
                        <div class="db fw4 lh-copy f3 ma5 mb0 ml0 center">
                            {error && <legend className="f3 fw7 gh0 mh0 mb5 center red athelas">NO EMPLOYEES TO SHOW</legend>}
                        </div>
                </div>);
        }else if(!isLoaded){
            return <div className="header-left"><span>Loading...</span></div>;
        }else {
            return(
                <div className="header-right flex flex-wrap ">
                    {users.map((user,i) => (
                        <Card email={users[i].email} firstName={users[i].first_name} id={users[i].employee_id}/>
                    ))
                    }
                </div>
            );
        }
    }
}

export default AllEmployees;