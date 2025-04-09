import React from "react";

const AcademicTimeline = () => {
  const experiences = [
    {
      year: "2022",
      title: "Baccalauréat STMG Spécialité marketing (mention bien)",
      institution: "Lycée Louis Majorelle, Toul",
      icon: "🎓",
    },
    {
      year: "2022 - 2023",
      title: "BUT Gestion des Entreprise et des Administrations (GEA)",
      institution: "I.U.T Nancy-Charlemagne, Nancy",
      icon: "🎓",
    },
    {
      year: "2023 - 2024",
      title: "BUT2 GEA option Gestion Entreprenariat et Management d’Activité",
      institution: "I.U.T Nancy-Charlemagne, Nancy",
      icon: "🎓",
    },
    {
      year: "2024 - 2025",
      title: "BUT3 GEA option Gestion Entreprenariat et Management d’Activité",
      institution: "I.U.T Nancy-Charlemagne, Nancy",
      icon: "🎓",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        Expériences Académiques
      </h2>

      <div className="relative border-l-2 border-[#bf677d] pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-9 top-1.5 w-6 h-6 rounded-full bg-[#bf677d] flex items-center justify-center text-white text-base shadow-md">
              {exp.icon}
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 group-hover:shadow-lg">
              <span className="text-sm text-gray-500">{exp.year}</span>
              <h3 className="text-xl font-semibold text-[#bf677d] mt-1">
                {exp.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{exp.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicTimeline;
