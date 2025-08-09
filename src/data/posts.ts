export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

export const posts: Post[] = [
  { slug: "festival-highlights", title: "Festival Highlights 2024", excerpt: "Our favorite moments and awards from this year's circuit.", image: b1, date: "2024-12-01" },
  { slug: "behind-the-scenes", title: "Behind the Scenes: Storyboarding", excerpt: "A peek at our visual planning for complex sequences.", image: b2, date: "2024-10-12" },
  { slug: "sound-design", title: "Designing Sound for Emotion", excerpt: "How we craft immersive soundscapes that carry a scene.", image: b3, date: "2024-08-28" },
];
