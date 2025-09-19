import React from 'react';

const AboutMe = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-white space-y-6 leading-relaxed text-lg">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>

      <p>
        I’m a self-taught full-stack developer with a sharp focus on performance, scalability, and clean design implementation.
        I architect and deliver production-grade applications with a full-stack approach, combining precision on the frontend with
        reliability and structure on the backend. I don’t just ship code  I engineer complete solutions that align with business logic and strategic outcomes.
      </p>

      <p>
        My process is rigorous: I work with intent, eliminate guesswork, and ensure that every line of code contributes to performance, usability, and maintainability.
        From building new digital products to modernizing legacy systems, I deliver with discipline, speed, and a mindset geared toward long-term scalability.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Expertise & Deliverables</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Responsive, production-ready landing pages (delivery within 5 days)</li>
        <li>End-to-end fullstack applications (average timeline: 12 days, scope-dependent)</li>
        <li>Backend systems using Node.js, Express, and REST APIs</li>
        <li>Frontend architecture using React, TailwindCSS, and modular component patterns</li>
        <li>Manual device and browser responsiveness testing  no assumptions, only validation</li>
        <li>Performance-focused builds with scalability in mind from day one</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Work Process</h2>
      <p>
        Every engagement begins with a deep dive into the product’s goals, intended user flow, and visual benchmarks.
        I convert business logic into clear development milestones, structured around transparency, rapid iteration, and high-quality output.
      </p>
      <p>
        I don’t ship bloated or unscalable solutions. Code is written with a purpose  readable, modular, and always production-ready.
        Testing covers responsiveness, behavior accuracy, and performance benchmarks across environments.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Tech Stack</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Frontend: React, TailwindCSS, JSX, raw CSS (when precision is needed)</li>
        <li>Backend: Node.js with Express, REST API design</li>
        <li>Version Control: Git (GitHub workflows)</li>
        <li>Deployment: Vercel, Netlify, and other open-source platforms</li>
        <li>Currently expanding expertise into: Next.js, system design, backend scaling patterns</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Project History</h2>
      <p>
        Delivered over a dozen client-facing UIs, three backend infrastructures, and four fully integrated applications covering:
        authentication flows, payment gateways, product management systems, and dynamic dashboards. Each project met or exceeded client expectations, even under time constraints.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Professional Standards</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Modular, maintainable, and DRY codebases</li>
        <li>Strict separation of concerns across architecture layers</li>
        <li>Consistent, scalable UI patterns with a focus on usability</li>
        <li>Deadline discipline without compromising quality</li>
        <li>Issue resolution driven by logs, documentation, and strategic debugging (including AI-assisted workflows)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">What Sets Me Apart</h2>
      <p>
        I execute. No fluff, no guesswork. I absorb new systems quickly, translate vague ideas into concrete deliverables,
        and operate well in both autonomous and collaborative environments. I care about the "why" behind the code as much as the code itself.
        Every decision I make considers the long-term health of the project.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Mindset & Discipline</h2>
      <p>
        Development is not a hobby  it’s a craft. I don’t take shortcuts, and I don’t build for short-term results. I deliver with intention,
        I iterate with purpose, and I work like the system I’m building is going into production tomorrow  because it usually is.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Collaboration & Availability</h2>
      <p>
        I'm available for collaboration with startups, founders, or organizations that value structured delivery,
        business alignment, and technical clarity. I’m not here to play it safe  I’m here to build things that work,
        last, and serve a function beyond aesthetics.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Languages</h2>
      <p className="flex flex-col">
        English  C2 (Fluent, professional proficiency)
        <br />
        Arabic  B2 (Conversational/Professional)
        <br />
        German  A2 (Basic)
      </p>
    </div>
  );
};

export default AboutMe;
