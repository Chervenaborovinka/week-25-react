import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCarousel.css";

const WordCarousel = ({ words = [], initialIndex = 0 }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(initialIndex);

    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
    };

    const handleReset = () => {
        setCurrentCardIndex(0);
    };

    return (
        <div className="word-carousel" onClick={handleNextCard}>
            {words.length > 0 ? (
                <>
                    <button onClick={handlePrevCard}>←</button>
                    <WordCard
                        word={words[currentCardIndex].word}
                        translation={words[currentCardIndex].translation} />
                    <button onClick={handleNextCard}>→</button>
                </>
            ) : (
                <p>No words to display.</p>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

WordCarousel.defaultProps = {
    initialIndex: 0,
};

export default WordCarousel;




