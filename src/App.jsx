import categories from "./categories.json";
import Directory from "./components/directory/directory.component";

function App() {
  return <Directory categories={categories} />;
}

export default App;
