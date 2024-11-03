import Call from "@/components/callback";
import CardSec from "@/components/card/cardSec";
import Customer from "@/components/customer";
import HeroSec from "@/components/heroSec";
import LeaderShip from "@/components/leadership";
import Performance from "@/components/performance/performance";
import Provider from "@/components/providers/providers";
import Talent from "@/components/talent";
import Team from "@/components/team/team";



export default function Home() {
  return (
    <>
      <HeroSec />
      <CardSec />
      <LeaderShip />
      <Provider />
      <Performance />
      <Customer />
      <Talent />
      <Call />
      <Team />
    </>

  );
}
