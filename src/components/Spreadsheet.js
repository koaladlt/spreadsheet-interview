import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'

const Spreadsheet = () => {
    const [header, setHeader] = useState(["#", "A", "B", "C", "D", "E", "F"]);
    const [column, setColumn] = useState([1, 2, 3, 4, 5])
    const [value, setValue] = useState(
        [{
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

    const handleChange = (e, number, currentKey) => {
        const allKeys = value[0]
        for (var key in value[0]) {
            for (var key2 in value[0][key]) {
                if (e.target.value.includes(key2)) {
                    console.log("yes")
                    return setValue([...value], value[0][number][currentKey] = 1 + 1)
                }
            }
        }



        console.log("no")
        setValue([...value], value[0][number][currentKey] = e.target.value)
    }


    return (
        <Table bordered >
            <thead >
                <tr>
                    {header.map((h, idx) => (<th key={idx}>{h}</th>))}
                </tr>
            </thead>
            <tbody >

                {column.map((number) => (
                    <tr>

                        <td>{number}</td>
                        {value.map((cell, idx) => (
                            Object.entries(cell[number]).map((val) => (

                                < td >
                                    <input className="input"
                                        value={val[1]}
                                        name={number}
                                        onChange={(e) => handleChange(e, number, val[0])}
                                    />

                                </td>

                            )
                            )))}
                    </tr>
                )
                )}
            </tbody>
        </Table >
    )
}

export default Spreadsheet;