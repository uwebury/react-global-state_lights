import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

// 18. {turnAllLightsOff, turnAllLightsOn} added as prop and lifted down to Quick Actions. Step 19 in actions.js
export default function Actions({ turnAllLightsOff, turnAllLightsOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
      />
    </>
  );
}
