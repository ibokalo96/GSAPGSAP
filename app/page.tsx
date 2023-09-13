"use client";

import { Header, Table } from "./components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./page.css";

export default function Home() {
  const el = useRef(null);
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.set(q(".main-text"), { x: "-120%" });

    gsap.to(q(".main-text"), 3, {
      x: 0,
      ease: "power3.inOut",
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <main className="main" ref={el}>
      <Header />
      <h1 className="main-text">2023 Winter Tour Dates</h1>
      <div className="table-container">
        <Table />
      </div>
    </main>
  );
}
