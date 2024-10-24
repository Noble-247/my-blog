import Link from "next/link";

export default function notFound() {
  return (
    <main>
      <h1>The Requested page does not axist</h1>
      <Link href={"/"}>Return to home page</Link>
    </main>
  );
}
