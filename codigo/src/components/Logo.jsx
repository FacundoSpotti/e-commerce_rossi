function Logo() {
  return (
    <span className="logo" aria-label="ROSSI">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <g fill="currentColor">
          <circle cx="16" cy="16" r="4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 16 + Math.cos(angle) * 7;
            const y1 = 16 + Math.sin(angle) * 7;
            const x2 = 16 + Math.cos(angle) * 14;
            const y2 = 16 + Math.sin(angle) * 14;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </svg>
      ROSSI
    </span>
  );
}

export default Logo;
