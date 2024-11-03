import MainBtn from "../buttons/button";
import Card from "./providersCard";
import styles from "@/styles/provider/provider.module.css";

const cards = [
    {
        title: "Recruitment Solution",
        image: ["/images/service1.png", "/images/servicefront1.png"]
    },
    {
        title: "Personnel Outsourcing",
        image: ["/images/service2.png", "/images/servicefront2.png"]
    },
    {
        title: "HR Consulting",
        image: ["/images/service3.png", "/images/servic6.png"]
    },
    {
        title: "Leadership Training",
        image: ["/images/service4.png", "/images/servicefront3.png"]
    },
    {
        title: "Improving Resource",
        image: ["/images/service5.png", "/images/servicefront4.png"]
    },
    {
        title: "Employee Training",
        image: ["/images/service6.png", "/images/servicefront5.png"]
    }
];

export default function Provider() {
    return (
        <div className={styles.container}>
            <div className={styles.setDiv}>
                <h2 className={styles.heading}>A Leading Global Provider Of Recruitment</h2>
                <div className={styles.buttonContainer}>
                    <MainBtn text="See All Services" />
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} />
                ))}
            </div>
        </div>
    );
}
