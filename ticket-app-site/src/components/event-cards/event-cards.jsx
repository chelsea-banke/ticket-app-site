import React, { useState } from "react";
import { EventCard } from "./event-card";

const mockEvents = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Concert Session d'as",
  location: "Douala Bercy",
  date: "20/12",
  description: "Artiste incroyable, ambiance garantie!",
}));

export const EventsWithPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
  
    const totalPages = Math.ceil(mockEvents.length / itemsPerPage);
    const currentItems = mockEvents.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const handlePageChange = (page) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
    };
  
    return (
      <div className="md:p-6 mx-auto space-y-6">
        <div className="flex w-full justify-evenly flex-wrap md:gap-6 gap-y-6">
          {currentItems.map((event) => (
            <EventCard key={event.id} event={event} className={'border-white'} />
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center items-center gap-1 text-sm">
          <button onClick={() => handlePageChange(currentPage - 1)} className="px-2 py-1 border rounded font-bold">«</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-2 py-1 border border-gray-900 ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)}className="px-2 py-1 border rounded">»</button>
        </div>
      </div>
    );
  };
  