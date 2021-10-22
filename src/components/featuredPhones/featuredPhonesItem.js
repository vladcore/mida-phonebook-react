import { Card } from "react-bootstrap";

function FeaturedPhoneItem ({ label, phoneNumber }) {
    return (
        <Card border="warning">
            <Card.Header dangerouslySetInnerHTML={{__html: label}} />
            <Card.Body>
                <Card.Title  dangerouslySetInnerHTML={{__html: phoneNumber}} />
            </Card.Body>
        </Card>
    );
}

export default FeaturedPhoneItem;