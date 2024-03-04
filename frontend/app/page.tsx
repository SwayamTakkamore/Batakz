import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Articles from "@/components/articles";
import Steps from "@/components/steps"
import Footer from "@/components/footer";
import Faram from "@/components/questions";

export default function Home(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Hero />
      <Articles />
      <Steps />
      <Footer />
    </div>
  );
}
