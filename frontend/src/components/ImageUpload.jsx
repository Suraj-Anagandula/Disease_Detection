import { useState } from "react";
import API from "../services/api";

function ImageUpload({ setResult }) {
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append("file", image);

        try {
            const response = await API.post("/predict", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setResult(response.data);

        } catch (error) {
            console.error(error);
            alert("Prediction failed");
        }
    };

    return (
        <div>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Predict
            </button>

        </div>
    );
}

export default ImageUpload;