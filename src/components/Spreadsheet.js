import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Header from './Header'


const Spreadsheet = () => {

    const [column, setColumn] = useState([1, 2, 3, 4, 5])
    const [input, setInput] = useState();
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

    const sumOfCells = (number, currentKey) => {
        let separateWords = input.substr(1).split((/[=\+]+/))
        console.log(separateWords)
        let sum = 0;

        if (!separateWords.some(isNaN)) {
            console.log("aca")
            separateWords.map((v) => sum += +v)
            return setValue([...value], value[0][number][currentKey] = sum)
        }

        else {
            for (let i = 1; i <= column.length; i++) {
                Object.entries(value[0][i]).map((cell) => {
                    try {
                        let valores = Number(cell[1])
                        separateWords.map((v) => (v === cell[0] ? sum += valores : ""))
                        console.log(sum)
                        setValue([...value], value[0][number][currentKey] = sum)
                    } catch (error) {
                        console.log(error)
                    }
                })
            }
        }




    }

    const substractionOfCells = (number, currentKey) => {
        let separateWords = input.substr(1).split((/[=\-]+/))
        console.log(separateWords)
        let substraction = 0;


        if (!separateWords.every(isNaN)) {
            separateWords.map((v) => substraction === 0 ? substraction = v : substraction -= v)
            setValue([...value], value[0][number][currentKey] = substraction)
        }

        else {
            for (let i = 0; i < separateWords.length; i++) {
                for (let j = 1; j <= column.length; j++) {
                    Object.entries(value[0][j]).map((cell) => {
                        if (separateWords[i] === cell[0]) {
                            try {
                                let cellValues = Number(cell[1])
                                substraction === 0 ? substraction = cellValues : substraction -= cellValues
                                return setValue([...value], value[0][number][currentKey] = substraction)
                            } catch (error) {
                                console.log(error)
                            }
                        }

                    })

                }
            }
        }



    }

    const handleKeyPress = (e, number, currentKey) => {

        if (e.key === "Enter" || e.key === "Tab") {
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
    }


    return (
        <Table bordered >
            <Header />
            <tbody >

                {column.map((number, idx) => (
                    <tr key={idx} >
                        <td style={{ backgroundColor: '#E8EAED' }}>{number}</td>
                        {value.map((cell) => (
                            Object.entries(cell[number]).map((val) => (
                                < td   >
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