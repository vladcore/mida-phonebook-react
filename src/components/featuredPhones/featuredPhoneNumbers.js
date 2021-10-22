import { Row, Col, Spinner, Alert } from "react-bootstrap";
import FeaturedPhoneItem from "./featuredPhonesItem";
import axios from 'axios';
import { useAsync } from 'react-async';

const getFeaturedPhones = async () => {
    try {
        let { data } = await axios.get('/api/featuredPhones');
        console.debug(data);
        return data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

function FeaturedPhoneNumbers(props) {
    const dataRequest = useAsync({ promiseFn: getFeaturedPhones });

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
                <Row xs="2" lg="4" className="g-3">
                    {dataRequest.data.map((item, i) =>
                        <Col key={i}>
                            <FeaturedPhoneItem
                                label={item.label}
                                phoneNumber={item.phoneNumber} />
                                
                        </Col>
                    )}
                </Row>
            }
        </div>
    );
}

export default FeaturedPhoneNumbers;