import ExampleProduct from "@/components/exampleproduct/ExampleProduct";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import MarqueData from "@/components/Marque/MarqueData";
import Newsletter from "@/components/newsletter/NewsLetter";




export default function Page() {
  return (
    <main className="w-full ">
      <HeroBanner />
      <MarqueData/>
      <ExampleProduct/>

      <Newsletter/>
    </main>
  );
}