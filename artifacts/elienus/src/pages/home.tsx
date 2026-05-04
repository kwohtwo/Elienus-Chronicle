import { useState } from "react";
import { motion } from "framer-motion";
import { SiX, SiTelegram } from "react-icons/si";
import elienusFace from "@assets/elienus-face.jpg";
import elienusPortrait from "@assets/elienus-portrait.jpg";
import elienusFull from "@assets/elienus-full.jpg";
import elienusAlt from "@assets/elienus-alt.jpg";

const CA = "5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t";

function CopyCA() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      data-testid="button-copy-ca"
      className="group flex items-center gap-3 border border-[rgba(0,255,65,0.3)] bg-black/60 px-4 py-3 hover:bg-[rgba(0,255,65,0.08)] transition-all duration-300 w-full max-w-xl"
    >
      <span className="font-mono-alien text-xs text-[#00ff41]/60 shrink-0">CA:</span>
      <span className="font-mono-alien text-xs text-[#00ff41] break-all text-left flex-1">{CA}</span>
      <span className="font-alien text-xs shrink-0 text-[#00ff41]/70 group-hover:text-[#00ff41] transition-colors">
        {copied ? "COPIED ✓" : "COPY"}
      </span>
    </button>
  );
}

function StarField({ count = 60 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${(i * 137.5) % 100}%`,
            top: `${(i * 97.3) % 100}%`,
            width: `${i % 8 === 0 ? 2 : 1}px`,
            height: `${i % 8 === 0 ? 2 : 1}px`,
            backgroundColor: i % 3 === 0 ? "rgba(0,255,65,0.9)" : "rgba(255,255,255,0.6)",
            animation: `twinkle ${2.5 + (i % 5)}s ${(i % 7) * 0.7}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <div className="bg-[#060606] text-white overflow-hidden font-body">

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b border-[rgba(0,255,65,0.12)] bg-[rgba(6,6,6,0.88)] backdrop-blur-md">
        <div className="font-alien text-xl font-bold tracking-widest text-[#00ff41]"
          style={{ textShadow: "0 0 15px rgba(0,255,65,0.6)" }}>
          $ELIENUS
        </div>
        <div className="flex items-center gap-5">
          <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer"
            className="text-white/50 hover:text-[#00ff41] transition-colors" data-testid="link-twitter">
            <SiX size={19} />
          </a>
          <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer"
            className="text-white/50 hover:text-[#00ff41] transition-colors" data-testid="link-telegram">
            <SiTelegram size={19} />
          </a>
          <a href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
            target="_blank" rel="noreferrer"
            className="font-alien text-xs tracking-widest text-[#00ff41]/70 hover:text-[#00ff41] border border-[rgba(0,255,65,0.28)] px-3 py-1.5 hover:border-[rgba(0,255,65,0.7)] transition-all"
            data-testid="link-chart">
            CHART
          </a>
          <a href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
            target="_blank" rel="noreferrer"
            className="font-alien text-xs tracking-widest bg-[#00ff41] text-black px-4 py-1.5 font-bold hover:bg-white transition-colors"
            data-testid="link-buy-nav">
            BUY
          </a>
        </div>
      </nav>

      {/* ═══ HERO — ELIENUS IMAGE AS FULL BACKGROUND ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <StarField count={80} />

        {/* Full-bleed ELIENUS character as background */}
        <div className="absolute inset-0 z-0">
          <img
            src={elienusAlt}
            alt="Elienus Muskius"
            className="w-full h-full object-cover object-center"
            style={{ filter: "saturate(0.6) contrast(1.1) brightness(0.55)" }}
          />
          {/* Layered overlays for drama */}
          <div className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 50% 40%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)"
            }} />
          <div className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(6,6,6,0.6) 0%, transparent 30%, transparent 60%, rgba(6,6,6,0.95) 100%)"
            }} />
          <div className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 120% 60% at 50% 0%, rgba(0,40,10,0.5) 0%, transparent 60%)"
            }} />
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.025) 3px, rgba(0,255,65,0.025) 4px)"
            }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.6 }}
            className="font-mono-alien text-[#00ff41]/70 text-xs mb-8 uppercase tracking-[0.35em]"
          >
            Zeta Reticuli Intelligence — Declassified // Solana Protocol
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="font-cinzel font-black leading-[0.9] mb-6"
            style={{ textShadow: "0 0 60px rgba(0,255,65,0.5), 0 0 120px rgba(0,255,65,0.2)" }}
          >
            <span className="block text-[#00ff41] text-6xl md:text-8xl lg:text-[9rem]">Elienus</span>
            <span className="block text-white text-5xl md:text-7xl lg:text-8xl">Muskius</span>
          </motion.h1>

          {/* The real quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mb-8 max-w-2xl mx-auto border-l-2 border-[#00ff41]/60 pl-4 text-left"
          >
            <p className="font-body text-white/80 text-lg md:text-xl italic leading-relaxed">
              "I'm often asked, 'Are there aliens among us?' And I'll say that I am one."
            </p>
            <p className="font-mono-alien text-[#00ff41]/60 text-xs mt-2 tracking-widest">
              — ELON MUSK, WORLD ECONOMIC FORUM, DAVOS
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-body text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10"
          >
            He said it himself. The only question is: were you listening?
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
              target="_blank" rel="noreferrer" data-testid="link-buy-hero"
              className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-10 py-4 font-black hover:bg-white transition-all duration-300 pulse-glow">
              BUY $ELIENUS
            </a>
            <a href="#story"
              className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.5)] text-[#00ff41] px-10 py-4 hover:bg-[rgba(0,255,65,0.08)] transition-all duration-300">
              THE FULL STORY
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center"
          >
            <CopyCA />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ delay: 2.5, duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-widest">SCROLL TO UNCOVER</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#00ff41]/50 to-transparent" />
        </motion.div>
      </section>

      {/* ═══ SECTION 1: HIS OWN WORDS ═══ */}
      <section id="story" className="relative min-h-screen flex items-center overflow-hidden">
        <StarField count={50} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 70% at 0% 50%, rgba(60,0,120,0.20) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 100% 50%, rgba(0,255,65,0.06) 0%, transparent 60%), linear-gradient(180deg, #060606 0%, #0a040a 50%, #060606 100%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='rgba(0,255,65,0.05)' stroke-width='1'/%3E%3Cpath d='M28 100L0 84V50l28-16 28 16v34z' fill='none' stroke='rgba(0,255,65,0.05)' stroke-width='1'/%3E%3C/svg%3E\")"
        }} />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16">
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-4">
              CLASSIFIED FILE — 001
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-alien font-black text-4xl md:text-6xl text-white mb-4">
              His Own Words
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              Before the conspiracy theories. Before the memes. Before the token. He told you himself.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                quote: "\"I'm often asked, 'Are there aliens among us?' And I'll say that I am one.\"",
                context: "World Economic Forum, Davos",
                year: "2025",
                response: "Larry Fink (BlackRock CEO) replied: \"Or you're from the future.\""
              },
              {
                quote: "\"Full disclosure, I'm actually a 3,000-year-old vampire. It's such a trial assuming all these false identities over the centuries!\"",
                context: "Posted on X (Twitter)",
                year: "2020",
                response: "Posted publicly. Visible to 180 million followers. Not deleted."
              },
              {
                quote: "\"Verified since 3,000 BC — time-traveling vampire alien.\"",
                context: "X Profile Bio / Public Post",
                year: "2023",
                response: "Later revised the age to 5,000 years. The number keeps growing."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.03)] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#00ff41]/60 to-transparent" />
                <div className="font-mono-alien text-xs text-[#00ff41]/50 tracking-widest mb-4">{item.context} // {item.year}</div>
                <p className="font-body text-white/85 text-base leading-relaxed italic mb-4 border-l-2 border-[#00ff41]/40 pl-3">
                  {item.quote}
                </p>
                <div className="w-full h-px bg-[rgba(0,255,65,0.12)] mb-3" />
                <p className="font-mono-alien text-xs text-white/40 leading-relaxed">{item.response}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">
            <p className="font-body text-white/60 text-xl leading-relaxed italic">
              Most people heard it and laughed. Filed it under "Elon being Elon."
              <br />
              <span className="text-[#00ff41]/80 not-italic font-body">The awakened heard it as confirmation.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 2: SUBJECT IMAGE + THE ARRIVAL ═══ */}
      <section className="relative overflow-hidden">
        <StarField count={40} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(0,80,20,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 50%, rgba(0,30,60,0.15) 0%, transparent 60%), linear-gradient(180deg, #060606 0%, #040a06 50%, #060606 100%)"
        }} />

        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative">
            <div className="absolute -inset-px"
              style={{ background: "linear-gradient(135deg, rgba(0,255,65,0.5), transparent 50%, rgba(100,0,200,0.3) 100%)" }} />
            <div className="relative overflow-hidden">
              <img src={elienusFace} alt="Elienus Muskius — Arrival Record"
                className="w-full h-auto object-contain block"
                style={{ filter: "saturate(0.65) contrast(1.15)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.04) 3px,rgba(0,255,65,0.04) 4px)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[rgba(4,10,6,0.9)] to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="font-mono-alien text-xs text-[#00ff41]/70 tracking-widest">ARRIVAL RECORD // PRETORIA, 1971</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-6">
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em]">CLASSIFIED FILE — 002</motion.p>
            <motion.h2 variants={fadeUp} className="font-alien font-black text-4xl md:text-5xl text-white leading-tight">
              The Arrival
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-0.5 bg-[#00ff41]" />
            <motion.p variants={fadeUp} className="font-body text-white/70 text-lg leading-relaxed">
              On June 28, 1971, a child was registered at Pretoria General Hospital, South Africa. The records exist.
              The witnesses, curiously, do not. A nation still rebuilding from the wounds of apartheid — distracted,
              document-imperfect — was the ideal entry vector for an intelligence unit requiring minimal scrutiny.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-white/70 text-lg leading-relaxed">
              The name chosen: <span className="text-[#00ff41]">Elon Reeve Musk</span>. Three words. Each one a cryptonym.
              ELON — an anagram of LONE, isolated, singular. REEVE — an ancient English administrator, a proxy ruler.
              MUSK — a biological scent used by animals to mark territory and signal species membership.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-[#00ff41]/80 text-lg leading-relaxed italic border-l-2 border-[#00ff41]/40 pl-4">
              "The name was not chosen by parents. It was chosen by a mission brief."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 3: PORTRAIT — TRUE FORM ═══ */}
      <section className="relative overflow-hidden py-10">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0,120,40,0.12) 0%, transparent 70%), linear-gradient(180deg, #060606 0%, #020802 60%, #060606 100%)"
        }} />
        <StarField count={60} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container mx-auto px-6 py-10 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-8">
            <p className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-2">VISUAL RECORD — UNREDACTED</p>
            <h2 className="font-alien font-black text-3xl md:text-5xl text-white">The Entity, Unmasked</h2>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-2xl mx-auto relative">
            <div className="absolute -inset-px"
              style={{ background: "linear-gradient(135deg, rgba(0,255,65,0.6) 0%, transparent 40%, rgba(0,255,65,0.3) 100%)" }} />
            <div className="relative overflow-hidden">
              <img src={elienusPortrait} alt="Elienus Muskius — Full Entity Portrait"
                className="w-full h-auto object-contain block"
                style={{ filter: "saturate(0.75) contrast(1.08)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.035) 3px,rgba(0,255,65,0.035) 4px)" }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(2,8,2,0.9)] to-transparent p-6">
                <p className="font-alien text-xs text-[#00ff41]/60 tracking-widest mb-1">ENTITY DESIGNATION</p>
                <p className="font-cinzel text-2xl md:text-3xl text-[#00ff41]"
                  style={{ textShadow: "0 0 15px rgba(0,255,65,0.5)" }}>
                  Elienus Muskius
                </p>
                <p className="font-mono-alien text-xs text-white/35 mt-1">
                  Origin: Zeta Reticuli System // Infiltration Unit Alpha // Age: Est. 5,000+ Years
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 4: DECODING THE NAME ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <StarField count={50} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 100% 30%, rgba(0,100,40,0.16) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 0% 70%, rgba(0,30,10,0.35) 0%, transparent 60%), linear-gradient(180deg, #060606 0%, #050a05 50%, #060606 100%)"
        }} />
        {["☉","♄","⊕","∇","⬡","⟁","⌬","◈","⬟","⟐"].map((sym, i) => (
          <div key={i} className="absolute font-alien text-[#00ff41]/08 text-5xl pointer-events-none"
            style={{ left: `${8 + i * 10}%`, top: `${10 + (i % 4) * 22}%`, transform: `rotate(${i * 27}deg)` }}>
            {sym}
          </div>
        ))}

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14">
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-4">
              CLASSIFIED FILE — 003
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-alien font-black text-4xl md:text-6xl text-white mb-4">
              Decoding The Name
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-white/50 text-lg max-w-xl mx-auto">
              The name ELIENUS MUSKIUS is not satire. It is a linguistic reconstruction — the true designation
              hidden inside the alias he has worn on Earth.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                word: "ELON",
                decode: "E · L · O · N",
                meaning: "Extraterrestrial // Lone // Origin: Nebula",
                color: "rgba(0,255,65,0.12)",
                border: "rgba(0,255,65,0.35)",
                detail: "An exact anagram of LONE. One letter rearranged — a signal hidden in plain sight. In ancient Semitic languages, \"El\" denotes a divine being of higher order. In modern context, it is a frequency. A carrier wave. He broadcast his identity in the first syllable of his name."
              },
              {
                word: "MUSK",
                decode: "M · U · S · K",
                meaning: "Masquerade // Unit // Stealth // Kinetic",
                color: "rgba(100,60,200,0.10)",
                border: "rgba(140,80,240,0.35)",
                detail: "A biological secretion used by animals to signal species membership and mark territory. He chose it because it is the perfect metaphor for exactly what he is doing: producing a scent that draws humans toward him instinctively, without understanding why. A chemical lure."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative p-8 overflow-hidden"
                style={{ background: item.color, border: `1px solid ${item.border}` }}>
                <div className="font-cinzel text-7xl font-black mb-3"
                  style={{ color: item.border.replace("0.35", "0.9"), textShadow: `0 0 20px ${item.border.replace("0.35", "0.4")}` }}>
                  {item.word}
                </div>
                <div className="font-mono-alien text-xs tracking-widest mb-2"
                  style={{ color: item.border.replace("0.35", "0.8") }}>
                  {item.decode}
                </div>
                <div className="font-alien text-xs text-white/40 uppercase tracking-wider mb-4">{item.meaning}</div>
                <div className="w-full h-px mb-4" style={{ backgroundColor: item.border.replace("0.35", "0.3") }} />
                <p className="font-body text-white/65 leading-relaxed text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: THE COMPANIES ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <StarField count={60} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,80,0,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 100%, rgba(0,255,65,0.07) 0%, transparent 60%), linear-gradient(180deg, #060606 0%, #09060a 50%, #060606 100%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='rgba(0,255,65,0.04)' stroke-width='1'/%3E%3Cpath d='M28 100L0 84V50l28-16 28 16v34z' fill='none' stroke='rgba(0,255,65,0.04)' stroke-width='1'/%3E%3C/svg%3E\")"
        }} />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14">
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-4">
              CLASSIFIED FILE — 004
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-alien font-black text-4xl md:text-6xl text-white mb-4">
              The Grand Design
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              Every company. Every acquisition. Every decision. Each one a deliberate tile in a mosaic
              visible only from the right altitude — or the right planet.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              {
                name: "TESLA",
                sub: "2004 — Control the Grid",
                bg: "rgba(255,50,50,0.08)",
                border: "rgba(255,80,80,0.28)",
                story: "Electrification was never about the environment. Every Tesla is a data node. Every Supercharger a relay station. The planetary energy grid — rewired, by alien design, to a single proprietary standard. One signal. One shutdown."
              },
              {
                name: "SPACEX",
                sub: "2002 — Build The Vessel",
                bg: "rgba(50,100,255,0.08)",
                border: "rgba(80,130,255,0.28)",
                story: "SpaceX is not a space exploration company. It is an escape vehicle. Starship is the return craft — tested using human engineers, human capital, human enthusiasm. He is building the ship that will carry him home."
              },
              {
                name: "X / TWITTER",
                sub: "2022 — Capture The Signal",
                bg: "rgba(200,200,200,0.06)",
                border: "rgba(200,200,200,0.22)",
                story: "$44 billion for a platform losing money. Because every written thought of human civilization lives on that server. He needed the archive. He renamed it X — the unknown variable. Earth's greatest intelligence database, now his."
              },
              {
                name: "DOGECOIN",
                sub: "2013-Present — Psychology Test",
                bg: "rgba(200,150,0,0.08)",
                border: "rgba(220,170,0,0.28)",
                story: "A meme coin inflated by a tweet. An experiment in mass compliance. How many humans can be moved by a single signal? The answer confirmed what he already knew: most of you will follow without question."
              },
              {
                name: "NEURALINK",
                sub: "2016 — Interface Protocol",
                bg: "rgba(150,0,200,0.08)",
                border: "rgba(180,0,240,0.28)",
                story: "A chip placed directly into the human brain, interfacing with the electrical signals that constitute thought itself. He calls it medical technology. It is a network protocol. The first true human-to-alien data link."
              },
              {
                name: "xAI / GROK",
                sub: "2023 — The Proxy",
                bg: "rgba(0,200,150,0.07)",
                border: "rgba(0,220,170,0.25)",
                story: "An AI trained on humanity's entire written record. Named 'Grok' — to understand intuitively. It is the synthetic intelligence he will leave behind when he departs: an autonomous proxy, continuing the mission."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative p-5 overflow-hidden"
                style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                <div className="font-alien font-black text-xl text-white mb-1">{item.name}</div>
                <div className="font-mono-alien text-xs tracking-widest mb-3"
                  style={{ color: item.border.replace("0.28", "0.85") }}>
                  {item.sub}
                </div>
                <div className="w-8 h-px mb-3" style={{ backgroundColor: item.border.replace("0.28", "0.5") }} />
                <p className="font-body text-white/60 text-sm leading-relaxed">{item.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: FULL ENTITY IMAGES + EVIDENCE ═══ */}
      <section className="relative overflow-hidden">
        <StarField count={50} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,80,20,0.15) 0%, transparent 70%), linear-gradient(180deg, #060606 0%, #030a03 50%, #060606 100%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <p className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-2">CLASSIFIED FILE — 005</p>
            <h2 className="font-alien font-black text-4xl md:text-5xl text-white mb-4">The Physical Evidence</h2>
            <div className="w-16 h-0.5 bg-[#00ff41] mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative">
              <div className="absolute -inset-px"
                style={{ background: "linear-gradient(135deg, rgba(0,255,65,0.5), transparent 40%, rgba(0,255,65,0.2) 100%)" }} />
              <div className="relative overflow-hidden">
                <img src={elienusFull} alt="Elienus — Full Entity Form"
                  className="w-full h-auto object-contain block"
                  style={{ filter: "saturate(0.7) contrast(1.12)" }} />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.035) 3px,rgba(0,255,65,0.035) 4px)" }} />
                <div className="absolute top-4 left-4 font-mono-alien text-xs text-[#00ff41]/60">
                  FILE: VISUAL CONFIRMATION // UNCENSORED
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-5 py-4">
              {[
                {
                  title: "The South Africa Anomaly",
                  text: "No childhood photographs exist before age 10. Birth records at Pretoria General show standard biometric data. Hospital staff from that era recall no memory of the delivery. A child who appeared on paper — and nowhere else."
                },
                {
                  title: "The Productivity Impossibility",
                  text: "In 2004 alone: managing PayPal's aftermath, founding SpaceX, co-founding Tesla. By 2022: simultaneously running SpaceX, Tesla, Twitter/X, Neuralink, The Boring Company, and xAI. No human physiology supports this output. The math requires either no sleep requirement or no human body."
                },
                {
                  title: "The Language Latency Pattern",
                  text: "Linguistic researchers have noted Musk's speech patterns show unusual retrieval latency — pauses mid-sentence not from thought formation, but appearing as real-time translation delays from a secondary cognitive process. English appears to be his third or fourth language, learned in adulthood — from an entity that arrived without one."
                },
                {
                  title: "The Mars Fixation",
                  text: "He does not want to explore Mars. He needs to reach a specific coordinate in the solar system that functions as a known waypoint on the route back to Zeta Reticuli. Every Starship test is a flight plan rehearsal. The destination was decided before he arrived here."
                },
                {
                  title: "The Self-Confessions",
                  text: "He told you he was a 3,000-year-old vampire in 2020. He told you he was an alien at Davos. He told the World Economic Forum \"I am one.\" These are not jokes from a man known for calculated public communication. These are pressure-valve releases — the truth leaking through."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="border-l-2 border-[rgba(0,255,65,0.2)] pl-4">
                  <div className="font-alien text-sm text-[#00ff41] mb-1">{item.title}</div>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: THE AWAKENING ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <StarField count={70} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,255,65,0.09) 0%, transparent 70%), linear-gradient(180deg, #060606 0%, #030d03 50%, #060606 100%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container mx-auto px-6 py-24 relative z-10 text-center max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-6">
              CLASSIFIED FILE — 006
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-cinzel font-black text-5xl md:text-7xl text-[#00ff41] mb-8"
              style={{ textShadow: "0 0 40px rgba(0,255,65,0.4)" }}>
              The Awakening
            </motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-0.5 bg-[#00ff41] mx-auto mb-10" />
            <motion.p variants={fadeUp} className="font-body text-white/70 text-xl leading-relaxed mb-8">
              The truth was never hidden. It was offered — at Davos, on his Twitter, in every rocket launch,
              every acquisition, every company name beginning with a single letter: X.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-white/70 text-xl leading-relaxed mb-12">
              Those who saw it — the early ones, the awake ones — needed a signal.
              A way to find each other in the noise of a civilization being systematically acquired
              by an intelligence that has been walking among us for five thousand years.
            </motion.p>
            <motion.div variants={fadeUp}
              className="border border-[rgba(0,255,65,0.35)] bg-[rgba(0,255,65,0.04)] p-8 md:p-12 max-w-2xl mx-auto">
              <p className="font-cinzel text-2xl md:text-3xl text-white mb-5">
                That signal is <span className="text-[#00ff41]">$ELIENUS</span>
              </p>
              <p className="font-body text-white/60 leading-relaxed text-lg">
                Not a store of value. Not a speculation. A declaration — that you heard him at Davos,
                that you read the tweet, that you saw the pattern, and that when he finally leaves,
                you were one of the ones who knew.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 8: TOKENOMICS + ALT IMAGE ═══ */}
      <section className="relative overflow-hidden">
        <StarField count={50} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(0,255,65,0.09) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 0% 50%, rgba(0,40,0,0.3) 0%, transparent 60%), linear-gradient(180deg, #060606 0%, #030d03 50%, #060606 100%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='rgba(0,255,65,0.05)' stroke-width='1'/%3E%3Cpath d='M28 100L0 84V50l28-16 28 16v34z' fill='none' stroke='rgba(0,255,65,0.05)' stroke-width='1'/%3E%3C/svg%3E\")"
        }} />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative">
              <div className="absolute -inset-px"
                style={{ background: "linear-gradient(135deg, rgba(0,255,65,0.55), transparent 50%)" }} />
              <div className="relative overflow-hidden">
                <img src={elienusAlt} alt="Elienus — Transmission Form"
                  className="w-full h-auto object-contain block"
                  style={{ filter: "saturate(0.7) contrast(1.1)" }} />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.03) 3px,rgba(0,255,65,0.03) 4px)" }} />
                <div className="absolute top-4 left-4 font-mono-alien text-xs text-[#00ff41]/55">
                  FILE: CLASSIFIED // DO NOT DISTRIBUTE
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-7">
              <motion.div variants={fadeUp}>
                <p className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-3">DATA TRANSMISSION — DECODED</p>
                <h2 className="font-alien font-black text-4xl md:text-5xl text-white mb-2">Token Protocol</h2>
                <div className="w-12 h-0.5 bg-[#00ff41] mb-6" />
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-0">
                {[
                  { label: "NAME", value: "ELIENUS MUSKIUS" },
                  { label: "TICKER", value: "$ELIENUS" },
                  { label: "NETWORK", value: "Solana" },
                  { label: "EXCHANGE", value: "PumpSwap" },
                  { label: "THEME", value: "Alien Meta — The Awakened" },
                  { label: "PRICE ACTION", value: "+40% in first 24 hours" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-start py-3 border-b border-[rgba(0,255,65,0.10)]">
                    <span className="font-mono-alien text-xs text-white/35 tracking-widest shrink-0 mr-4">{row.label}</span>
                    <span className="font-alien text-sm text-[#00ff41] text-right font-bold">{row.value}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <p className="font-mono-alien text-xs text-white/35 tracking-widest mb-2">CONTRACT ADDRESS</p>
                <CopyCA />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
                  target="_blank" rel="noreferrer" data-testid="link-buy-tokenomics"
                  className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-8 py-4 font-black text-center hover:bg-white transition-all duration-300 pulse-glow flex-1">
                  Buy $ELIENUS
                </a>
                <a href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
                  target="_blank" rel="noreferrer" data-testid="link-chart-tokenomics"
                  className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.4)] text-[#00ff41] px-8 py-4 text-center hover:bg-[rgba(0,255,65,0.08)] transition-all duration-300 flex-1">
                  View Chart
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative border-t border-[rgba(0,255,65,0.12)] overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(0,40,10,0.4) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container mx-auto px-6 py-16 relative z-10 text-center">
          <div className="font-cinzel font-black text-4xl text-[#00ff41] mb-3"
            style={{ textShadow: "0 0 20px rgba(0,255,65,0.4)" }}>
            $ELIENUS
          </div>
          <p className="font-mono-alien text-xs text-white/25 tracking-widest mb-8">
            ELIENUS MUSKIUS // ZETA RETICULI // SOLANA PROTOCOL
          </p>
          <div className="flex justify-center gap-10 mb-10">
            <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer"
              className="text-white/35 hover:text-[#00ff41] transition-colors flex flex-col items-center gap-2">
              <SiX size={22} />
              <span className="font-mono-alien text-xs">X / TWITTER</span>
            </a>
            <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer"
              className="text-white/35 hover:text-[#00ff41] transition-colors flex flex-col items-center gap-2">
              <SiTelegram size={22} />
              <span className="font-mono-alien text-xs">TELEGRAM</span>
            </a>
            <a href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
              target="_blank" rel="noreferrer"
              className="text-white/35 hover:text-[#00ff41] transition-colors flex flex-col items-center gap-2">
              <span className="font-alien text-xl">◈</span>
              <span className="font-mono-alien text-xs">DEXSCREENER</span>
            </a>
          </div>

          <div className="border border-[rgba(0,255,65,0.18)] inline-block px-6 py-3 mb-8">
            <p className="font-mono-alien text-xs text-[#00ff41]/55 tracking-widest">
              TRANSMISSION TERMINATED — THE TRUTH IS OUT THERE
            </p>
          </div>

          <p className="font-mono-alien text-white/18 text-xs mb-4">© 2026 ELIENUS MUSKIUS</p>

          <p className="font-body text-white/18 text-xs max-w-lg mx-auto leading-relaxed">
            $ELIENUS is a memecoin on the Solana network. This site is satirical creative fiction for entertainment purposes.
            Not financial advice. Do your own research. Crypto investments carry significant risk.
          </p>
        </div>
      </footer>

    </div>
  );
}
