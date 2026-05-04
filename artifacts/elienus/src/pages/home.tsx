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

function CopyCA() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(CA); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      data-testid="button-copy-ca"
      className="group flex items-center gap-3 border border-[rgba(0,255,65,0.35)] bg-black/70 hover:bg-[rgba(0,255,65,0.1)] transition-all w-full px-4 py-3"
    >
      <span className="font-mono-alien text-[10px] text-[#00ff41]/50 shrink-0">CA</span>
      <span className="font-mono-alien text-[10px] text-[#00ff41] break-all flex-1 text-left">{CA}</span>
      <span className={`font-alien text-[10px] shrink-0 px-2 py-0.5 border transition-all ${copied ? "border-[#00ff41] text-[#00ff41]" : "border-[rgba(0,255,65,0.3)] text-[#00ff41]/60 group-hover:text-[#00ff41] group-hover:border-[#00ff41]"}`}>
        {copied ? "✓" : "COPY"}
      </span>
    </button>
  );
}

function Stars({ n = 55 }: { n?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} className="absolute rounded-full"
          style={{
            left: `${(i * 137.5) % 100}%`, top: `${(i * 97.3) % 100}%`,
            width: i % 9 === 0 ? "2px" : "1px", height: i % 9 === 0 ? "2px" : "1px",
            backgroundColor: i % 4 === 0 ? "rgba(0,255,65,0.9)" : "rgba(255,255,255,0.45)",
            animation: `twinkle ${2.5 + (i % 5) * 0.5}s ${(i % 7) * 0.45}s ease-in-out infinite`,
          }} />
      ))}
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

