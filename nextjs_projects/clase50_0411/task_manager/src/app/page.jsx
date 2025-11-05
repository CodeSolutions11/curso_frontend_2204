import Container from "@/components/layout/Container";
import StatsGrid from "@/components/features/StatsGrid";
import { getTasks } from "@/lib/db";
import TaskCard from "@/components/features/TaskCard";

const Home = async () => {
  const tasks = await getTasks();

  return (
    <Container>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-8">Bienvenido a tu sistema de tareas</p>
      </div>

      <StatsGrid tasks={tasks} />

      <div className="rounded-lg shadow p-6">
        <h2 className="text-lg font-medium mb-4">Tareas Recientes</h2>
        <div className="space-y-3">
          {tasks.slice(0, 5).map((task) => (
            <div key={task.id} className="flex justify-between items-center">
              <span className="text-gray-900">{task.title}</span>
              <span className="text-sm text-gray-500">{task.status}</span>
            </div>
          ))}
        </div>
      </div>

      <TaskCard task={{ id: 1, title: "test", status: "in_progress" }} />
    </Container>
  );
};
export default Home;
