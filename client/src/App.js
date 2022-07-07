import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className=" bg-[#3AAFA9]">
      <NavBar />
      <Dashboard />
      <Footer />
    </div>
  );
}
