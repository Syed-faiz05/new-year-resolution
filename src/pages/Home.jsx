import PageSkeleton from "../components/PageSkeleton";
import Hero from "../components/Hero";
import Sections from "../components/Sections";

export default function Home() {
  return (
    <PageSkeleton>
      <Hero />
      <Sections />
    </PageSkeleton>
  );
}
