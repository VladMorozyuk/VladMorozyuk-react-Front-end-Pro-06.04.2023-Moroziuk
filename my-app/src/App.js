import React, { Component } from 'react';
import Contacts from './Contacts';
import ContactForm from './ContactForm';

class App extends Component {
  state = {
    showForm: false,
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    return (
      <div>
        <h1>Контакти</h1>
        <button onClick={this.toggleForm}>
          {this.state.showForm ? 'Сховати форму' : 'Показати форму'}
        </button>
        {this.state.showForm ? (
          <ContactForm cancel={this.toggleForm} />
        ) : (
          <Contacts />
        )}
      </div>
    );
  }
}

export default App;