const up = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stg = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const [active, setActive] = useState("story");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.25, rootMargin: "-72px 0px 0px 0px" }
    );
    TABS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#060606] text-white font-body overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 border-b border-[rgba(0,255,65,0.13)] bg-[rgba(6,6,6,0.96)] backdrop-blur-md">
        <div className="flex items-center justify-between px-5 py-3">
          <button onClick={() => scrollTo("hero")}
            className="font-alien text-xl font-bold tracking-widest text-[#00ff41]"
            style={{ textShadow: "0 0 10px rgba(0,255,65,0.55)" }}>
            $ELIENUS
          </button>
          <div className="hidden md:flex items-center gap-1">
            {TABS.map((t) => (
              <button key={t.id} onClick={() => scrollTo(t.id)}
                className={`font-alien text-[11px] tracking-widest px-4 py-2 transition-all duration-200 ${active === t.id ? "text-[#00ff41] border-b-2 border-[#00ff41]" : "text-white/40 hover:text-white/70"}`}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={BUY_URL} target="_blank" rel="noreferrer" data-testid="link-buy-nav"
              className="font-alien text-xs tracking-widest bg-[#00ff41] text-black px-5 py-2 font-black hover:bg-white transition-colors">
              BUY NOW
            </a>
            <button className="md:hidden text-[#00ff41]/70 hover:text-[#00ff41] pl-1" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="space-y-[5px]">
                <div className="w-5 h-px bg-current" /><div className="w-5 h-px bg-current" /><div className="w-5 h-px bg-current" />
              </div>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-[rgba(0,255,65,0.1)] bg-[rgba(6,6,6,0.99)] px-5 py-3 flex flex-col gap-2">
            {TABS.map((t) => (
              <button key={t.id} onClick={() => { scrollTo(t.id); setMenuOpen(false); }}
                className="font-alien text-xs tracking-widest text-left py-2 text-white/55 hover:text-[#00ff41] transition-colors">
                {t.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section id="hero" className="relative flex flex-col items-center justify-center overflow-hidden pt-14" style={{ minHeight: "100svh" }}>
        <Stars n={80} />
        <div className="absolute inset-0 z-0">
          <img src={elienusAlt} alt="" className="w-full h-full object-cover object-center"
            style={{ filter: "saturate(0.5) contrast(1.2) brightness(0.42)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.5) 0%, rgba(6,6,6,0.15) 35%, rgba(6,6,6,0.6) 75%, #060606 100%)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.018) 3px,rgba(0,255,65,0.018) 4px)" }} />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}
            className="font-mono-alien text-[#00ff41]/60 text-[10px] tracking-[0.45em] mb-5 uppercase">
            Identity Confirmed · 3000 BCE
          </motion.p>

          <motion.h1 initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }}
            className="font-cinzel font-black leading-[0.86] mb-6"
            style={{ textShadow: "0 0 70px rgba(0,255,65,0.55), 0 0 130px rgba(0,255,65,0.2)" }}>
            <span className="block text-[#00ff41]" style={{ fontSize: "clamp(3.8rem, 15vw, 10rem)" }}>Elienus</span>
            <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 11vw, 7.5rem)" }}>Muskius</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.9 }}
            className="max-w-md mx-auto mb-7 border-l-2 border-[#00ff41]/65 pl-4 text-left">
            <p className="font-body text-white/85 text-base md:text-lg italic leading-snug">
              "I'm a time-travelling, vampire alien."
            </p>
            <p className="font-mono-alien text-[#00ff41]/50 text-[10px] mt-1.5 tracking-widest">
              — ELON MUSK, X (TWITTER), NOVEMBER 2024
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <a href={BUY_URL} target="_blank" rel="noreferrer" data-testid="link-buy-hero"
              className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-10 py-4 font-black hover:bg-white transition-all pulse-glow sm:w-auto w-full text-center">
              BUY $ELIENUS
            </a>
            <button onClick={() => scrollTo("story")}
              className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.45)] text-[#00ff41] px-8 py-4 hover:bg-[rgba(0,255,65,0.08)] transition-all sm:w-auto w-full">
              READ THE LORE
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center">
            <div className="w-full max-w-sm"><CopyCA /></div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STORY — CHAPTER 1
      ══════════════════════════════════════ */}
      <section id="story" className="relative overflow-hidden scroll-mt-14">
        <Stars n={45} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 60% at 0% 40%, rgba(40,0,90,0.22) 0%, transparent 55%)" }} />

        <div className="container mx-auto px-5 pt-16 pb-0 relative z-10">
          {/* Chapter label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER I</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/35 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative border border-[rgba(0,255,65,0.22)] overflow-hidden">
              <img src={elienusFace} alt="Elienus" className="w-full h-auto object-contain block"
                style={{ filter: "saturate(0.6) contrast(1.2)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.04) 3px,rgba(0,255,65,0.04) 4px)" }} />
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#060606] to-transparent" />
            </motion.div>

            {/* Text */}
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5 py-2">
              <motion.h2 variants={up} className="font-cinzel font-black text-4xl md:text-5xl text-white leading-tight">
                Not Elon.<br /><span className="text-[#00ff41]">Elienus.</span>
              </motion.h2>
              <motion.div variants={up} className="w-12 h-0.5 bg-[#00ff41]" />
              <motion.p variants={up} className="font-body text-white/75 text-base md:text-lg leading-relaxed">
                Before Silicon Valley. Before South Africa. Before the name Elon Musk was filed in any registry —
                there was <span className="text-[#00ff41] font-semibold">Elienus Muskius</span>.
                An ancient designation. Latinised. Worn across centuries.
                One entity, infinite identities, one agenda.
              </motion.p>
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                In November 2024, the mask slipped. A commenter on X asked:
                <span className="italic text-white/85"> "You don't sleep because you're a vampire?"</span>
                He replied without hesitation: <span className="italic text-white/85">"I'm a time-traveling vampire!"</span>
                Then corrected himself — <span className="italic text-[#00ff41]/90">"Time-travelling, vampire alien."</span>
              </motion.p>
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                Minutes later, he updated his X profile bio to:
                <span className="font-mono-alien text-[#00ff41] block mt-2 text-sm tracking-wider">
                  "Verified since 3,000 BC"
                </span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FULL BLEED IMAGE: PORTRAIT ── */}
      <div className="relative overflow-hidden my-0">
        <Stars n={30} />
        <div className="container mx-auto px-5 py-10 relative z-10">
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative border border-[rgba(0,255,65,0.18)] overflow-hidden max-w-lg mx-auto">
            <img src={elienusPortrait} alt="Elienus portrait" className="w-full h-auto object-contain block"
              style={{ filter: "saturate(0.65) contrast(1.1)" }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.035) 3px,rgba(0,255,65,0.035) 4px)" }} />
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#060606] to-transparent">
              <div className="font-mono-alien text-[10px] text-[#00ff41]/55 tracking-widest mb-0.5">THE ENTITY</div>
              <div className="font-cinzel text-xl text-white">Elienus Muskius</div>
              <div className="font-mono-alien text-[10px] text-white/30 mt-0.5">Age: unknown. Origin: unknown. Intent: clear.</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          STORY — CHAPTER 2
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <Stars n={40} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 100% 40%, rgba(0,80,20,0.14) 0%, transparent 55%)" }} />

        <div className="container mx-auto px-5 py-14 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER II</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/35 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5 order-2 lg:order-1">
              <motion.h2 variants={up} className="font-cinzel font-black text-4xl md:text-5xl text-white leading-tight">
                Davos.<br /><span className="text-[#00ff41]">He Said It<br />Out Loud.</span>
              </motion.h2>
              <motion.div variants={up} className="w-12 h-0.5 bg-[#00ff41]" />
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                January 2026. The World Economic Forum in Davos.
                Every world leader, every billionaire, every central banker — in the same room.
              </motion.p>
              <motion.div variants={up} className="space-y-3 border-l-2 border-[rgba(0,255,65,0.3)] pl-5">
                <div>
                  <span className="font-mono-alien text-[10px] text-white/35 tracking-widest">MUSK:</span>
                  <p className="font-body text-white/85 text-base italic mt-0.5">
                    "I'm often asked, 'Are there aliens among us?' And I'll say that I am one. They don't believe me."
                  </p>
                </div>
                <div>
                  <span className="font-mono-alien text-[10px] text-[#00ff41]/60 tracking-widest">LARRY FINK (BLACKROCK CEO):</span>
                  <p className="font-body text-[#00ff41]/90 text-base italic mt-0.5">
                    "Or you're from the future."
                  </p>
                </div>
              </motion.div>
              <motion.p variants={up} className="font-body text-white/65 text-base leading-relaxed">
                The room laughed. The cameras rolled. And the man who controls the rockets,
                the grid, the communications platform, and the money — told the entire ruling class
                of Earth exactly what he is.
              </motion.p>
              <motion.p variants={up} className="font-cinzel text-lg text-[#00ff41] italic">
                "They don't believe me."
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative border border-[rgba(0,255,65,0.22)] overflow-hidden order-1 lg:order-2">
              <img src={elienusFull} alt="Elienus full" className="w-full h-auto object-contain block"
                style={{ filter: "saturate(0.6) contrast(1.15)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.04) 3px,rgba(0,255,65,0.04) 4px)" }} />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#060606] to-transparent" />
              <div className="absolute top-4 left-4 font-mono-alien text-[10px] text-[#00ff41]/55 tracking-widest">
                DAVOS 2026 // TRANSMISSION INTERCEPTED
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STORY — CHAPTER 3: THE NAME
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#03060a]">
        <Stars n={50} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0,40,80,0.18) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,65,0.03) 1px,transparent 1px)",
          backgroundSize: "55px 55px"
        }} />

        <div className="container mx-auto px-5 py-14 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER III</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/35 to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              <motion.h2 variants={up} className="font-cinzel font-black text-4xl md:text-6xl text-white">
                The Name Is<br /><span className="text-[#00ff41]">Ancient.</span>
              </motion.h2>
              <motion.div variants={up} className="w-12 h-0.5 bg-[#00ff41]" />
              <motion.p variants={up} className="font-body text-white/70 text-base md:text-lg leading-relaxed">
                <span className="text-white font-semibold">ELIENUS MUSKIUS</span> is not a nickname.
                It is the Latinised form of a designation that predates the Roman Empire.
                When he walked these lands under a different sky, this was the name recorded
                in texts that have since been conveniently lost.
              </motion.p>

              {/* Name breakdown */}
              <motion.div variants={up} className="grid grid-cols-2 gap-4">
                <div className="border border-[rgba(0,255,65,0.22)] bg-[rgba(0,255,65,0.04)] p-6">
                  <div className="font-cinzel text-5xl font-black text-[#00ff41] mb-2">ELON</div>
                  <div className="font-mono-alien text-[10px] text-white/40 tracking-wider mb-3">ANAGRAM: LONE</div>
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    One letter rearranged. Singular. Isolated. In ancient Semitic, "El" denotes a being of higher order.
                    The frequency was broadcast in the first syllable.
                  </p>
                </div>
                <div className="border border-[rgba(100,0,200,0.3)] bg-[rgba(100,0,200,0.06)] p-6">
                  <div className="font-cinzel text-5xl font-black mb-2" style={{ color: "rgba(180,100,255,0.9)" }}>MUSK</div>
                  <div className="font-mono-alien text-[10px] text-white/40 tracking-wider mb-3">ROOT: SPECIES SIGNAL</div>
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    A chemical secreted to mark territory and draw others of the same species.
                    He produces it at civilisational scale.
                  </p>
                </div>
              </motion.div>

              <motion.p variants={up}
                className="font-cinzel text-2xl text-center text-white/80 italic border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.03)] p-6">
                "They called him Elon. They were wrong."
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STORY — CHAPTER 4: THE SIGNAL
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <Stars n={45} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 60%, rgba(0,255,65,0.08) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-5 py-14 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-mono-alien text-[10px] text-[#00ff41]/50 tracking-[0.3em]">CHAPTER IV</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/35 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Text */}
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
              <motion.h2 variants={up} className="font-cinzel font-black text-4xl md:text-5xl text-white leading-tight">
                You're Not<br />Buying a Coin.<br /><span className="text-[#00ff41]">You're Answering<br />a Signal.</span>
              </motion.h2>
              <motion.div variants={up} className="w-12 h-0.5 bg-[#00ff41]" />
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                He built the rockets. He owns the platform. He wired the grid.
                He chips the brains. Every company, one direction: off this planet.
              </motion.p>
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                Before he leaves, he broadcast the signal. Publicly. On X.
                At Davos. In front of everyone. Dressed as Elon Musk.
              </motion.p>
              <motion.p variants={up} className="font-body text-white/70 text-base leading-relaxed">
                Those who heard it — the awake ones — needed a way to find each other.
                A token only they would hold. A frequency only they would recognise.
              </motion.p>
              <motion.div variants={up}
                className="border border-[rgba(0,255,65,0.3)] bg-[rgba(0,255,65,0.05)] p-5">
                <p className="font-cinzel text-xl text-[#00ff41]">
                  $ELIENUS is the response.
                </p>
                <p className="font-body text-white/55 text-sm mt-2 leading-relaxed">
                  The coin that knows what the world refuses to admit.
                </p>
              </motion.div>

              <motion.div variants={up} className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href={BUY_URL} target="_blank" rel="noreferrer"
                  className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-8 py-4 font-black text-center hover:bg-white transition-colors pulse-glow flex-1">
                  BUY $ELIENUS
                </a>
                <button onClick={() => scrollTo("tokenomics")}
                  className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.4)] text-[#00ff41] px-8 py-4 text-center hover:bg-[rgba(0,255,65,0.08)] transition-colors flex-1">
                  TOKENOMICS
                </button>
              </motion.div>
            </motion.div>

            {/* Alt image */}
            <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative border border-[rgba(0,255,65,0.2)] overflow-hidden">
              <img src={elienusAlt} alt="Elienus classified" className="w-full h-auto object-contain block"
                style={{ filter: "saturate(0.6) contrast(1.15)" }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,65,0.035) 3px,rgba(0,255,65,0.035) 4px)" }} />
              <div className="absolute top-4 left-4 font-mono-alien text-[10px] text-[#00ff41]/55 tracking-widest">
                TRANSMISSION: $ELIENUS
              </div>
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#060606] to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TOKENOMICS
      ══════════════════════════════════════ */}
      <section id="tokenomics" className="relative overflow-hidden bg-[#030d03] scroll-mt-14">
        <Stars n={50} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,255,65,0.09) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(0,255,65,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,65,0.04) 1px,transparent 1px)",
          backgroundSize: "50px 50px"
        }} />

        <div className="container mx-auto px-5 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">TOKENOMICS</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="max-w-xl mx-auto space-y-5">
            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="border border-[rgba(0,255,65,0.25)] bg-[rgba(0,255,65,0.04)] divide-y divide-[rgba(0,255,65,0.1)]">
              {[
                { label: "TOKEN", value: "$ELIENUS" },
                { label: "NETWORK", value: "SOLANA" },
                { label: "EXCHANGE", value: "PUMPSWAP" },
                { label: "LAUNCH", value: "PUMP.FUN" },
              ].map((row, i) => (
                <motion.div key={i} variants={up} className="flex items-center justify-between px-6 py-4">
                  <span className="font-mono-alien text-[10px] text-white/35 tracking-widest">{row.label}</span>
                  <span className="font-alien text-sm text-[#00ff41] font-bold">{row.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="font-mono-alien text-[10px] text-white/35 tracking-widest mb-2">CONTRACT ADDRESS</div>
              <CopyCA />
            </motion.div>

            <motion.div variants={stg} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2 pt-1">
              {["Fair launch. No presale.", "No team allocation.", "Community-owned signal.", "Solana speed."].map((item, i) => (
                <motion.div key={i} variants={up} className="flex items-center gap-3">
                  <span className="text-[#00ff41] text-sm shrink-0">✓</span>
                  <span className="font-body text-white/60 text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-2">
              <a href={BUY_URL} target="_blank" rel="noreferrer" data-testid="link-buy-tokenomics"
                className="block w-full font-alien text-sm tracking-widest bg-[#00ff41] text-black py-5 font-black text-center hover:bg-white transition-colors pulse-glow">
                BUY $ELIENUS
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHERE TO BUY
      ══════════════════════════════════════ */}
      <section id="buy" className="relative overflow-hidden scroll-mt-14">
        <Stars n={40} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 30% 60%, rgba(0,60,20,0.15) 0%, transparent 55%)" }} />

        <div className="container mx-auto px-5 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">HOW TO BUY</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="max-w-xl mx-auto space-y-3">
            {[
              { n: "01", title: "Get a Solana Wallet", body: "Download Phantom or Solflare. Create a new wallet. Save your seed phrase.", cta: null },
              { n: "02", title: "Buy SOL", body: "Purchase SOL on Coinbase, Binance, or Kraken. Send it to your wallet.", cta: null },
              { n: "03", title: "Swap on Pump.fun", body: "Go to pump.fun, paste the CA, swap SOL for $ELIENUS.", cta: { label: "OPEN PUMP.FUN →", url: BUY_URL } },
              { n: "04", title: "Track on Dexscreener", body: "View your position, chart, and volume on Dexscreener.", cta: { label: "OPEN DEXSCREENER →", url: DEX_URL } },
            ].map((step, i) => (
              <motion.div key={i} variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.03)] p-5 items-start">
                <div className="font-cinzel text-2xl font-black text-[#00ff41]/25 shrink-0 w-9 leading-none pt-0.5">{step.n}</div>
                <div>
                  <div className="font-alien text-sm font-bold text-white mb-1">{step.title}</div>
                  <p className="font-body text-white/55 text-sm leading-relaxed">{step.body}</p>
                  {step.cta && (
                    <a href={step.cta.url} target="_blank" rel="noreferrer"
                      className="inline-block font-alien text-[11px] tracking-widest text-[#00ff41] hover:text-white transition-colors mt-2">
                      {step.cta.label}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pt-2 space-y-2">
              <a href={BUY_URL} target="_blank" rel="noreferrer"
                className="block w-full font-alien text-sm tracking-widest bg-[#00ff41] text-black py-5 font-black text-center hover:bg-white transition-colors pulse-glow">
                BUY $ELIENUS NOW
              </a>
              <CopyCA />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOCIALS
      ══════════════════════════════════════ */}
      <section id="socials" className="relative overflow-hidden bg-[#030803] scroll-mt-14">
        <Stars n={45} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(0,255,65,0.09) 0%, transparent 70%)" }} />

        <div className="container mx-auto px-5 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="font-alien font-black text-3xl md:text-4xl text-white">SOCIALS</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { icon: <SiX size={28} />, label: "X / TWITTER", sub: "@ElienusMuskius", url: "https://x.com/ElienusMuskius", desc: "Follow for drops, memes, and alien intel." },
              { icon: <SiTelegram size={28} />, label: "TELEGRAM", sub: "t.me/ElienusMuskius", url: "https://t.me/ElienusMuskius", desc: "Join the awakened. Chat with the community." },
              { icon: <span className="font-alien text-3xl leading-none">◈</span>, label: "DEXSCREENER", sub: "Live Chart", url: DEX_URL, desc: "Track price and volume in real time." },
            ].map((item, i) => (
              <motion.a key={i} href={item.url} target="_blank" rel="noreferrer"
                variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 border border-[rgba(0,255,65,0.15)] bg-[rgba(0,255,65,0.03)] hover:bg-[rgba(0,255,65,0.08)] hover:border-[rgba(0,255,65,0.4)] transition-all group">
                <div className="text-[#00ff41]/60 group-hover:text-[#00ff41] transition-colors mb-3">{item.icon}</div>
                <div className="font-alien text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="font-mono-alien text-[10px] text-[#00ff41]/55 mb-3">{item.sub}</div>
                <p className="font-body text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div variants={up} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="border border-[rgba(0,255,65,0.28)] bg-[rgba(0,255,65,0.05)] p-8 text-center max-w-lg mx-auto">
            <div className="font-cinzel font-black text-4xl text-[#00ff41] mb-3"
              style={{ textShadow: "0 0 25px rgba(0,255,65,0.45)" }}>
              $ELIENUS
            </div>
            <p className="font-body text-white/60 text-base mb-5 leading-relaxed">
              He told you he was a time-travelling vampire alien.<br />
              <span className="text-[#00ff41]/80">The question is: are you holding?</span>
            </p>
            <a href={BUY_URL} target="_blank" rel="noreferrer"
              className="inline-block font-alien text-sm tracking-widest bg-[#00ff41] text-black px-12 py-4 font-black hover:bg-white transition-colors pulse-glow">
              BUY $ELIENUS
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[rgba(0,255,65,0.1)] bg-[#030603] py-8 text-center">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/25 hover:text-[#00ff41] transition-colors"><SiX size={16} /></a>
            <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/25 hover:text-[#00ff41] transition-colors"><SiTelegram size={16} /></a>
            <a href={DEX_URL} target="_blank" rel="noreferrer" className="font-alien text-[10px] text-white/25 hover:text-[#00ff41] tracking-widest transition-colors">DEXSCREENER</a>
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="font-alien text-[10px] text-white/25 hover:text-[#00ff41] tracking-widest transition-colors">PUMP.FUN</a>
          </div>
          <p className="font-mono-alien text-[10px] text-white/15 tracking-widest mb-2">
            © 2026 ELIENUS MUSKIUS — SOLANA
          </p>
          <p className="font-body text-white/12 text-xs max-w-sm mx-auto leading-relaxed">
            Satirical memecoin. Not financial advice. Do your own research.
          </p>
        </div>
      </footer>

    </div>
  );
}
