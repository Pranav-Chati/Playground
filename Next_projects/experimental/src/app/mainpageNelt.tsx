import Image from "next/image";
import "./mainpageNelt.css";

export default function MainPageNelt() {

  return (
    <div>
      {/* Title */}
      {/* Each List item has preview logo, a title, and a date on the far right */}

      <h1> Morning Brew </h1>
      <table id="newsList">
        <tbody>
          <tr>
            <td>
              <Image
                id="gloLogo"
                src="/coatofarms.jpg"
                alt="dsp"
                width={100}
                height={100}
                priority
              />
            </td>
            <td>
              <h3>First Edition</h3>
            </td>
            <td>
              <p>Sep 30, 2020</p>
            </td>
          </tr>
          <tr>
            <td>
              <Image
                id="gloLogo"
                src="/coatofarms.jpg"
                alt="dsp"
                width={100}
                height={100}
              />
            </td>
            <td>
              <h3>Second Edition</h3>
            </td>
            <td>
              <p>Sep 30, 2020</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
