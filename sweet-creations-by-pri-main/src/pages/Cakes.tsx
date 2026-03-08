import { useState } from "react";
import ProductImageGrid from "@/components/ProductImageGrid";
import classicCake1 from "@/assets/classic-cake-1.jpeg";
import classicCake2 from "@/assets/classic-cake-2.jpeg";
import classicCake3 from "@/assets/classic-cake-3.jpeg";
import modernCake1 from "@/assets/modern-cake-1.jpeg";
import modernCake2 from "@/assets/modern-cake-2.jpeg";
import modernCake3 from "@/assets/modern-cake-3.jpeg";
import childrenCake1 from "@/assets/children-cake-1.jpeg";
import childrenCake2 from "@/assets/children-cake-2.jpeg";
import childrenCake3 from "@/assets/children-cake-3.jpeg";

const themes = [
  {
    name: "Classic",
    description: "Timeless elegance for every celebration",
    images: [
      { src: classicCake1, alt: "65th birthday celebration cake with gold topper and pink flowers" },
      { src: classicCake2, alt: "Heart-shaped red and white birthday cake with vinyl records" },
      { src: classicCake3, alt: "Art deco chocolate cake with floral topper on cake stand" },
    ],
  },
  {
    name: "Modern",
    description: "Contemporary designs with a creative twist",
    images: [
      { src: modernCake1, alt: "Gaming themed 3-tier birthday cake with Level 10 Unlocked topper" },
      { src: modernCake2, alt: "Pink flamingo two-tier cake with roses" },
      { src: modernCake3, alt: "Chocolate cake with intricate gold lattice decoration" },
    ],
  },
  {
    name: "Children",
    description: "Fun, colourful cakes that kids absolutely love",
    images: [
      { src: childrenCake1, alt: "Super Mario themed cake with character toppers" },
      { src: childrenCake2, alt: "Vehicle themed birthday cake with school bus and fire truck" },
      { src: childrenCake3, alt: "Mickey and Minnie Mouse two-tier birthday cake" },
    ],
  },
];

const flavors = [
  {
    category: "Fruits",
    items: ["Mango", "Mix Fruits", "Strawberry", "Pineapple", "Tutti Fruitti", "Blueberry"],
  },
  {
    category: "Indian Mithai",
    items: ["Rasmalai", "Gulab Jamun", "Motichur", "Gajar Halwa", "Rajbhog", "Mawa"],
  },
  {
    category: "Classic",
    items: ["Black Forest", "Rose Gulkand", "Vanilla", "Chocolate Mousse", "Red Velvet", "Blue Velvet", "Chocolate Strawberry"],
  },
  {
    category: "Exotic",
    items: ["Cotton Candy", "Bubble Gum", "Chai Masala", "Pani Puri", "Death by Chocolate", "Piña Colada", "Paan Masala", "Kulfi Falooda"],
  },
];

const Cakes = () => {
  const [tab, setTab] = useState<"themes" | "flavors">("themes");

  return (
    <div className="page-container">
      <h1 className="section-heading">
        Our <span className="text-gradient">Cakes</span>
      </h1>

      {/* Tab switcher */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-secondary rounded-xl p-1">
          <button
            onClick={() => setTab("themes")}
            className={`px-6 py-2.5 rounded-lg text-sm font-body font-semibold transition-all ${
              tab === "themes"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Cake Themes
          </button>
          <button
            onClick={() => setTab("flavors")}
            className={`px-6 py-2.5 rounded-lg text-sm font-body font-semibold transition-all ${
              tab === "flavors"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Cake Flavours
          </button>
        </div>
      </div>

      {tab === "themes" && (
        <div className="animate-fade-in">
          {themes.map((theme) => (
            <ProductImageGrid
              key={theme.name}
              title={theme.name}
              description={theme.description}
              images={theme.images}
            />
          ))}
        </div>
      )}

      {tab === "flavors" && (
        <div className="animate-fade-in space-y-10">
          {flavors.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="bg-card border border-border rounded-xl px-4 py-3 text-center font-body text-sm hover:bg-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cakes;
