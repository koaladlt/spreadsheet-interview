import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Header from './Header'
import Cell from './Cell'




const Spreadsheet = () => {
    const [column, setColumn] = useState([1, 2, 3, 4, 5])


    return (
        <>
            <Table bordered >
                <Header />
                <tbody >
                    {column.map((number, idx) => (
                        <Cell
                            number={number}
                            idx={idx}
                            column={column} />
                    )
                    )}
                </tbody>
            </Table >
        </>
    )
}

export default Spreadsheet;