// import { useState } from "react";
// import background from "./assets/background.png";

// import Header from "./components/Header";
// import ImageUpload from "./components/ImageUpload";
// import PredictionResult from "./components/PredictionResult";

// import "./App.css";

// function App() {

//     const [result, setResult] = useState(null);

//     return (
//         <div
//       style={{
//         backgroundImage: `url(${background})`,
//       }}
//     >

//             <Header />

//             <ImageUpload setResult={setResult} />

//             <PredictionResult result={result} />

//         </div>
//     );
// }

// export default App;

import { useState } from "react";
import background from "./assets/background.png";

import Header from "./components/Header";
import ImageUpload from "./components/ImageUpload";
import PredictionResult from "./components/PredictionResult";

import "./App.css";

function App() {
    const [result, setResult] = useState(null);

    return (
        <div
            className="app"
            style={{
                backgroundImage: `linear-gradient(
                    rgba(0,0,0,0.45),
                    rgba(0,0,0,0.45)
                ), url(${background})`,
            }}
        >
            <div className="glass-card">
                <Header />

                <ImageUpload setResult={setResult} />

                <PredictionResult result={result} />
            </div>
        </div>
    );
}

export default App;