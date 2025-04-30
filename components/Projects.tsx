"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/Maze.avif",
    title: "Maze Runner - Python Game",
    description:
      "Maze Runner is a simple 2D maze game built with Python using Object-Oriented Programming (OOP) principles. Players must navigate through complex mazes to reach the goal, avoiding dead ends and obstacles. The game structure is modular, with each element like the player and maze walls represented as objects, making the code organized and scalable.",
    skills: [
      "Problem Solving",
      "Python",
      "Object-Oriented Programming",
      "UI/UX Design",
      "Game Design",
    ],
    link: "https://github.com/Xedrz/Maze_Runner",
  },
  {
    imagePath: "/Pantas.avif",
    title: "Pantas - Election Website",
    description:
      "PANTAS (Quality Election) is a conceptual design for a mobile and web application aimed at promoting transparent and fair elections. The design focuses on user-friendly interfaces, access to candidate information, and public engagement features.",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design System",
      "Design Strategy",
      "Figma",
    ],
    link: "https://www.figma.com/design/jjhvIkuu7mQWIte3qP49uO/PANTAS---RB-9?node-id=0-1&t=CtQ0Y23VDJSGgxg5-1",
  },
  {
    imagePath: "/ShopEasy.avif",
    title: "ShopEasy - E-commerce Website",
    description:
      "ShopEasy, E-Commerce Website is a frontend project that simulates an online shopping experience using a Fake API. The site allows users to browse products, view details, and add items to a cart, showcasing core functionalities of a modern e-commerce platform.ighlights the platform's use cases and solutions. Swoop Exchange is a Meta-DEX Aggregator that automatically sources, ranks and routes quotes from the best DEX Aggregators and Bridges, ensuring the best prices for on-chain and cross-chain swaps. Swoop Exchange has achieved millions in USD volume and currently has around 4000 monthly users with 0 paid marketing.",
    skills: [
      "React.js",
      "API Integration",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "Typescript",
    ],
    link: "https://github.com/Xedrz/ShopEasy",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
