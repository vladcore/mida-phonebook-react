import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function PhonebookItem ({ label, email, number, mobile, speed }) {
    return (
        <tr>
            <td>{speed ? <FontAwesomeIcon icon={faBolt} /> : ''}</td>
            <td>{number}</td>
            <td>{label}</td>
            <td>{email}</td>
            <td>{mobile}</td>
        </tr>
    );
}

export default PhonebookItem;