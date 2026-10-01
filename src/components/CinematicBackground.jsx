const FRAME_CORNERS = [
  "left-4 top-4 border-l border-t md:left-10 md:top-10",
  "right-4 top-4 border-r border-t md:right-10 md:top-10",
  "left-4 bottom-4 border-b border-l md:bottom-10 md:left-10",
  "right-4 bottom-4 border-b border-r md:bottom-10 md:right-10",
];

const TIMELINE_CLIPS = [
  { left: "0%", width: "34%", height: "26px" },
  { left: "36%", width: "22%", height: "40px" },
  { left: "60%", width: "18%", height: "18px" },
  { left: "80%", width: "20%", height: "32px" },
];

function CinematicBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      {/* Base vertical gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#0A0A0A]" />

      {/* Oversized film strips, partially off-screen */}
      <div className="absolute inset-y-[-30%] left-[-330px] w-[440px] rotate-[-14deg] opacity-[0.07] cine-animate-drift sm:left-[-230px] sm:w-[600px] sm:opacity-[0.1]">
        <div className="cine-filmstrip h-full w-full" />
      </div>
      <div className="absolute inset-y-[-30%] right-[-340px] w-[420px] rotate-[12deg] opacity-[0.065] cine-animate-drift sm:right-[-250px] sm:w-[560px] sm:opacity-[0.09]">
        <div className="cine-filmstrip h-full w-full" />
      </div>

      {/* Soft radial gradients fading into black */}
      <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.055),transparent_65%)] blur-[60px]" />
      <div className="absolute bottom-[-25%] left-[-10%] h-[60vh] w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)] blur-[80px]" />
      <div className="absolute right-[-15%] top-[35%] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035),transparent_70%)] blur-[90px]" />

      {/* Viewfinder marks */}
      <div className="cine-animate-float absolute left-[8%] top-[22%] h-16 w-24 opacity-[0.07] sm:h-24 sm:w-32">
        <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-white" />
        <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-white" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white" />
        <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-white/50" />
        <span className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-white/50" />
      </div>

      <div className="cine-animate-float absolute right-[10%] top-[62%] h-16 w-24 opacity-[0.06] [animation-delay:-6s]">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rotate-45 border-t border-r border-white" />
        <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rotate-[225deg] border-t border-r border-white" />
      </div>

      {/* Editing timeline */}
      <div className="absolute right-[6%] top-[30%] w-40 opacity-[0.06] sm:w-56">
        <div className="h-px w-full bg-white/40" />
        <div className="relative mt-3 h-12">
          {TIMELINE_CLIPS.map((clip) => (
            <span
              key={clip.left}
              style={{ left: clip.left, width: clip.width, height: clip.height }}
              className="absolute top-0 rounded-[2px] border border-white/70 bg-white/[0.03]"
            />
          ))}
        </div>
        <div className="mt-3 h-px w-2/3 bg-white/30" />
      </div>

      <div className="absolute left-[7%] top-[70%] w-36 opacity-[0.05] sm:w-48">
        <div className="h-px w-1/2 bg-white/40" />
        <div className="mt-2 flex items-end gap-1">
          {[10, 22, 14, 30, 18, 26, 12].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px` }}
              className="w-1 rounded-full bg-white/70"
            />
          ))}
        </div>
      </div>

      {/* Thin geometric corner frames */}
      {FRAME_CORNERS.map((pos) => (
        <span
          key={pos}
          className={`absolute h-8 w-8 border-white/10 md:h-14 md:w-14 md:border-white/15 ${pos}`}
        />
      ))}

      {/* Vignette + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
      <div className="cine-grain cine-animate-grain absolute inset-0 opacity-[0.055]" />
    </div>
  );
}

export default CinematicBackground;
