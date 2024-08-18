import Header from "./landing/Header";
import About from "./landing/About";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <About />
    </main>
  );
}
