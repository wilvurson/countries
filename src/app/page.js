"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  const get_data = async () => {
    await fetch("https://restcountries.com/v3.1/independent?status=true")
    .then((res) => res.json())
    .then((response) => {
      setData(response)
    })
    .catch((error) => console.log("error", error))
  }

  useEffect(() => {
    get_data();
  }, [])

  if (data.length < 1) {
    return <div>.loading.</div>
  }

  return (
    <div className="container">
      <h1>Countries</h1>
      <input className="search_bar" placeholder="Search"></input>
      <div className="country_container">
        {data.map((country) => {
          return (
            <div key={country.name.common} className="country_holder">
              <h2>{country.name.common}</h2>
              <img src={country.flags.png}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
