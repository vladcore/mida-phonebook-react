import React from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';
import PhonebookItem from './phonebookItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faAt, faUser, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { useTable, useSortBy } from 'react-table';
import axios from 'axios';
import { useAsync } from 'react-async';

const getPhonebooks = async () => {
    try {
        let { data } = await axios.get('/api/phonebook');
        return JSON.parse(data) || [];
    } catch (error) {
        return [];
    }
}

function RTable({ columns, data }) {
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    },
        useSortBy)

    return (
        <Table striped border {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <PhonebookItem
                            label={row.values.label}
                            email={row.values.email}
                            number={row.values.internalPhoneNumber}
                            mobile={row.values.mobilePhoneNumber}
                            speed={row.values.speedEnabled} />
                    )
                })}
            </tbody>
        </Table>
    );
}

function Phonebook() {
    const columns = [
        {
            Header: () => <span><FontAwesomeIcon icon={faBolt} /></span>,
            accessor: 'speedEnabled',
            disableSortBy: true
        },
        {
            Header: () => <span><FontAwesomeIcon icon={faPhone} /> int.</span>,
            accessor: 'internalPhoneNumber'
        },
        {
            Header: () => <span><FontAwesomeIcon icon={faUser} /> Nome</span>,
            accessor: 'label'
        },
        {
            Header: () => <span><FontAwesomeIcon icon={faAt} /> Mail</span>,
            accessor: 'email'
        },
        {
            Header: () => <span><FontAwesomeIcon icon={faMobileAlt} /> Cellulare</span>,
            accessor: 'mobilePhoneNumber'
        }
    ];
    const dataRequest = useAsync({ promiseFn: getPhonebooks });

    return (
        <div>
            {dataRequest.isPending &&
                <div class="text-center">
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
                <RTable columns={columns} data={dataRequest.data} />
            }
        </div>
    );
}

export default Phonebook;