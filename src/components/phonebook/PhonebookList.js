import React from 'react';
import { Table, Spinner, Alert, InputGroup, FormControl } from 'react-bootstrap';
import PhonebookItem from './phonebookItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faAt, faUser, faPhone, faMobileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTable, useSortBy } from 'react-table';
import axios from 'axios';
import { useAsync } from 'react-async';
import { useState } from "react";

const getPhonebooks = async () => {
    try {
        let { data } = await axios.get('/api/phonebook');
        console.debug(data);
        return data || [];
    } catch (error) {
        console.error(error);
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
        <Table striped {...getTableProps()}>
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
                        <PhonebookItem key={i}
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

    const [phonebookData, setPhonebookData] = useState([]);
    const [filteredPhonebookData, setFilteredPhonebookData] = useState([]);
    const dataRequest = useAsync({
        promiseFn: getPhonebooks,
        onResolve: (data) => {
            setPhonebookData(data);
            setFilteredPhonebookData(data);
        }});

    const searchValueChanged = (event) => {
        let filterValue = event.target.value.toLowerCase();
        if (filterValue === ''){
            setFilteredPhonebookData(phonebookData);
            return;
        }
        
        setFilteredPhonebookData(phonebookData.filter(item => (
            (item.label != null && item.label.toLowerCase().includes(filterValue)) ||
            (item.email != null && item.email.toLowerCase().includes(filterValue)) ||
            (item.internalPhoneNumber != null && item.internalPhoneNumber.toLowerCase().includes(filterValue)) ||
            (item.mobilePhoneNumber != null && item.mobilePhoneNumber.toLowerCase().includes(filterValue))
        )));
    };

    return (
        <div>
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
                <div>
                    <InputGroup size="sm" className="mt-3">
                        <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                        <FormControl type="search" placeholder="cerca" onChange={searchValueChanged} />
                    </InputGroup>
                    <RTable columns={columns} data={filteredPhonebookData} className="mt-3" />
                </div>
            }
        </div>
    );
}

export default Phonebook;