import React from "react";
import { Card } from "@/components/ui/card";

export default function ProfessionalExperiences() {
  const experiences = [
    {
      period: "Avril 2023 - Mai 2023",
      title: "Stage en marketing et management chez King Jouet",
      tasks: [
        "Accueillir, renseigner et conseiller les clients",
        "Préparer les commandes clients",
        "Gérer les stocks",
      ],
    },
    {
      period: "Avril 2024 - Juin 2024",
      title:
        "Stage en marketing et communication dans l’agence immobilière Tf immo",
      tasks: [
        "Conception et réalisation de flyers",
        "Estimation du prix de biens (immobiliers, commerciaux, etc.)",
        "Prospection de nouveaux clients",
      ],
    },
    {
      period: "Janvier 2025 - Avril 2025",
      title: "Stage en management et communication chez l’ADMR",
      tasks: [
        "Accueillir, informer et conseiller la clientèle",
        "Concevoir et réaliser des supports de communication (flyers)",
        "Élaborer des devis et des contrats",
        "Mettre en place et suivre les plannings",
        "Organiser et animer des réunions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-16 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Expériences <span className="text-[#bf677d]">Professionnelles</span>
        </h1>

        <div className="mt-16 relative border-l-2 border-[#bf677d] pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-[#bf677d] text-white flex items-center justify-center text-sm shadow">
                💼
              </div>
              <Card className="p-6 shadow-md rounded-2xl transition-all duration-300 group-hover:shadow-lg bg-white">
                <p className="text-sm text-gray-500">{exp.period}</p>
                <h3 className="text-lg font-semibold text-[#bf677d] mt-1">
                  {exp.title}
                </h3>
                <p className="mt-3 font-medium text-gray-700">Missions :</p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-600 space-y-1">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
