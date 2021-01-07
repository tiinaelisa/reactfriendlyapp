import React, { Component } from 'react';
import FriendDataService from '../service/FriendDataService';

class ListFriendsComponent extends Component {

    constructor(props) {
        super(props)
        //initialize users list
        this.state = {
            users: []
        }
        this.refreshUsers = this.refreshUsers.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    //call for method to make a get request to backend endpoint
    refreshUsers() {
        FriendDataService.retrieveAllUsers()
            .then(
                response => {
                    //console.log(response);
                    
                    //update the state of the component by saving
                    //received data in the list 'users'
                    this.setState({ users: response.data })
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>Kaikki käyttäjät</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Etunimi</th>
                                <th>Sukunimi</th>
                                <th>Ikä</th>
                                <th>Kuvaus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //map through users, then insert 
                                //given attributes to above fields to display
                                this.state.users.map(
                                    user =>
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.info}</td>
                                    </tr>
                                )
                    
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListFriendsComponent