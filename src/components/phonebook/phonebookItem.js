import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function PhonebookItem ({ label, email, number, mobile, speed }) {
    return (
        <tr>
            <td>{speed ? <FontAwesomeIcon icon={faBolt} /> : ''}</td>
            <td>{number}</td>
            <td>{label}</td>
            <td><a href={'mailto:' + email}>{email}</a></td>
            <td><a href={'tel:' + mobile}>{mobile}</a></td>
        </tr>
    );
}

export default PhonebookItem;