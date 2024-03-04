import Navbar from "@/components/navbar";
import Faram from "@/components/faram";
import Footer from "@/components/footer";

export default function Home(): JSX.Element {
  return (
    <div style={{ backgroundColor: 'white'}}>
      <Navbar />
      <Faram />
      <Footer /> 
    </div>
  );
}