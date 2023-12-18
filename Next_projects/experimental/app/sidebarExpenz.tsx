import Image from "next/image";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div id="personalInformation">
        <Image
          id="gloLogo"
          src="/coatofarms.jpg"
          alt="dsp"
          width={100}
          height={100}
          priority
        />
        <h1>Pranav Chati</h1>
        <p className="metadata"> President </p>
      </div>

      <div id="routeLinks">
        <h2> Dashboard </h2>
        <h2> Expenses </h2>
        <h2> Wallets </h2>
        <h2> Member </h2>
        <h2> Accounts </h2>
        <h2> Calendar </h2>
        <h2> Settings </h2>
      </div>
    </div>
  );
}
