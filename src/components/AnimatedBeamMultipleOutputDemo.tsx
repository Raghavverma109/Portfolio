import React, { forwardRef, useRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import {
  User,
  MessageSquare,
  Database,
  FileText,
  MessageCircle,
  BookOpen,
  Cpu
} from "lucide-react"

// Clean Circle wrapper component
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-25 items-center justify-center rounded-full border-2 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] transition-transform hover:scale-110 duration-300",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

interface AnimatedBeamMultipleOutputDemoProps {
  className?: string
}

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: AnimatedBeamMultipleOutputDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-end overflow-hidden py-10 pl-10 pr-0",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        {/* Destination (User) */}
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="border-blue-500/30">
            <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </Circle>
        </div>

        {/* Central Hub (OpenAI / AI Engine) */}
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 border-purple-500/40 bg-purple-50/50 dark:bg-purple-950/20">
            <Cpu className="h-8 w-8 text-purple-600 dark:text-purple-400 animate-pulse" />
          </Circle>
        </div>

        {/* Integrations (Inputs) */}
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={div1Ref} className="border-green-500/20">
            <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
          </Circle>
          <Circle ref={div2Ref} className="border-blue-500/20">
            <FileText className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          </Circle>
          <Circle ref={div3Ref} className="border-emerald-500/20">
            <MessageSquare className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
          </Circle>
          <Circle ref={div4Ref} className="border-pink-500/20">
            <MessageCircle className="h-6 w-6 text-pink-500 dark:text-pink-400" />
          </Circle>
          <Circle ref={div5Ref} className="border-amber-500/20">
            <BookOpen className="h-6 w-6 text-amber-500 dark:text-amber-400" />
          </Circle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={1.5}
        gradientStartColor="#10B981"
        gradientStopColor="#8B5CF6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={1.5}
        gradientStartColor="#3B82F6"
        gradientStopColor="#8B5CF6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={1.5}
        gradientStartColor="#10B981"
        gradientStopColor="#8B5CF6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={1.5}
        gradientStartColor="#EC4899"
        gradientStopColor="#8B5CF6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={1.5}
        gradientStartColor="#F59E0B"
        gradientStopColor="#8B5CF6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={1.5}
        gradientStartColor="#8B5CF6"
        gradientStopColor="#3B82F6"
      />
    </div>
  )
}
