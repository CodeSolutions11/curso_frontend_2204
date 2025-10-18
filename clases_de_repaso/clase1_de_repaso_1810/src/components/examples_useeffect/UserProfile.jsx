import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
        );
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <p>{user?.company?.name}</p>
    </div>
  );
};

export default UserProfile;
