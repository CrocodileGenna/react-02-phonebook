import { Component } from 'react';

export class ListContacts extends Component {
  search = (el, list) => {
    console.log(`el: ${el}, list: ${list}`);
  };
  render() {
    const { list } = this.props;
    return (
      <>
        <input onChange={el => this.search(el, list)} />
        <ul>
          {list.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>{name}</p>
                <p>{number}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
