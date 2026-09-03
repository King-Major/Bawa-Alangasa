// The site's recurring mark: a sun rising over a horizon line. It stands
// for both halves of Ibrahim's work — worship breaking through the dark,
// and clarity breaking through confusion — without needing a caption.
export default function ClarityMark({ className = "w-10 h-10", animate = false }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <line
        x1="8"
        y1="42"
        x2="56"
        y2="42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
        className="text-amber"
      />
      <g className={animate ? "clarity-rays" : undefined}>
        <path
          d="M18 42a14 14 0 0 1 28 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-amber"
        />
        {[
          [32, 10, 32, 17],
          [15, 17, 19, 23],
          [49, 17, 45, 23],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity={i === 0 ? 0.95 : 0.6}
            className="text-amber-soft"
          />
        ))}
      </g>
    </svg>
  );
}
