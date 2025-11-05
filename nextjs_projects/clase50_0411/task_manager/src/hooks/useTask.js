"use client";
import { useState, useEffect } from "react";

export const useTask = (initialTasks = []) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(false);

  const refreshTasks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/task");
      const updatedTasks = await response.json();

      setTasks(updatedTasks);
    } catch (err) {
      console.error("Error refrescando las tareas:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    tasks,
    loading,
    refreshTasks,
    setTasks,
  };
};
