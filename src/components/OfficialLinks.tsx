import {
  Facebook,
  Globe,
  Instagram,
  NotebookPen,
  Play,
  X,
} from "lucide-react";

import { officialLinks } from "@/content/officialLinks";

const ICONS: Array<{ match: RegExp; Icon: React.ComponentType<{ className?: string }> }> = [
  { match: /instagram\.com/i, Icon: Instagram },
  { match: /x\.com/i, Icon: X },
  { match: /facebook\.com/i, Icon: Facebook },
  { match: /youtube\.com/i, Icon: Play },
  { match: /blog\.naver\.com/i, Icon: NotebookPen },
];

function getIcon(href: string) {
  const hit = ICONS.find((x) => x.match.test(href));
  return hit?.Icon ?? Globe;
}

export function OfficialLinks() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <p className="text-sm font-semibold text-zinc-950">공식 채널</p>
      <ul className="mt-3 space-y-2">
        {officialLinks.map((l) => {
          const Icon = getIcon(l.href);
          return (
            <li key={l.href} className="text-sm">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-900 hover:underline hover:decoration-zinc-400 hover:underline-offset-4"
              >
                <Icon className="h-4 w-4 text-zinc-600" />
                <span>{l.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
