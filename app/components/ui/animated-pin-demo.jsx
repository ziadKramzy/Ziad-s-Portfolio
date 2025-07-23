"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="w-full flex items-center justify-center mt-16 mb-16" style={{border: '4px solid red', background: 'rgba(255,0,0,0.05)'}}>
      <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji" containerClassName="border-4 border-blue-500">
        <div
          className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] justify-center items-center">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 text-center">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal text-center">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
