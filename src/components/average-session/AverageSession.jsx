// Importation des composants nécessaires depuis Recharts pour créer un graphique linéaire
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Text,
} from "recharts";

// Importation des styles spécifiques au composant
import "./average-session.css";

// Définition du composant fonctionnel AverageSession
const AverageSession = ({ data }) => {
  // Conversion des jours en abréviations
  const days = {
    1: "L", // Lundi
    2: "M", // Mardi
    3: "M", // Mercredi
    4: "J", // Jeudi
    5: "V", // Vendredi
    6: "S", // Samedi
    7: "D", // Dimanche
  };

  // Définition d'un tooltip personnalisé pour afficher la durée de session
  const CustomTooltip = ({ active, payload }) => {
    // Le tooltip s'affiche uniquement si "active" est vrai et que les données sont disponibles
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          {/* Affiche la durée de la session en minutes */}
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null; // Pas de tooltip sinon
  };

  return (
    // Conteneur principal pour le composant AverageSession
    <div className="average-session-container">
      {/* Titre de la section */}
      <h3 className="average-session-title">Durée moyenne des sessions</h3>

      {/* Conteneur responsive pour s'adapter à la taille du parent */}
      <ResponsiveContainer width="100%" height="100%">
        {/* Définition du graphique linéaire */}
        <LineChart
          height={263} // Hauteur du graphique
          data={data.sessions} // Données des sessions
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Définition d'un dégradé pour la couleur de la ligne */}
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#FFFFFF67" /> {/* Début du dégradé */}
              <stop offset="80%" stopColor="#FFF" /> {/* Fin du dégradé */}
            </linearGradient>
          </defs>

          {/* Axe X configuré avec les jours de la semaine */}
          <XAxis
            dataKey={(e) => days[e.day]} // Convertit les jours (1-7) en abréviations
            axisLine={false} // Pas de ligne pour l'axe
            tickLine={false} // Pas de petits traits pour les ticks
            className={"days"} // Classe CSS pour styliser les jours
            tick={{ fill: "#FFF", opacity: 0.5 }} // Couleur et opacité des labels
          />

          {/* Axe Y caché, utilisé uniquement pour adapter les valeurs */}
          <YAxis domain={["dataMin - 10", "dataMax + 30"]} hide />

          {/* Tooltip personnalisé */}
          <Tooltip content={<CustomTooltip />} />

          {/* Ligne principale du graphique */}
          <Line
            type="natural" // Type de courbe lissée
            dataKey="sessionLength" // Clé pour extraire la durée des sessions
            stroke="url(#colorUv)" // Couleur avec le dégradé défini plus haut
            activeDot={{ r: 3 }} // Taille des points actifs sur la courbe
            dot={false} // Pas de points par défaut
            strokeWidth={2} // Épaisseur de la ligne
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSession;
