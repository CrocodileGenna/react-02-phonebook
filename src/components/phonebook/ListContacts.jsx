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
