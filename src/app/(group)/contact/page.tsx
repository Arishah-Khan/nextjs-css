import Div from "@/app/div";
import Information from "@/components/team/contact/information";
import Image from "next/image";
import styles from "@/styles/contact/map.module.css";
import Ask from "@/components/team/contact/ask-ques";

export default function Contact() {
    return (
        <main>
            <Div span="Contact Us" />
            <Information />
            <div className={styles.mapContainer}>
                <Image 
                    src="/images/iframe.png" 
                    alt="map" 
                    width={600} 
                    height={300} 
                    className={styles.map} 
                />
            </div>
            <Ask />
        </main>
    )
}
