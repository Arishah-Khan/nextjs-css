import Div from "@/app/div"
import AboutSec from "@/components/about/aboutSec"
import Commitment from "@/components/about/commitment/commitment"
import Customer from "@/components/customer"
import Team from "@/components/team/team"
export default function AboutUs() {
    return (
        <main>
            <Div
                span="about"
            />
            <AboutSec />
            <Team />
            <Commitment />
            <Customer />
        </main>
    )
}