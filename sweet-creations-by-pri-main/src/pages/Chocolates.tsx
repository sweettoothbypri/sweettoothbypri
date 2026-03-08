import ProductImageGrid from "@/components/ProductImageGrid";
import chocolate1 from "@/assets/chocolate-1.jpeg";
import chocolate2 from "@/assets/chocolate-2.jpeg";
import chocolate3 from "@/assets/chocolate-3.jpeg";

const chocolateImages = [
  { src: chocolate1, alt: "Diwali themed chocolate crackers and sweets platter on slate board" },
  { src: chocolate2, alt: "Elegant dark chocolate bonbons arranged in a circle with pearl decorations" },
  { src: chocolate3, alt: "Assorted chocolate gift box with truffles, chocolate bar and heart-shaped pralines" },
];

const Chocolates = () => (
  <div className="page-container">
    <h1 className="section-heading">
      Our <span className="text-gradient">Chocolates</span>
    </h1>
    <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-10">
      Handcrafted chocolates made with premium ingredients and a whole lot of love.
    </p>
    <ProductImageGrid title="Chocolate Collection" images={chocolateImages} />
  </div>
);

export default Chocolates;
