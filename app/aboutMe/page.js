import AboutPageClient from "../components/about-page-client";

export const metadata = {
  title: "About Me | Lawal Temidayo – Frontend Developer",
  description:
    "Learn about Lawal Temidayo, a Frontend Developer specialising in React.js, Next.js, TypeScript and React Native. Discover his experience, technical skills and approach to building modern digital experiences.",
  alternates: {
    canonical: "/aboutMe",
  },
  openGraph: {
    title: "About Lawal Temidayo | Frontend Developer",
    description:
      "Discover my background, development experience, technical skills and approach to building modern web and mobile experiences.",
    url: "/aboutMe",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
