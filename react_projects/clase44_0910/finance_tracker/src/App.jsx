import Dashboard from "./pages/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

const Transactions = () => (
  <div className="text-2xl">📊 Página de Transacciones</div>
);
const Analytics = () => <div className="text-2xl">📈 Página de Analytics</div>;
const Settings = () => (
  <div className="text-2xl">⚙️ Página de Configuración</div>
);

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};

export default App;
