"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(
        `/search?pokemonNameOrId=${encodeURIComponent(searchTerm.trim())}`
      );
    }
  };

  return (
    // Search form with a button icon only on the right side of the input field
    <section className="flex justify-center mt-10 mb-10 w-full">
      <form className="w-3xl" onSubmit={handleSubmit}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-4 p-2.5 pr-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Search Pokemon by name or ID"
            required
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none bg-blue-300 p-1 rounded-lg">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </form>
    </section>
  );
}
