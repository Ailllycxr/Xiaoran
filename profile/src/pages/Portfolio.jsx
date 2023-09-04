import { useState } from "react";
import Projects from "../components/Projects";

function Porfolio() {
  const [projects] = useState([
    {
      title: "ABC",
      deployedlink: "deployedlink",
      githublink: "githublink",
    },
    // {
    //     title: "ABC",
    //     deployedlink: "http://deployedlink",
    //     githublink = "githublink",
    // },
    // {
    //     title: "ABC",
    //     deployedlink: "http://deployedlink",
    //     githublink = "githublink",
    // },
    // {
    //     title: "ABC",
    //     deployedlink: "http://deployedlink",
    //     githublink = "githublink",
    // }
  ]);

  return (
    <div>
      <h1>Below are sets of projects</h1>
      {projects.map((project, idx) => (
        <Projects project={project} key={idx} />
      ))}
    </div>
  );
}

export default Porfolio;
