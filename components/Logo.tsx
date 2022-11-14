export default function Logo({ className, blocksClassName }: { className?: string, blocksClassName?: string }) {
  const commonClasses = `w-[3px] h-[3px] ${blocksClassName ?? ""}`;

  return (
    <span className={`mx-2 w-[12px] h-[12px] grid grid-cols-4 grid-rows-4 ${className ?? ""}`}>
      <span className={`${commonClasses} col-start-3 bg-white`}></span>
      <span className={`${commonClasses} col-start-4 bg-white`}></span>
      <span className={`${commonClasses} row-start-2 col-start-4 bg-white`}></span>
      <span className={`${commonClasses} row-start-3 col-start-4 bg-white`}></span>
      <span className={`${commonClasses} row-start-3 col-start-3 bg-white`}></span>
      <span className={`${commonClasses} row-start-2 bg-white`}></span>
      <span className={`${commonClasses} row-start-2 col-start-2 bg-white`}></span>
      <span className={`${commonClasses} row-start-3 bg-white`}></span>
      <span className={`${commonClasses} row-start-4 bg-white`}></span>
      <span className={`${commonClasses} row-start-4 col-start-2 bg-white`}></span>
    </span>
  )
}
