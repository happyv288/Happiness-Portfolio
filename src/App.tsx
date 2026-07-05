import ScrollProgress from "./components/ui/ScrollProgress";
import Home from "./pages/Home";
import BackgroundEffects from "./components/ui/BackgroundEffects";
import BackToTop from "./components/ui/BackToTop";

function App() {
  return (
    <>
      <ScrollProgress />
      <BackgroundEffects />
      <Home />

      <BackToTop />
    </>
  );
}

export default App;
