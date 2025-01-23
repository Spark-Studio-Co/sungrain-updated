import about01 from "../../../../public/images/about01.webp";
import about02 from "../../../../public/images/about02.webp";
import about03 from "../../../../public/images/about03.webp";
import about04 from "../../../../public/images/about04.webp";

type AboutCardTitle = "about.card1.title" | "about.card2.title" | "about.card3.title" | "about.card4.title";
type AboutCardText = "about.card1.text" | "about.card2.text" | "about.card3.text" | "about.card4.text";

interface AboutCard {
    image: ImageMetadata;
    title: AboutCardTitle;
    text: AboutCardText;
}

export const aboutCardsContent: AboutCard[] = [
    {
        image: about01,
        title: "about.card1.title",
        text: "about.card1.text",
    },
    {
        image: about02,
        title: "about.card2.title",
        text: "about.card2.text",
    },
    {
        image: about03,
        title: "about.card3.title",
        text: "about.card3.text",
    },
    {
        image: about04,
        title: "about.card4.title",
        text: "about.card4.text",
    },
];