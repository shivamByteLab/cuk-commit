import { Heart } from "lucide-react";

const ValentineVibeSection = () => {
  return (
    <section className="py-24 gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Heart className="w-32 h-32 text-rose fill-rose" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Heart className="w-24 h-24 text-lavender fill-lavender" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-10 h-10 text-rose fill-rose mx-auto mb-8 animate-heartbeat" />
          
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed not-italic">
            "Some stories begin in classrooms,
            <br />
            some in libraries,
            <br />
            and some… in{" "}
            <span className="text-gradient font-semibold not-italic">hearts</span>{" "}
            <span className="inline-block animate-pulse">💞</span>"
          </blockquote>
          
          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-lavender rounded-full" />
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <div className="w-12 h-0.5 bg-lavender rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValentineVibeSection;
