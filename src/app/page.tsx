import LandingLinks from "./ui/landing-page/landing-links";
import Footer from "./ui/landing-page/footer";
import DynamicImage from "./ui/global/dynamic-image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <DynamicImage
          src="/tree-of-truth.webp"
          alt="website logo that resembles a tree"
          landscape={[240, 240]}
          portrait={[80, 80]}
        />
        <LandingLinks />
      </main>
      <Footer />
    </div>
  );
}
