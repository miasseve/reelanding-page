"use client";

import { useEffect, useRef } from "react";

function createStars(canvas) {
    const ctx = canvas.getContext("2d");
    const stars = [];
    const count = 80;

    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6 + 0.2,
            speed: Math.random() * 0.3 + 0.1,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
        });
    }

    let frame;
    function animate(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const star of stars) {
            const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
            const alpha = star.opacity * twinkle;

            // Warm red/rose colors
            const colors = [
                `rgba(255, 120, 100, ${alpha})`,
                `rgba(255, 160, 130, ${alpha})`,
                `rgba(240, 100, 120, ${alpha})`,
                `rgba(255, 180, 160, ${alpha})`,
                `rgba(220, 90, 110, ${alpha})`,
            ];
            const color = colors[Math.floor(star.twinkleOffset * 10) % colors.length];

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            // Subtle glow around each star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.size * 3
            );
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, "transparent");
            ctx.fillStyle = gradient;
            ctx.fill();

            // Slowly drift upward
            star.y -= star.speed * 0.15;
            if (star.y < -5) {
                star.y = canvas.height + 5;
                star.x = Math.random() * canvas.width;
            }
        }

        frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
}

export default function DarkSection({ children }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        function resize() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }

        resize();
        window.addEventListener("resize", resize);
        const cleanup = createStars(canvas);

        return () => {
            window.removeEventListener("resize", resize);
            cleanup();
        };
    }, []);

    return (
        <section
            className="relative py-20 overflow-hidden"
            style={{ background: "linear-gradient(145deg, #2a1a1a 0%, #3d1f2f 50%, #1e1225 100%)" }}
        >
            {/* Subtle red glow from center */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(180, 60, 80, 0.15) 0%, rgba(150, 40, 60, 0.08) 40%, transparent 70%)",
                }}
            />

            {/* Animated stars canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
}
