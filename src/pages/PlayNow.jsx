import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import skyline from "../assets/skyline.png";
import newgenlogo from "../assets/newgen_logo.png";

const blockedDomains = ["gmail", "rediffmail", "hotmail"];

export default function TashkeelGrid() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 
  const [organization, setOrganization] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    setEmail(value);

    if (!value.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const domain = value.split("@")[1]?.toLowerCase();

    if (blockedDomains.some((d) => domain.includes(d))) {
      setEmailError(
        "Personal email IDs are not allowed. Please use your work email."
      );
    } else {
      setEmailError("");
    }
  };

  /*const handleSubmit = () => {
    if (emailError || !email) return;
    setOpen(false);
    navigate("/power-your-bank");
  };*/

  const handleSubmit = async () => {
  if (emailError || !email || !name || !organization) return;

  try {
    const response = await fetch(window.APP_CONFIG.GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        organization,
      }),
    });

    const result = await response.json();

    if (result.status === "success") {
      setOpen(false);
      navigate("/power-your-bank");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Submission failed.");
  }
};


  return (
    <div className="font-montserrat relative min-h-screen flex items-center justify-center overflow-hidden
      bg-[radial-gradient(circle_at_70%_40%,#2a003f_0%,#160024_40%,#0b0015_70%,#000000_100%)]">

      {/* Soft purple overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-black/60" />

      {/* Skyline */}
      <div className="absolute -bottom-10 sm:-bottom-14 md:-bottom-20 left-0 w-full pointer-events-none">
      <img
          src={skyline}
          alt="City Skyline"
          className="w-full object-cover opacity-30"
      />
      </div>

      {/* Fade effect above skyline */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-purple-900/60 to-transparent pointer-events-none" />

      <div className="
  relative z-10 w-full max-w-[1200px]
  flex flex-col lg:flex-row
  items-center lg:items-start
  justify-center lg:justify-between
  px-6 sm:px-8
  gap-16
">



        {/* ================= GRID SECTION ================= */}
        <div className="flex flex-col items-center">

          <div className="grid grid-cols-4 gap-6">
            {[
              "", "", "", "",
              "B", "A", "N", "K",
              "", "", "", "",
              "", "", "", "",
            ].map((letter, idx) => (
              <div
                key={idx}
                className={`
                    relative
                    w-16 h-16 sm:w-20 sm:h-20
                    rounded-full
                    flex items-center justify-center
                    text-xl sm:text-2xl font-bold tracking-wider
                    backdrop-blur-md
                    border
                    overflow-hidden
                    transition-all duration-300 hover:scale-105
                ${
                    letter
                    ? `
                    bg-orange-500/10
                    border-orange-400/80
                    text-orange-300
                    shadow-[0_0_16px_rgba(251,146,60,0.6)]
                    `
                    : `
                    bg-white/5
                    border-white/25
                    text-white
                    shadow-[0_0_10px_rgba(255,255,255,0.15)]
                    `
                  }
                `}
                >
                {/* Gloss reflection */}
                <div className="absolute top-0 left-0 w-full h-1/2 
                bg-gradient-to-b from-white/40 to-transparent 
                 rounded-full pointer-events-none" />
                  {letter}
              </div>
            ))}
          </div>

          {/* PLAY BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="
  mt-10
  px-12 py-3
  rounded-full
  text-orange-400
  text-lg font-semibold tracking-widest
  border-2 border-orange-400
  bg-white/5
  backdrop-blur-xl
  shadow-[0_0_20px_rgba(255,140,0,0.6)]
  drop-shadow-[0_0_10px_rgba(255,140,0,0.8)]
  animate-pulse
  hover:bg-orange-500/20
  hover:shadow-[0_0_40px_rgba(255,140,0,1)]
  hover:text-orange-300
  transition-all duration-300
"

        >
            LET'S BEGIN
          </button>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="
  relative
  w-full lg:w-[480px]
  text-center lg:text-right
  text-white
  flex flex-col
  items-center lg:items-end
">



          {/* Logo */}
<img
  src={newgenlogo}
  alt="Newgen Logo"
  className="
    w-[90px] sm:w-[110px] lg:w-[125px]
    mb-10
    self-center lg:self-end
  "
/>



          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-400 mb-2 leading-tight tracking-wide drop-shadow-[0_0_20px_rgba(255,140,0,0.6)]">
            ترتيب
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.25em] mb-2">

            GRID
          </h2>

          <p className="text-orange-300 text-sm font-medium italic mb-8 tracking-wide">
            What’s Your BQ (Banking Quotient)?
          </p>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">

            Domain Masters Wanted.
          </h3>

          <p className="text-md font-light opacity-100 tracking-wider">
            Time to Stress-test Your knowledge
          </p>
        </div>
      </div>

      {/* ================= POPUP ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="relative w-full max-w-lg p-8 rounded-2xl
            bg-[#150024]
            border border-orange-400/40
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(255,140,0,0.4)]">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-orange-400 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide">
  Tell Us About Yourself
</h3>


            <div className="space-y-4">

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none font-medium"
              />

              <div>
                <input
                  type="email"
                  placeholder="Work Email ID"
                  value={email}
                  onChange={(e) => validateEmail(e.target.value)}
                  className={`w-full bg-white/10 border rounded-lg px-4 py-2 text-white focus:outline-none font-medium ${
                    emailError ? "border-red-500" : "border-white/20"
                  }`}
                />
                {emailError && (
                  <p className="text-xs text-red-400 mt-1">
                    {emailError}
                  </p>
                )}
              </div>

              <input
                type="text"
                placeholder="Company Name"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none font-medium"
              />

              <button
                onClick={handleSubmit}
                disabled={!!emailError || !email}
                className={`w-full mt-4 py-2 rounded-full font-semibold tracking-wider ${
                  emailError || !email
                    ? "bg-gray-600"
                    : "bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(255,140,0,0.6)]"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
