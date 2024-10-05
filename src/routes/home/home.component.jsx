import categories from "../../categories.json";
import Directory from "../../components/directory/directory.component";

function Home() {
  return <Directory categories={categories} />;
}

export default Home;
