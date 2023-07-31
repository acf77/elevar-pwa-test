import { cn } from "@/lib/utils"

type StackProps = {
  children: React.ReactNode
  direction?: 'row' | 'col'
  gap?: number
  className?: string
}

const Stack = ({ children, className, direction = 'col', gap = 2 }: StackProps) => {

  const stackStyle = cn(`flex flex-${direction} gap-${gap}`, className)

  return (
    <div className={stackStyle} >
      {children}
    </div>
  )
}

export { Stack }
