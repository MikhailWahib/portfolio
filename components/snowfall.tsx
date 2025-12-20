"use client"

import { useEffect, useRef } from "react";

type SnowfallProps = {
    count?: number;
    speed?: number;
    size?: [number, number];
};

type Snowflake = {
    x: number;
    y: number;
    r: number;
    vx: number;
    vy: number;
};

export default function Snowfall({
    count = 100,
    speed = 1,
    size = [1, 3],
}: SnowfallProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const snowflakes: Snowflake[] = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * (size[1] - size[0]) + size[0],
            vy: Math.random() * speed + 0.5,
            vx: Math.random() * 0.5 - 0.25,
        }));

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const update = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "white";

            for (const s of snowflakes) {
                s.y += s.vy;
                s.x += s.vx;

                if (s.y > height) {
                    s.y = -s.r;
                    s.x = Math.random() * width;
                }

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(update);
        };

        window.addEventListener("resize", resize);
        update();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [count, speed, size]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 9999,
            }}
        />
    );
}
