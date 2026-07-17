function PredictionResult({ result }) {

    if (!result) return null;

    return (
        <div>

            <h2>Prediction</h2>

            <h3>{result.class}</h3>

            <p>
                Confidence :
                {(result.confidence * 100).toFixed(2)}%
            </p>

        </div>
    );
}

export default PredictionResult;