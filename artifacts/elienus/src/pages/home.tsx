import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiX, SiTelegram } from "react-icons/si";
import elienusFace from "@assets/elienus-face.jpg";
import elienusPortrait from "@assets/elienus-portrait.jpg";
import elienusFull from "@assets/elienus-full.jpg";
import elienusAlt from "@assets/elienus-alt.jpg";

const CA = "5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t";
const BUY_URL = "https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t";
const DEX_URL = "https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t";

function CopyCA({ size = "normal" }: { size?: "normal" | "large" }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} data-testid="button-copy-ca"
      className={`group flex items-center gap-2 border border-[rgba(0,255,65,0.35)] bg-black/70 hover:bg-[rgba(0,255,65,0.1)] transition-all duration-200 w-full ${size === "large" ? "px-5 py-4" : "px-4 py-3"}`}>
      <span className="font-mono-alien text-[10px] text-[#00ff41]/50 shrink-0">CA</span>
      <span className={`font-mono-alien text-[#00ff41] break-all text-left flex-1 ${size === "large" ? "text-xs" : "text-[10px]"}`}>{CA}</span>
      <span className={`font-alien text-[10px] shrink-0 px-2 py-1 border transition-all duration-200 ${copied ? "border-[#00ff41] text-[#00ff41] bg-[rgba(0,255,65,0.15)]" : "border-[rgba(0,255,65,0.3)] text-[#00ff41]/60 group-hover:text-[#00ff41] group-hover:border-[#00ff41]"}`}>
        {copied ? "COPIED ✓" : "COPY"}
      </span>
    </button>
  );
}

function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} className="absolute rounded-full"
          style={{
            left: `${(i * 137.5) % 100}%`, top: `${(i * 97.3) % 100}%`,
            width: `${i % 9 === 0 ? 2 : 1}px`, height: `${i % 9 === 0 ? 2 : 1}px`,
            backgroundColor: i % 3 === 0 ? "rgba(0,255,65,0.9)" : "rgba(255,255,255,0.5)",
            animation: `twinkle ${2.5 + (i % 5) * 0.6}s ${(i % 7) * 0.5}s ease-in-out infinite`,
          }} />
      ))}
    </div>
  );
}

