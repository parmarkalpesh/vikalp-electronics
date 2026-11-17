'use client';
import { trackEvent } from './Analytics';

interface TrackableLinkProps {
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export function TrackableLink({ href, eventName, eventParams, children, ...props }: TrackableLinkProps) {
  return (
    <a
      href={href}
      onClick={() => trackEvent(eventName, eventParams)}
      {...props}
    >
      {children}
    </a>
  );
}
