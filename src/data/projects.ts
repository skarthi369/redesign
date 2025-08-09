export type Project = {
  slug: string;
  title: string;
  image: string;
  year: number;
  category: string;
  tagline: string;
};

import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const projects: Project[] = [
  { slug: "golden-hour", title: "Golden Hour", image: p1, year: 2024, category: "Commercial", tagline: "A brand story shot in sweeping golden light." },
  { slug: "city-of-dreams", title: "City of Dreams", image: p2, year: 2023, category: "Feature", tagline: "A tender drama about ambition and love." },
  { slug: "beyond-the-noise", title: "Beyond the Noise", image: p3, year: 2022, category: "Documentary", tagline: "A journey into the soundscapes of urban life." },
];
