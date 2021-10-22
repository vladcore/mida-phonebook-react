import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PBNavbar from "./components/navbar";
import PhoneCommands from "./components/phoneCommands/phoneCommandsList";
import Phonebook from "./components/phonebook/PhonebookList";
import FeaturedPhoneNumbers from "./components/featuredPhones/featuredPhoneNumbers";

function App() {
    const [featuredPhonesVisibility, setFeaturedPhonesVisibility] = useState(false);
    const [phoneCommandsVisibility, setPhoneCommandsVisibility] = useState(false);

    return (
        <div className="App">
            <PBNavbar
                featuredPhVisible={featuredPhonesVisibility} onFeaturedPhVisibilityChanged={() => setFeaturedPhonesVisibility(!featuredPhonesVisibility)}
                phCmdVisible={phoneCommandsVisibility} onPhCmdVisibilityChanged={() => setPhoneCommandsVisibility(!phoneCommandsVisibility)} />
            <Container>
                {featuredPhonesVisibility &&
                    <FeaturedPhoneNumbers className="mt-3" />
                }
                {phoneCommandsVisibility &&
                    <PhoneCommands className="mt-3" />
                }
                <Phonebook />
            </Container>
        </div>
    );
}

export default App;
