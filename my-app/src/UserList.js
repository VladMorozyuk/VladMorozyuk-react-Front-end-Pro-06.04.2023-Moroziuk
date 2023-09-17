import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data });
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Список користувачів</h1>
                <ul>
                    {this.state.users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                            <button onClick={() => this.showAlbums(user.id)}>Album</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    showAlbums(userId) {

    }
}

export default UserList;