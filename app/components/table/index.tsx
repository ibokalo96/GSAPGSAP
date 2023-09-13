"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TABLE_INFO } from "../../constants";

import "./table.css";
import { TableRow } from "..";

export const Table = () => {
  const el = useRef<HTMLDivElement>(null);
  const [activeRows, setActiveRows] = useState<number[]>([]);

  const q = gsap.utils.selector(el);

  const toggleDetails = (index: number) => {
    if (activeRows.includes(index)) {
      setActiveRows(activeRows.filter((i) => i !== index));
    } else {
      setActiveRows([...activeRows, index]);
    }
  };

  useEffect(() => {
    gsap.set(q(".divider"), { x: "-120%" });
    gsap.set(q("#overlay"), { x: "-120%" });

    gsap.set(q(".row > .col"), { opacity: 0, y: 40 });

    gsap.to(q(".divider"), 3, {
      x: 0,
      delay: 1,
      ease: "power3.inOut",
      stagger: {
        amount: 1,
      },
    });

    gsap.to(q("#overlay"), 3, {
      x: 0,
      delay: 1,
      ease: "power3.inOut",
      stagger: {
        amount: 1,
      },
    });

    gsap.to(q(".row > .col"), 2, {
      opacity: 100,
      y: 0,
      ease: "power3.inOut",
      delay: 2,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  return (
    <div ref={el} className="table">
      <div id="overlay"></div>
      <div className="content">
        <div className="nav row">
          <div className="col">Date</div>
          <div className="col">City</div>
          <div className="col col-venue">Venue</div>
          <div className="col col-supporting-act">Supporting Act</div>
          <div className="col">{""}</div>
        </div>

        <div className="divider nav-divider"></div>

        {TABLE_INFO.map((tableInfo, index) => (
          <>
            <TableRow
              activeRows={activeRows}
              index={index}
              tableInfo={tableInfo}
              toggleDetails={toggleDetails}
            />
            <div className="divider"></div>
          </>
        ))}
      </div>
    </div>
  );
};
