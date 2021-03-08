import React, { useState } from 'react';
import initialState from '../db/InitialState'

const Cell = ({ column, number, idx }) => {
    const [input, setInput] = useState();
    const [value, setValue] = useState(initialState)

    const sumOfCells = (number, currentKey) => {
        let separateWords = input.substr(1).split((/[=\+]+/))
        console.log(separateWords)
        let sum = 0;

        for (let i = 1; i <= column.length; i++) {
            Object.entries(value[0][i]).map((cell) => {
                if (separateWords.includes(cell[0])) {
                    let valores = Number(cell[1])
                    separateWords.map((v) => cell[0] === v ? sum += valores : "")
                }
            })
        }
        separateWords.map((v) => {
            return /^[0-9]+$/.test(v) ? sum += +v : ""
        })
        setValue([...value], value[0][number][currentKey] = sum)

    }

    const substractionOfCells = (number, currentKey) => {
        let separateWords = input.substr(1).split((/[=\-]+/))
        console.log(separateWords)
        let substraction = 0;

        for (let i = 0; i < separateWords.length; i++) {
            for (let j = 1; j <= column.length; j++) {
                Object.entries(value[0][j]).map((cell) => {
                    if (separateWords[i] === cell[0]) {
                        try {
                            let cellValues = Number(cell[1])
                            substraction === 0 ? substraction = cellValues : substraction -= cellValues

                        } catch (error) {
                            console.log(error)
                        }
                    }

                })

            }
        }
        separateWords.map((v) => {
            return /^[0-9]+$/.test(v) ? substraction === 0 ? substraction = v : substraction -= v : ""
        })

        return setValue([...value], value[0][number][currentKey] = substraction)

    }

    const handleKeyPress = (e, number, currentKey) => {

        if (e.key === "Enter") {
            if (input.includes("=")) {
                if (input.includes("+")) {
                    sumOfCells(number, currentKey)
                }
                if (input.includes("-")) {
                    substractionOfCells(number, currentKey)
                }
            }
            else {
                setInput("")
            }
        }
    }



    const handleChange = (e, number, currentKey) => {
        setValue([...value], value[0][number][currentKey] = e.target.value)
        setInput(e.target.value.toUpperCase())
    }

    return (
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
}

export default Cell;