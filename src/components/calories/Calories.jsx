// Importation des styles CSS spécifiques pour le composant
import './calories.css';

// Importation des icônes pour chaque type de donnée (calories, protéines, glucides, lipides)
import caloriesIcon from '../../assets/calories-icon.svg'; // Icône pour les calories
import proteinIcon from '../../assets/proteines-icon.svg'; // Icône pour les protéines
import carbsIcon from '../../assets/glucides-icon.svg'; // Icône pour les glucides
import fatIcon from '../../assets/lipides-icon.svg'; // Icône pour les lipides

// Définition du composant fonctionnel Calories
// Il reçoit une prop `data` contenant les données nutritionnelles
const Calories = ({ data }) => {
  return (
    // Conteneur principal pour toutes les vignettes
    <div className="vignettes">
      
      {/* Vignette pour les calories */}
      <div className="vignette">
        {/* Section pour l'icône */}
        <div className="vignette-image">
          {/* Fond coloré pour l'icône (stylisé avec des classes CSS spécifiques) */}
          <div className="background image-calories"></div>
          {/* Image de l'icône des calories */}
          <img alt="icon calories" className="icon" src={caloriesIcon} />
        </div>
        {/* Contenu textuel de la vignette */}
        <div className="vignette-content">
          {/* Affichage de la valeur des calories avec l'unité "kCal" */}
          <p className="vignette-number">{data.keyData.calorieCount}kCal</p>
          {/* Description de la donnée */}
          <p className="vignette-type">Calories</p>
        </div>
      </div>

      {/* Vignette pour les protéines */}
      <div className="vignette">
        <div className="vignette-image">
          <div className="background image-proteines"></div>
          <img alt="icon proteines" className="icon" src={proteinIcon} />
        </div>
        <div className="vignette-content">
          {/* Affichage de la quantité de protéines en grammes */}
          <p className="vignette-number">{data.keyData.proteinCount}g</p>
          <p className="vignette-type">Proteines</p>
        </div>
      </div>

      {/* Vignette pour les glucides */}
      <div className="vignette">
        <div className="vignette-image">
          <div className="background image-glucides"></div>
          <img alt="icon glucides" className="icon" src={carbsIcon} />
        </div>
        <div className="vignette-content">
          {/* Affichage de la quantité de glucides en grammes */}
          <p className="vignette-number">{data.keyData.carbohydrateCount}g</p>
          <p className="vignette-type">Glucides</p>
        </div>
      </div>

      {/* Vignette pour les lipides */}
      <div className="vignette">
        <div className="vignette-image">
          <div className="background image-lipides"></div>
          <img alt="icon lipides" className="icon" src={fatIcon} />
        </div>
        <div className="vignette-content">
          {/* Affichage de la quantité de lipides en grammes */}
          <p className="vignette-number">{data.keyData.lipidCount}g</p>
          <p className="vignette-type">Lipides</p>
        </div>
      </div>
    </div>
  );
};

// Exportation du composant pour qu'il puisse être utilisé ailleurs
export default Calories;
