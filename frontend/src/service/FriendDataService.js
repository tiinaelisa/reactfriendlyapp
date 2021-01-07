import axios from 'axios'

//define backend endpoints
const FRIEND_API_URL = 'http://localhost:8080'
const USERS_URL = `${FRIEND_API_URL}/users/`
const LISTALL_URL = `${USERS_URL}/listAll`


class FriendDataService {

    //method to perform a get request to the backend endpoint to list all users in DB, and return the data
    retrieveAllUsers() {
        return axios.get(`${LISTALL_URL}`);
    }
}

export default new FriendDataService()
