import ProjectClient from "../components/project-client";

export const metadata = {
  title: "Projects | Lawal Temidayo – Frontend Developer Portfolio",
  description:
    "Explore projects by Lawal Temidayo, including e-commerce platforms, salon management software, event ticketing systems and modern business websites built with React and Next.js.",
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "Projects | Lawal Temidayo",
    description:
      "Explore selected web development projects built with React, Next.js, TypeScript and modern frontend technologies.",
    url: "/project",
    type: "website",
  },
};

export default function ProjectPage() {
  return <ProjectClient />;
}
