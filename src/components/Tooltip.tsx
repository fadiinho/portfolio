import { ReactNode, useState } from "react";

export default function Tooltip({ children, text, onClick }: { className?: string; text: string; children: ReactNode, onClick?: () => void }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={onClick}
    >
      {showTooltip && (
        <span className={`p-1 z-10 text-sm translate-x-12 translate-y-2 flex items-center gap-2 text-center absolute pointer-events-none bg-black rounded-lg `}>
          {text}
        </span>
      )}

      {children}
    </div>
  )
}
