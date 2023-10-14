import React from "react";
import Image from "next/image";
import "./mainpageNelt.css";

export default async function MainPageNelt() {
  const response = await fetch("http://localhost:8000/api/content/");
  const data = await response.json();
  const content = await data.map((newsletter: typeof data) => {
    return (
      <tr key={newsletter.id}>
        <td>{newsletter.title}</td>
        <td>{newsletter.createdAt}</td>
      </tr>
    );
  });

  return (
    <div>
      {/* Title */}
      {/* Each List item has preview logo, a title, and a date on the far right */}
      <h1> Morning Brew </h1>
      <table>
        <tbody>{content}</tbody>
      </table>

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
                priority
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
