import { Navbar, Container } from "react-bootstrap";

function PBNavbar({ commandsVisibility, onCommandsVisibilityChange }) {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/mida_icon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> MiDA Phonebook
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default PBNavbar;