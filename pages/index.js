import Link from "../components/Link";

// 16. {lightsOnCount} added as prop and as content variable:
export default function HomePage({ lightsOnCount }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnCount} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
