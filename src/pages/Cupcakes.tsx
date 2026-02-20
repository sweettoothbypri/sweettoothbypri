import ProductImageGrid from "@/components/ProductImageGrid";
import cupcake1 from "@/assets/cupcake-1.jpeg";
import cupcake2 from "@/assets/cupcake-2.jpeg";
import cupcake3 from "@/assets/cupcake-3.jpeg";

const cupcakeImages = [
  { src: cupcake1, alt: "Harry Potter themed chocolate cupcakes with house crest toppers" },
  { src: cupcake2, alt: "Chocolate rosette cupcakes with colorful confetti sprinkles" },
  { src: cupcake3, alt: "Frozen themed cupcakes with blue and white buttercream swirls" },
];

const Cupcakes = () => (
  <div className="page-container">
    <h1 className="section-heading">
      Our <span className="text-gradient">Cupcakes</span>
    </h1>
    <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-10">
      Perfectly portioned, beautifully decorated cupcakes for every occasion.
    </p>
    <ProductImageGrid title="Cupcake Collection" images={cupcakeImages} />
  </div>
);

export default Cupcakes;
