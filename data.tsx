import {Instagram, Facebook, Phone, HomeIcon} from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/unagi.sushi.teppanyaki/?hl=es",
    },
    {
        id: 2,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/profile.php?id=100027869035898",
    },
    {
        id: 3,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "tel:+528186899428",
    }
];

export const itemsNavbar = [
    {
        id: 1,
        text: "¿Quiénes somos?",
        link: "/",
    },
    {
        id: 2,
        text: "Menu",
        link: "/menu",
    },
];