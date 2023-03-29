import PropTypes from 'prop-types';

export function ListContacts({ list, remove }) {
  return (
    <>
      <ul>
        {list.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button onClick={() => remove(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ListContacts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  remove: PropTypes.func.isRequired,
};
