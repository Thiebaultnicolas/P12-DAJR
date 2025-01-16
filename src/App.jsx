// Importation du fichier CSS pour appliquer les styles à l'application
import './App.css';

// Importation du composant Outlet de react-router-dom, qui permet de rendre les composants enfants des routes définies
import { Outlet } from 'react-router-dom';

// Importation des ressources (images) utilisées dans l'application, comme le logo et les icônes
import logo from './assets/Logo.sportsee.png'; // Chemin vers le logo de l'application
import icon1 from './assets/icon1.png'; // Icône 1
import icon2 from './assets/icon2.png'; // Icône 2
import icon3 from './assets/icon3.png'; // Icône 3
import icon4 from './assets/icon4.png'; // Icône 4

// Définition du composant fonctionnel App, qui représente l'application principale
function App() {
  return (
    <>
      {/* En-tête de l'application */}
      <header className="header">
        {/* Conteneur du logo */}
        <div className="logo-container">
          {/* Affichage de l'image du logo avec une classe CSS pour le style */}
          <img src={logo} alt="SportSee logo" className="logo" />
          {/* Nom de l'application affiché à côté du logo */}
          <span>SportSee</span>
        </div>
        {/* Navigation principale avec des liens */}
        <nav className="nav-links">
          {/* Liens de navigation qui redirigent vers différentes pages */}
          <a href="/">Accueil</a>
          <a href="/profil">Profil</a>
          <a href="/reglage">Réglage</a>
          <a href="/communaute">Communauté</a>
        </nav>
      </header>

      {/* Contenu principal de l'application */}
      <div className="app">
        {/* Barre de navigation latérale */}
        <nav className="side-nav">
          {/* Chaque élément de la barre latérale contient une icône */}
          <div className="nav-item">
            <img src={icon1} alt="Icon 1" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={icon2} alt="Icon 2" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={icon3} alt="Icon 3" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={icon4} alt="Icon 4" className="nav-icon" />
          </div>
        </nav>

        {/* Section principale où le contenu des routes définies sera affiché */}
        <main className="content">
          {/* Outlet est utilisé ici pour afficher le composant correspondant à la route actuelle */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

// Exportation du composant App pour pouvoir l'utiliser dans d'autres fichiers
export default App;
