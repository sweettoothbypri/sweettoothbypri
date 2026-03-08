import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Cakes", path: "/cakes" },
  { label: "Chocolates", path: "/chocolates" },
  { label: "Cupcakes", path: "/cupcakes" },
  { label: "Cakesicles", path: "/cakesicles" },
  { label: "Mousse", path: "/mousse" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex flex-col">
              <span className="font-script text-2xl md:text-3xl text-primary font-bold leading-tight">
                Sweet Tooth by Pri
              </span>
              <span className="font-body text-[10px] md:text-xs text-muted-foreground tracking-wide">
                Baking Studio in Barcelona
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary text-foreground"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium font-body transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-chocolate text-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-script text-2xl text-blush mb-3">Sweet Tooth by Pri</h3>
              <p className="text-warm-cream/80 font-body text-sm leading-relaxed">
                Exclusive, healthy & affordable sweet creations made with love.
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg mb-3 text-blush">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-warm-cream/80 hover:text-blush transition-colors text-sm font-body"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg mb-3 text-blush">Get in Touch</h4>
              <p className="text-warm-cream/80 font-body text-sm leading-relaxed">
                Scan our QR codes on the homepage to connect with us!
              </p>
            </div>
          </div>
          <div className="border-t border-warm-cream/20 mt-8 pt-6 text-center">
            <p className="text-warm-cream/60 text-xs font-body flex items-center justify-center gap-1">
              Made with <Heart size={12} className="text-primary" /> Sweet Tooth by Pri © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
