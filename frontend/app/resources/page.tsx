import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Articles from "@/components/articles";
import Steps from "@/components/steps";
import Team from "@/components/ourteam";
import Footer from "@/components/footer";
import Book1 from "@/components/book1"; // Capitalized Book1
import Book2 from "@/components/book2"; // Capitalized Book2

export default function Home(): JSX.Element {
  return (
    <div style={{ backgroundColor: 'white'}}>
      <Navbar />
      <Book1 /> {/* Capitalized Book1 */}
      <Book2 /> {/* Capitalized Book2 */}
      <Footer /> 
    </div>
  );
}
