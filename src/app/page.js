import ExampleProduct from "@/components/exampleproduct/ExampleProduct";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Newsletter from "@/components/newsletter/NewsLetter";




export default function Page() {
  return (
    <main className="w-full ">
      <HeroBanner />
      <ExampleProduct/>
      <Newsletter/>
    </main>
  );
}