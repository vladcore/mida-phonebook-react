import { Container } from "react-bootstrap";
import PBNavbar from "./components/navbar";
import PhoneCommands from "./components/commands";
import Phonebook from "./components/phonebook";

function App() {
  return (
    <div className="App">
      <PBNavbar />
      <Container>
        <PhoneCommands />
        <Phonebook />
      </Container>
    </div>
  );
}

export default App;
