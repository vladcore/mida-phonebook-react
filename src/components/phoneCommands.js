import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBolt } from '@fortawesome/free-solid-svg-icons';

function PhoneCommands() {
    return (
        <Card>
            <Card.Header>
                <FontAwesomeIcon icon={faInfoCircle} />&nbsp;Comandi utili
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Chiamata interna
                                </Col>
                                <Col xs="auto">
                                    [<i>num. interno</i>]
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Chiamata esterna
                                </Col>
                                <Col xs="auto">
                                    <b>0</b> + [<i>num. esterno</i>]
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Passaggio chiamata
                                </Col>
                                <Col xs="auto">
                                    <b>Trans</b> + [<i>num. interno</i>]
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Riprendere chiamata
                                </Col>
                                <Col xs="auto">
                                    <b>Trans</b>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Passare chiamata
                                </Col>
                                <Col xs="auto">
                                    <i>Riporre la cornetta</i>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Non disturbare (toggle)
                                </Col>
                                <Col xs="auto">
                                    <b>DND</b>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Ripetizione ultimo numero
                                </Col>
                                <Col xs="auto">
                                    <b>Speed</b> + <b>*</b> + <b>Hold/Save</b>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Intercetta chiamata generale
                                </Col>
                                <Col xs="auto">
                                    <b>*</b> + <b>*</b>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Intercetta chiamata interno noto
                                </Col>
                                <Col xs="auto">
                                    <b>7</b> + [<i>num. interno</i>]
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6" md="4" lg="3">
                                    Cellulari diretti <FontAwesomeIcon icon={faBolt} />
                                </Col>
                                <Col xs="auto">
                                    <b>Speed</b> + [<i>num. interno</i>]
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default PhoneCommands;