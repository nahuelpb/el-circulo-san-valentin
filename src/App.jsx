import { useState } from "react";

export default function App() {
  const [revealed, setRevealed] = useState(false);

  const onClick = () => {
    if (navigator.vibrate) navigator.vibrate(20);
    setRevealed(true);
  };

  const reset = () => setRevealed(false);

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 pt-40"
      style={{
        backgroundImage: "url(/hap-hee-hee.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />

      {/* IMPORTANTE: w-full aquí + w-full en la tarjeta para que NO se encoja al cambiar de estado */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="w-full rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl shadow-xl p-6">
          {!revealed ? (
            <button
              onClick={onClick}
              className="group w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white py-5 font-semibold text-base shadow-lg shadow-rose-500/20 active:scale-[0.98] transition"
            >
              {/* Shine */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-white/25 blur-md animate-[shine_1.2s_ease-in-out_infinite]" />
              </span>

              <span className="relative">
                Pulsa para ver tu sorpresa de San Valentín 💘
              </span>
            </button>
          ) : (
            <div className="w-full py-8 text-center animate-[pop_.35s_ease-out]">
              <div className="text-[110px] leading-none select-none">👌</div>

              <div className="mt-4">
                <h2 className="text-3xl font-extrabold text-black/90 animate-[shake_.45s_ease-in-out_1]">
                  ¡Caíste!!!
                </h2>
              </div>

              <button
                onClick={reset}
                className="mt-6 w-full rounded-2xl border border-black/10 bg-white hover:bg-black/5 text-black/80 py-4 font-semibold transition active:scale-[0.99]"
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pop {
          0% { transform: scale(.96); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
        }
        @keyframes shine {
          0% { transform: translateX(-120%) rotate(12deg); }
          100% { transform: translateX(260%) rotate(12deg); }
        }
      `}</style>
    </div>
  );
}
