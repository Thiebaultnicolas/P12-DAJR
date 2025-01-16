// Importation de StrictMode depuis React, utilisé pour détecter des problèmes potentiels dans l'application
import { StrictMode } from 'react';

// Importation de createRoot, qui sert à créer le point d'entrée React dans le DOM
import { createRoot } from 'react-dom/client';

// Importation du fichier CSS global pour appliquer des styles à l'ensemble de l'application
import './index.css';

// Importation du composant principal App
import App from './App.jsx';

// Importation des outils de routing pour gérer la navigation dans l'application
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importation du composant Dashboard, une page affichée dans l'application
import Dashboard from './pages/dashboard/Dashboard.jsx';

// Création du routeur avec les différentes routes de l'application
const router = createBrowserRouter([
  {
    // Définition de la route racine ("/"), où le composant App sera affiché
    path: "/",
    element: <App />,
    // Définition des routes enfants, affichées dans l'élément <Outlet /> du composant App
    children: [
      {
        // Route dynamique, où ":id" est un paramètre pour identifier un utilisateur spécifique
        path: '/users/:id',
        element: <Dashboard />, // Affiche le composant Dashboard pour cette route
      }
    ]
  },
]);

// Recherche l'élément avec l'ID "root" dans le fichier HTML pour rendre l'application React dedans
createRoot(document.getElementById('root')).render(
  // Enveloppe l'application dans <StrictMode> pour activer des vérifications supplémentaires en mode développement
  <StrictMode>
    {/* Fournit le routeur à l'application, permettant de gérer la navigation */}
    <RouterProvider router={router} />
  </StrictMode>
);
