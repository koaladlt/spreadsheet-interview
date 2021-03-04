import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'

const Spreadsheet = () => {
    const [header, setHeader] = useState(["#", "A", "B", "C", "D", "E", "F"]);
    const [column, setColumn] = useState([1, 2, 3, 4, 5])
    const [value, setValue] = useState([{
        1: {
            A1: "",
            B1: "",
            C1: "",
            D1: "",
            E1: "",
            F1: ""
        },

        2: {
            A2: "",
            B2: "",
            C2: "",
            D2: "",
            E2: "",
            F2: ""

        },

        3: {
            A3: "",
            B3: "",
            C3: "",
            D3: "",
            E3: "",
            F3: ""
        },

        4: {
            A4: "",
            B4: "",
            C4: "",
            D4: "",
            E4: "",
            F4: ""
        },

        5: {
            A5: "",
            B5: "",
            C5: "",
            D5: "",
            E5: "",
            F5: ""
        }



    }])

    const handleChange = (e) => {

    }

    const sum = (e) => {

    }




    return (
        <Table bordered >
            <thead >
                <tr>
                    {header.map((h) => (<th>{h}</th>))}
                </tr>
            </thead>
            <tbody >

                {column.map((number) => (
                    <tr>
                        <td>{number}</td>
                        {value.map((cell) => (
                            Object.values(cell[number]).map((value) => (
                                <td>{value}</td>
                            )
                            )))}
                    </tr>
                )
                )}
                {/* <td>1</td>
                    <td ><input className="input" value= {value[1].A1} /> </td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td> */}

                {/* <tr>
                    <td>2</td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td ><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                    <td><input className="input" /></td>
                </tr> */}
            </tbody>
        </Table >
    )
}

export default Spreadsheet;