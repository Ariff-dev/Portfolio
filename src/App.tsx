import { Navbar } from "./components";
import { Landing } from "./landing/Landing";
import { PrimaryLayout } from "./layout/PrimaryLayout";

function App() {
  return (
    <PrimaryLayout>
      <Navbar />
      <Landing />
    </PrimaryLayout>
  );
}

export default App;
