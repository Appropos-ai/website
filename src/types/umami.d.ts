// Umami tracker (https://s.wefav.com/js/site.js), loaded in app/layout.tsx
interface Window {
  umami?: {
    track: (event: string, data?: Record<string, unknown>) => void;
  };
}
