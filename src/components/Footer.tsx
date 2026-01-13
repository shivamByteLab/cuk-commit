import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-rose fill-rose" />
            <span className="text-xl font-bold">CUK COMMIT
            </span>
            <Heart className="w-6 h-6 text-rose fill-rose" />
          </div>
          
          {/* Tagline */}
          <p className="text-primary-foreground/80 mb-6">
            Campus Love, Real Connections
          </p>
          
          {/* Links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
  href="/privacy_policy.html"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
>
  Privacy Policy
</a>


            <span className="text-primary-foreground/30">|</span>
            <a
  href="/terms_condition.html"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
>
  Terms & Conditions
</a>

          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm">
              © 2026 CUK COMMIT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
