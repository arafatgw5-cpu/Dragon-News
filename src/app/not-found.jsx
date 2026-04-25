"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <MessageDisplay />
      <CharactersAnimation />
      <CircleAnimation />
    </div>
  );
}

function MessageDisplay() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute z-[100] flex h-[90%] w-[90%] flex-col items-center justify-center">
      <div
        className={`flex flex-col items-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="m-[1%] text-[35px] font-semibold text-black">
          Page Not Found
        </h2>

        <h1 className="m-[1%] text-[80px] font-bold text-black">404</h1>

        <p className="m-[1%] w-1/2 min-w-[40%] text-center text-[15px] text-black">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex gap-6">
          <button
            onClick={() => router.back()}
            className="flex h-auto items-center gap-2 border-2 border-black px-6 py-2 text-base font-medium text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex h-auto items-center gap-2 bg-black px-6 py-2 text-base font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-900"
          >
            <Home size={20} />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

function CharactersAnimation() {
  const charactersRef = useRef(null);

  useEffect(() => {
    const stickFigures = [
      {
        top: "0%",
        src: "https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg",
        transform: "rotateZ(-90deg)",
        speedX: 1500,
      },
      {
        top: "10%",
        src: "https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick1.svg",
        speedX: 3000,
        speedRotation: 2000,
      },
      {
        top: "20%",
        src: "https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick2.svg",
        speedX: 5000,
        speedRotation: 1000,
      },
      {
        top: "25%",
        src: "https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg",
        speedX: 2500,
        speedRotation: 1500,
      },
      {
        top: "35%",
        src: "https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg",
        speedX: 2000,
        speedRotation: 300,
      },
      {
        bottom: "5%",
        src: "https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick3.svg",
        speedX: 0,
      },
    ];

    if (!charactersRef.current) return;

    charactersRef.current.innerHTML = "";

    stickFigures.forEach((figure, index) => {
      const stick = document.createElement("img");

      stick.style.position = "absolute";
      stick.style.width = "18%";
      stick.style.height = "18%";

      if (figure.top) stick.style.top = figure.top;
      if (figure.bottom) stick.style.bottom = figure.bottom;
      if (figure.transform) stick.style.transform = figure.transform;

      stick.src = figure.src;
      stick.alt = "stick character";

      charactersRef.current.appendChild(stick);

      if (index === 5) return;

      stick.animate([{ left: "100%" }, { left: "-20%" }], {
        duration: figure.speedX,
        easing: "linear",
        fill: "forwards",
      });

      if (index === 0) return;

      if (figure.speedRotation) {
        stick.animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(-360deg)" }],
          {
            duration: figure.speedRotation,
            iterations: Infinity,
            easing: "linear",
          }
        );
      }
    });

    return () => {
      if (charactersRef.current) charactersRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={charactersRef} className="absolute h-[95%] w-[99%]" />;
}

function CircleAnimation() {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const timerRef = useRef(0);
  const circlesRef = useRef([]);

  const initArr = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    circlesRef.current = [];

    for (let i = 0; i < 300; i++) {
      const randomX =
        Math.floor(
          Math.random() * (canvas.width * 3 - canvas.width * 1.2 + 1)
        ) +
        canvas.width * 1.2;

      const randomY =
        Math.floor(
          Math.random() * (canvas.height - canvas.height * -0.2 + 1)
        ) +
        canvas.height * -0.2;

      const size = canvas.width / 1000;

      circlesRef.current.push({
        x: randomX,
        y: randomY,
        size,
      });
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    timerRef.current++;

    const distanceX = canvas.width / 80;
    const growthRate = canvas.width / 1000;

    context.fillStyle = "white";
    context.clearRect(0, 0, canvas.width, canvas.height);

    circlesRef.current.forEach((circle) => {
      context.beginPath();

      if (timerRef.current < 65) {
        circle.x -= distanceX;
        circle.size += growthRate;
      }

      if (timerRef.current > 65 && timerRef.current < 500) {
        circle.x -= distanceX * 0.02;
        circle.size += growthRate * 0.2;
      }

      context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
      context.fill();
    });

    if (timerRef.current > 500) return;

    requestIdRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const startAnimation = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      timerRef.current = 0;

      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }

      initArr();
      draw();
    };

    startAnimation();

    window.addEventListener("resize", startAnimation);

    return () => {
      window.removeEventListener("resize", startAnimation);

      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}