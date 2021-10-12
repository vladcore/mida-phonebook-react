import { Navbar, Container, ToggleButton, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faStar, faTerminal } from '@fortawesome/free-solid-svg-icons';

function PBNavbar({ featuredPhVisible, onFeaturedPhVisibilityChanged, phCmdVisible, onPhCmdVisibilityChanged }) {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand className="me-auto">
                    <img
                        alt=""
                        src="/mida_icon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> MiDA Phonebook
                </Navbar.Brand>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Numeri di telefono principali</Tooltip>}>
                    <ToggleButton
                        className="rounded-pill"
                        type="checkbox"
                        variant="outline-warning"
                        checked={featuredPhVisible}
                        onClick={onFeaturedPhVisibilityChanged}>
                        <FontAwesomeIcon icon={faPhoneSquare} /> <FontAwesomeIcon icon={faStar} />
                    </ToggleButton>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>Comandi telefono</Tooltip>}>
                    <ToggleButton
                        className="rounded-pill ms-2"
                        type="checkbox"
                        variant="outline-primary"
                        checked={phCmdVisible}
                        onClick={onPhCmdVisibilityChanged}>
                        <FontAwesomeIcon icon={faPhoneSquare} /> <FontAwesomeIcon icon={faTerminal} />
                    </ToggleButton>
                </OverlayTrigger>
            </Container>
        </Navbar>
    );
}

export default PBNavbar;