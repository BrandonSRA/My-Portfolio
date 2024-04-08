import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";

export default function HomePages() {
  return (
    <>
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
