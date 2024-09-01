const Options = ({onFeedback, onReset, totalFeedback}) => {
    return (
        <div className="buttonBox">
            <button type="button" onClick={() => onFeedback("good")}>Good</button>
            <button type="button" onClick={() => onFeedback("neutral")}>Neutral</button>
            <button type="button" onClick={() => onFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button type="button" onClick={onReset}>Reset</button>}
        </div>
    );
}


export default Options