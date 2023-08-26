import React, { useState } from 'react';

const Smiley = ({ name }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="smiley">
            <span>{name}</span>
            <button onClick={handleClick}>Vote</button>
            <p>Clicks: {count}</p>
        </div>
    );
};

export default Smiley;