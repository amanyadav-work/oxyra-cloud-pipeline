"use client";

import { ArrowRightIcon, GitGraphIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { LinkButton, type LinkButtonProps } from "../ui/link-button";
import { Mockup, MockupFrame } from "../ui/mockup";
import Screenshot from "../ui/screenshot";
import { Section } from "../ui/section";
import { Badge } from "../ui/badge";
import Glow from "../ui/glow";

interface HeroButtonProps extends Omit<LinkButtonProps, "children"> {
  text: string;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

const DEFAULT_HERO_BUTTONS: HeroButtonProps[] = [
  {
    href: "/signup",
    text: "Start Building",
    variant: "default",
  },
  {
    href: siteConfig.links.github,
    text: "View GitHub",
    variant: "default",
    icon: <GitGraphIcon className="mr-2 size-4" />,
  },
];

const DEFAULT_HERO_BADGE = (
  <Badge variant="outline" className="animate-appear">
    <span className="text-muted-foreground">
      Oxyra cloud pipeline is evolving fast
    </span>
    <a href="/dashboard" className="flex items-center gap-1">
      Open dashboard
      <ArrowRightIcon className="size-3" />
    </a>
  </Badge>
);

const DEFAULT_HERO_MOCKUP = (
  <Screenshot
    srcLight="/dashboard-light.png"
    srcDark="/dashboard-dark.png"
    alt="Launch UI app screenshot"
    width={1248}
    height={765}
    className="w-full"
  />
);

export default function Hero({
  title = "Deploy vite apps quick",
  description = "Oxyra connects a Go API orchestrator, a stateless build worker, and a smart asset proxy so you can trigger deployments, stream logs in real time, and ship from Git with full control.",
  mockup = DEFAULT_HERO_MOCKUP,
  badge = DEFAULT_HERO_BADGE,
  buttons = DEFAULT_HERO_BUTTONS,
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-7 sm:gap-24">
        <div className="flex flex-col items-left  gap-6 text-left sm:gap-8">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-185 font-medium text-balance opacity-0 delay-100 sm:text-xl ">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-start gap-4 opacity-0 delay-300">
              {buttons.map((button) => (
                <LinkButton
                  key={`${button.href}-${button.text}`}
                  variant={button.variant || "default"}
                  size="lg"
                  href={button.href}
                  icon={button.icon}
                  iconRight={button.iconRight}
                >
                  {button.text}
                </LinkButton>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-5">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}