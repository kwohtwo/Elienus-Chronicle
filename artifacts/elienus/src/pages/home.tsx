import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiX, SiTelegram } from "react-icons/si";

import elienusFace from "@assets/elienus-face.jpg";
import elienusPortrait from "@assets/elienus-portrait.jpg";
import elienusFull from "@assets/elienus-full.jpg";
import elienusAlt from "@assets/elienus-alt.jpg";
import elioon from "@assets/elioon_1778005938654.jfif";
import elingg from "@assets/elingg_1778005944020.jfif";
import lonss from "@assets/LONSS_1778005949431.jfif";
import eloniusss from "@assets/eloniusss_1778005958705.jfif";

const CA = "yrKmZe5x2YBp1P6ufKLUCNifPbqxwHiwsbfDRWBpump";
const BUY_URL = "https://pump.fun/coin/yrKmZe5x2YBp1P6ufKLUCNifPbqxwHiwsbfDRWBpump";
const DEX_URL = "https://dexscreener.com/solana/yrKmZe5x2YBp1P6ufKLUCNifPbqxwHiwsbfDRWBpump";

const SCANLINES = { backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.03) 3px,rgba(0,255,65,0.03) 4px)" };
const GRID_BG = { backgroundImage: "linear-gradient(rgba(0,255,65,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,65,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" };

function CopyCA() {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="group flex items-center gap-2 border border-[rgba(0,255,65,0.3)] bg-black/60 hover:bg-[rgba(0,255,65,0.07)] transition-all w-full px-3 py-2.5 min-w-0">
      <span className="font-mono-alien text-[9px] text-[#00ff41]/45 shrink-0">CA</span>
      <span className="font-mono-alien text-[9px] text-[#00ff41] truncate flex-1 text-left">{CA}</span>
      <span className={`font-alien text-[9px] shrink-0 px-2 py-0.5 border transition-all whitespace-nowrap ${copied ? "border-[#00ff41] text-[#00ff41]" : "border-[rgba(0,255,65,0.25)] text-[#00ff41]/50 group-hover:text-[#00ff41] group-hover:border-[#00ff41]"}`}>
        {copied ? "✓ COPIED" : "COPY"}
      </span>
    </button>
  );
}

