import { ReactNode } from "react";

export default function SubTitle({ children, className, titleChar }: { children: string | ReactNode, className?: string, titleChar?: string }) {
  return (
    <h2 className={`my-2 font-bold text-xl tracking-widest sm:text-2xl ${className ?? ""}`}>
      <span className="text-primary">{titleChar ?? "#"}</span>
      {children}
    </h2>
  )
}
