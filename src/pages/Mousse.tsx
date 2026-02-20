import ProductImageGrid from "@/components/ProductImageGrid";
import mousse1 from "@/assets/mousse-1.jpeg";
import mousse2 from "@/assets/mousse-2.jpeg";
import mousse3 from "@/assets/mousse-3.jpeg";

const mousseImages = [
  { src: mousse1, alt: "Chocolate mousse cups with gold decorations and chocolate swirl topping" },
  { src: mousse2, alt: "Layered chocolate and cream mousse in square dessert cups" },
  { src: mousse3, alt: "Mango mousse cups topped with cream swirls and fruit pieces" },
];

const Mousse = () => (
  <div className="page-container">
    <h1 className="section-heading">
      Our <span className="text-gradient">Mousse</span>
    </h1>
    <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-10">
      Light, airy, and absolutely heavenly mousse in irresistible flavours.
    </p>
    <ProductImageGrid title="Mousse Collection" images={mousseImages} />
  </div>
);

export default Mousse;
