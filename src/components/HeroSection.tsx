import { Button } from "@/components/ui/button";
import { Heart, Download } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import valentineBg from "@/assets/valentine-hero-bg.jpg";

// Build a URL for the APK asset so TypeScript won't require a custom module declaration
const apkUrl = new URL("../assets/cukCommit.apk", import.meta.url).href;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Valentine Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${valentineBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
      
      <FloatingHearts />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-lavender-light rounded-full blur-3xl opacity-40 animate-pulse-soft" />
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-rose-light rounded-full blur-3xl opacity-30 animate-pulse-soft" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center gap-2 mb-6">
            {/* optional heart icon: <Heart className="w-10 h-10 text-rose fill-rose animate-heartbeat" /> */}
            <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-foreground">CUK COMMIT</span>
          </div>
          
          {/* Tagline */}
          <p className="text-lavender-dark font-medium tracking-wider uppercase text-lg mb-5">
            &ldquo;From Campus to Forever&rdquo;
          </p>
          
          {/* Main Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 max-w-3xl mx-auto">
            Where Campus Crushes Turn Into{" "}
            <span className="text-gradient-strong">Commitments</span>{" "}
            <span className="inline-block animate-heartbeat">💕</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up-delayed">
            A private dating space exclusively for CUK students.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delayed animate-bounce" style={{ animationDelay: "0.4s" }}>
              <a href={apkUrl} download className="inline-block pulse-btn" aria-label="Download CUK Commit APK">
              <Button variant="hero" size="xl">
                <Download className="w-5 h-5" />
                Download the App
              </Button>
            </a>
            {/* <Button variant="soft" size="lg">
              Learn More
            </Button> */}
          </div>
        </div>
        
        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-lavender flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-lavender rounded-full animate-pulse" />
          </div>
        </div> */}
        
      </div>
    </section>
  );
};

export default HeroSection;
