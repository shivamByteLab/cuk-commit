import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Download, Heart, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const apkUrl =
  "https://github.com/CUK-COMMIT/app.cukcommit/releases/download/v1.0.0/cuk-commit_v1.0.0.apk";

const AppPreviewSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  // 🔢 DOWNLOAD COUNTER STATE
  const [downloads, setDownloads] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.35) {
          setOpen(true);
        } else if (entry.intersectionRatio < 0.15) {
          setOpen(false);
        }
      },
      {
        threshold: [0.15, 0.35],
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ STEP 9: LOAD GLOBAL COUNT
  useEffect(() => {
    const loadCount = async () => {
      const { data, error } = await supabase
        .from("downloads")
        .select("count")
        .eq("id", "apk")
        .single();

      if (!error && data) {
        setDownloads(data.count);
      }
    };

    loadCount();
  }, []);

  // ✅ STEP 9: INCREMENT ON DOWNLOAD CLICK
  const handleDownload = async () => {
    const { data, error } = await supabase.rpc("increment_download");

    if (!error && data !== null) {
      setDownloads(data);
    }
  };

  return (
    <section id="app-preview" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience <span className="text-gradient-strong">CUK COMMIT</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A beautiful app designed for meaningful connections
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          {/* PHONE PREVIEW */}
          <div
            ref={containerRef}
            className={`relative flex items-center justify-center ${
              open ? "animate-open" : ""
            }`}
          >
            <div className="absolute inset-0 bg-lavender-light/50 blur-3xl rounded-full scale-150" />

            {/* CENTER PHONE */}
            <div className="relative z-20 bg-card rounded-[3rem] p-3 shadow-card border-8 border-foreground/5 phone-center">
              <div className="w-56 h-[480px] rounded-[2.5rem] gradient-romantic flex flex-col items-center justify-center overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-rose-light mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-rose fill-rose-light" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Ananya
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Mathematics & Computing
                  </p>
                  <p className="text-xs text-lavender-dark">
                    2nd Year • CUK
                  </p>

                  <div className="flex gap-3 mt-6 justify-center">
                    <button className="w-14 h-14 rounded-full bg-card shadow-soft flex items-center justify-center hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-lavender" />
                    </button>
                    <button className="w-14 h-14 rounded-full gradient-accent shadow-soft flex items-center justify-center hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-card shadow-soft flex items-center justify-center hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6 text-rose" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT PHONE */}
            <div className="absolute top-8 z-10 bg-card rounded-[3rem] p-2 shadow-card border-4 border-foreground/5 phone-left">
              <div className="w-44 h-[360px] rounded-[2.5rem] bg-lavender-light" />
            </div>

            {/* RIGHT PHONE */}
            <div className="absolute top-8 z-10 bg-card rounded-[3rem] p-2 shadow-card border-4 border-foreground/5 phone-right">
              <div className="w-44 h-[360px] rounded-[2.5rem] bg-rose-light" />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="text-center lg:text-left max-w-md">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Find Your Perfect Match
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Swipe through verified CUK profiles, connect with fellow students,
              and build meaningful relationships that last beyond campus.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-light flex items-center justify-center">
                  <Heart className="w-3 h-3 text-rose" />
                </div>
                <span className="text-foreground">
                  Verified student profiles
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-lavender-light flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-lavender-dark" />
                </div>
                <span className="text-foreground">
                  Private & secure messaging
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-light flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-rose-dark" />
                </div>
                <span className="text-foreground">
                  Smart compatibility matching
                </span>
              </li>
            </ul>

            <div className="flex flex-col items-center lg:items-start gap-3">
              {/* ✅ STEP 9: ATTACH HANDLER */}
              <a href={apkUrl} download className="inline-block" onClick={handleDownload}>
                <Button variant="hero" size="lg" className="gap-1 group">
                  <img
                    src="/android-logo.png"
                    alt="Android"
                    className="w-7 h-7 ml-2 filter brightness-0 invert"
                  />
                  Get the App
                </Button>
              </a>

              {/* ✅ STEP 9: SHOW COUNTER UI */}
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Download className="w-4 h-4 text-lavender-dark" />
                <span>
                  <span className="font-semibold text-foreground">
                    {downloads}
                  </span>{" "}
                  downloads
                </span>
              </p>

              <p className="text-xs md:text-sm text-muted-foreground italic">
                iOS app currently under development. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
