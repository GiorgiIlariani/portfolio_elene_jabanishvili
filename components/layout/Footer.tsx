import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f0e7db] py-10 border-t border-[#bf677d]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 text-center">
        <h2 className="text-[#bf677d] text-4xl font-bold mb-6">ME CONTACTER</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-lg font-medium">
          <div className="flex items-center gap-2">
            <Mail className="text-[#bf677d] w-6 h-6" />
            <span>elene.jabanishvili4@etu.univ-lorraine.fr</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="text-[#bf677d] w-6 h-6" />
            <span>07 80 47 12 80</span>
          </div>

          <div className="flex items-center gap-2">
            <Linkedin className="text-[#bf677d] w-6 h-6" />
            <a
              href="https://www.linkedin.com/in/elene-jabanishvili-88a167257"
              target="_blank"
              className="hover:underline"
            >
              www.linkedin.com/in/elene-jabanishvili-88a167257
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="w-full bg-[#abb8c3] py-4">
      <div className="w-full  max-w-[1024px] mx-auto text-center">
        <p className="text-[#000000] font-medium">
          Copyright © 2025 | Réalisé par Francesca Rizal
        </p>
      </div>
    </div> */
}
