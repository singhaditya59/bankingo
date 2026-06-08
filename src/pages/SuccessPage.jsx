import newgenlogo from "../assets/newgen_logo.png";

export default function SuccessPage() {
  return (
    <div
      className="
        font-montserrat
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-r from-blue-900 via-purple-900 to-purple-950
      "
    >
      {/* Purple Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-black/60" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-purple-900/60 to-transparent pointer-events-none" />

      {/* Content Card */}
      <div
        className="
          relative z-10
          max-w-2xl
          w-full
          mx-6
          text-center
          px-8 py-12
          rounded-2xl
          backdrop-blur-xl
          bg-white/5
          border border-orange-400/40
          shadow-[0_0_60px_rgba(255,140,0,0.25)]
        "
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
        <img
            src={newgenlogo}
            alt="Newgen Logo"
            className="w-[100px] sm:w-[120px] lg:w-[140px] h-auto"
        />
        </div>



        {/* Subheading */}
        <h2
          className="
            mt-4
            text-xl sm:text-2xl
            font-bold
            text-orange-300
            leading-snug
          "
        >
          You've Successfully Solved
          The Banking Grid
        </h2>

        <h2 className="mt-6 text-xl sm:text-1xl font-extrabold text-white tracking-[0.25em] mb-2">
        You came in as a Domain Master.  
        </h2>

        {/* Message */}
        <p className="mt-6 text-orange-400 text-xl sm:text-2xl font-extrabold leading-relaxed">
          You leave with the X Factor.
        </p>

        <h2 className="mt-6 text-xl sm:text-1xl font-extrabold text-white tracking-[0.25em] mb-2">
        Because modern banking isn't about knowing the domains.
        <br />
        It's about knowing what connects them.
        </h2>

        <a
  href="https://newgensoft.com/solutions/industries/financial-institutions/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block
    mt-10
    px-12 py-3
    rounded-full
    text-orange-400
    text-lg font-semibold tracking-widest
    border border-orange-400/70
    bg-white/5
    backdrop-blur-xl
    shadow-[0_0_20px_rgba(255,140,0,0.5)]
    hover:bg-orange-500/20
    hover:shadow-[0_0_35px_rgba(255,140,0,0.8)]
    transition-all duration-300
    text-center
    cursor-pointer
  "
>
  Explore X
</a>

      </div>
    </div>
  );
}
