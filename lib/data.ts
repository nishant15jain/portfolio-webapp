import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology",
    location: "Apeejay Stya University, Gurgaon",
    description: "Completed B.Tech with CGPA 7.89.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2022",
  },
  {
    title: "Software Engineer",
    location: "Nagarro Pvt Ltd, Gurgaon",
    description:
      "Revamped a major U.S. automotive firm’s used vehicle management system. Improved legacy tooling, enhanced UI, integrated new features, and ensured seamless functionality during redevelopment.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 – July 2022",
  },
  {
    title: "Software Development Engineer I",
    location: "NIIT Limited, Gurgaon",
    description:
      "Led migration from monolithic to microservices, built a high-performance URL shortener (3,600 codes/sec), created n-level hierarchy management for 1.5 lakh+ users, and migrated microservices to AWS EKS.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 – March 2025",
  },
  {
    title: "Software Development Engineer II",
    location: "NIIT Limited, Gurgaon",
    description:
      "Developed automated course scheduling system saving INR 3.25 crore annually, built real-time analytics dashboards, implemented CI/CD with GitHub Actions reducing release time by 40%, and integrated NewRelic + Grafana for monitoring.",
    icon: React.createElement(FaReact),
    date: "April 2025 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Appointment Booking App",
    description:
      "A full-stack appointment booking platform for businesses and customers using Spring Boot (Java) and React. Includes service management, availability scheduling, and booking workflow.",
    tags: ["React", "Java", "Spring Boot", "MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "MedTrack App",
    description:
      "Enterprise-grade medical representative tracking system with React and Spring Boot. Handles doctors, visits, samples, products, and performance reporting.",
    tags: ["React", "Spring Boot", "MySQL"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  // Languages
  "JavaScript",
  "TypeScript",
  "Java",

  // Frameworks / Libraries
  "ReactJS",
  "NextJS",
  "AngularJS",
  "NestJS",
  "Spring Boot",
  "Node.js",

  // Databases
  "MySQL",
  "MongoDB",
  "PostgreSQL",

  // Tools / Platforms
  "Git",
  "Docker",
  "JIRA",
  "New Relic",
  "Jenkins",
  "RabbitMQ",
  "Kafka",
  "AWS (EC2, S3, RDS, CloudWatch)",

  // Concepts
  "Microservices",
  "System Design",
  "Design Patterns",
  "SOLID Principles",
  "DSA",
] as const;
