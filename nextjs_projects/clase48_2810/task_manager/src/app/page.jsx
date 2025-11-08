import Container from "@/components/layout/Container";

const Home = () => {
  return (
    <Container>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-8">Bienvenido a tu sistema de tareas</p>
        <div className="rounded-lg shadow p-6">
          <p className="text-gray-500">Próximamente: estadísticas de tareas</p>
        </div>
      </div>
    </Container>
  );
};
export default Home;
