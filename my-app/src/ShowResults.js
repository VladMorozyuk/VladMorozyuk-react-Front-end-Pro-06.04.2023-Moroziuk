import React, { useState } from 'react';

const ShowResults = ({ smiles }) => {
    const getMaxClicks = () => {
        const max = Math.max(...smiles.map((smile) => smile.count));
        return smiles.find((smile) => smile.count === max);
    };

    const winner = getMaxClicks();

    return (
        <div className="results">
            <h2>Winner:</h2>
            {winner ? <p>{winner.name}</p> : <p>No winner yet</p>}
        </div>
    );
};

export default ShowResults;














