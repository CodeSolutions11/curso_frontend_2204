import React from "react";

const Loading = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 "></div>
      </div>
    </div>
  );
};

export default Loading;
