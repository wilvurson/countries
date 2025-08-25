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
        setData(response);
        setFiltered(response);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    get_data();
  }, []);

  if (data.length < 1) {
    return <div>.loading.</div>;
  }

  return (
    <div className="container">
      <div className="top">
        <div className="top_text">
          <div>Countries</div>
        </div>
        <div className="top_input">
          <input className="search_bar" placeholder="Search"></input>
        </div>
      </div>
      <div className="country_container">
        {data.map((country) => {
          const searched = document.querySelector(".top_input");
          const result = document.querySelector(".country_container")
          searched.addEventListener("keydown", function(keys) {
            console.log(keys.key)
            if (keys.key === "Enter") {
              const asked = searched.value.trim().toLowerCase()
              if (asked === "") {
                return (
                  <div key={country.name.common} className="country_holder">
                    <h2 className="country_name">{country.name.common}</h2>
                    <img className="flags" src={country.flags.png}></img>
                  </div>
                );
              }
            }
          })
          
        })}
      </div>
    </div>
  );
}
