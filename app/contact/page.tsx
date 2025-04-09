import { ContactForm } from "@/components/forms/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <main className="bg-gradient-to-br from-[#f0e7db] to-[#d8dffa] min-h-screen w-full">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 justify-center pt-20 px-4 lg:px-0">
        <div className="flex flex-col gap-10 text-center justify-center">
          <p className="text-[#000000] text-lg font-medium">
            Vous avez une question, un projet à partager ou simplement envie
            d’échanger ? N’hésitez pas à me laisser un message via le formulaire
            ci-dessous. Je vous répondrai dans les plus brefs délais.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
