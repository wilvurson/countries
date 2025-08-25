"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch countries
  const get_data = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/independent?status=true");
      const response = await res.json();
      setData(response);
      setFiltered(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    get_data();
  }, []);

  if (data.length < 1) {
    return <div>.loading.</div>;
  }

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const query = search.trim().toLowerCase();
      if (query === "") {
        setFiltered(data); // show all
      } else {
        setFiltered(
          data.filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
        );
      }
    }
  };

  return (
    <div className="container">
      <div className="top">
        <div className="top_text">
          <div>Countries</div>
        </div>
        <div className="top_input">
          <input
            className="search_bar"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <div className="country_container">
        {filtered.map((country) => (
          <div key={country.name.common} className="country_holder">
            <h2 className="country_name">{country.name.common}</h2>
            <img className="flags" src={country.flags.png} alt={country.name.common} />
          </div>
        ))}
      </div>
    </div>
  );
}