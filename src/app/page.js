"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const get_data = async () => {
    await fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setFilteredData(response);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    get_data();
  }, []);

  useEffect(() => {
    const input = document.querySelector(".search_bar");

    const handleInput = () => {
      const value = input.value.toLowerCase();
      const filtered = data.filter((country) =>
        country.name.common.toLowerCase().includes(value)
      );
      setFilteredData(filtered);
    };

    input.addEventListener("input", handleInput);

    return () => {
      input.removeEventListener("input", handleInput);
    };
  }, [data]);

  if (data.length < 1) {
    return <div>.loading.</div>;
  }

  return (
    <div className="container">
      <h1>Countries</h1>
      <input className="search_bar" placeholder="Search"></input>
      <div className="country_container">
        {filteredData.map((country) => (
          <div key={country.name.common} className="country_holder">
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common}></img>
          </div>
        ))}
      </div>
    </div>
  );
}