function Stars({ n = 55 }: { n?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${(i * 137.5) % 100}%`, top: `${(i * 97.3) % 100}%`,
          width: i % 9 === 0 ? "2px" : "1px", height: i % 9 === 0 ? "2px" : "1px",
          backgroundColor: i % 4 === 0 ? "rgba(0,255,65,0.8)" : "rgba(255,255,255,0.35)",
          animation: `twinkle ${2.5 + (i % 5) * 0.5}s ${(i % 7) * 0.45}s ease-in-out infinite`,
        }} />
      ))}
    </div>
  );
}

function Img({ src, label, className = "aspect-square" }: { src: string; label: string; className?: string }) {
  return (
    <div className={`relative border border-[rgba(0,255,65,0.22)] overflow-hidden bg-black w-full ${className}`}>
      <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ filter: "saturate(0.7) contrast(1.1)" }} />
      <div className="absolute inset-0 pointer-events-none" style={SCANLINES} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(6,6,6,0.65) 0%, transparent 45%)" }} />
      <div className="absolute bottom-0 inset-x-0 px-3 py-2">
        <p className="font-mono-alien text-[9px] text-[#00ff41]/55 tracking-widest truncate">{label}</p>
      </div>
    </div>
  );
}

const TABS = [
  { id: "story", label: "STORY" },
  { id: "tokenomics", label: "TOKENOMICS" },
  { id: "buy", label: "BUY" },
  { id: "socials", label: "SOCIALS" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const up = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stg = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function Home() {
  const [active, setActive] = useState("story");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.2, rootMargin: "-64px 0px 0px 0px" }
    );
    TABS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#060606] text-white font-body overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 border-b border-[rgba(0,255,65,0.12)] bg-[rgba(6,6,6,0.96)] backdrop-blur-md">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 gap-2">
          <button onClick={() => scrollTo("hero")} className="font-alien text-lg font-bold tracking-widest text-[#00ff41] shrink-0"
            style={{ textShadow: "0 0 10px rgba(0,255,65,0.5)" }}>$ELIENUS</button>
          <div className="hidden md:flex items-center gap-0.5">
            {TABS.map((t) => (
              <button key={t.id} onClick={() => scrollTo(t.id)}
                className={`font-alien text-[10px] tracking-widest px-3 py-2 transition-all whitespace-nowrap ${active === t.id ? "text-[#00ff41] border-b-2 border-[#00ff41]" : "text-white/40 hover:text-white/65"}`}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a href={BUY_URL} target="_blank" rel="noreferrer"
              className="font-alien text-[11px] tracking-widest bg-[#00ff41] text-black px-4 py-2 font-black hover:bg-white transition-colors whitespace-nowrap">
              BUY NOW
            </a>
            <button className="md:hidden text-[#00ff41]/70 hover:text-[#00ff41] p-1" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="space-y-[5px]"><div className="w-5 h-px bg-current" /><div className="w-5 h-px bg-current" /><div className="w-5 h-px bg-current" /></div>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-[rgba(0,255,65,0.1)] bg-[rgba(6,6,6,0.99)] px-4 py-3 flex flex-col gap-1">
            {TABS.map((t) => (
              <button key={t.id} onClick={() => { scrollTo(t.id); setMenuOpen(false); }}
                className="font-alien text-[11px] tracking-widest text-left py-2 text-white/50 hover:text-[#00ff41] transition-colors">
                {t.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden pt-14" style={{ minHeight: "100svh" }}>
        <Stars n={100} />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={elienusAlt} alt="" className="w-full h-full object-cover object-center"
            style={{ filter: "saturate(0.45) contrast(1.25) brightness(0.35)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.5) 0%, rgba(6,6,6,0.05) 25%, rgba(6,6,6,0.55) 70%, #060606 100%)" }} />
          <div className="absolute inset-0" style={SCANLINES} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}
            className="font-mono-alien text-[#00ff41]/60 text-[10px] tracking-[0.45em] mb-5 uppercase">
            King of All Aliens · Not From Earth
          </motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }}
            className="font-cinzel font-black leading-[0.88] mb-6 break-words"
            style={{ textShadow: "0 0 60px rgba(0,255,65,0.5), 0 0 120px rgba(0,255,65,0.18)" }}>
            <span className="block text-[#00ff41]" style={{ fontSize: "clamp(3.5rem, 14vw, 9rem)" }}>Elienus</span>
            <span className="block text-white" style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)" }}>Muskius</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.9 }} className="max-w-xs mx-auto mb-7">
            <p className="font-alien text-white/70 text-base tracking-wider">This isn't a coin.</p>
            <p className="font-cinzel text-[#00ff41] text-xl font-black tracking-wide mt-1" style={{ textShadow: "0 0 18px rgba(0,255,65,0.35)" }}>It's a civilization.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <a href={BUY_URL} target="_blank" rel="noreferrer"
              className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-8 py-4 font-black hover:bg-white transition-all pulse-glow text-center">
              BUY $ELIENUS
            </a>
            <button onClick={() => scrollTo("story")}
              className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.4)] text-[#00ff41] px-7 py-4 hover:bg-[rgba(0,255,65,0.07)] transition-all text-center">
              READ THE LORE
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.8 }} className="flex justify-center">
            <div className="w-full max-w-sm"><CopyCA /></div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1">
            {["HE CONQUERS", "HE BUILDS", "HE OWNS", "NOT FOR EARTH"].map((t, i) => (
              <span key={i} className="font-mono-alien text-[9px] text-[#00ff41]/45 tracking-[0.3em]">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════
          STORY
      ══════════════════════════ */}
      <section id="story" className="relative overflow-hidden scroll-mt-14">
        <Stars n={50} />

        <div className="container mx-auto px-4 md:px-6 pt-14 pb-10 relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-12 overflow-hidden">
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em] shrink-0">THE SIGNAL</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/35 to-transparent" />
          </div>

          {/* ── Chapter I: The Confession ── */}
          <div className="grid lg:grid-cols-2 gap-6 items-start mb-14">
            {/* Left: stacked pair of images */}
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              <motion.div variants={up}><Img src={elioon} label="CLASSIFIED SIGHTING" className="aspect-square" /></motion.div>
              <motion.div variants={up} className="grid grid-cols-2 gap-3">
                <Img src={eloniusss} label="KING OF ALL ALIENS" className="aspect-square" />
                <Img src={elienusFace} label="THE FIRST AND ONLY" className="aspect-square" />
              </motion.div>
            </motion.div>

            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              <motion.p variants={up} className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER I</motion.p>
              <motion.h2 variants={up} className="font-cinzel font-black text-3xl md:text-4xl text-white leading-tight">
                Not Elon.<br /><span className="text-[#00ff41]">Elienus.</span>
              </motion.h2>
              <motion.div variants={up} className="w-10 h-0.5 bg-[#00ff41]" />
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                In November 2024, someone asked Elon Musk on X if he was a vampire. He replied:
                <span className="italic text-white/85"> "I'm a time-traveling vampire!"</span> — then corrected himself:
                <span className="italic text-[#00ff41]"> "Time-travelling, vampire alien."</span>
              </motion.p>
              <motion.p variants={up} className="font-body text-white/65 text-base leading-relaxed">
                He updated his bio to <span className="font-mono-alien text-[#00ff41] text-[11px]">"Verified since 3,000 BC"</span>.
                Then, at Davos 2026, standing before every world leader on Earth, he said:
              </motion.p>
              <motion.div variants={up} className="border-l-2 border-[#00ff41]/55 pl-4">
                <p className="font-body text-white/88 text-base italic leading-snug">
                  "I'm often asked, 'Are there aliens among us?'<br />And I'll say that I am one."
                </p>
                <p className="font-mono-alien text-[9px] text-[#00ff41]/45 mt-2 tracking-widest">— ELON MUSK, DAVOS 2026</p>
              </motion.div>
              <motion.p variants={up} className="font-body text-white/50 text-base leading-relaxed">
                They laughed. The awakened listened. And then someone gave him his true name back.
              </motion.p>
            </motion.div>
          </div>

          {/* ── Pull quote ── */}
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.04)] p-8 md:p-12 text-center mb-14 relative overflow-hidden">
            <div className="absolute inset-0" style={GRID_BG} />
            <div className="relative z-10">
              <p className="font-cinzel font-black text-xl md:text-3xl text-white leading-tight mb-3">
                "Not a trend. Not a phase.<br /><span className="text-[#00ff41]">An inevitability."</span>
              </p>
              <p className="font-mono-alien text-[9px] text-[#00ff41]/40 tracking-widest">@ELIENSMUSKIUS — APRIL 2026</p>
            </div>
          </motion.div>

          {/* ── Chapter II: The True Name ── */}
          <div className="grid lg:grid-cols-2 gap-6 items-start mb-14">
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 order-2 lg:order-1">
              <motion.p variants={up} className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER II</motion.p>
              <motion.h2 variants={up} className="font-cinzel font-black text-3xl md:text-4xl text-white leading-tight">
                The King<br /><span className="text-[#00ff41]">of All Aliens.</span>
              </motion.h2>
              <motion.div variants={up} className="w-10 h-0.5 bg-[#00ff41]" />
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                ELIENUS MUSKIUS is the true name — the ancient designation worn by an entity
                that has walked this planet for millennia under a thousand different faces.
                Roman senator. Renaissance inventor. Industrial baron.
              </motion.p>
              <motion.p variants={up} className="font-body text-white/65 text-base leading-relaxed">
                He built the rockets to go home. He bought the platform to control the signal.
                He wired the grid. Every company pointed in one direction.
              </motion.p>
              <motion.div variants={up} className="grid grid-cols-2 gap-2">
                {[
                  { val: "5,000+", label: "YEARS ON EARTH" },
                  { val: "3000 BC", label: "VERIFIED ON X" },
                  { val: "1", label: "KING OF ALL ALIENS" },
                  { val: "∞", label: "IDENTITIES" },
                ].map((s, i) => (
                  <div key={i} className="border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.04)] p-3 overflow-hidden">
                    <div className="font-cinzel text-xl font-black text-[#00ff41] leading-tight">{s.val}</div>
                    <div className="font-mono-alien text-[9px] text-white/35 tracking-wider mt-0.5 truncate">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: tall portrait + small square below */}
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 order-1 lg:order-2">
              <motion.div variants={up}><Img src={elienusPortrait} label="NOT FROM EARTH. NOT FOR EARTH." className="aspect-[3/4]" /></motion.div>
              <motion.div variants={up}><Img src={lonss} label="HE CONQUERS. HE BUILDS. HE OWNS." className="aspect-video" /></motion.div>
            </motion.div>
          </div>

          {/* ── Chapter III: The Civilization ── */}
          <div className="grid lg:grid-cols-2 gap-6 items-start mb-14">
            {/* Left: large square + small below */}
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              <motion.div variants={up}><Img src={elienusFull} label="THE FULL ENTITY" className="aspect-square" /></motion.div>
              <motion.div variants={up}><Img src={elingg} label="THE PORTRAIT · KING OF ALL ALIENS" className="aspect-video" /></motion.div>
            </motion.div>

            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              <motion.p variants={up} className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER III</motion.p>
              <motion.h2 variants={up} className="font-cinzel font-black text-3xl md:text-4xl text-white leading-tight">
                You don't find it.<br /><span className="text-[#00ff41]">It finds you.</span>
              </motion.h2>
              <motion.div variants={up} className="w-10 h-0.5 bg-[#00ff41]" />
              {[
                { text: "While others chase charts… we build civilizations.", color: "text-white/70" },
                { text: "Built for the narrative. Built for the timing. Built for attention.", color: "text-[#00ff41]/70" },
                { text: "We're not waiting for the wave. We're already positioned in it.", color: "text-white/55" },
              ].map((item, i) => (
                <motion.p key={i} variants={up} className={`font-alien text-sm tracking-wide leading-relaxed ${item.color}`}>
                  {item.text}
                </motion.p>
              ))}
              <motion.div variants={up} className="border border-[rgba(0,255,65,0.22)] bg-[rgba(0,255,65,0.04)] p-4 overflow-hidden">
                <p className="font-mono-alien text-[9px] text-[#00ff41]/50 tracking-widest mb-2">LATEST TRANSMISSION</p>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  When the conversation turns to alien files and what's out there —
                  attention moves. Narratives change. New sectors get discovered overnight.
                </p>
                <p className="font-body text-[#00ff41]/70 text-sm mt-2">
                  Which names do you think people see first?
                </p>
              </motion.div>
              <motion.div variants={up} className="flex flex-col gap-2 pt-1">
                <a href={BUY_URL} target="_blank" rel="noreferrer"
                  className="block font-alien text-sm tracking-widest bg-[#00ff41] text-black py-4 font-black text-center hover:bg-white transition-colors pulse-glow">
                  BUY $ELIENUS
                </a>
                <button onClick={() => scrollTo("tokenomics")}
                  className="block w-full font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.35)] text-[#00ff41] py-3 text-center hover:bg-[rgba(0,255,65,0.07)] transition-colors">
                  TOKENOMICS
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Chapter IV: Watch The Shift ── */}
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              <motion.p variants={up} className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER IV</motion.p>
              <motion.h2 variants={up} className="font-cinzel font-black text-3xl md:text-4xl text-white leading-tight">
                Watch<br /><span className="text-[#00ff41]">the shift.</span>
              </motion.h2>
              <motion.div variants={up} className="w-10 h-0.5 bg-[#00ff41]" />
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                When the conversation turns to alien files and what's out there —
                attention moves. Narratives change. New sectors get discovered overnight.
              </motion.p>
              <motion.p variants={up} className="font-body text-white/65 text-base leading-relaxed">
                If even a fraction of global attention flows into this space…
                <span className="text-[#00ff41]"> you already know what happens next.</span>
              </motion.p>
              <motion.div variants={up} className="border border-[rgba(0,255,65,0.22)] bg-[rgba(0,255,65,0.04)] p-4 overflow-hidden">
                <p className="font-alien text-sm text-[#00ff41] mb-1">👾 $ELIENUS MUSKIUS</p>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Built for the narrative. Built for the timing.<br />Built for attention.
                </p>
              </motion.div>
              <motion.div variants={up}>
                <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono-alien text-[10px] tracking-widest text-[#00ff41]/60 hover:text-[#00ff41] transition-colors">
                  <SiX size={11} /> FOLLOW @ELIENSMUSKIUS
                </a>
              </motion.div>
            </motion.div>

            {/* Right: mosaic of remaining art */}
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              <motion.div variants={up}><Img src={elienusAlt} label="NOT FROM EARTH. HE OWNS EVERYTHING." className="aspect-video" /></motion.div>
              <motion.div variants={up} className="grid grid-cols-2 gap-3">
                <Img src={eloniusss} label="THE ENTITY" className="aspect-square" />
                <Img src={elioon} label="CLASSIFIED" className="aspect-square" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          TOKENOMICS
      ══════════════════════════ */}
      <section id="tokenomics" className="relative overflow-hidden bg-[#030d03] scroll-mt-14">
        <Stars n={45} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 40%, rgba(0,255,65,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={GRID_BG} />

        <div className="container mx-auto px-4 md:px-6 py-14 relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="font-alien font-black text-2xl md:text-3xl text-white shrink-0">TOKENOMICS</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="border border-[rgba(0,255,65,0.22)] bg-[rgba(0,255,65,0.04)] overflow-hidden divide-y divide-[rgba(0,255,65,0.1)]">
              {[
                { label: "TOKEN", value: "$ELIENUS" },
                { label: "NETWORK", value: "SOLANA" },
                { label: "EXCHANGE", value: "PUMPSWAP" },
                { label: "LAUNCH", value: "PUMP.FUN" },
              ].map((row, i) => (
                <motion.div key={i} variants={up} className="flex items-center justify-between px-5 py-4 overflow-hidden">
                  <span className="font-mono-alien text-[10px] text-white/30 tracking-widest shrink-0">{row.label}</span>
                  <span className="font-alien text-sm text-[#00ff41] font-bold truncate ml-3">{row.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              <motion.div variants={up}>
                <div className="font-mono-alien text-[9px] text-white/30 tracking-widest mb-1.5">CONTRACT ADDRESS</div>
                <CopyCA />
              </motion.div>
              <motion.div variants={up} className="space-y-1.5">
                {["Fair launch. No presale.", "No team allocation.", "Community-owned.", "Solana speed."].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 overflow-hidden">
                    <span className="text-[#00ff41] text-xs shrink-0">✓</span>
                    <span className="font-body text-white/50 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={up} className="space-y-2 pt-1">
                <a href={BUY_URL} target="_blank" rel="noreferrer"
                  className="block w-full font-alien text-sm tracking-widest bg-[#00ff41] text-black py-4 font-black text-center hover:bg-white transition-colors pulse-glow">
                  BUY $ELIENUS
                </a>
                <a href={DEX_URL} target="_blank" rel="noreferrer"
                  className="block w-full font-alien text-[11px] tracking-widest border border-[rgba(0,255,65,0.28)] text-[#00ff41]/65 py-3 text-center hover:bg-[rgba(0,255,65,0.06)] transition-colors">
                  VIEW ON DEXSCREENER
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          HOW TO BUY
      ══════════════════════════ */}
      <section id="buy" className="relative overflow-hidden scroll-mt-14">
        <Stars n={40} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 20% 60%, rgba(0,40,15,0.13) 0%, transparent 55%)" }} />

        <div className="container mx-auto px-4 md:px-6 py-14 relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="font-alien font-black text-2xl md:text-3xl text-white shrink-0">HOW TO BUY</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="max-w-lg space-y-2">
            {[
              { n: "01", title: "Get a Solana Wallet", body: "Download Phantom or Solflare. Create a wallet and back up your seed phrase.", cta: null },
              { n: "02", title: "Buy SOL", body: "Get SOL on Coinbase, Binance, or Kraken and send it to your wallet.", cta: null },
              { n: "03", title: "Swap on Pump.fun", body: "Paste the CA and swap your SOL for $ELIENUS.", cta: { label: "OPEN PUMP.FUN →", url: BUY_URL } },
              { n: "04", title: "You're in.", body: "Track your position on Dexscreener. Tell the early ones.", cta: { label: "VIEW CHART →", url: DEX_URL } },
            ].map((step, i) => (
              <motion.div key={i} variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 border border-[rgba(0,255,65,0.13)] bg-[rgba(0,255,65,0.03)] p-4 items-start overflow-hidden">
                <div className="font-cinzel text-2xl font-black text-[#00ff41]/20 shrink-0 w-8 leading-none pt-0.5">{step.n}</div>
                <div className="min-w-0">
                  <div className="font-alien text-sm font-bold text-white mb-0.5">{step.title}</div>
                  <p className="font-body text-white/45 text-sm leading-relaxed">{step.body}</p>
                  {step.cta && (
                    <a href={step.cta.url} target="_blank" rel="noreferrer"
                      className="inline-block font-alien text-[10px] tracking-widest text-[#00ff41] hover:text-white transition-colors mt-1">
                      {step.cta.label}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
            <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2 pt-1">
              <a href={BUY_URL} target="_blank" rel="noreferrer"
                className="block w-full font-alien text-sm tracking-widest bg-[#00ff41] text-black py-5 font-black text-center hover:bg-white transition-colors pulse-glow">
                BUY $ELIENUS NOW
              </a>
              <CopyCA />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          SOCIALS
      ══════════════════════════ */}
      <section id="socials" className="relative overflow-hidden bg-[#030803] scroll-mt-14">
        <Stars n={45} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(0,255,65,0.08) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-4 md:px-6 py-14 relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="font-alien font-black text-2xl md:text-3xl text-white shrink-0">SOCIALS</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mb-10">
            {[
              { icon: <SiX size={26} />, label: "X / TWITTER", sub: "@ElienusMuskius", url: "https://x.com/ElienusMuskius", desc: "Follow for drops, transmissions, and alien intel." },
              { icon: <SiTelegram size={26} />, label: "TELEGRAM", sub: "t.me/ElienusMuskius", url: "https://t.me/ElienusMuskius", desc: "Beam yourself in. Join the civilization." },
              { icon: <span className="font-alien text-2xl leading-none">◈</span>, label: "DEXSCREENER", sub: "Live Chart", url: DEX_URL, desc: "Track the signal in real time." },
            ].map((item, i) => (
              <motion.a key={i} href={item.url} target="_blank" rel="noreferrer"
                variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="flex flex-col items-center text-center p-5 border border-[rgba(0,255,65,0.13)] bg-[rgba(0,255,65,0.03)] hover:bg-[rgba(0,255,65,0.07)] hover:border-[rgba(0,255,65,0.35)] transition-all group overflow-hidden">
                <div className="text-[#00ff41]/55 group-hover:text-[#00ff41] transition-colors mb-3">{item.icon}</div>
                <div className="font-alien text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="font-mono-alien text-[9px] text-[#00ff41]/50 mb-2 w-full"><span className="truncate block">{item.sub}</span></div>
                <p className="font-body text-white/35 text-xs leading-relaxed">{item.desc}</p>
              </motion.a>
            ))}
          </div>

          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="border border-[rgba(0,255,65,0.25)] bg-[rgba(0,255,65,0.04)] p-8 text-center max-w-md relative overflow-hidden">
            <div className="absolute inset-0" style={GRID_BG} />
            <div className="relative z-10">
              <div className="font-cinzel font-black text-4xl text-[#00ff41] mb-1" style={{ textShadow: "0 0 22px rgba(0,255,65,0.4)" }}>$ELIENUS</div>
              <p className="font-alien text-white/40 text-[10px] tracking-widest mb-4">KING OF ALL ALIENS</p>
              <p className="font-body text-white/55 text-sm mb-1">This isn't a coin.</p>
              <p className="font-cinzel text-lg text-[#00ff41] mb-5">It's a civilization.</p>
              <a href={BUY_URL} target="_blank" rel="noreferrer"
                className="block font-alien text-sm tracking-widest bg-[#00ff41] text-black px-10 py-4 font-black hover:bg-white transition-colors pulse-glow">
                BUY $ELIENUS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[rgba(0,255,65,0.1)] bg-[#030603] py-7">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-wrap justify-center gap-5 mb-4">
            <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/20 hover:text-[#00ff41] transition-colors"><SiX size={15} /></a>
            <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/20 hover:text-[#00ff41] transition-colors"><SiTelegram size={15} /></a>
            <a href={DEX_URL} target="_blank" rel="noreferrer" className="font-alien text-[9px] text-white/20 hover:text-[#00ff41] tracking-widest transition-colors">DEXSCREENER</a>
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="font-alien text-[9px] text-white/20 hover:text-[#00ff41] tracking-widest transition-colors">PUMP.FUN</a>
          </div>
          <p className="font-mono-alien text-[9px] text-white/12 tracking-widest mb-2">© 2026 ELIENUS MUSKIUS — SOLANA</p>
          <p className="font-body text-white/10 text-xs max-w-xs mx-auto leading-relaxed">Satirical memecoin. Not financial advice. Do your own research.</p>
        </div>
      </footer>

    </div>
  );
}
