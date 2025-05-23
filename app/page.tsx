import Footer from "./components/footer/page";
import Header from "./components/header/page";
import HeroSection from "./components/heroSection/page";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
