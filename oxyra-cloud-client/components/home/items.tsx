import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Section } from "../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

const DEFAULT_ITEMS: ItemProps[] = [
  {
    title: "Go microservices core",
    description: "Split responsibilities across API, build, and proxy services for cleaner scaling and ownership.",
    icon: <ScanFaceIcon className="size-5 stroke-1" />,
  },
  {
    title: "Live deployment logs",
    description: "Stream stdout and stderr in real time through Kafka and WebSocket channels per project.",
    icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
  },
  {
    title: "Git-driven builds",
    description: "Run install and build commands from your repo and branch with customizable pipeline steps.",
    icon: <EclipseIcon className="size-5 stroke-1" />,
  },
  {
    title: "Artifact cloud storage",
    description: "Upload build output to S3 or Backblaze B2 with project-scoped paths and safe access patterns.",
    icon: <BlocksIcon className="size-5 stroke-1" />,
  },
  {
    title: "Subdomain asset proxy",
    description: "Serve deployed assets through a dedicated proxy layer with routing and guardrails.",
    icon: <FastForwardIcon className="size-5 stroke-1" />,
  },
  {
    title: "JWT-secured access",
    description: "Protect project actions with authenticated sessions and scoped API access across the platform.",
    icon: <RocketIcon className="size-5 stroke-1" />,
  },
  {
    title: "Observability built in",
    description: "Persist and query historical logs while continuing to monitor active deployments live.",
    icon: <LanguagesIcon className="size-5 stroke-1" />,
  },
  {
    title: "Developer-first dashboard",
    description: "Create projects, trigger deployments, and inspect build output from one focused control plane.",
    icon: <SquarePenIcon className="size-5 stroke-1" />,
  },
];

export default function Items({
  title = "Everything needed to ship from code to cloud.",
  items = DEFAULT_ITEMS,
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-140 text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item) => (
              <Item key={item.title}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}



import * as React from "react";

import { cn } from "@/lib/utils";

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item"
      className={cn("text-foreground flex flex-col gap-4 p-4", className)}
      {...props}
    />
  );
}

function ItemTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="item-title"
      className={cn(
        "text-sm leading-none font-semibold tracking-tight sm:text-base",
        className,
      )}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-description"
      className={cn(
        "text-muted-foreground flex max-w-60 flex-col gap-2 text-sm text-balance",
        className,
      )}
      {...props}
    />
  );
}

function ItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-icon"
      className={cn("flex items-center self-start", className)}
      {...props}
    />
  );
}

export { Item, ItemDescription, ItemIcon, ItemTitle };