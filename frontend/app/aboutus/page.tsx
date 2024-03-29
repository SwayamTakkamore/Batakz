import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Articles from "@/components/articles";
import Steps from "@/components/steps"
import Team from "@/components/ourteam";
import Footer from "@/components/footer";

export default function Home(): JSX.Element {
  return (
    <div style={{ backgroundColor: 'white'}}>
      <Navbar />
      <Team />
    </div>
  );
}
