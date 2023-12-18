import React from "react";
import Image from "next/image";
import "./mainpageNelt.css";

export default async function MainPageNelt() {
  const data = await fetch("http://localhost:8000/api/content/").then(
    (response) => {
      return response.json();
    }
  );

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
      <h1> Morning Brew </h1>
      <table id="newsList">
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
