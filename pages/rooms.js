import Link from "../components/Link";
import Lights from "../components/Lights";

// 6. Prop lights has been prepared; they are being imported here
// and then they're going into component Lights --> step 7.
// 11. ToggleLight prop has been prepared to lift it down to Lights --> step 12.
export default function Rooms({ lights, toggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights lights={lights} toggleLight={toggleLight} />
    </>
  );
}
