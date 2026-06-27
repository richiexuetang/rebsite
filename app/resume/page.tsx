import Link from "next/link";
import React from "react";
import { Download, Github, Globe, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const links = [
  { label: "GitHub", href: "https://github.com/xuer98", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/richardxuetang",
    icon: Linkedin,
  },
  { label: "xuer.io", href: "https://xuer.io", icon: Globe },
];

const experience = [
  {
    company: "SHEIN",
    role: "Senior Software Engineer",
    location: "Los Angeles, CA",
    period: "July 2025 – Present",
    points: [
      "Led architecture and delivery of an internal platform to replace ServiceNow org-wide as the sole technical lead, building Go services (go-zero, Kafka, MySQL, Redis) and aligning requirements across engineering, product, and operations teams.",
      "Designed and built a UI-heavy dashboard builder in React/TypeScript over the data sources migrated off ServiceNow, with extensive field-level validation and debounced input handling to keep large, interactive editing sessions responsive.",
      "Implemented client-side state rehydration so in-progress dashboards survive reloads, and subscribed the UI to a webhook-driven update channel that reflects server-side state changes in real time without manual refresh.",
      "Built automated sync of controls, findings, risks, and policies from the internal ticketing system into the GRC platform — 2,000+ controls in the first 5 months with zero manual re-entry — replacing the manual ServiceNow data entry the old process required (~30 hrs/month) and eliminating its transcription errors.",
    ],
  },
  {
    company: "Experian",
    role: "Software Developer II",
    location: "Remote",
    period: "Jun 2020 – July 2025",
    points: [
      "Engineered end-to-end automated claims-processing workflows using Selenium-based web scraping, eliminating all manual data entry across multiple insurance provider portals.",
      "Implemented a Splunk observability framework with structured JSON logging and a standardized event taxonomy, cutting mean-time-to-detection from ~4 hours to under 20 minutes for production incidents.",
      "Reduced React application bundle sizes by up to 30% through systematic tree-shaking in Webpack build configurations, improving initial load time by ~1.2s on 3G connections.",
      "Built a DataGrid component from scratch with sorting, inline editing, drag-and-drop, and responsive design — adopted across multiple teams, materially improving development velocity.",
    ],
  },
];

const projects = [
  {
    name: "RitcherMap",
    tagline: "Self-hosted, event-driven interactive game-map platform",
    href: "/projects/ritcher-maps",
    stack:
      "Go · Java Spring Boot · Python · Rust · Ruby/Rails · React · Kafka · Protobuf · TanStack Query · TailwindCSS",
    points: [
      "Built a tiled interactive-map platform as six services across five languages, splitting a Rust read path (PostGIS viewport queries, server-side clustering, tile cache) from a Java/Spring write path on a Kafka event bus.",
      "Added a Go gateway (JWT auth, routing, WebSocket realtime sync over Redis pub/sub), a Python tiling pipeline (image → XYZ pyramid → S3), and a Rails accounts/billing service.",
      "Shipped a React + MapLibre GL frontend projecting game-map pixel space onto Web Mercator for pixel-perfect tile/marker alignment; set up Protobuf contracts, path-filtered GitHub Actions CI, and Dockerized environments.",
    ],
  },
  {
    name: "Deep Interest Network Recommender",
    tagline: "Cross-language CTR-prediction serving path",
    href: "/projects/recsys",
    stack: "PyTorch · ONNX · Go · React/TypeScript · Docker",
    points: [
      "Built an end-to-end CTR-prediction recommender on the 25M-row Taobao ad dataset, implementing a Deep Interest Network with target-attention pooling over user behavior sequences to model candidate-specific interest.",
      "Engineered a cross-language serving path — trained in PyTorch, exported to ONNX, served from a Go inference API via onnxruntime — with batched scoring that ranks an entire candidate set in a single forward pass.",
    ],
  },
];

const skills = [
  { label: "Languages", items: "Python, JavaScript/TypeScript, Go, Bash" },
  { label: "Frameworks", items: "React, Next.js, PyTorch" },
  { label: "Cloud & Infra", items: "AWS, Docker, Kubernetes" },
  { label: "Data", items: "SQL, Redis, Kafka, RabbitMQ, Elasticsearch" },
];

const education = [
  {
    school: "University of California, Los Angeles",
    degree: "Master of Science, Data Science",
    location: "Los Angeles, CA",
    period: "Expected 2027",
  },
  {
    school: "University of California, San Diego",
    degree: "Bachelor of Science, Computer Science",
    location: "San Diego, CA",
    period: "Sept 2016 – May 2020",
  },
];

export default function ResumePage() {
  return (
    <div className="relative min-h-screen pb-16 bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-12 max-w-5xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Resume
          </h2>
          <p className="mt-4 text-zinc-400">
            Senior Software Engineer based in Los Angeles, building across the
            stack — from Go services and event-driven backends to React
            frontends.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">
            <a
              href="/Richard_Tang_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 duration-200 border rounded-md text-zinc-200 border-zinc-600 hover:border-zinc-400/50 hover:bg-zinc-800/20 hover:text-white"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-2 duration-200 text-zinc-400 hover:text-zinc-100"
              >
                <link.icon className="w-4 h-4" /> {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {/* Experience */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 font-display">
            Experience
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {experience.map((job) => (
              <Card key={job.company}>
                <article className="p-4 md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-lg font-semibold text-zinc-100 group-hover:text-white font-display">
                      {job.company}
                    </h4>
                    <span className="text-sm text-zinc-500">
                      {job.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 mt-1">
                    <p className="text-sm italic text-zinc-300">{job.role}</p>
                    <span className="text-sm text-zinc-500">{job.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc list-outside ml-4 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Card>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800" />

        {/* Projects */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 font-display">
            Projects
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <Card key={project.name}>
                <article className="p-4 md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <Link
                      href={project.href}
                      className="text-lg font-semibold text-zinc-100 group-hover:text-white font-display hover:underline"
                    >
                      {project.name}
                    </Link>
                    <span className="text-sm text-zinc-500">
                      {project.tagline}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">{project.stack}</p>
                  <ul className="mt-4 space-y-2 list-disc list-outside ml-4 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Card>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800" />

        {/* Skills */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 font-display">
            Skills
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <Card key={skill.label}>
                <div className="p-4 md:p-6">
                  <h4 className="text-sm font-semibold text-zinc-200">
                    {skill.label}
                  </h4>
                  <p className="mt-2 text-sm text-zinc-400">{skill.items}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800" />

        {/* Education */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 font-display">
            Education
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <Card key={edu.school}>
                <article className="p-4 md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-lg font-semibold text-zinc-100 group-hover:text-white font-display">
                      {edu.school}
                    </h4>
                    <span className="text-sm text-zinc-500">
                      {edu.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 mt-1">
                    <p className="text-sm italic text-zinc-300">{edu.degree}</p>
                    <span className="text-sm text-zinc-500">{edu.period}</span>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
