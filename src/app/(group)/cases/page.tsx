import Div from "@/app/div";
import styles from "@/styles/about/case.module.css"
import Image from "next/image";

const caseImg: string[] = [
    "/images/case1.png",
    "/images/case2.png",
    "/images/case3.png",
    "/images/case4.png",
    "/images/case5.png",
    "/images/leading2.png",
];

export default function Case() {
    return (
        <main>
              <Div
                span="Our Case Studies"
            />
            <div className={styles.main}>
            <h1 className={styles.h1}>Provide The Best Service <br/> With Out Of The Box Ideas</h1>
            <div className={styles.imageFlex}>
                {caseImg.map((image, key) => (
                    <Image key={key} src={image} alt="case-image" width="250" height="250"/>
                ))}
            </div>
            </div>
        </main>
    );
}
