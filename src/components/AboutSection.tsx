import { Heart, Code, Users, Mail, Instagram, MessageCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 gradient-romantic">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 mb-6">
            <Code className="w-5 h-5 text-lavender-dark" />
            <span className="text-lavender-dark font-medium">
              About the Developers
            </span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Built with{" "}
            <Heart className="inline-block w-8 h-8 text-rose fill-rose animate-heartbeat" />{" "}
            by Level e¹˙⁰⁹⁸⁷
          </h2>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-lavender-light flex items-center justify-center">
                <Users className="w-6 h-6 text-lavender-dark" />
              </div>
            </div>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              CUK Commit is developed by{" "}
              <span className="font-semibold text-lavender-dark">
                The Group Who Must Not Be Named
              </span>{" "}
              with the vision of creating a safe, respectful, and meaningful
              dating experience exclusively for our campus.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              This platform is made{" "}
              <span className="text-gradient font-semibold">
                for students, by students
              </span>.
            </p>

            {/* Disclaimer */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground non-italic">
                Not affiliated officially with the university.
              </p>
            </div>

            {/* Contact Section */}
            <div className="pt-6 mt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-lavender-dark" />
                <p className="font-medium text-foreground">Contact Us</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:cukcommit@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-light text-lavender-dark font-medium hover:opacity-80 transition"
                >
                  <Mail className="w-4 h-4" />
                  Contact via Email
                </a>

                <a
                  href="https://instagram.com/cuk_commit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-light text-lavender-dark font-medium hover:opacity-80 transition"
                >
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
