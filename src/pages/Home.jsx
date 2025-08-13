import Header from "../components/home/Header.jsx";
import MainContent from "../components/home/MainContent.jsx";
function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden relative flex flex-col">
      <Header />
      <MainContent />
    </div>
  );
}

export default Home;
