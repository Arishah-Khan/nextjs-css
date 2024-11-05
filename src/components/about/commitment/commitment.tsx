import Card from "./commitment-card";
import styles from "@/styles/about/commitment/commitment.module.css"

const CardsData = [
    {
        image: "/images/team3.svg",
        heading: "15+",
        description: "Years of industry experience"
    },
    {
        image: "/images/team4.svg",
        heading: "244",
        description: "Digital project completed"
    },
    {
        image: "/images/team1.svg",
        heading: "300",
        description: "Data transferred monthly"
    },
    {
        image: "/images/team2.svg",
        heading: "440+",
        description: "Certified HR Solution"
    }
];

export default function Commitment() {
    return (
        <main className={styles.main}>
            <div className={styles.position}>
            <h2 className={styles.heading}>Your Business Goals Are Our Top Priority</h2>
            <div className={styles.intro}>
                
                <div className={styles.span}>
                    <span>Expertise</span>
                    <span>Innovation</span>
                    <span>Accountability</span>
                </div>
                <p>{`We embody unwavering expertise, garnered through years
                        of industry mastery. Our team’s extensive knowledge and
                        refined skills ensure effective solutions, fostering trust.`}</p>
            </div>
            </div>

            <div className={styles.cardGrid}>
                {CardsData.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        heading={item.heading}
                        description={item.description}
                    />
                ))}
            </div>
        </main>
    );
}
