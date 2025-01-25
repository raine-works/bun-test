import React from "react";
import { NavLink } from "react-router";
import { api } from "@/frontend/lib/api";

export function Home() {
  const getApiData = async () => {
    const response = await api.test.$get();
    if (response.ok) {
      const json = await response.json();
      console.log(json);
    }
  };

  React.useEffect(() => {
    getApiData();
  });

  return (
    <>
      <p>Home</p>
      <NavLink to="/about">About</NavLink>
    </>
  );
}
