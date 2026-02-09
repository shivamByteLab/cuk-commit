import {
  Heart,
  Code,
  Users,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";
import abhaySingh from "@/assets/abhay.jpg";
import ayushTandon from "@/assets/ayushh.jpg";
import abhayDwivedi from "@/assets/abhayd.jpg";


/* ---------------- Developer Card ---------------- */
const DeveloperCard = ({ name, role, bio, image, github }) => {
  return (
    <div className="min-w-[280px] max-w-[280px] bg-card rounded-2xl p-6 shadow-card snap-center text-center">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-20 h-20 mx-auto rounded-full overflow-hidden bg-lavender-light mb-4 hover:scale-105 transition"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </a>


      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-lavender-dark mb-3">{role}</p>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {bio}
      </p>
    </div>
  );
};

/* ---------------- About Section ---------------- */
const AboutSection = () => {
  return (
    <section className="py-24 gradient-romantic">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Heading */}
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

          {/* Card Container */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">

            {/* Intro */}
            <p className="text-lg text-foreground leading-relaxed mb-8">
              CUK Commit is made{" "}
              <span className="text-gradient font-semibold">
                for students, by students
              </span>
              .
            </p>

            {/* Swipeable Cards */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-4 scrollbar-hide">
              <DeveloperCard
                name="Abhay Singh"
                role="Authentication & Backend"
                bio="Handles authentication and backend systems, ensuring secure and efficient data management."
                image={abhaySingh}
                github="https://github.com/Uni-Creator"
              />

              <DeveloperCard
                name="Ayush Tandon"
                role="UI / UX & Premium Features"
                bio="Designs intuitive UI/UX and Premium Feature Sections, creating a seamless user experience."
                image={ayushTandon}
                github="https://github.com/Droid-DevX"
              />

              <DeveloperCard
                name="Abhay Dwivedi"
                role="Frontend & Messaging Mechanics"
                bio="Builds the matching/messaging experience, crafting the core user interactions and interface."
                image={abhayDwivedi}
                github="https://github.com/abhaydwived"
              />
            </div>

            <p className="text-xs text-muted-foreground mt-4">
               
            </p>

            {/* Disclaimer */}
            <div className="pt-6 mt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Not affiliated officially with the university.
              </p>
            </div>

            {/* Contact */}
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
                  Email
                </a>

                <a
                  href="https://instagram.com/cuk_commit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-light text-lavender-dark font-medium hover:opacity-80 transition"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
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
