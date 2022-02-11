import Link from "next/link";

import ProjectCard from "../components/projects/projectcard";
import ProjectTag from "../components/projects/projecttag";

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl">
      <ProjectTag />
      <ProjectCard />
    </div>
  );
}
