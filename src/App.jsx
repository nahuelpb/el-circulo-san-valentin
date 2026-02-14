import { useState } from "react";

export default function App() {
  const [revealed, setRevealed] = useState(false);

  // Cambia a "contain" si NO quieres recorte (puede dejar bandas)
  const FIT = "cover"; // "cover" | "contain"

  const onClick = () => {
    if (navigator.vibrate) navigator.vibrate(20);
    setRevealed(true);
  };

  return (
    <div className="app">
      {/* Fondo como IMG para control total */}
      <img
        className={`bg ${FIT}`}
        src="/hap-hee-hee.jpg"
        alt=""
        aria-hidden="true"
      />

      {/* Si usas contain, esto rellena las bandas con un color suave */}
      <div className="bgFill" aria-hidden="true" />

      {/* “Modal” fijo: no cambia ancho/alto al cambiar contenido */}
      <div className="cardWrap">
        <div className="card">
          {!revealed ? (
            <button className="btn" type="button" onClick={onClick}>
              Pulsa para ver tu sorpresa de San Valentín 💘
            </button>
          ) : (
            <div className="emojiWrap">
              <div className="emoji" aria-label="emoji">👌</div>

              <button
                className="exitBtn"
                onClick={() => setRevealed(false)}
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
