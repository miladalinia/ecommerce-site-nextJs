"use client";
import React, { MouseEvent, useRef } from "react";
import { links } from "@/utils/data";
import { animal } from "@/models/User";

export default function ScrollIntoViewTest() {
  const linkRef = useRef<HTMLDivElement | null>(null);
  const linkTwoRef = useRef<HTMLDivElement | null>(null);
  const linkThreeRef = useRef<HTMLDivElement | null>(null);
  const linkFoureRef = useRef<HTMLDivElement | null>(null);

  function handleClickLink(event: MouseEvent<HTMLLIElement>): void {
    const targetItem = (event.target as HTMLLIElement).dataset.id;
    
    switch (targetItem) {
      case "html":
        linkRef.current?.scrollIntoView({ behavior: "smooth"});
        break
      case "css":
        linkTwoRef.current?.scrollIntoView({ behavior: "smooth" });
        break
      case "js":
        linkThreeRef.current?.scrollIntoView({ behavior: "smooth"});
        break
      case "php":
        linkFoureRef.current?.scrollIntoView({ behavior: "smooth"});
        break
    }
  }
  return (
    <>
      <ul className="flex gap-6 justify-center mb-4">
        {links.map((link) => (
          <li
            key={link.id}
            data-id={link.dataset}
            className={`${link.color} p-4 rounded text-center w-20 hover:translate-y-1 transition-transform shadow-lg  text-white cursor-pointer`}
            onClick={handleClickLink}
          >
            {link.title}
          </li>
        ))}
      </ul>

      <section
        ref={linkRef}
        id="html"
        className="flex items-center bg-blue-500 justify-center w-full h-96 text-6xl"
      >
        HTML
      </section>
      <section
        ref={linkTwoRef}
        id="css"
        className="flex items-center justify-center bg-red-500 w-full h-96 text-6xl"
      >
        CSS
      </section>
      <section
        ref={linkThreeRef}
        id="js"
        className="flex items-center justify-center bg-yellow-500 w-full h-96 text-6xl"
      >
        <div className="grid gap-3">
          <p>JS</p>
          <p>{animal.ability}</p>
          <p>{animal.name}</p>
        </div>
      </section>
      <section
        ref={linkFoureRef}
        id="php"
        className="flex items-center justify-center bg-purple-500 w-full h-96 text-6xl"
      >
        Php
      </section>
    </>
  );
}
