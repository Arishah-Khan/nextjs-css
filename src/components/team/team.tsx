import Card from "./team-card";
import styles from "@/styles/team/team.module.css"

const team = [
    {
        img: "/images/member1.png",
        title: "Kadir Miye",
    },
    {
        img: "/images/member2.png",
        title: "Isabella Thompson",
    },
    {
        img: "/images/member3.png",
        title: "Arlo Lee",
    },
    {
        img: "/images/member4.png",
        title: "Aiden Davis",
    },
];

export default function Team() {
    return (
        <section className={styles.teamSection}>
            <h2 className={styles.heading}>Our Leadership Team</h2>
            <div className={styles.gridContainer}>
                {team.map((member, index) => (
                    <Card key={index} img={member.img} title={member.title} />
                ))}
            </div>
        </section>
    );
}
