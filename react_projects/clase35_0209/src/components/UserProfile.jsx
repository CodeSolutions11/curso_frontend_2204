import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //? Simular llamada a API

    setTimeout(() => {
      setUser({
        name: "Pedro",
        email: "pedro@gmail.com",
        avatar: "👤",
      });
      setLoading(false);
    }, 2000);
  }, []); //! Solo se ejecuta una vez

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-6 bg-green-100 rounded-lg">
      <div className="flex items-center space-x-4">
        <span className="text-4xl">{user.avatar}</span>
        <div>
          <h3 className="text-xl text-black font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
