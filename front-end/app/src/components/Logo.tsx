interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 34, className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="0.5" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="bubble-grad" x1="24" y1="20" x2="56" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F5F3FF" />
        </linearGradient>
      </defs>
      <rect width="80" height="80" rx="20" fill="url(#logo-grad)" />
      <path
        d="M24 26c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v16c0 3.3-2.7 6-6 6H38l-8 8v-8c-3.3 0-6-2.7-6-6V26z"
        fill="url(#bubble-grad)"
        fillOpacity="0.95"
      />
      <circle cx="34" cy="34" r="3" fill="#8B5CF6" fillOpacity="0.85" />
      <circle cx="40" cy="34" r="3" fill="#8B5CF6" fillOpacity="0.65" />
      <circle cx="46" cy="34" r="3" fill="#8B5CF6" fillOpacity="0.45" />
      <rect x="46" y="44" width="12" height="7" rx="3.5" fill="white" fillOpacity="0.35" />
    </svg>
  )
}
