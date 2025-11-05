import Card from "@/components/ui/Card";

const StatsGrid = ({ tasks }) => {
  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === "pending").length,
    inProgress: tasks.filter((t) => t.status === "in_progress").length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card>
        <h3 className="text-sm font-medium text-gray-500">Total</h3>
        <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
      </Card>
      <Card>
        <h3 className="text-sm font-medium text-gray-500">Pendientes</h3>
        <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
      </Card>
      <Card>
        <h3 className="text-sm font-medium text-gray-500">En Progreso</h3>
        <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
      </Card>
      <Card>
        <h3 className="text-sm font-medium text-gray-500">Completadas</h3>
        <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
      </Card>
    </div>
  );
};

export default StatsGrid;
