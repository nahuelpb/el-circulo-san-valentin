import { useState } from "react";

export default function App() {
  const [revealed, setRevealed] = useState(false);

  // "cover" = llena pantalla (puede recortar)
  // "contain" = muestra toda la imagen (puede dejar bandas)
  const FIT = "cover";

  const onClick = () => {
    if (navigator.vibrate) navigator.vibrate(20);
    setRevealed(true);
  };

  const onExit = () => {
    setRevealed(false);
  };

  return (
    <div className="app">
      {/* Imagen de fondo */}
      <img
        className={`bg ${FIT}`}
        src="/hap-hee-hee.jpg"
        alt=""
        aria-hidden="true"
      />

      {/* Fondo para bandas cuando se usa "contain" */}
      <div className="bgFill" aria-hidden="true" />

      {/* Modal */}
      <div className="cardWrap">
        <div className="card">
          {!revealed ? (
            <button className="btn" type="button" onClick={onClick}>
              Pulsa para ver tu sorpresa de San Valentín 💘
            </button>
          ) : (
            <div className="emojiWrap">
              <div className="emoji" aria-label="emoji">
                👌
              </div>

              {/* TEXTO NUEVO */}
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  letterSpacing: "0.5px",
                  marginTop: "-6px",
                }}
              >
                ¡Caíste!!!
              </div>

              <button className="exitBtn" onClick={onExit}>
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
