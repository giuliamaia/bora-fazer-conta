"use client";

import type { ComponentProps } from "react";
import { track, type TrackEvent } from "@/lib/analytics";

type Props = ComponentProps<"a"> & {
  event: TrackEvent;
  eventProps?: Record<string, unknown>;
};

/** Link externo com evento de analytics. Abre em nova aba com rel seguro. */
export function TrackedLink({ event, eventProps, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      target={rest.target ?? "_blank"}
      rel="noopener noreferrer"
      onClick={(e) => {
        track(event, { href: rest.href, ...eventProps });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
