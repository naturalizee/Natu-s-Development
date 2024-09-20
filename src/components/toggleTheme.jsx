import { useState, useEffect } from 'react';

const useToggleTheme = () => {
  // Déclare le state pour gérer le thème
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Appliquer le thème en fonction du state dans la balise html
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Fonction pour basculer entre le thème clair et sombre
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Retourne le thème et la fonction pour basculer le thème
  return { theme, toggleTheme };
};

export default useToggleTheme;
