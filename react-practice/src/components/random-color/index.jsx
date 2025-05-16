import { useEffect, useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("rgb");
  const [color, setColor] = useState("#000000");

  const colorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCustomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCustomRgbColor = () => {
    const r = colorUtility(256);
    const g = colorUtility(256);
    const b = colorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  };

  useEffect(() => {
    type === "rgb" ? handleCustomRgbColor() : handleCustomHexColor();
  }, [type]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button onClick={() => setType("hex")}>Create Hex Color</button>
      <button onClick={() => setType("rgb")}>Create RGB Color</button>
      <button
        onClick={type === "hex" ? handleCustomHexColor : handleCustomRgbColor}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{type === "rgb" ? "RGB" : "HEX"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
