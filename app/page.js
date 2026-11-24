import HomeClient from "./components/home-client";

export const metadata = {
  title: "Frontend Developer | React & Next.js | Lawal Temidayo",
  description:
    "I'm Lawal Temidayo, a Frontend Developer in Nigeria specialising in React.js, Next.js, TypeScript and React Native. Explore my projects, experience and development work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lawal Temidayo | Frontend Developer",
    description:
      "Explore the portfolio and projects of Lawal Temidayo, a Frontend Developer specialising in React, Next.js and React Native.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
