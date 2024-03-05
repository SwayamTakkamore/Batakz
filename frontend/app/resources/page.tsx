import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Book1 from "@/components/book1"; // Capitalized Book1
import Book2 from "@/components/book2"; // Capitalized Book2
import Contact from "@/components/contact"; // Capitalized Contact

export default function Home(): JSX.Element {
  return (
    <div style={{ backgroundColor: 'white'}}>
      <Navbar />
      <Book1 /> {/* Capitalized Book1 */}
      <Book2 /> {/* Capitalized Book2 */}
      <Contact /> {/* Capitalized Contact */}
      <Footer /> 
    </div>
  );
}