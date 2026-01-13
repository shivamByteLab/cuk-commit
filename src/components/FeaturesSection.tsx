import {
  Heart,
  Users,
  Gem,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState, MutableRefObject } from "react";

/* ------------------ FEATURES DATA ------------------ */

const features = [
  {
    icon: Heart,
    title: "Love",
    description: "Meaningful connections, not random swipes",
    color: "text-rose-500",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
    glow:
      "hover:shadow-[0_0_45px_rgba(244,63,94,0.7)] dark:hover:shadow-[0_0_55px_rgba(244,63,94,0.45)]",
  },
  {
    icon: Users,
    title: "Friendship",
    description: "Start slow, grow naturally",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    glow:
      "hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] dark:hover:shadow-[0_0_55px_rgba(168,85,247,0.45)]",
  },
  {
    icon: Gem,
    title: "Commitment",
    description: "Built for real relationships",
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    glow:
      "hover:shadow-[0_0_45px_rgba(236,72,153,0.7)] dark:hover:shadow-[0_0_55px_rgba(236,72,153,0.45)]",
  },
  {
    icon: GraduationCap,
    title: "Campus Only",
    description: "Verified CUK students only",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    glow:
      "hover:shadow-[0_0_45px_rgba(99,102,241,0.7)] dark:hover:shadow-[0_0_55px_rgba(99,102,241,0.45)]",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Encryption",
    description: "Your messages stay private",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    glow:
      "hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] dark:hover:shadow-[0_0_55px_rgba(16,185,129,0.45)]",
  },
];

/* ------------------ INTERSECTION OBSERVER HOOK ------------------ */

const useInView = (
  options: IntersectionObserverInit = {}
): [MutableRefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
};

/* ------------------ MAIN SECTION ------------------ */

const FeaturesSection = () => {
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why CUK COMMIT?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A dating experience designed with intention and care
          </p>
        </div>

        {/* FIRST ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {firstRow.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {secondRow.map((feature, index) => (
            <div key={feature.title} className="w-full md:w-1/2 lg:w-1/3">
              <FeatureCard
                feature={feature}
                index={index + 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------ FEATURE CARD ------------------ */

const FeatureCard = ({
  feature,
  index,
}: {
  feature: typeof features[number];
  index: number;
}) => {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`
        relative group text-center p-8 rounded-3xl
        bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md
        transition-all duration-700 ease-out
        min-h-[320px] flex flex-col justify-center
        hover:-translate-y-3 hover:scale-[1.03]
        shadow-lg dark:shadow-none
        ${feature.glow}

        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }
      `}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-white/10 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl
        ${feature.bgColor} mb-6 mx-auto transition-transform duration-300
        group-hover:scale-110`}
      >
        <feature.icon
          className={`w-8 h-8 ${feature.color} drop-shadow-md`}
        />
      </div>

      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
        {feature.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default FeaturesSection;
