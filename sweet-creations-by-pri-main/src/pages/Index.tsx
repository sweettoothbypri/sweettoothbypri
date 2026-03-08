import { Heart, Sparkles, Leaf, Phone, Instagram, Globe } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import priPhoto from "@/assets/pri-photo.jpeg";
import { QRCodeSVG } from "qrcode.react";

const values = [
  {
    icon: Heart,
    title: "Exclusive",
    desc: "Make your moments special with an exclusive creation crafted to match your vision and occasion.",
  },
  {
    icon: Leaf,
    title: "Healthy & 100% Eggless",
    desc: "All our creations are 100% eggless — made with wholesome ingredients for guilt-free indulgence everyone can enjoy.",
  },
  {
    icon: Sparkles,
    title: "Affordable",
    desc: "Beautiful, delicious treats that don't break the bank.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Video Banner */}
      <VideoCarousel />

      {/* Mission / Values */}
      <section className="page-container">
        <h2 className="section-heading">
          Our <span className="text-gradient">Values</span>
        </h2>
        <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-12">
          At Sweet Tooth by Pri, we believe that every celebration deserves something sweet, 
          exclusive, and made with care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow animate-fade-in-up"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Profile */}
      <section className="bg-secondary/50">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-card border-4 border-blush overflow-hidden shadow-lg">
                <img
                  src={priPhoto}
                  alt="Priyanka, founder of Sweet Tooth by Pri, with a vehicle themed birthday cake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About text */}
            <div className="animate-fade-in">
              <h2 className="font-script text-3xl md:text-4xl text-primary mb-4">Meet Pri</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Hi! I'm Priyanka — the heart and hands behind Sweet Tooth by Pri. 
                  Baking has always been my way of spreading happiness, one sweet treat at a time.
                </p>
                <p>
                  SweetToothByPri is a baking studio in Barcelona, crafting fresh cakes, cupcakes, cakesicles, mousses, and handmade chocolates. Each dessert is made with love and premium ingredients, perfectly tailored to your vision for celebrations or simply as a sweet treat any day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / QR Codes */}
      <section className="page-container">
        <h2 className="section-heading">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto mb-12">
          Scan a QR code below to connect with us instantly!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {/* WhatsApp QR */}
          <div className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">Order on WhatsApp</h3>
            <div className="bg-background rounded-xl p-3 inline-block mb-3">
              <QRCodeSVG
                value="https://wa.me/34666944838"
                size={140}
                bgColor="transparent"
                fgColor="hsl(20, 25%, 15%)"
              />
            </div>
          </div>

          {/* Instagram QR */}
          <div className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">Follow on Instagram</h3>
            <div className="bg-background rounded-xl p-3 inline-block mb-3">
              <QRCodeSVG
                value="https://www.instagram.com/sweettoothby_pri?igsh=eWRqNTdrYWkxNWVy&utm_source=qr"
                size={140}
                bgColor="transparent"
                fgColor="hsl(20, 25%, 15%)"
              />
            </div>
            </div>

          {/* Website QR */}
          <div className="bg-card rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">Visit Website</h3>
            <div className="bg-background rounded-xl p-3 inline-block mb-3">
              <QRCodeSVG
                value="https://sweettoothbypri.com/"
                size={140}
                bgColor="transparent"
                fgColor="hsl(20, 25%, 15%)"
              />
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
