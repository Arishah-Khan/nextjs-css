import Card from "./performance-card";
import styles from "@/styles/performance/performance.module.css";

const performanceCard = [
    {
        title: "Analysis",
        description: "Our commitment to support your HR needs every step.",
        image: "/images/Background (1).png"
    },
    {
        title: "Customer Services",
        description: "Empowering your HR decisions with advanced analysis tools.",
        image: "/images/Background (2).png"
    },
    {
        title: "Data Security",
        description: "Your data, our priority, ensuring ironclad security for your HR.",
        image: "/images/Background (3).png"
    },
    {
        title: "Collaboration",
        description: "Collaborate seamlessly across HR functions for optimal results.",
        image: "/images/Background (4).png"
    },
];

export default function Performance() {
    return (
        <main className={styles.mainContainer}>
            <h2 className={styles.heading}>Solutions To Improve Performance</h2>
            <p className={styles.description}>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam <br/> corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <div className={styles.cardContainer}>
                {performanceCard.map((performance, index) => (
                    <Card
                        key={index}
                        title={performance.title}
                        description={performance.description}
                        image={performance.image}
                    />
                ))}
            </div>
        </main>
    );
}
