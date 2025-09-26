import React from "react";
import "./ImageCollage.css";

// Import your images
import img1 from "../../../Assets/YSB_Farewell_European_Union_2024-115.jpg";
import img2 from "../../../Assets/YSB_Farewell_European_Union_2024-46.jpg";
import img3 from "../../../Assets/YSB_Farewell_European_Union_2024-99.jpg";
import img4 from "../../../Assets/YSB_Farewell_European_Union_2024-56.jpg";
import img5 from "../../../Assets/YSB_Farewell_European_Union_2024-46.jpg";

function ImageCollage() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="image-collage-container">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`img${index + 1}`} />
      ))}
    </div>
  );
}

export default ImageCollage;
