// Importation des modules nécessaires de React
import React from 'react';

// Importation des composants graphiques de Recharts
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

// Importation des styles CSS spécifiques au composant
import './Performance.css';

const Performance = () => {
  // Définition des données pour le graphique Radar
  const characteristic = [
    { subject: 'Intensité', A: 55, B: 110, fullMark: 150 }, // Exemple d'intensité
    { subject: 'Vitesse', A: 125, B: 130, fullMark: 150 },  // Exemple de vitesse
    { subject: 'Force', A: 95, B: 130, fullMark: 150 },     // Exemple de force
    { subject: 'Endurance', A: 120, B: 100, fullMark: 150 },// Exemple d'endurance
    { subject: 'Energie', A: 115, B: 90, fullMark: 150 },   // Exemple d'énergie
    { subject: 'Cardio', A: 85, B: 85, fullMark: 150 },     // Exemple de cardio
  ];

  // Fonction pour personnaliser les labels autour du graphique
  const renderCustomLabel = ({ x, y, payload }) => {
    if (payload.value === 'Intensité') {
      // Label spécifique pour 'Intensité'
      return (
        <text
          x={x}
          y={y - 4} // Ajuste la position verticale
          textAnchor="middle" // Centrer le texte horizontalement
          fill="white" // Couleur du texte
          style={{ fontSize: '11px', fontWeight: 'bold' }} // Style du texte
        >
          {payload.value}
        </text>
      );
    } else if (payload.value === 'Endurance') {
      // Label spécifique pour 'Endurance'
      return (
        <text
          x={x}
          y={y + 10} // Ajuste la position verticale
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '11px', fontWeight: 'bold' }}
        >
          {payload.value}
        </text>
      );
    } else if (['Cardio', 'Energie'].includes(payload.value)) {
      // Labels pour 'Cardio' et 'Energie'
      return (
        <text
          x={x - 18} // Ajuste la position horizontale
          y={y + 5}
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '11px', fontWeight: 'bold' }}
        >
          {payload.value}
        </text>
      );
    } else if (['Vitesse', 'Force'].includes(payload.value)) {
      // Labels pour 'Vitesse' et 'Force'
      return (
        <text
          x={x + 15} // Ajuste la position horizontale
          y={y + 3}
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '11px', fontWeight: 'bold' }}
        >
          {payload.value}
        </text>
      );
    }
    return null; // Pas de rendu pour les autres cas
  };

  // Rendu du composant
  return (
    <div className="performance-container"> {/* Conteneur principal avec styles CSS */}
      <ResponsiveContainer width="100%" height="100%"> {/* Conteneur responsive pour le graphique */}
        <RadarChart
          cx="50%" // Position horizontale du centre
          cy="50%" // Position verticale du centre
          outerRadius="80%" // Rayon extérieur à 80% de la taille disponible
          data={characteristic} // Données pour le graphique
        >
          <PolarGrid radialLines={false} className="polar-grid" /> {/* Grille avec lignes concentriques, sans lignes radiales */}
          <PolarAngleAxis
            dataKey="subject" // Utilise la clé "subject" pour les labels
            tickLine={false} // Pas de petits traits pour les ticks
            tick={renderCustomLabel} // Utilise la fonction de label personnalisé
          />
          <PolarRadiusAxis tick={false} axisLine={false} /> {/* Supprime les ticks et la ligne radiale */}
          <Radar
            name="Performance" // Nom des données affiché dans les tooltips
            dataKey="A" // Utilise les valeurs de la clé "A" pour dessiner le radar
            className="radar-chart" // Styles CSS personnalisés
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
