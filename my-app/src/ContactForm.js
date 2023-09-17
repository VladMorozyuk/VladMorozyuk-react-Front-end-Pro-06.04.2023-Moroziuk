import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        username: '',
        phone: '',
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('Збережено новий контакт:', this.state);
        this.setState({ name: '', username: '', phone: '' });
    };

    render() {
        return (
            <div>
                <h2>Додати новий контакт</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Ім'я:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Прізвище:</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Телефон:</label>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Зберегти</button>
                        <button type="button" onClick={this.props.cancel}>
                            Скасувати
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;