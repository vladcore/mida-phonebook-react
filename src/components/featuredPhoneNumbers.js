import { Card, Stack } from "react-bootstrap";

function FeaturedPhoneNumbers() {
    return (
        <Stack gap="3">
            <Card border="warning">
                <Card.Header>
                    Ufficio
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        035240591
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card border="warning">
                <Card.Header>
                    MTK
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        035215892
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card border="warning">
                <Card.Header>
                    Reperibilità MTK
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        3483935085
                    </Card.Title>
                </Card.Body>
            </Card>
            <Card border="warning">
                <Card.Header>
                    Reperibilità IT
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        3401194348
                    </Card.Title>
                </Card.Body>
            </Card>
        </Stack>
    );
}

export default FeaturedPhoneNumbers;