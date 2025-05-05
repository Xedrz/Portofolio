"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About Me
        </h2>
      </div>
      
      <div className="flex flex-col gap-4">
        <p className="text-justify text-muted-foreground lg:px-6">
        I&#39;m a 6th-semester Information Technology student with a strong interest in Cybersecurity, particularly in areas like penetration testing, ethical hacking, and red team operations. 
        I enjoy solving real-world security challenges through platforms like TryHackMe and continually strive to deepen my understanding of network security, system vulnerabilities, and secure coding practices.{" "}
        </p>
        <p className="text-justify text-muted-foreground lg:px-6">
        Passionate about learning through hands-on labs and CTFs, I&#39;m working towards building a solid foundation in offensive security while also exploring defensive strategies to get a well-rounded perspective in the cybersecurity domain.
        </p>
      </div>
    </section>
  );
}
