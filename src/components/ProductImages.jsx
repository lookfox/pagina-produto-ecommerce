import { useState } from "react";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
];

export default function ProductImages() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full md:w-[40%] flex flex-col items-center p-4">
      {/* Imagem principal */}
      <div className="w-full aspect-square border rounded-lg overflow-hidden mb-4">
        <img
          src={selectedImage}
          alt="Imagem do produto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex gap-2 justify-center">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 border rounded-md overflow-hidden ${
              selectedImage === img ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={img}
              alt={`Miniatura ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
