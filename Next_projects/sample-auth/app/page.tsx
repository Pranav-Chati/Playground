import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Link href="login">
        <button> Login</button>
      </Link>
      <br></br>
      <button><Link href="/signup">SignUp</Link></button>
    </div>
  );
}
