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
        <p className="text-start text-muted-foreground lg:px-6">
        I’m an Information Technology student with a deep interest in frontend development. 
        I enjoy building responsive and user-friendly interfaces using technologies like React.js. 
        From translating UI designs to writing clean and efficient code, I strive to create web experiences that are both functional and visually engaging.{" "}
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
        I'm always learning and exploring new tools, frameworks, and design practices to improve my skills. 
        I’m passionate about creating digital products that are intuitive, accessible, and impactful—and I'm excited to contribute to real-world projects that make a difference.
        </p>
      </div>
    </section>
  );
}
