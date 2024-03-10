import React, { useState } from "react";
import "./WordCard.css";

const WordCard = ({ word, translation }) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const handleToggleTranslation = () => {
        setShowTranslation((prevShowTranslation) => !prevShowTranslation);
    };

    return (
        <div className="word-card" onClick={handleToggleTranslation}>
            <p>{word}</p>
            {showTranslation && <p>{translation}</p>}
        </div>
    );
};

export default WordCard;