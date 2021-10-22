import { Card, ListGroup, Spinner, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PhoneCommandItem from "./phoneCommandItem";
import axios from 'axios';
import { useAsync } from 'react-async';

const getPhoneCommands = async () => {
    try {
        let { data } = await axios.get('/api/phoneCommands');
        console.debug(data);
        return data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

function PhoneCommands(props) {
    const dataRequest = useAsync({ promiseFn: getPhoneCommands });

    return (
        <div {...props}>
            {dataRequest.isPending &&
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }

            {dataRequest.error &&
                <Alert variant="success">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>{dataRequest.error}</p>
                </Alert>
            }
            
            {dataRequest.data &&
                <Card>
                    <Card.Header>
                        <FontAwesomeIcon icon={faInfoCircle} />&nbsp;Comandi utili
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            {dataRequest.data.map((item, i) =>
                                <PhoneCommandItem key={i}
                                    label={item.label}
                                    value={item.value} />
                            )}
                        </ListGroup>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default PhoneCommands;