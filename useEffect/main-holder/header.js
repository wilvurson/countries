"use client"

import { useEffect, useState, React } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const change = useRouter()
    return (
      <header className="bg-tp shadow p-4 flex justify-center fixed w-full backdrop-blur-sm">
        <div className="flex" onClick={() => change.push("./useEffect/main-holder/page.jsx")}>Shop</div>
      </header>
    );
}