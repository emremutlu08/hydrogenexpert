export {};

interface GoogleTag {
  (
    command: "event",
    eventName: string,
    params?: Record<string, string>,
  ): void;
  (
    command: "consent",
    action: "default" | "update",
    params: Record<string, "granted" | "denied">,
  ): void;
}

declare global {
  interface Window {
    gtag?: GoogleTag;
  }
}
