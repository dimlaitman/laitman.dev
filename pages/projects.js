import ProjectCard from "../components/projectCard";
import client from "../apolloClient.js";
import { getProjectsQuery } from "../services/index.js";

export default function Projects({ projects }) {
  return <ProjectCard projectContent={projects} />;
}

export async function getStaticProps() {
  const { data } = await client.query(getProjectsQuery);
  return {
    props: {
      projects: data,
    },
  };
}
