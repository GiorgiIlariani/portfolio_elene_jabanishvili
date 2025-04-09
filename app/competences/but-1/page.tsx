import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, FolderCog, PiggyBank } from "lucide-react";

export default function CompetencesOne() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-20 p-6">
      <div className="max-w-5xl w-full flex flex-col gap-10">
        <div className="text-center space-y-4">
          <h1 className="text-[#bf677d] font-bold text-5xl">Mes compétences</h1>
          <h3 className="text-3xl font-bold text-black">BUT 1 - Niveau 1</h3>
          <p className="text-xl text-gray-800">
            Analyser les processus{" "}
            <span className="text-[#bf677d]">de l'organisation</span> dans son{" "}
            <span className="text-[#bf677d]">environnement</span>
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-2">
            Les SAÉ m'ont offert l'opportunité de mettre mes compétences en
            pratique, de les valider et de travailler en équipe en répartissant
            les tâches.
          </p>
        </div>

        <Card className="p-6 rounded-2xl shadow-md bg-white space-y-6">
          <div className="flex items-center gap-4">
            <GraduationCap className="text-pink-500 w-8 h-8" />
            <h2 className="text-2xl font-bold text-pink-600">
              SAÉ - Situer une organisation dans son environnement
            </h2>
          </div>
          <p className="text-gray-700">
            Nous avons réalisé une monographie d’entreprise, analysé les
            ressources humaines et étudié l’organisation dans son environnement
            interne et externe.
          </p>
          <h3 className="text-lg font-semibold">
            Piloter les relations avec les parties prenantes
          </h3>
        </Card>

        <Card className="p-6 rounded-2xl shadow-md bg-white space-y-6">
          <div className="flex items-center gap-4">
            <FolderCog className="text-green-500 w-8 h-8" />
            <h2 className="text-2xl font-bold text-pink-600">
              SAÉ - Construire une posture professionnelle
            </h2>
          </div>
          <p className="text-gray-700">
            Création d’une conférence scientifique fictive en équipe :
            planification, discours, gestion de projet et communication
            professionnelle.
          </p>
        </Card>

        <Card className="p-6 rounded-2xl shadow-md bg-white">
          <div className="flex items-center gap-4 mb-4">
            <Users className="text-blue-500 w-8 h-8" />
            <h2 className="text-2xl font-bold text-pink-600">
              Psychologie sociale
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Compréhension de l'importance de la psychologie sociale dans les
              organisations
            </li>
            <li>Analyse des influences sociales et de leurs effets</li>
            <li>Étude des comportements en groupe et des émotions</li>
            <li>Changements de comportement et engagement</li>
          </ul>
        </Card>

        <Card className="p-6 rounded-2xl shadow-md bg-white">
          <div className="flex items-center gap-4 mb-4">
            <FolderCog className="text-yellow-500 w-8 h-8" />
            <h2 className="text-2xl font-bold text-pink-600">
              Gestion de projet
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Planification avec diagramme de Gantt</li>
            <li>Gestion des coûts</li>
            <li>Stratégies de gestion des risques</li>
          </ul>
        </Card>

        <Card className="p-6 rounded-2xl shadow-md bg-white">
          <div className="flex items-center gap-4 mb-4">
            <Users className="text-purple-500 w-8 h-8" />
            <h2 className="text-2xl font-bold text-pink-600">
              Expression et communication
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Rédaction professionnelle (courriers, mails)</li>
            <li>Organisation et structuration de l’information</li>
          </ul>
        </Card>

        <Card className="p-6 rounded-2xl shadow-md bg-white">
          <div className="flex items-center gap-4 mb-4">
            <PiggyBank className="text-emerald-500 w-8 h-8" />
            <h2 className="text-2xl font-bold text-pink-600">
              Comptabilité et Finance
            </h2>
          </div>
          <h3 className="text-lg font-semibold text-black mb-2">
            SAÉ - Mise en œuvre d'une organisation comptable et fiscale
          </h3>
          <p className="text-gray-700 mb-4">
            Enregistrement des factures dans un journal, création du grand
            livre, et application pratique des notions de comptabilité.
          </p>
          <h4 className="font-semibold">Comptabilité</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Journal comptable et grand livre</li>
          </ul>
          <h4 className="font-semibold">Finance</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Analyse de données chiffrées</li>
          </ul>
          <h4 className="font-semibold">Fiscalité</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Calcul du revenu net salarial</li>
            <li>Analyse des revenus fonciers</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
