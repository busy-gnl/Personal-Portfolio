import MyGallery from "../../components/Gallery";
import { useParams } from "react-router-dom";
export default function Project() {
  const { name } = useParams();

  const projects = [
    {
      title: "Trinded",
      vision:
        "Trinded est une marketplace qui permet la mise en relation entre particuliers pour l'achat et la vente de vêtements d'occasion, inspiré du célèbre site Vinted.",
      functionnalities: [
        "Gestion de Compte : Inscription, connexion et modification des informations personnelles.",
        "Profil Utilisateur : Visualisation des commandes et annonces personnelles.",
        "Gestion d'Annonces : Création, modification, et suppression.",
        "Catalogue Produits : Accès et aperçu des articles en vente.",
        "Recherche Avancée : Filtration pour une sélection précise.",
        "Liste d'Envie : Ajout d'articles favoris.",
        "Évaluation des Vendeurs : Système de notation et commentaires.",
        "Messagerie Instantanée : Communication directe entre acheteurs et vendeurs.",
        "Notifications : Alertes pour messages, ventes et suivi de commandes.",
        "Paiement Sécurisé : Intégration de PayPal",
      ],
      technologies:
        "React, Node.js, Express, Nest.js, et MySQL pour une expérience utilisateur fluide et réactive ainsi que l'API de PayPal et l'utilisation de websockets pour la messagerie intantanée.",
    },
    {
      title: "Space Station Chronicles",
      vision:
        "Space Station Chronicles est une application qui permet aux utilisateurs de suivre l'ISS (Station Spatiale Internationale) en temps réel, de découvrir son histoire et de dialoguer avec l'équipage de l'ISS grâce à une technologie de chat basée sur l'IA.",
      functionnalities: [
        "Informations Actualisées : Fournir des détails à jour sur l'ISS, y compris des faits intéressants et des nouvelles récentes.",
        "Carte Interactive en Temps Réel : Afficher la position actuelle de l'ISS, permettant aux utilisateurs de suivre son trajet autour de la Terre.",
        "Vidéo en Direct : Diffuser en direct la vue de la Terre depuis l'ISS, permettant aux utilisateurs de voir ce que voient les astronautes en temps réel.",
        "Chronologie Historique : Présenter une ligne du temps détaillée de l'histoire de l'ISS, de sa conception à son exploitation actuelle.",
        "Boutique en Ligne : Offrir une gamme de produits liés à l'ISS, allant des souvenirs aux équipements éducatifs.",
        "Chat IA avec l'Équipage : Proposer une expérience interactive où les visiteurs peuvent dialoguer avec l'équipage de l'ISS grâce à une technologie de chat basée sur l'IA",
      ],
      technologies:
        "React, Node.js, Express, Nest.js, et MySQL pour une expérience utilisateur fluide et réactive ainsi que les API de Google Maps et de OpenAI.",
    },
    {
      title: "Serenity",
      description: "This is a project",
    },
  ];

  const spaceStationPictures = [
    {
      src: "/space-station-chronicles.png",
      width: 504,
      height: 305,
      alt: "logo",
    },
    {
      src: "/ssc-01.png",
      width: 504,
      height: 305,
      alt: "/ssc-01",
    },
    {
      src: "/ssc-02.png",
      width: 504,
      height: 305,
      alt: "/ssc-02",
    },
    {
      src: "/ssc-03.png",
      width: 504,
      height: 305,
      alt: "/ssc-03",
    },
    {
      src: "/ssc-04.png",
      width: 504,
      height: 305,
      alt: "/ssc-04",
    },
    {
      src: "/ssc-05.png",
      width: 504,
      height: 305,
      alt: "/ssc-05",
    },
    {
      src: "/ssc-06.png",
      width: 504,
      height: 305,
      alt: "/ssc-06",
    },
    {
      src: "/ssc-07.png",
      width: 504,
      height: 305,
      alt: "/ssc-07",
    },
    {
      src: "/ssc-08.png",
      width: 504,
      height: 305,
      alt: "/ssc-08",
    },
    {
      src: "/ssc-09.png",
      width: 504,
      height: 305,
      alt: "/ssc-09",
    },
    {
      src: "/ssc-10.png",
      width: 504,
      height: 305,
      alt: "/ssc-10",
    },
    {
      src: "/ssc-11.png",
      width: 504,
      height: 305,
      alt: "/ssc-11",
    },
    {
      src: "/ssc-12.png",
      width: 504,
      height: 305,
      alt: "/ssc-12",
    },
    {
      src: "/ssc-13.png",
      width: 504,
      height: 305,
      alt: "/ssc-13",
    },
    {
      src: "/ssc-14.png",
      width: 504,
      height: 305,
      alt: "/ssc-14",
    },
    {
      src: "/ssc-15.png",
      width: 504,
      height: 305,
      alt: "/ssc-15",
    },
  ];

  const trindedPictures = [
    {
      src: "/trinded-logo.png",
      width: 504,
      height: 305,
      alt: "logo",
    },
    {
      src: "/trinded-01.png",
      width: 504,
      height: 305,
      alt: "/trinded-01",
    },
    {
      src: "/trinded-02.png",
      width: 504,
      height: 305,
      alt: "/trinded-02",
    },
    {
      src: "/trinded-03.png",
      width: 504,
      height: 305,
      alt: "/trinded-03",
    },
    {
      src: "/trinded-04.png",
      width: 504,
      height: 305,
      alt: "/trinded-04",
    },
    {
      src: "/trinded-05.png",
      width: 504,
      height: 305,
      alt: "/trinded-05",
    },
    {
      src: "/trinded-06.png",
      width: 504,
      height: 305,
      alt: "/trinded-06",
    },
    {
      src: "/trinded-07.png",
      width: 504,
      height: 305,
      alt: "/trinded-07",
    },
    {
      src: "/trinded-08.png",
      width: 504,
      height: 305,
      alt: "/trinded-08",
    },
    {
      src: "/trinded-09.png",
      width: 504,
      height: 305,
      alt: "/trinded-09",
    },
    {
      src: "/trinded-10.png",
      width: 504,
      height: 305,
      alt: "/trinded-10",
    },
    {
      src: "/trinded-11.png",
      width: 504,
      height: 305,
      alt: "/trinded-11",
    },
    {
      src: "/trinded-12.png",
      width: 504,
      height: 305,
      alt: "/trinded-12",
    },
    {
      src: "/trinded-13.png",
      width: 504,
      height: 305,
      alt: "/trinded-13",
    },
    {
      src: "/trinded-14.png",
      width: 504,
      height: 305,
      alt: "/trinded-14",
    },
    {
      src: "/trinded-15.png",
      width: 504,
      height: 305,
      alt: "/trinded-15",
    },
    {
      src: "/trinded-16.png",
      width: 504,
      height: 305,
      alt: "/trinded-16",
    },
    {
      src: "/trinded-18.png",
      width: 504,
      height: 305,
      alt: "/trinded-18",
    },
    {
      src: "/trinded-19.png",
      width: 504,
      height: 305,
      alt: "/trinded-19",
    },
    {
      src: "/trinded-20.png",
      width: 504,
      height: 305,
      alt: "/trinded-20",
    },
    {
      src: "/trinded-21.png",
      width: 504,
      height: 305,
      alt: "/trinded-21",
    },
    {
      src: "/trinded-22.png",
      width: 504,
      height: 305,
      alt: "/trinded-22",
    },
  ];

  return (
    <>
      {name === "trinded" && (
        <>
          <section className="w-[90%] md:w-2/3 mx-auto">
            <h1 className="text-center text-3xl font-bold py-12">
              {projects[0].title}
            </h1>
            <h2 className="text-3xl font-semibold text-start py-6">Vision :</h2>
            <p className=" font-medium">{projects[0].vision}</p>
            <h2 className="text-3xl font-semibold text-start py-6">
              Fonctionnalités Clés :
            </h2>
            <ul>
              {projects[0].functionnalities.map((functionality, index) => (
                <li key={index}>{functionality}</li>
              ))}
            </ul>
            <h2 className="text-3xl font-semibold text-start py-6">
              Technologies Utilisées :
            </h2>
            <p className=" font-medium mb-16">{projects[0].technologies}</p>
          </section>
          <MyGallery photos={trindedPictures} rowHeight={505} />
        </>
      )}
      {name === "space-station-chronicles" && (
        <>
          <section className="w-[90%] md:w-2/3 mx-auto">
            <h1 className="text-center text-3xl font-bold py-12">
              {projects[1].title}
            </h1>
            <h2 className="text-3xl font-semibold text-start py-6">Vision :</h2>
            <p className=" font-medium">{projects[1].vision}</p>
            <h2 className="text-3xl font-semibold text-start py-6">
              Fonctionnalités Clés :
            </h2>
            <ul>
              {projects[1].functionnalities.map((functionality, index) => (
                <li key={index}>{functionality}</li>
              ))}
            </ul>
            <h2 className="text-3xl font-semibold text-start py-6">
              Technologies Utilisées :
            </h2>
            <p className=" font-medium mb-16">{projects[1].technologies}</p>
          </section>
          <MyGallery photos={spaceStationPictures} rowHeight={505} />
        </>
      )}
    </>
  );
}
