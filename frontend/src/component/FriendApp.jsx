import React, { Component } from 'react';
import ListFriendsComponent from './ListFriendsComponent';

class FriendApp extends Component {
    render() {
        return (<>
              <h1>Friend Application</h1>
              <ListFriendsComponent/>
              </>
        )
    }
}

export default FriendApp