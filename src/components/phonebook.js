import React from 'react';
import Table from 'react-bootstrap/Table';
import PhonebookItem from './phonebookItem';
import { faBolt, faAt, faUser, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTable, useSortBy } from 'react-table';

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

function Phonebook({ data }) {
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

    return (
        <RTable columns={columns} data={data} />
    );
}

export default Phonebook;