const TABS = [
  { id: "story", label: "STORY" },
  { id: "quotes", label: "THE PROOF" },
  { id: "companies", label: "HIS EMPIRE" },
  { id: "tokenomics", label: "TOKENOMICS" },
  { id: "buy", label: "WHERE TO BUY" },
  { id: "socials", label: "SOCIALS" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const [activeTab, setActiveTab] = useState("story");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveTab(e.target.id); });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#060606] text-white font-body overflow-x-hidden">

      {/* ══ STICKY NAV WITH TABS ══ */}
      <nav className="fixed top-0 w-full z-50 border-b border-[rgba(0,255,65,0.15)] bg-[rgba(6,6,6,0.95)] backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => scrollTo("hero")}
            className="font-alien text-lg font-bold tracking-widest text-[#00ff41] shrink-0"
            style={{ textShadow: "0 0 12px rgba(0,255,65,0.6)" }}>
            $ELIENUS
          </button>

          {/* Desktop Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => scrollTo(tab.id)}
                className={`font-alien text-[10px] tracking-widest px-3 py-1.5 transition-all duration-200 ${activeTab === tab.id ? "text-[#00ff41] border-b-2 border-[#00ff41]" : "text-white/40 hover:text-white/70"}`}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={BUY_URL} target="_blank" rel="noreferrer"
              className="font-alien text-xs tracking-widest bg-[#00ff41] text-black px-4 py-2 font-black hover:bg-white transition-colors"
              data-testid="link-buy-nav">
              BUY NOW
            </a>
            {/* Mobile menu toggle */}
            <button className="md:hidden text-[#00ff41]/70 hover:text-[#00ff41]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="w-5 space-y-1">
                <div className="h-px bg-current" /><div className="h-px bg-current" /><div className="h-px bg-current" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(0,255,65,0.12)] bg-[rgba(6,6,6,0.98)] px-4 py-2 flex flex-col gap-1">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => { scrollTo(tab.id); setMobileMenuOpen(false); }}
                className="font-alien text-xs tracking-widest text-left py-2 text-white/60 hover:text-[#00ff41] transition-colors">
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden pt-16"
        style={{ minHeight: "100svh" }}>
        <Stars />
        <div className="absolute inset-0 z-0">
          <img src={elienusAlt} alt="Elienus Muskius" className="w-full h-full object-cover object-center"
            style={{ filter: "saturate(0.55) contrast(1.15) brightness(0.45)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.55) 0%, rgba(6,6,6,0.25) 40%, rgba(6,6,6,0.75) 80%, #060606 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 120% 80% at 50% 30%, rgba(0,40,10,0.4) 0%, transparent 70%)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.022) 3px,rgba(0,255,65,0.022) 4px)" }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
            className="font-mono-alien text-[#00ff41]/65 text-[10px] tracking-[0.4em] mb-5 uppercase">
            Zeta Reticuli Intelligence — Declassified
          </motion.p>

          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
            className="font-cinzel font-black leading-[0.88] mb-5"
            style={{ textShadow: "0 0 60px rgba(0,255,65,0.5), 0 0 120px rgba(0,255,65,0.2)" }}>
            <span className="block text-[#00ff41]" style={{ fontSize: "clamp(3.5rem, 14vw, 9rem)" }}>Elienus</span>
            <span className="block text-white" style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)" }}>Muskius</span>
          </motion.h1>

          {/* Quote callout */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-lg mx-auto mb-6 border-l-2 border-[#00ff41]/70 pl-4 text-left">
            <p className="font-body text-white/85 text-base md:text-lg italic leading-snug">
              "I'm often asked, 'Are there aliens among us?'<br />
              And I'll say that I am one."
            </p>
            <p className="font-mono-alien text-[#00ff41]/55 text-[10px] mt-1.5 tracking-widest">
              — ELON MUSK, WORLD ECONOMIC FORUM, DAVOS
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <a href={BUY_URL} target="_blank" rel="noreferrer" data-testid="link-buy-hero"
              className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-10 py-4 font-black hover:bg-white transition-all pulse-glow w-full sm:w-auto text-center">
              BUY $ELIENUS
            </a>
            <a href={DEX_URL} target="_blank" rel="noreferrer"
              className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.45)] text-[#00ff41] px-8 py-4 hover:bg-[rgba(0,255,65,0.08)] transition-all w-full sm:w-auto text-center">
              VIEW CHART
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center">
            <div className="w-full max-w-md">
              <CopyCA size="large" />
            </div>
          </motion.div>

          {/* Ticker strip */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-6 border border-[rgba(0,255,65,0.2)] bg-[rgba(0,255,65,0.05)] px-5 py-2 inline-flex gap-8 overflow-hidden">
            {["$ELIENUS", "+40% IN 24H", "SOLANA", "ALIEN META", "PUMP.FUN", "5,000 YEARS OLD"].map((t, i) => (
              <span key={i} className="font-mono-alien text-[10px] text-[#00ff41]/80 tracking-widest whitespace-nowrap">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STORY ══ */}
      <section id="story" className="relative overflow-hidden bg-[#060606] scroll-mt-16">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(50,0,100,0.18) 0%, transparent 55%)" }} />
        <Stars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">THE STORY</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-widest">FILE — 001</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-0">
              <div className="relative overflow-hidden border border-[rgba(0,255,65,0.25)]">
                <img src={elienusFace} alt="Elienus" className="w-full h-auto object-contain block"
                  style={{ filter: "saturate(0.65) contrast(1.15)" }} />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.04) 3px,rgba(0,255,65,0.04) 4px)" }} />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#060606] to-transparent h-16" />
                <div className="absolute bottom-3 left-3 font-mono-alien text-[10px] text-[#00ff41]/60 tracking-widest">
                  ARRIVAL RECORD // PRETORIA 1971
                </div>
              </div>
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
              <motion.p variants={fadeUp} className="font-body text-white/80 text-base md:text-lg leading-relaxed">
                His name, as we were told, is <span className="text-[#00ff41] font-semibold">Elon Reeve Musk</span>.
                Born Pretoria, South Africa — a nation still rebuilding, records imperfect.
                The perfect entry vector for an intelligence unit requiring minimal scrutiny.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-white/70 text-base leading-relaxed">
                He arrived. He did not grow up. No childhood photographs exist before age 10.
                Hospital staff from Pretoria General recall no memory of the delivery.
                A child who appeared on paper — and nowhere else.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-white/70 text-base leading-relaxed">
                By 2002 he had founded SpaceX. By 2004, Tesla. By 2022 he owned the world's largest
                public communications platform. One entity. Every lever. All pulled simultaneously.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { num: "5,000+", label: "years old (self-reported)" },
                  { num: "6", label: "world-changing companies" },
                  { num: "3,000 BC", label: "verified on X" },
                  { num: "1", label: "confirmed alien on Earth" },
                ].map((s, i) => (
                  <div key={i} className="border border-[rgba(0,255,65,0.18)] bg-[rgba(0,255,65,0.04)] p-4">
                    <div className="font-cinzel text-2xl font-black text-[#00ff41]">{s.num}</div>
                    <div className="font-mono-alien text-[10px] text-white/45 tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PORTRAIT STRIP ══ */}
      <section className="relative overflow-hidden bg-[#040a04]">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,100,20,0.12) 0%, transparent 70%)" }} />
        <Stars />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { img: elienusPortrait, label: "TRUE FORM", sub: "Entity Unmasked" },
              { img: elienusFull, label: "FULL ENTITY", sub: "Visual Confirmation" },
              { img: elienusAlt, label: "CLASSIFIED", sub: "Do Not Distribute" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="relative border border-[rgba(0,255,65,0.2)] overflow-hidden group">
                <img src={item.img} alt={item.label} className="w-full h-auto object-contain block group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: "saturate(0.7) contrast(1.1)" }} />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.03) 3px,rgba(0,255,65,0.03) 4px)" }} />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#040a04] to-transparent">
                  <div className="font-alien text-xs font-bold text-[#00ff41]">{item.label}</div>
                  <div className="font-mono-alien text-[10px] text-white/40">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE PROOF / QUOTES ══ */}
      <section id="quotes" className="relative overflow-hidden bg-[#060606] scroll-mt-16">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 100% 30%, rgba(0,80,30,0.14) 0%, transparent 55%)" }} />
        <Stars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">THE PROOF</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-widest">HIS OWN WORDS</div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                quote: "\"I'm often asked, 'Are there aliens among us?' And I'll say that I am one.\"",
                source: "World Economic Forum, Davos",
                year: "2025",
                note: "Larry Fink (BlackRock) replied: \"Or you're from the future.\""
              },
              {
                quote: "\"Full disclosure, I'm actually a 3,000-year-old vampire. It's such a trial assuming all these false identities over the centuries!\"",
                source: "Posted on X",
                year: "2020",
                note: "Posted to 180M followers. Never deleted. Make of that what you will."
              },
              {
                quote: "\"Verified since 3,000 BC — time-traveling vampire alien.\"",
                source: "X Profile Bio",
                year: "2023",
                note: "Later upgraded the age to 5,000 years. The number keeps growing."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="border border-[rgba(0,255,65,0.22)] bg-[rgba(0,255,65,0.04)] p-6 relative flex flex-col gap-4">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-[#00ff41]/60 to-transparent" />
                <div className="font-mono-alien text-[10px] text-[#00ff41]/55 tracking-widest">{item.source} // {item.year}</div>
                <p className="font-body text-white/90 text-base leading-snug italic flex-1">
                  {item.quote}
                </p>
                <div className="border-t border-[rgba(0,255,65,0.1)] pt-3">
                  <p className="font-mono-alien text-[10px] text-white/40 leading-relaxed">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ELON QUOTE + LARRY FINK HIGHLIGHT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="font-mono-alien text-[10px] text-[#00ff41]/55 tracking-widest mb-3">THE DAVOS EXCHANGE — RECORDED</div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="font-alien text-xs text-white/40 shrink-0 pt-0.5">ELON:</div>
                  <p className="font-body text-white/85 text-base italic">"I am one."</p>
                </div>
                <div className="flex gap-3">
                  <div className="font-alien text-xs text-[#00ff41]/60 shrink-0 pt-0.5">FINK:</div>
                  <p className="font-body text-[#00ff41]/85 text-base italic">"Or you're from the future."</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-body text-white/60 text-sm leading-relaxed">
                The CEO of Tesla, SpaceX, and the world's largest social platform stood at the world's most
                powerful economic summit and said he was an alien. In front of every world leader and banker on Earth.
              </p>
              <p className="font-body text-[#00ff41]/80 text-sm leading-relaxed font-semibold">
                They laughed. The awakened listened.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ HIS EMPIRE / COMPANIES ══ */}
      <section id="companies" className="relative overflow-hidden bg-[#04060a] scroll-mt-16">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,50,100,0.12) 0%, transparent 60%)" }} />
        <Stars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">HIS EMPIRE</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-widest">THE GRAND DESIGN</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "TESLA", year: "2004", color: "rgba(255,50,30,0.12)", border: "rgba(255,80,60,0.3)", story: "Not about climate. Every Tesla is a data node. Every Supercharger a relay. The entire planetary energy grid — rewired to one proprietary standard. One signal. One shutdown." },
              { name: "SPACEX", year: "2002", color: "rgba(40,80,255,0.1)", border: "rgba(80,120,255,0.3)", story: "Not exploration. The return vessel. Starship is the ship that carries him home — built with human capital, human enthusiasm, human sweat." },
              { name: "X / TWITTER", year: "2022", color: "rgba(180,180,180,0.07)", border: "rgba(200,200,200,0.25)", story: "$44B for a loss-making platform. Because every human thought ever typed lives on that server. Earth's greatest intelligence archive. Now his." },
              { name: "DOGECOIN", year: "2013–", color: "rgba(200,150,0,0.1)", border: "rgba(220,170,0,0.3)", story: "A meme coin inflated by a tweet. An experiment: how many humans can one entity move simultaneously? The results confirmed what he already knew." },
              { name: "NEURALINK", year: "2016", color: "rgba(140,0,200,0.1)", border: "rgba(170,0,240,0.3)", story: "A chip in the human brain, interfacing with thought itself. He calls it medicine. It is a network protocol. The first human-to-alien data link." },
              { name: "xAI / GROK", year: "2023", color: "rgba(0,180,130,0.08)", border: "rgba(0,210,160,0.28)", story: "An AI trained on all of human knowledge. Named 'Grok'. The proxy he will leave running on Earth after he departs. The mission, automated." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 relative overflow-hidden"
                style={{ background: item.color, border: `1px solid ${item.border}` }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="font-alien font-black text-xl text-white">{item.name}</div>
                  <div className="font-mono-alien text-[10px] tracking-widest mt-0.5"
                    style={{ color: item.border.replace("0.3", "0.7") }}>
                    EST. {item.year}
                  </div>
                </div>
                <div className="w-8 h-px mb-3" style={{ backgroundColor: item.border.replace("0.3", "0.5") }} />
                <p className="font-body text-white/65 text-sm leading-relaxed">{item.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TOKENOMICS ══ */}
      <section id="tokenomics" className="relative overflow-hidden bg-[#060606] scroll-mt-16">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,65,0.08) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,65,0.035) 1px,transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <Stars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">TOKENOMICS</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-widest">PROTOCOL DATA</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Stats grid */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 gap-3">
              {[
                { label: "TOKEN", value: "$ELIENUS" },
                { label: "NETWORK", value: "SOLANA" },
                { label: "DEX", value: "PUMPSWAP" },
                { label: "LAUNCH", value: "PUMP.FUN" },
                { label: "PRICE ACTION", value: "+40% / 24H" },
                { label: "THEME", value: "ALIEN META" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="border border-[rgba(0,255,65,0.22)] bg-[rgba(0,255,65,0.05)] p-4">
                  <div className="font-mono-alien text-[10px] text-white/35 tracking-widest mb-1">{item.label}</div>
                  <div className="font-alien text-sm font-bold text-[#00ff41]">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CA + buy */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-4">
              <motion.div variants={fadeUp} className="border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.04)] p-6 space-y-5">
                <div>
                  <div className="font-alien text-xs text-[#00ff41]/60 tracking-widest mb-3">CONTRACT ADDRESS</div>
                  <CopyCA size="large" />
                </div>
                <div className="w-full h-px bg-[rgba(0,255,65,0.12)]" />
                <div className="space-y-2">
                  <div className="font-alien text-xs text-[#00ff41]/60 tracking-widest mb-3">QUICK LINKS</div>
                  <a href={BUY_URL} target="_blank" rel="noreferrer" data-testid="link-buy-tokenomics"
                    className="block w-full font-alien text-sm tracking-widest bg-[#00ff41] text-black py-4 font-black text-center hover:bg-white transition-colors pulse-glow">
                    BUY ON PUMP.FUN
                  </a>
                  <a href={DEX_URL} target="_blank" rel="noreferrer"
                    className="block w-full font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.4)] text-[#00ff41] py-3 text-center hover:bg-[rgba(0,255,65,0.08)] transition-colors">
                    DEXSCREENER CHART
                  </a>
                  <a href="https://pump.fun/board" target="_blank" rel="noreferrer"
                    className="block w-full font-alien text-sm tracking-widest border border-[rgba(255,255,255,0.1)] text-white/50 py-3 text-center hover:border-[rgba(0,255,65,0.3)] hover:text-white/70 transition-colors">
                    PUMPSWAP DEX
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}
                className="border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.03)] p-4 space-y-2">
                {[
                  "No team tokens",
                  "Fair launch on pump.fun",
                  "Community-driven alien meta",
                  "Solana speed — Zeta Reticuli approved",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#00ff41] text-xs">✓</span>
                    <span className="font-body text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ WHERE TO BUY ══ */}
      <section id="buy" className="relative overflow-hidden bg-[#030d03] scroll-mt-16">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0,255,65,0.10) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,65,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <Stars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">WHERE TO BUY</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {/* Step by step */}
            {[
              {
                step: "01",
                title: "Get a Solana Wallet",
                desc: "Download Phantom, Solflare, or Backpack. Create a new wallet and back up your seed phrase.",
                link: "https://phantom.app",
                linkLabel: "GET PHANTOM →"
              },
              {
                step: "02",
                title: "Buy SOL",
                desc: "Buy SOL on any exchange (Coinbase, Binance, Kraken) and send it to your wallet address.",
                link: null,
                linkLabel: null
              },
              {
                step: "03",
                title: "Swap for $ELIENUS",
                desc: "Go to pump.fun or PumpSwap. Paste the CA. Swap your SOL for $ELIENUS.",
                link: BUY_URL,
                linkLabel: "BUY ON PUMP.FUN →"
              },
              {
                step: "04",
                title: "You're Awakened",
                desc: "You now hold the only token that knows the truth. Track your position on Dexscreener.",
                link: DEX_URL,
                linkLabel: "TRACK ON DEXSCREENER →"
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 border border-[rgba(0,255,65,0.18)] bg-[rgba(0,255,65,0.04)] p-5 items-start">
                <div className="font-cinzel text-3xl font-black text-[#00ff41]/30 shrink-0 w-10 leading-none">{item.step}</div>
                <div className="flex-1">
                  <div className="font-alien text-base font-bold text-white mb-1">{item.title}</div>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-2">{item.desc}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer"
                      className="font-alien text-xs tracking-widest text-[#00ff41] hover:text-white transition-colors">
                      {item.linkLabel}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-2">
              <a href={BUY_URL} target="_blank" rel="noreferrer"
                className="block w-full font-alien text-base tracking-widest bg-[#00ff41] text-black py-5 font-black text-center hover:bg-white transition-colors pulse-glow">
                BUY $ELIENUS NOW
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <CopyCA size="large" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SOCIALS ══ */}
      <section id="socials" className="relative overflow-hidden bg-[#060606] scroll-mt-16">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 100%, rgba(0,40,10,0.5) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,65,0.025) 1px,transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        <Stars />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">SOCIALS</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {[
              {
                icon: <SiX size={32} />,
                label: "X / Twitter",
                handle: "@ElienusMuskius",
                url: "https://x.com/ElienusMuskius",
                desc: "Follow for updates, memes, and alien intelligence drops."
              },
              {
                icon: <SiTelegram size={32} />,
                label: "Telegram",
                handle: "t.me/ElienusMuskius",
                url: "https://t.me/ElienusMuskius",
                desc: "Join the community. Chat with the awakened."
              },
              {
                icon: <span className="font-alien text-3xl">◈</span>,
                label: "Dexscreener",
                handle: "Live Chart",
                url: DEX_URL,
                desc: "Track price action and volume in real time."
              },
            ].map((item, i) => (
              <motion.a key={i} href={item.url} target="_blank" rel="noreferrer"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 border border-[rgba(0,255,65,0.18)] bg-[rgba(0,255,65,0.04)] hover:bg-[rgba(0,255,65,0.08)] hover:border-[rgba(0,255,65,0.4)] transition-all group">
                <div className="text-[#00ff41]/70 group-hover:text-[#00ff41] transition-colors mb-3">{item.icon}</div>
                <div className="font-alien text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="font-mono-alien text-[10px] text-[#00ff41]/60 mb-3">{item.handle}</div>
                <p className="font-body text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* Closing CTA */}
          <div className="border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] p-8 text-center max-w-2xl mx-auto">
            <div className="font-cinzel font-black text-3xl text-[#00ff41] mb-3"
              style={{ textShadow: "0 0 20px rgba(0,255,65,0.4)" }}>
              $ELIENUS
            </div>
            <p className="font-body text-white/60 text-base mb-5 leading-relaxed">
              He told you he was an alien. He told you he was 5,000 years old.<br />
              <span className="text-[#00ff41]/80">The question was never whether it's true.<br />The question is: are you holding?</span>
            </p>
            <a href={BUY_URL} target="_blank" rel="noreferrer"
              className="inline-block font-alien text-sm tracking-widest bg-[#00ff41] text-black px-12 py-4 font-black hover:bg-white transition-colors pulse-glow">
              BUY $ELIENUS
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-[rgba(0,255,65,0.12)] bg-[#030603] py-8 text-center relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-5">
            <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#00ff41] transition-colors"><SiX size={18} /></a>
            <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#00ff41] transition-colors"><SiTelegram size={18} /></a>
            <a href={DEX_URL} target="_blank" rel="noreferrer" className="font-alien text-[10px] text-white/30 hover:text-[#00ff41] transition-colors tracking-widest">DEXSCREENER</a>
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="font-alien text-[10px] text-white/30 hover:text-[#00ff41] transition-colors tracking-widest">PUMP.FUN</a>
          </div>
          <p className="font-mono-alien text-[10px] text-white/18 tracking-widest mb-2">
            © 2026 ELIENUS MUSKIUS — ZETA RETICULI // SOLANA PROTOCOL
          </p>
          <p className="font-body text-white/15 text-xs max-w-md mx-auto leading-relaxed">
            $ELIENUS is a satirical memecoin. Not financial advice. Crypto carries risk. Do your own research.
          </p>
        </div>
      </footer>

    </div>
  );
}
