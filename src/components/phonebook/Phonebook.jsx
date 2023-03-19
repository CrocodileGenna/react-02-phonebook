import { Component } from 'react';
// import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form
          action=""
          onSubmit={el => {
            el.preventDefault();
            const name = el.currentTarget.name.value;
            const number = el.currentTarget.number.value;

            console.log(name, number);
          }}
        >
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              htmlFor="name"
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(el => {
              return <li>{el.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Phonebook;
