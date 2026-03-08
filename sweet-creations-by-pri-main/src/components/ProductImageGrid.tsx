import { ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProductImageGridProps {
  title: string;
  description?: string;
  imageCount?: number;
  images?: { src: string; alt: string }[];
}

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div ref={ref} className="group rounded-xl overflow-hidden aspect-[4/5] bg-muted/30">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.07] group-active:scale-[1.07] ${isMobile && inView ? "scale-[1.07]" : ""}`}
      />
    </div>
  );
};

const ProductImageGrid = ({
  title,
  description,
  imageCount = 3,
  images,
}: ProductImageGridProps) => {
  const slots = images ?? Array.from({ length: imageCount }, (_, i) => ({
    src: "",
    alt: `${title} ${i + 1}`,
  }));

  return (
    <div className="mb-12 animate-fade-in">
      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-muted-foreground font-body mb-6">{description}</p>
      )}
      <div className="product-grid">
        {slots.map((img, i) => (
          <div key={i} className="group">
            {img.src ? (
              <ProductImage src={img.src} alt={img.alt} />
            ) : (
              <div className="image-placeholder">
                <div className="text-center space-y-2">
                  <ImageIcon size={32} className="mx-auto text-muted-foreground/50" />
                  <p className="text-sm font-body">{img.alt}</p>
                  <p className="text-xs text-muted-foreground/60">Upload image</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGrid;
