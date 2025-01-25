import React from "react";
import { CreateHead } from "@/frontend/components/head";
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
      {CreateHead({ title: "Home - Bun Test" })}
      <div className="h-screen flex justify-center items-center">
        <NavLink to="/" className="px-4 py-2 bg-amber-900 text-white mr-2">
          Home
        </NavLink>
        <NavLink to="/about" className="px-4 py-2 bg-amber-900 text-white">
          About
        </NavLink>
      </div>
    </>
  );
}
