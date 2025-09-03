import React from "react";

export default function ProfileLayout({ sidebar, content }) {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-8">
      <div className="flex flex-col md:flex-row w-full max-w-5xl border rounded-xl bg-white shadow-md overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-72 border-b md:border-b-0 md:border-r bg-white">
          <div className="p-4">{sidebar}</div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 bg-gray-50">{content}</div>
      </div>
    </div>
  );
}
