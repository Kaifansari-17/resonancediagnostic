import {
  Activity,
  Building2,
  Clock,
  Cpu,
  Dna,
  Droplet,
  FileCheck,
  FileText,
  FlaskConical,
  Headset,
  Heart,
  HeartPulse,
  House,
  Microscope,
  ShieldCheck,
  Target,
  TestTube,
  Truck,
  AudioWaveform,
  UserRoundCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/site";

const map: Record<IconName, LucideIcon> = {
  microchip: Cpu,
  target: Target,
  home: House,
  report: FileCheck,
  team: UserRoundCheck,
  heart: Heart,
  vial: TestTube,
  pulse: HeartPulse,
  microscope: Microscope,
  building: Building2,
  waveform: AudioWaveform,
  flask: FlaskConical,
  document: FileText,
  shield: ShieldCheck,
  clock: Clock,
  truck: Truck,
  wallet: Wallet,
  headset: Headset,
  droplet: Droplet,
  dna: Dna,
};

export function BrandIcon({ name, size = 24 }: { name: IconName; size?: number }) {
  const Cmp = map[name] ?? Activity;
  return <Cmp size={size} strokeWidth={1.7} aria-hidden="true" />;
}

/** Brand glyphs (lucide v1 no longer ships brand icons). */
export function SocialGlyph({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  if (name === "Instagram") {
    return (
      <svg {...common}>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.23 1 .5 1.5.95.45.45.72.9.95 1.5.17.4.37 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.23.6-.5 1-.95 1.5-.45.45-.9.72-1.5.95-.4.17-1 .37-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.23-1-.5-1.5-.95a4 4 0 0 1-.95-1.5c-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.23-.6.5-1 .95-1.5.45-.45.9-.72 1.5-.95.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 2.2a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm6.7-2.6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg {...common}>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.3 9h3.4v11.5H3.3V9Zm6 0h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.7 0 4.5 1.8 4.5 5.2v6.6h-3.4v-6c0-1.6-.7-2.6-2.1-2.6-1.2 0-2 .8-2.3 1.7-.1.3-.1.7-.1 1v5.9H9.3V9Z" />
    </svg>
  );
}
