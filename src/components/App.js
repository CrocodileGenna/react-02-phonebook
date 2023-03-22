import { Component } from 'react';
import { Form } from './phonebook/Form';
import { ListContacts } from './phonebook/ListContacts';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './App.styled';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = value => {
    const { contacts } = this.state;
    value.id = nanoid();
    contacts.some(contact => contact.name === value.name)
      ? Notiflix.Notify.warning(
          "I'm sorry, but a contact with that name is already in the library"
        )
      : this.setState({ [contacts]: contacts.push(value) });
  };

  render() {
    const { contacts } = this.state;
    return (
      <GlobalStyle>
        <Form submit={this.submitHandler} />
        <ListContacts list={contacts} />
      </GlobalStyle>
    );
  }
}
