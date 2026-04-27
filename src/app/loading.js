"use client";

import React from "react";

export function Component() {
  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <style>{`
        :root {
          --wrapper-bg: #ffffff;
          --cube-color: #0000;
          --highlight-color: #00cc44;
        }

        .dark {
          --wrapper-bg: #000000;
          --cube-color: #0000;
          --highlight-color: #00ff88;
        }

        .wrapper-grid {
          display: flex;
          gap: 14px;
          perspective: 800px;
        }

        .cube {
          position: relative;
          width: 42px;
          height: 42px;
          transform-style: preserve-3d;
          animation: translate-z 1.8s infinite ease-in-out;
        }

        .cube:nth-child(1) { animation-delay: 0s; }
        .cube:nth-child(2) { animation-delay: 0.12s; }
        .cube:nth-child(3) { animation-delay: 0.24s; }
        .cube:nth-child(4) { animation-delay: 0.36s; }
        .cube:nth-child(5) { animation-delay: 0.48s; }
        .cube:nth-child(6) { animation-delay: 0.60s; }
        .cube:nth-child(7) { animation-delay: 0.72s; }

        .face {
          position: absolute;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(0, 204, 68, 0.35);
          background-color: var(--cube-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 800;
          color: transparent;
          animation: face-color 1.8s infinite ease-in-out,
                     edge-glow 1.8s infinite ease-in-out;
        }

        .cube:nth-child(1) .face { animation-delay: 0s; }
        .cube:nth-child(2) .face { animation-delay: 0.12s; }
        .cube:nth-child(3) .face { animation-delay: 0.24s; }
        .cube:nth-child(4) .face { animation-delay: 0.36s; }
        .cube:nth-child(5) .face { animation-delay: 0.48s; }
        .cube:nth-child(6) .face { animation-delay: 0.60s; }
        .cube:nth-child(7) .face { animation-delay: 0.72s; }

        .face-front {
          transform: translateZ(21px);
          animation: face-color 1.8s infinite ease-in-out,
                     face-glow 1.8s infinite ease-in-out,
                     edge-glow 1.8s infinite ease-in-out;
        }

        .face-back {
          transform: rotateY(180deg) translateZ(21px);
        }

        .face-right {
          transform: rotateY(90deg) translateZ(21px);
        }

        .face-left {
          transform: rotateY(-90deg) translateZ(21px);
        }

        .face-top {
          transform: rotateX(90deg) translateZ(21px);
        }

        .face-bottom {
          transform: rotateX(-90deg) translateZ(21px);
        }

        @keyframes translate-z {
          0%, 40%, 100% {
            transform: translateZ(-2px);
          }
          30% {
            transform: translateZ(16px) translateY(-1px);
          }
        }

        @keyframes face-color {
          0%, 50%, 100% {
            background-color: var(--cube-color);
          }
          10% {
            background-color: var(--highlight-color);
          }
        }

        @keyframes face-glow {
          0%, 50%, 100% {
            color: #fff0;
            filter: none;
          }
          30% {
            color: #fff;
            filter: drop-shadow(0 14px 10px var(--highlight-color));
          }
        }

        @keyframes edge-glow {
          0%, 40%, 100% {
            box-shadow: inset 0 0 2px 1px #0001,
              inset 0 0 12px 1px #fff1;
          }
          30% {
            box-shadow: 0 0 8px 1px var(--highlight-color);
          }
        }
      `}</style>

      <div className="wrapper-grid">
        {letters.map((letter, index) => (
          <div className="cube" key={index}>
            <div className="face face-front">{letter}</div>
            <div className="face face-back"></div>
            <div className="face face-right"></div>
            <div className="face face-left"></div>
            <div className="face face-top"></div>
            <div className="face face-bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component;