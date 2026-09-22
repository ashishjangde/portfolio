import { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export function AnimatedGradientText({
  children,
  className,
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline bg-gradient-to-r from-primary via-emerald-400 to-foreground bg-clip-text text-transparent font-extrabold",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
