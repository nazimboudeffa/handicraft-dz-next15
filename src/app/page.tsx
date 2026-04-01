import ProductListings from "@/components/ProductListings";
import { products } from "@/lib/products-list";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <section className="mb-8 mt-6 rounded-xl bg-gradient-to-r from-stone-50 to-amber-50/50 border border-stone-200 px-6 py-8 text-center">
        <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">
          Votre boutique en ligne pour les produits d&apos;artisanat algérien.
        </h1>
        <p className="mt-3 text-sm text-stone-700 md:text-base">
          Disponibles directement à l&apos;Aéroport d&apos;Alger{" "}
          <a
            href="https://www.facebook.com/ArtAndHandicraft"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-700 underline decoration-2 underline-offset-4 transition hover:text-amber-800"
          >
            Plus d&apos;infos
          </a>
        </p>
      </section>
      <ProductListings products={products} />      
    </div>
  );
}
