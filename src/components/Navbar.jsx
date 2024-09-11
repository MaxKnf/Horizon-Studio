import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";

// Fonction principale de la barre de navigation avec un menu de type Drawer (tiroir)
export default function TemporaryDrawer() {
  // State pour contrôler l'ouverture et la fermeture du Drawer (initialement fermé)
  const [open, setOpen] = React.useState(false);

  // Fonction pour gérer le clic sur les liens et remonter en haut de la page
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // Fonction pour ouvrir/fermer le Drawer en fonction de l'événement (clic ou touche du clavier)
  const toggleDrawer = (newOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      // Ignore l'événement pour éviter que Tab ou Shift ne déclenche une action de toggle
      return;
    }
    // Met à jour l'état pour ouvrir ou fermer le Drawer
    setOpen(newOpen);
  };

  // Liste des liens de navigation (nom et URL) pour les différentes sections du site
  const linkList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Process",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  // Contenu de la liste à afficher dans le Drawer (menu)
  const DrawerList = (
    <Box
      className="drawer"
      sx={{ width: 300 }}
      role="navigation"
      // Gère les clics ou appuis sur des touches pour fermer le Drawer
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* Génère un élément de liste pour chaque lien dans linkList */}
        {linkList.map((item, index) => (
          <ListItem key={index} disablePadding>
            {/* Chaque ListItemButton est un lien navigable */}
            <ListItemButton
              component={Link} // Utilise Link pour la navigation interne
              to={item.link} // Lien vers la section correspondante
              onClick={handleClick} // Fait remonter la page en haut au clic
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "1.5rem 0 1.5rem 0",
                color: "#378925",
                fontSize: "1.5rem",
                "&:hover": {
                  textDecoration: "underline", // Souligne le lien au survol
                },
              }}
            >
              {item.name} {/* Affiche le nom du lien (ex: Home, Portfolio) */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />  // Un séparateur optionnel si tu veux segmenter des sections */}
    </Box>
  );

  return (
    <div className="navigation">
      {/* Bouton qui ouvre le Drawer avec l'icône de menu */}
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />
      </Button>

      {/* Lien vers la page d'accueil avec le nom du studio */}
      <Link to="/" className="title">
        Horizon Studio
      </Link>

      {/* Drawer (tiroir) qui s'ouvre à gauche avec les options de navigation */}
      <Drawer
        anchor="left"
        open={open} // Contrôle si le Drawer est ouvert ou fermé
        onClose={toggleDrawer(false)} // Ferme le Drawer lorsqu'on clique en dehors ou sur un lien
        PaperProps={{
          sx: {
            backgroundColor: "#FFFFFF", // Couleur de fond blanche
            justifyContent: "center", // Centrage vertical du contenu
          },
        }}
      >
        {DrawerList} {/* Insertion de la liste de liens dans le Drawer */}
      </Drawer>
    </div>
  );
}
