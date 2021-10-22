import { ListGroup, Container, Row, Col } from "react-bootstrap";

function PhoneCommandItem ({ label, value }) {
    return (
        <ListGroup.Item>
            <Container>
                <Row>
                    <Col xs="6" lg="4" dangerouslySetInnerHTML={{__html: label}} />
                    <Col xs="auto" dangerouslySetInnerHTML={{__html: value}} />
                </Row>
            </Container>
        </ListGroup.Item>
    );
}

export default PhoneCommandItem;