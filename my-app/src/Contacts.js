import React, { Component } from 'react';
import axios from 'axios';

class Contacts extends Component {
    state = {
        contacts: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ contacts: response.data });
            })
            .catch((error) => {
                console.error('Error fetching contacts:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Список контактів</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Ім'я</th>
                            <th>Прізвище</th>
                            <th>Телефон</th>
                            <th>Дії</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.username}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <button onClick={() => this.deleteContact(contact.id)}>
                                        Видалити
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    deleteContact(contactId) {

    }
}

export default Contacts;