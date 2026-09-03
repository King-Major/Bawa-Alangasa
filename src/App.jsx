import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Discography from "./components/Discography";
import ClarityRoom from "./components/ClarityRoom";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-night text-parchment font-body">
      <Nav />
      <main>
        <Hero />
        <Biography />
        <Discography />
        <ClarityRoom />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
