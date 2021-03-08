import React, { useState } from 'react';

const Header = () => {
    const [header] = useState(["#", "A", "B", "C", "D", "E", "F"]);

    return (
        <thead style={{ backgroundColor: '#E8EAED' }}>
            <tr>
                {header.map((h, idx) => (<th key={idx}>{h}</th>))}
            </tr>
        </thead>
    )
}

export default Header;