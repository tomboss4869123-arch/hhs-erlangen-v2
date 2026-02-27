interface HouseLogoProps {
  className?: string;
  blue?: string;
  red?: string;
  showText?: boolean;
}

export default function HouseLogo({
  className = "h-10 w-10",
  blue = "#0055a5",
  red = "#e2001a",
  showText = false,
}: HouseLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Roof */}
      <path d="M60 8L10 52h100L60 8z" fill={blue} />
      {/* Chimney */}
      <rect x="78" y="20" width="12" height="22" rx="1" fill={blue} />
      {/* House body */}
      <rect x="22" y="52" width="76" height="56" rx="2" fill={blue} />
      {/* Door */}
      <rect x="48" y="72" width="24" height="36" rx="2" fill="white" />
      {/* Door knob */}
      <circle cx="66" cy="92" r="2.5" fill={red} />
      {/* Left window */}
      <rect x="30" y="62" width="14" height="14" rx="2" fill="white" />
      <line x1="37" y1="62" x2="37" y2="76" stroke={blue} strokeWidth="1.5" />
      <line x1="30" y1="69" x2="44" y2="69" stroke={blue} strokeWidth="1.5" />
      {/* Right window */}
      <rect x="76" y="62" width="14" height="14" rx="2" fill="white" />
      <line x1="83" y1="62" x2="83" y2="76" stroke={blue} strokeWidth="1.5" />
      <line x1="76" y1="69" x2="90" y2="69" stroke={blue} strokeWidth="1.5" />
      {showText && (
        <>
          <text
            x="60"
            y="118"
            textAnchor="middle"
            fill={red}
            fontSize="11"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            {"Hubert's"}
          </text>
        </>
      )}
    </svg>
  );
}
