import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newgenlogo from "../assets/newgen_logo.png";
import matrixbg from "../assets/matrix-bg.png";

const blockedDomains = ["gmail", "rediffmail", "hotmail"];

export default function TashkeelGrid() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 
  const [organization, setOrganization] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  if (emailError || !email || !name || !organization || isSubmitting) return;

  setIsSubmitting(true);

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
      setIsSubmitting(false);
    }
  } catch (error) {
    console.error(error);
    alert("Submission failed.");
    setIsSubmitting(false);
  }
};


  return (
    <div
      className="font-montserrat relative min-h-screen overflow-hidden text-white bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${matrixbg})` }}
    >
      <div className="absolute inset-0 bg-black/10" />

          <img
            src={newgenlogo}
            alt="Newgen Logo"
            className="absolute top-[7%] left-1/2 -translate-x-1/2 w-[100px] sm:w-[120px] lg:w-[130px]"
          />

          <div className="absolute top-[35%] left-[13%] sm:left-[17%] flex items-center gap-2 sm:gap-3">
            {["B", "A", "N", "K"].map((letter) => (
              <div
                key={letter}
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                text-xs sm:text-sm font-bold tracking-[0.28em] pl-[2px]
                bg-white/10 border border-orange-300/80 text-orange-200 backdrop-blur-md overflow-hidden
                shadow-[0_0_14px_rgba(251,146,60,0.55)]
                transition-all duration-300 hover:scale-110 hover:bg-white/15 hover:shadow-[0_0_24px_rgba(251,146,60,0.8)]"
              >
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/45 to-transparent rounded-full pointer-events-none" />
                {letter}
              </div>
            ))}
          </div>

          <p className="absolute left-1/2 -translate-x-1/2 bottom-[20%] whitespace-nowrap text-center text-zinc-200/90 text-[clamp(0.6rem,1.3vw,0.85rem)] tracking-widest font-medium">
            2 Minutes&nbsp;|&nbsp;4x4 Grid&nbsp;|&nbsp;Domain Masters Wanted
          </p>

          <button
            onClick={() => setOpen(true)}
            className="absolute left-1/2 -translate-x-1/2 bottom-[8%] px-10 py-2.5 rounded-full
            text-white text-sm sm:text-base font-semibold italic
            bg-gradient-to-b from-[#ffbf7e] to-[#ff8a2a]
            shadow-[0_6px_18px_rgba(255,138,42,0.4)]
            hover:from-[#ffd09f] hover:to-[#ff972f] hover:scale-105
            transition-all duration-300"
          >
            Play Now
          </button>

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
                disabled={!!emailError || !email || !name || !organization || isSubmitting}
                className={`w-full mt-4 py-2 rounded-full font-semibold tracking-wider ${
                  emailError || !email || !name || !organization || isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(255,140,0,0.6)]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
