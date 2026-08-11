export function NetworkPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M-20 620 H220 L300 540 H520 L600 460 H860 L940 380 H1220" />
        <path d="M-20 460 H140 L220 380 H460" />
        <path d="M460 380 L540 300 H780 L860 220 H1220" />
        <path d="M300 540 V700" />
        <path d="M600 460 V680" />
        <path d="M940 380 V180" />
        <path d="M220 380 V180" />
        <path d="M540 300 V120" />
      </g>
      <g fill="currentColor">
        <circle cx="300" cy="540" r="7" />
        <circle cx="600" cy="460" r="7" />
        <circle cx="940" cy="380" r="7" />
        <circle cx="220" cy="380" r="5" />
        <circle cx="460" cy="380" r="5" />
        <circle cx="540" cy="300" r="7" />
        <circle cx="780" cy="220" r="5" />
        <circle cx="860" cy="220" r="5" />
      </g>
    </svg>
  );
}
