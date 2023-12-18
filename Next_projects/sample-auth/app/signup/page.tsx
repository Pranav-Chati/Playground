import Link from "next/link";

export default function SignupPage() {
  return (
    <div>
      <form>
        <label>Email:</label>
        <input type="text" name="email" />

        <label>Password:</label>
        <input type="text" name="password" />

        <button type="submit">SUBMIT</button>
      </form>
      <Link href="/login">Login</Link>
      <br>
      </br>
      <Link href="/">Home</Link>
    </div>
  );
}
