import Google from "@/components/404/Google";
import SimplePage from "@/components/404/SimplePage";
import AmongUs from "@/components/404/AmongUs";
import BlueGlitch from "@/components/404/BlueGlitch";
import GeeksforGeeks from "@/components/404/GeeksforGeeks";
import MacOs from "@/components/404/MacOs";
import ModernPage from "@/components/404/ModernPage";
import Particles from "@/components/404/Particles";
import Poet from "@/components/404/Poet";
import RetroTv from "@/components/404/RetroTv";
import Snow from "@/components/404/Snow";
import StoneAge from "@/components/404/StoneAge";
import StrangerThings from "@/components/404/StrangerThings";
import Terminal from "@/components/404/Terminal";
import Vercel from "@/components/404/Vercel";
import BugGame from "@/components/404/BugGame";
import Void from "@/components/404/Void";

export interface ComponentConfig {
  name: string;
  slug: string;
  component: React.ComponentType<any>;
  description: string;
  fileName: string; // Used for dynamic code fetching
}

export const components404: Record<string, ComponentConfig> = {
  google: {
    name: "Google 404",
    slug: "google",
    component: Google,
    description: "Google-style 404 error page with minimalist design",
    fileName: "Google",
  },
  simple: {
    name: "Simple Page",
    slug: "simple",
    component: SimplePage,
    description: "Simple and clean 404 page with dark theme",
    fileName: "SimplePage",
  },
  amongus: {
    name: "Among Us",
    slug: "amongus",
    component: AmongUs,
    description: "Playful Among Us themed 404 page",
    fileName: "AmongUs",
  },
  blueglitch: {
    name: "Blue Glitch",
    slug: "blueglitch",
    component: BlueGlitch,
    description: "Glitch effect 404 page with blue theme",
    fileName: "BlueGlitch",
  },
  geeksforgeeks: {
    name: "GeeksforGeeks",
    slug: "geeksforgeeks",
    component: GeeksforGeeks,
    description: "GeeksforGeeks style 404 page",
    fileName: "GeeksforGeeks",
  },
  macos: {
    name: "macOS",
    slug: "macos",
    component: MacOs,
    description: "macOS system alert style 404 page",
    fileName: "MacOs",
  },
  modern: {
    name: "Modern Page",
    slug: "modern",
    component: ModernPage,
    description: "Modern and stylish 404 page",
    fileName: "ModernPage",
  },
  particles: {
    name: "Particles",
    slug: "particles",
    component: Particles,
    description: "Animated particles background 404 page",
    fileName: "Particles",
  },
  poet: {
    name: "Poet",
    slug: "poet",
    component: Poet,
    description: "Poetic 404 page with creative text",
    fileName: "Poet",
  },
  retrotv: {
    name: "Retro TV",
    slug: "retrotv",
    component: RetroTv,
    description: "Retro TV static effect 404 page",
    fileName: "RetroTv",
  },
  snow: {
    name: "Snow",
    slug: "snow",
    component: Snow,
    description: "Falling snow animation 404 page",
    fileName: "Snow",
  },
  stoneage: {
    name: "Stone Age",
    slug: "stoneage",
    component: StoneAge,
    description: "Stone age themed 404 page",
    fileName: "StoneAge",
  },
  strangerthings: {
    name: "Stranger Things",
    slug: "strangerthings",
    component: StrangerThings,
    description: "Stranger Things inspired 404 page",
    fileName: "StrangerThings",
  },
  terminal: {
    name: "Terminal",
    slug: "terminal",
    component: Terminal,
    description: "Terminal/CLI style 404 page",
    fileName: "Terminal",
  },
  vercel: {
    name: "Vercel",
    slug: "vercel",
    component: Vercel,
    description: "Vercel style 404 page",
    fileName: "Vercel",
  },
  buggame: {
    name: "Bug Game",
    slug: "buggame",
    component: BugGame,
    description: "Bug game 404 page",
    fileName: "BugGame",
  },
  void: {
    name: "Void",
    slug: "void",
    component: Void,
    description: "Immersive void themed 404 page",
    fileName: "Void",
  },
};

export function getComponentBySlug(slug: string): ComponentConfig | null {
  return components404[slug.toLowerCase()] || null;
}

export function getAllComponents(): ComponentConfig[] {
  return Object.values(components404);
}
