import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Task Manager",
  description: "Sistema de gestión de tareas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={"bg-gray-50 min-h-screen"}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
