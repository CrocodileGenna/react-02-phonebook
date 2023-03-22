import { Component } from 'react';

export class ListContacts extends Component {
  state = {
    contacts: [],
    name: '',
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
    // this.props.onSubmit({ ...this.state });
    console.log(this.props);
    this.reset();
  };

  reset = () => {
    this.setState(({ name }) => {
      name = '';
      console.log(name);
    });
  };

  render() {
    return <div></div>;
  }
}
