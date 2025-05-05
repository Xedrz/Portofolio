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
    imagePath: "/owasp.avif",
    title: "OWASP Top 10 Documentation",
    description:
      "This documentation covers an in-depth exploration of the top ten most critical web application vulnerabilities identified by OWASP (Open Worldwide Application Security Project). Through practical labs in TryHackMe, I explored and mitigated each vulnerability, from Broken Access Control and Cryptographic Failures to Server-Side Request Forgery (SSRF). Each section includes theoretical explanations along with practical exploitation steps to identify and address these issues in web applications. This documentation is designed to provide hands-on knowledge that can be directly applied to web application security testing.",
    skills: [
      "OWASP Top 10",
      "Web Application Security",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Best Practices",
    ],
    link: "https://github.com/Xedrz/owasp-top-10-doc",
  },
  {
    imagePath: "/defensive.avif",
    title: "Defensive Security Introduction",
    description:
      "Defensive Security refers to the practices and strategies used to protect an organization's systems, networks, and data from cyber threats. It focuses on proactively preventing, detecting, and responding to attacks to minimize risks and reduce potential damage. Defensive security involves a combination of technologies, policies, and procedures aimed at safeguarding against unauthorized access, data breaches, malware, and other forms of cyberattacks.",
    skills: [
      "Defensive Security",
      "Security Information and Event Management (SIEM)",
      "IPSec",
    ],
    link: "https://github.com/Xedrz/Defensive-Security-Introduction-/blob/main/Defensive_Security_intro.pdf",
  },
  {
    imagePath: "/nmap.avif",
    title: "Nmap Documentation",
    description:
      "Nmap (Network Mapper) is an open-source tool used for network discovery and security auditing. It allows users to scan hosts and services on a network to identify open ports, running services, operating systems, and potential vulnerabilities. Nmap is widely used in ethical hacking and penetration testing.",
    skills: [
      "Nmap",
      "Enumeration",
      "Scanning",
    ],
    link: "https://github.com/Xedrz/Nmap_Documentation/",
  },

  {
    imagePath: "/MrRobot.avif",
    title: "Mr Robot - CTF Challenge",
    description:
      "A web-based Capture The Flag challenge inspired by the Mr. Robot series. This room focuses on enumeration, password cracking, reverse shells, and privilege escalation using Linux SUID binaries. Successfully captured all three flags and gained root access through manual exploitation steps.",
    skills: [
      "Problem Solving",
      "Nmap",
      "CTF",
      "Enumeration",
      "Password Cracking",
      "Reverse Shells",
      "Privilege Escalation",
    ],
    link: "https://github.com/Xedrz/Mr-Robot-CTF-writeups",
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
