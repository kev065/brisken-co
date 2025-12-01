"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { IconArrowLeft, IconEgg } from "@tabler/icons-react";

export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const bgCircle1 = useRef<HTMLDivElement>(null);
    const bgCircle2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states
            gsap.set([contentRef.current, buttonRef.current], {
                y: 50,
                opacity: 0,
            });

            gsap.set(numberRef.current, {
                scale: 0.5,
                opacity: 0,
                rotation: -10,
            });

            // Background animations
            gsap.to(bgCircle1.current, {
                x: "20%",
                y: "20%",
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(bgCircle2.current, {
                x: "-20%",
                y: "-20%",
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1,
            });

            // Entrance Timeline
            const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.75)" } });

            tl.to(numberRef.current, {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1.5,
            })
                .to(contentRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                }, "-=1")
                .to(buttonRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                }, "-=0.8");

            // Interactive Parallax
            const handleMouseMove = (e: MouseEvent) => {
                if (!containerRef.current) return;
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                const x = (clientX - innerWidth / 2) / 30;
                const y = (clientY - innerHeight / 2) / 30;

                gsap.to(numberRef.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: "power2.out",
                });

                gsap.to([bgCircle1.current, bgCircle2.current], {
                    x: -x * 0.5,
                    y: -y * 0.5,
                    duration: 2,
                    ease: "power2.out",
                    overwrite: "auto", // Allow overwriting the background loop slightly
                });
            };

            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex-1 w-full flex flex-col items-center justify-start pt-20 pb-20 relative overflow-hidden bg-[#fffdf0]"
        >
            {/* Vibrant Background Elements */}
            <div
                ref={bgCircle1}
                className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ffa500] opacity-10 blur-[100px]"
            />
            <div
                ref={bgCircle2}
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#ffdd1a] opacity-20 blur-[80px]"
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">

                {/* 404 Display */}
                <div ref={numberRef} className="relative mb-6">
                    <h1 className="text-[10rem] md:text-[14rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ffa500] to-[#e67e22] drop-shadow-sm select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#fff4e6] opacity-20 pointer-events-none">
                        <IconEgg size={300} stroke={1.5} />
                    </div>
                </div>

                {/* Text */}
                <div ref={contentRef} className="max-w-xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#d35400] text-center">
                        Oops! You've Hatched in the Wrong Place
                    </h2>
                    <p className="text-lg text-gray-600 font-medium text-center">
                        The page you are looking for seems to have flown the coop.
                        Let's get you back to the flock.
                    </p>
                </div>

                {/* Button */}
                <div className="mt-10">
                    <Link
                        ref={buttonRef}
                        href="/"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ffa500] to-[#ff8c00] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-orange-300/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ffdd1a] to-[#ffa500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <IconArrowLeft className="relative z-10 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        <span className="relative z-10">Return to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
