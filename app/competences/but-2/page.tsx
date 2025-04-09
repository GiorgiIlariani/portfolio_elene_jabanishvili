import React from "react";
import { Card } from "@/components/ui/card";

export default function CompetencesOne() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-20 p-8">
      <div className="max-w-4xl flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#bf677d] font-bold text-[60px]">
            Mes compétences
          </h1>
          <h3 className="text-[#000000] font-bold text-[40px]">
            BUT 2 - Niveau 1 et 2
          </h3>
          <div className="text-[#bf677d] text-[30px]">
            Analyser les processus de l'organisation dans son environnement
            Niveau 1
          </div>
        </div>
        <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-pink-600">
              Environnement économique
            </h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Maîtrise des principales approches économiques à travers les
                différents courants de pensée
              </li>
              <li>
                Analyse des rôles et des interactions des acteurs économiques
              </li>
              <li>
                Capacité à construire un Tableau Économique d’Ensemble (TEE)
              </li>
              <li>Calcul de ratios et d’agrégats économiques clés</li>
              <li>
                Compréhension des mécanismes du marché, ainsi que de la
                dynamique de l’offre et de la demande
              </li>
            </ul>
          </Card>

          <Card className="bg-white shadow-lg p-6 rounded-2xl">
            <h2 className="text-xl font-bold text-pink-600">
              Management d’activités
            </h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Analyse de l’environnement interne et externe de l’entreprise à
                travers des outils stratégiques tels que le SWOT et PESTEL
              </li>
              <li>
                Études et analyses de la demande, incluant des approches
                quantitatives et qualitatives
              </li>
              <li>
                Maîtrise des différentes stratégies concurrentielles pour
                positionner l’entreprise sur le marché
              </li>
              <li>Connaissances des fondamentaux du marketing</li>
            </ul>
          </Card>
        </div>

        {/* Stylish Text Block */}
        <div className="bg-white shadow-lg p-8 rounded-2xl mt-8">
          <h2 className="text-xl font-bold text-pink-600 mb-4">
            Ressources humaines :
          </h2>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Maîtrise des différentes phases du processus de recrutement</li>
            <li>
              Capacité à rédiger des offres d’emploi claires et attractives,
              adaptées aux profils recherchés
            </li>
          </ul>

          <p className="text-gray-800 text-lg leading-relaxed my-4">
            Les SAÉ m'ont offert l'opportunité de mettre mes compétences en
            pratique, de les valider et de travailler en équipe en répartissant
            les tâches.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Dans le cadre de cette SAÉ, nous avons été chargés de réaliser une
            monographie d’entreprise. Cette mission impliquait une recherche
            approfondie et une présentation détaillée des différents secteurs de
            l’entreprise, notamment les ressources humaines. L’objectif
            principal était d’analyser et de comprendre l’organisation, ses
            activités, ainsi que son positionnement dans son environnement
            interne et externe.
          </p>
        </div>
      </div>
    </div>
  );
}
