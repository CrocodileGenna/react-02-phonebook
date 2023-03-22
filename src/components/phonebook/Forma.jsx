import { Component } from 'react';
// import { nanoid } from 'nanoid';

export class Forma extends Component {
  state = {
    name: '',
    number: '',
  };

  nameChenge = el => {
    const { name, value } = el.target;
    this.setState({ [name]: value });
    console.log(`name: ${name}`, `value: ${value}`);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit(evt);
    console.log(this.props);
    // this.reset();
  };

  render() {
    return (
      <form action="">
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // value={name}
            // onChange={this.nameChenge}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
