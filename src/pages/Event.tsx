import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Players from "../components/Player";
import Sidebar from "../components/Sidebar";

function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Players lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}

export default Event;
