import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";
import Main from "./_components/Main/Main";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
