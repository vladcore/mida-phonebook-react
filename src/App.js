import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PBNavbar from "./components/navbar";
import PhoneCommands from "./components/phoneCommands";
import Phonebook from "./components/phonebook";
import FeaturedPhoneNumbers from "./components/featuredPhoneNumbers";

function App() {
    const [featuredPhonesVisibility, setFeaturedPhonesVisibility] = useState(false);
    const [phoneCommandsVisibility, setPhoneCommandsVisibility] = useState(false);

    return (
        <div className="App">
            <PBNavbar
                featuredPhVisible={featuredPhonesVisibility} onFeaturedPhVisibilityChanged={() => setFeaturedPhonesVisibility(!featuredPhonesVisibility)}
                phCmdVisible={phoneCommandsVisibility} onPhCmdVisibilityChanged={() => setPhoneCommandsVisibility(!phoneCommandsVisibility)} />
            <Container>
                <Row>
                    {featuredPhonesVisibility &&
                        <Col className="my-3">
                            <FeaturedPhoneNumbers />
                        </Col>
                    }
                    {phoneCommandsVisibility &&
                        <Col className="my-3">
                            <PhoneCommands />
                        </Col>
                    }
                </Row>
                <Phonebook />
            </Container>
        </div>
    );
}

export default App;
