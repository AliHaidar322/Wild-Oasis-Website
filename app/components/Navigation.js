import Link from "next/link";

export default function Page() {
  return(
    <>
      <Link href="/">Home</Link>
      <Link href="/cabins">Cabins</Link>
      <Link href="/account">Account</Link>
      <Link href="/about">About</Link>
    </>
  );
}