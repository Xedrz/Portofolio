"use client";

import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-5xl font-bold lg:text-start">
          Let&#39;s Connect
        </h2>
        <p className="text-start text-muted-foreground lg:px-8">
        I&#39;m currently open to internship or freelance opportunities. feel free to reach out. 
        I&#39;ll get back to you as soon as possible!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 lg:px-6 mb-4">
        <a
          href="mailto:jonathan.122140213@student.itera.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer w-full"
        >
          jonathan.122140213@student.itera.ac.id
          <Button variant={"default"} className="w-full h-full">
            <div className="flex flex-row items-center">
              <Mail className="dark:text-white text-muted h-6 w-6" />
              <p className="ml-3 text-2xl dark:text-white text-muted">
                Connect
              </p>
            </div>
          </Button>
        </a>
      </div>
    </section>
  );
}
