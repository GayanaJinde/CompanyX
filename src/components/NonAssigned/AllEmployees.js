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
                this.setState({
                    users : result,
                    isLoaded : true,
                });
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        );
    }

    render(){
        const { error, isLoaded, users } = this.state;
        if(error){
            return <div className="header-left"><span>Error: {error.message}</span></div>;
        }else if(!isLoaded){
            return <div className="header-left"><span>Loading...</span></div>;
        }else if(users === [] || users === null){
            return(
                <div className="f3 white">
                    NO EMPLOYEES TO SHOW!
                </div>
            );
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