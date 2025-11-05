"use client";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { useState } from "react";

const TaskCard = ({ task, onUpdate }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/task/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        onUpdate();
      }
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card className="border-l-4 border-l-blue-400">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
        <Badge variant={task.status}>{task.status.replace("_", " ")}</Badge>
      </div>

      {task.description && (
        <p className="text-gray-600 mb-4">{task.description}</p>
      )}

      <div className="flex justify-between items-center">
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          disabled={isUpdating}
          className="text-sm border rounded  px-2 py-1"
        >
          <option value="pending">Pendiente</option>
          <option value="in_progress">En progreso</option>
          <option value="completed">Completada</option>
        </select>
        <Badge variant={task.priority}>{task.priority}</Badge>
      </div>
    </Card>
  );
};
export default TaskCard;
