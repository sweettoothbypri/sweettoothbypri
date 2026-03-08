import ProductImageGrid from "@/components/ProductImageGrid";
import cakesicle1 from "@/assets/cakesicle-1.jpeg";
import cakesicle2 from "@/assets/cakesicle-2.jpeg";
import cakesicle3 from "@/assets/cakesicle-3.jpeg";

const cakesicleImages = [
  { src: cakesicle1, alt: "Valentine themed pink cakesicles with hearts and red bows" },
  { src: cakesicle2, alt: "Elegant black chocolate cakesicles with gold leaf arranged in a circle" },
  { src: cakesicle3, alt: "Chocolate DAD cakesicles with blue and red sprinkles" },
];

const Cakesicles = () => (
  <div className="page-container">
    <h1 className="section-heading">
      Our <span className="text-gradient">Cakesicles</span>
    </h1>
    <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-10">
      Cake pops on a stick, coated in rich chocolate — a bite-sized delight!
    </p>
    <ProductImageGrid title="Cakesicle Collection" images={cakesicleImages} />
  </div>
);

export default Cakesicles;
