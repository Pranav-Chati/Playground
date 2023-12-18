import Link from "next/link";

export default function Login() {
  return (
    <div>
      <form>
        <label> Username </label>
        <input type="text" />

        <label> Password </label>
        <input type="text" />
        <button type="submit"> SUBMIT </button>
      </form>

      <Link href="/signup">Signup</Link>
      <br></br>
      <Link href="/">Home</Link>
    </div>
  );
}
