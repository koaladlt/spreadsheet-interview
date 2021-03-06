import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'

const Spreadsheet = () => {
    const [header, setHeader] = useState(["#", "A", "B", "C", "D", "E", "F"]);
    const [column, setColumn] = useState([1, 2, 3, 4, 5])
    const [firstKey, setFirstKey] = useState()
    const [firstValue, setFirstValue] = useState()
    const [input, setInput] = useState();
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


    // useEffect(() => {

    // }, [value])

    const sumOfCells = (e, number, currentKey) => {
        let separateWords = input.split((/[=\+]+/))
        let sum = 0;
        for (let i = 1; i <= column.length; i++) {
            Object.entries(value[0][i]).map((cell) => {
                if (separateWords.includes(cell[0])) {
                    try {
                        let valores = Number(cell[1])
                        separateWords.map((v) => v === cell[0] ? sum += valores : "")
                        console.log(sum)
                        setValue([...value], value[0][number][currentKey] = sum)
                    } catch (error) {
                        console.log(error)
                    }
                }


            })
        }

    }

    const substractionOfCells = (e, number, currentKey) => {
        let separateWords = input.split((/[=\-]+/))
        let substraction = 0;
        for (let i = 1; i <= column.length; i++) {
            Object.entries(value[0][i]).map((cell) => {
                if (separateWords.includes(cell[0])) {
                    try {
                        let valores = Number(cell[1])
                        console.log(valores)
                        separateWords.map((v) => v === cell[0] ? substraction === 0 ? substraction = valores : substraction -= valores : "")
                        console.log(substraction)
                        setValue([...value], value[0][number][currentKey] = substraction)
                    } catch (error) {
                        console.log(error)
                    }
                }
            })

        }

    }

    const handleKeyPress = (e, number, currentKey) => {

        if (e.key === "Enter" || e.key == "Tab") {
            if (input.includes("=")) {
                if (input.includes("+")) {
                    sumOfCells(e, number, currentKey)
                }
                if (input.includes("-")) {
                    substractionOfCells(e, number, currentKey)
                }
            }
            else {
                setInput("")
            }
        }
    }



    const handleChange = (e, number, currentKey) => {

        setValue([...value], value[0][number][currentKey] = e.target.value)
        setInput(e.target.value)
        // if (e.target.value.includes("=")) {
        //     for (let i = 1; i < 5; i++) {
        //         Object.entries(value[0][i]).map((cell) => {
        //             if (e.target.value.includes(cell[0])) {
        //                 // setValue([...value], value[0][number][currentKey] = cell[1])
        //                 setFirstKey(cell[0]);
        //                 setFirstValue(cell[1]);
        //                 if (e.target.value === `=${firstKey}+${cell[0]}`) {
        //                     var x = +firstValue + +cell[1];
        //                     setValue([...value], value[0][number][currentKey] = x)
        //                 }


        //             }




        //         })
        //     }
        // }
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
                                        onKeyPress={(e) => handleKeyPress(e, number, val[0])}
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