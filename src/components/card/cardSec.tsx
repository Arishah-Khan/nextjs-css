import Card from "./card";
import styles from "@/styles/cardSec.module.css"; // Import your CSS module

export default function CardSec() {
    return (
        <section className={styles.cardSec}> {/* Apply the CSS class here */}
            <div>
                <Card 
                    image="/images/card1.png"
                    heading="Build your compelling job advertisement"
                    bgColour="#267DFF"
                />
            </div>
            <div>
                <Card 
                    image="/images/card2.png"
                    heading="Promote your ad on 100+ job search sites"
                    bgColour="#00D085"
                />
            </div>
            <div>
                <Card 
                    image="/images/card3.png"
                    heading="Manage candidates easy with hiring workflows"
                    bgColour="#9867FF"
                />
            </div>
        </section>
    );
}
