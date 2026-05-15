export default function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-[#0b0b0b] px-6">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fcd65c]/10 blur-[140px]" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-[#fcd65c]/20 bg-[#fcd65c]/5 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#fcd65c]" />

          <p className="text-[12px] uppercase tracking-[0.25em] text-[#fcd65c]">
            In Progress
          </p>
        </div>

        {/* heading */}
        <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-7xl">
          Something
          <span className="text-[#fcd65c]"> amazing</span> is coming soon.
        </h1>

        {/* description */}
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/55 md:text-[16px]">
          I’m currently building this page with a strong focus on clean design,
          smooth interactions, and a modern user experience.
        </p>

        {/* button */}
        <button className="mt-10 rounded-2xl border border-[#fcd65c]/30 bg-[#fcd65c]/10 px-6 py-3 text-sm font-medium text-[#fcd65c] transition-all duration-300 hover:bg-[#fcd65c] hover:text-black">
          Launching Soon ✨
        </button>
      </div>
    </div>
  );
}
