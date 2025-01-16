// Importation des composants nécessaires depuis Recharts pour créer un graphique en barres
import { 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  Bar, 
  ResponsiveContainer 
} from "recharts";

// Importation des styles CSS spécifiques pour le composant
import './activity.css';

// Fonction personnalisée pour rendre la légende du graphique
const renderLegend = (props) => {
  const { payload } = props; // Récupération des éléments de la légende
  console.log(payload); // Debugging pour visualiser les données de la légende dans la console

  // Traduction des clés en labels lisibles
  const entries = {
    kilogram: 'Poids (kg)', // Légende pour le poids
    calories: 'Calories brûlées (kCal)' // Légende pour les calories
  };

  // Retourne une liste personnalisée pour la légende
  return (
    <ul className="legend">
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`} className={`${entry.dataKey}`}>
            {/* Icône de légende et label */}
            <div className="legend-icon"></div> {entries[entry.dataKey]}
          </li>
        ))
      }
    </ul>
  );
};

// Composant principal pour afficher l'activité quotidienne
const Activity = ({ data }) => {
  // Ajout d'un index à chaque session pour afficher le numéro du jour dans le graphique
  const sessions = data.sessions.map((d, idx) => ({ ...d, idx: idx + 1 }));

  return (
    <div className="activity-container">
      {/* Titre de la section */}
      <h3>Activité quotidienne</h3>

      {/* Conteneur responsive pour que le graphique s'adapte à l'écran */}
      <ResponsiveContainer width="100%" height="100%">
        {/* Définition du graphique en barres */}
        <BarChart width={730} height={250} data={sessions}>
          {/* Grille de fond avec des lignes en pointillés */}
          <CartesianGrid strokeDasharray="3 3" />
          
          {/* Axe X : affiche les index des jours */}
          <XAxis dataKey="idx" />

          {/* Axe Y gauche : valeurs pour les calories (caché ici avec `hide`) */}
          <YAxis dataKey="calories" orientation="left" yAxisId="left" hide />

          {/* Axe Y droit : valeurs pour les kilogrammes */}
          <YAxis dataKey="kilogram" orientation="right" yAxisId="right" />

          {/* Infobulle affichée au survol des barres */}
          <Tooltip />

          {/* Légende personnalisée avec la fonction `renderLegend` */}
          <Legend verticalAlign="top" align="right" content={renderLegend} />

          {/* Barre pour les kilogrammes avec un style défini */}
          <Bar 
            dataKey="kilogram" // Utilise les données de poids
            fill="#282D30" // Couleur de la barre (gris foncé)
            barSize={7} // Largeur des barres
            radius={[10, 10, 0, 0]} // Coins arrondis en haut
            yAxisId="right" // Associée à l'axe Y droit
          />

          {/* Barre pour les calories avec un style défini */}
          <Bar 
            dataKey="calories" // Utilise les données de calories
            fill="#E60000" // Couleur de la barre (rouge)
            barSize={7} // Largeur des barres
            radius={[10, 10, 0, 0]} // Coins arrondis en haut
            yAxisId="left" // Associée à l'axe Y gauche
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
