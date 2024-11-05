import styles from "@/styles/about/div.module.css"

interface Div{
    span: string; 
}

export default function Div({span}:Div){
    return(
        <div className={styles.design}>
        Recrutie  {` > `} <span className={styles.span}>
            {span}
        </span>
        </div>
    )
}