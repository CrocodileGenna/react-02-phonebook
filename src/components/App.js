import { GlobalStyle } from './App.styled';
import { ListContacts } from './phonebook/ListContacts';
import { Forma } from './phonebook/Forma';

export function App() {
  return (
    <GlobalStyle>
      <ListContacts />
      <Forma value={console.log(1)} />
    </GlobalStyle>
  );
}
