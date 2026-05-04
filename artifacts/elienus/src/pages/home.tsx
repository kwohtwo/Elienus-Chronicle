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
      className="group flex items-center gap-3 alien-border bg-black/60 px-4 py-3 hover:bg-[rgba(0,255,65,0.08)] transition-all duration-300 w-full max-w-xl"
    >
      <span className="font-mono-alien text-xs text-[#00ff41]/60 shrink-0">CA:</span>
      <span className="font-mono-alien text-xs text-[#00ff41] break-all text-left flex-1">{CA}</span>
      <span className="font-alien text-xs shrink-0 text-[#00ff41]/70 group-hover:text-[#00ff41] transition-colors">
        {copied ? "COPIED" : "COPY"}
      </span>
    </button>
  );
}

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() < 0.15 ? 2 : 1}px`,
            height: `${Math.random() < 0.15 ? 2 : 1}px`,
            backgroundColor: Math.random() < 0.3 ? "rgba(0,255,65,0.9)" : "rgba(255,255,255,0.7)",
            animation: `twinkle ${2 + Math.random() * 4}s ${Math.random() * 5}s ease-in-out infinite`,
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
    <div className="bg-[#080808] text-white overflow-hidden font-body">

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b border-[rgba(0,255,65,0.15)] bg-[rgba(8,8,8,0.85)] backdrop-blur-md">
        <div className="font-alien text-xl font-bold tracking-widest text-[#00ff41]" style={{ textShadow: "0 0 15px rgba(0,255,65,0.6)" }}>
          $ELIENUS
        </div>
        <div className="flex items-center gap-6">
          <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer"
            className="text-white/60 hover:text-[#00ff41] transition-colors" data-testid="link-twitter">
            <SiX size={20} />
          </a>
          <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer"
            className="text-white/60 hover:text-[#00ff41] transition-colors" data-testid="link-telegram">
            <SiTelegram size={20} />
          </a>
          <a href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
            target="_blank" rel="noreferrer"
            className="font-alien text-xs tracking-widest text-[#00ff41]/70 hover:text-[#00ff41] border border-[rgba(0,255,65,0.3)] px-3 py-1.5 hover:border-[rgba(0,255,65,0.7)] transition-all" data-testid="link-chart">
            CHART
          </a>
          <a href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
            target="_blank" rel="noreferrer"
            className="font-alien text-xs tracking-widest bg-[#00ff41] text-black px-4 py-1.5 font-bold hover:bg-white transition-colors" data-testid="link-buy-nav">
            BUY
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <StarField />
        {/* Deep space nebula background */}
        <div className="absolute inset-0 nebula-green" />
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(0,40,0,0.9) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0,80,20,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-40" />

        {/* Glowing orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,255,65,0.07) 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5 }}
            className="font-mono-alien text-[#00ff41]/60 text-sm mb-6 uppercase"
          >
            Zeta Reticuli Intelligence — Declassified
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-cinzel font-black text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
            style={{ textShadow: "0 0 40px rgba(0,255,65,0.4), 0 0 80px rgba(0,255,65,0.15)" }}
          >
            <span className="text-[#00ff41]">Elienus</span>
            <br />
            <span className="text-white">Muskius</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 italic"
          >
            He built the rockets. He bought the platform. He printed the money.
            <br />
            <span className="text-[#00ff41]/80 not-italic">He was never one of us.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
              target="_blank" rel="noreferrer" data-testid="link-buy-hero"
              className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-10 py-4 font-black hover:bg-white transition-all duration-300 pulse-glow">
              AWAKEN NOW
            </a>
            <a href="#story"
              className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.4)] text-[#00ff41] px-10 py-4 hover:bg-[rgba(0,255,65,0.08)] transition-all duration-300">
              READ THE LORE
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 flex justify-center"
          >
            <CopyCA />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono-alien text-[10px] text-[#00ff41]/40 tracking-widest">SCROLL TO UNCOVER</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#00ff41]/40 to-transparent" />
        </motion.div>
      </section>

      {/* ═══ SECTION 1: THE SUBJECT ═══ */}
      <section id="story" className="relative min-h-screen flex items-center overflow-hidden">
        <StarField />
        {/* Purple-green nebula */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(60,0,120,0.25) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 100% 50%, rgba(0,255,65,0.08) 0%, transparent 60%), linear-gradient(180deg, #080808 0%, #0a040a 50%, #080808 100%)"
        }} />
        <div className="absolute inset-0 hex-bg opacity-60" />

        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image — full, no crop */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-sm"
              style={{ background: "linear-gradient(135deg, rgba(0,255,65,0.4), transparent 60%, rgba(120,0,255,0.3))" }} />
            <div className="relative overflow-hidden rounded-sm scanlines">
              <img
                src={elienusFace}
                alt="Elienus Muskius — The Subject"
                className="w-full h-auto object-contain block"
                style={{ filter: "saturate(0.7) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,255,65,0.04)_3px,rgba(0,255,65,0.04)_4px)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[rgba(0,60,20,0.5)] to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono-alien text-xs text-[#00ff41] tracking-widest">
                SUBJECT: ELIENUS MUSKIUS // VISUAL CONFIRMED
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em]">
              CLASSIFIED FILE — 001
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-alien font-black text-4xl md:text-5xl leading-tight text-white">
              The Subject
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-0.5 bg-[#00ff41]" />
            <motion.p variants={fadeUp} className="font-body text-white/70 text-lg leading-relaxed">
              His name, as we were told, is Elon Musk. Born in Pretoria, South Africa — a city chosen precisely because
              no one would look there. A nation still rebuilding. Records imperfect. The perfect entry point.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-white/70 text-lg leading-relaxed">
              From the moment he emerged into public consciousness, the anomalies were there for anyone willing to look:
              the preternatural calmness when questioned. The thousand-yard stare. The way he seemed to process language
              a fraction of a second slower than everyone else — as if running real-time translation from something else.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-[#00ff41]/80 text-lg leading-relaxed italic border-l-2 border-[#00ff41]/40 pl-4">
              "He arrived. He did not grow up. There is a difference."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 2: DECODING THE NAME ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <StarField />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 100% 30%, rgba(0,100,40,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 0% 70%, rgba(0,30,10,0.4) 0%, transparent 60%), linear-gradient(180deg, #080808 0%, #050a05 50%, #080808 100%)"
        }} />
        <div className="absolute inset-0 grid-overlay opacity-30" />

        {/* Floating symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["☉", "♄", "⊕", "∇", "⬡", "⟁", "⌬", "◈"].map((sym, i) => (
            <div key={i} className="absolute font-alien text-[#00ff41]/10 text-4xl"
              style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 3) * 25}%`, transform: `rotate(${i * 23}deg)` }}>
              {sym}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-4">
              CLASSIFIED FILE — 002
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-alien font-black text-4xl md:text-6xl text-white mb-4">
              Decoding The Name
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-0.5 bg-[#00ff41] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                word: "ELON",
                decode: "E.L.O.N.",
                meaning: "Extraterrestrial Lifeform — Origin: Nebula",
                detail: "An anagram of LONE. Isolated. Singular. The only one of his kind on this rock. The name was not chosen at random — it is a marker, a frequency, a signal to others who know how to listen.",
                glyph: "⬡"
              },
              {
                word: "MUSK",
                decode: "M.U.S.K.",
                meaning: "Masquerade — Unit — Stealth — Kinetic",
                detail: "The scent of cover. Musk — a biological odor used by animals to mark territory and signal presence to others of the same species. He chose it because it is the perfect word for what he is doing: masking, scenting the trail, leaving a chemical signature that humans follow without knowing why.",
                glyph: "◈"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="alien-border bg-[rgba(0,255,65,0.03)] p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 font-alien text-6xl text-[#00ff41]/05">{item.glyph}</div>
                <div className="font-cinzel text-6xl font-black text-[#00ff41] mb-2" style={{ textShadow: "0 0 20px rgba(0,255,65,0.4)" }}>
                  {item.word}
                </div>
                <div className="font-mono-alien text-xs text-[#00ff41]/60 tracking-widest mb-4">{item.decode}</div>
                <div className="font-alien text-sm text-white/50 mb-4 uppercase tracking-wider">{item.meaning}</div>
                <div className="w-full h-px bg-gradient-to-r from-[#00ff41]/30 to-transparent mb-4" />
                <p className="font-body text-white/65 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <p className="font-body text-white/60 text-lg leading-relaxed">
              The name ELIENUS MUSKIUS is not a nickname. It is a linguistic reconstruction of his true designation —
              recovered from intercepted transmissions, confirmed by three independent cryptolinguists who have since
              gone quiet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 3: THE PORTRAIT ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,120,40,0.12) 0%, transparent 70%), linear-gradient(180deg, #080808 0%, #030803 50%, #080808 100%)"
        }} />
        <StarField />

        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-2">VISUAL RECORD — UNCENSORED</p>
            <h2 className="font-alien font-black text-3xl md:text-4xl text-white">The True Form</h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute -inset-px"
              style={{ background: "linear-gradient(135deg, rgba(0,255,65,0.5) 0%, transparent 50%, rgba(0,255,65,0.3) 100%)" }} />
            <div className="relative scanlines">
              <img
                src={elienusPortrait}
                alt="Elienus Muskius — True Form"
                className="w-full h-auto object-contain block"
                style={{ filter: "saturate(0.8) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,30,10,0.6)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-alien text-xs text-[#00ff41]/60 tracking-widest mb-1">ENTITY DESIGNATION</p>
                <p className="font-cinzel text-2xl md:text-3xl text-[#00ff41]" style={{ textShadow: "0 0 15px rgba(0,255,65,0.5)" }}>
                  Elienus Muskius
                </p>
                <p className="font-mono-alien text-xs text-white/40 mt-1">Zeta Reticuli System // Infiltration Unit Alpha</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 4: THE GRAND DESIGN — COMPANIES ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <StarField />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,80,0,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 100%, rgba(0,255,65,0.08) 0%, transparent 60%), linear-gradient(180deg, #080808 0%, #09060a 50%, #080808 100%)"
        }} />
        <div className="absolute inset-0 hex-bg opacity-40" />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-4">
              CLASSIFIED FILE — 003
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-alien font-black text-4xl md:text-6xl text-white mb-4">
              The Grand Design
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              Every company. Every acquisition. Every decision. Each one a deliberate tile in a mosaic
              that only makes sense when viewed from the right distance — or the right planet.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "TESLA",
                year: "2004 — Control the Grid",
                color: "rgba(255,50,50,0.15)",
                borderColor: "rgba(255,80,80,0.3)",
                glow: "rgba(255,80,80,0.15)",
                icon: "⚡",
                story: "Electrification was never about climate change. It was about control. Every Tesla is a data node. Every Supercharger is a relay station. The entire planetary energy grid — rewired, by alien design, to a single proprietary standard. When the time comes, one signal shuts it all down."
              },
              {
                name: "SPACEX",
                year: "2002 — Build The Vessel",
                color: "rgba(50,100,255,0.12)",
                borderColor: "rgba(80,130,255,0.3)",
                glow: "rgba(80,130,255,0.15)",
                icon: "🛸",
                story: "SpaceX is not a space exploration company. It is an escape vehicle. Falcon 9 was a proof of concept. Starship is the return craft. He has been testing and refining the technology needed to leave — using human engineers, human funding, human enthusiasm — to build the ship that will carry him home."
              },
              {
                name: "X (TWITTER)",
                year: "2022 — Capture The Signal",
                color: "rgba(200,200,200,0.08)",
                borderColor: "rgba(200,200,200,0.25)",
                glow: "rgba(200,200,200,0.10)",
                icon: "◈",
                story: "He paid $44 billion for a platform that was losing money. Why? Because the entire written record of human consciousness exists on that server. Every confession, every secret, every private thought typed into the void. He needed the archive. He needed the signal intelligence. He renamed it X — the unknown variable — because that is what it is to him: Earth's greatest intelligence database."
              },
              {
                name: "DOGE",
                year: "2013-Present — Mass Psychology Test",
                color: "rgba(200,150,0,0.12)",
                borderColor: "rgba(220,170,0,0.3)",
                glow: "rgba(220,170,0,0.15)",
                icon: "⬡",
                story: "A meme coin worth billions. Created as a joke, pumped with a tweet, then dumped and pumped again. Dogecoin was never an investment thesis. It was a controlled experiment in mass hysteria — to understand how many humans could be moved simultaneously by a single entity. The results confirmed what he already suspected: most of you will follow without question."
              },
              {
                name: "NEURALINK",
                year: "2016 — Interface Design",
                color: "rgba(150,0,200,0.12)",
                borderColor: "rgba(180,0,240,0.3)",
                glow: "rgba(180,0,240,0.15)",
                icon: "⟁",
                story: "The most audacious piece of the puzzle. A chip, placed directly into the human brain, interfacing with the electrical signals that constitute thought itself. He calls it medical technology. It is a network protocol. The first true human-to-alien data link. Once deployed at scale, the remaining independence of human consciousness ends."
              },
              {
                name: "xAI / GROK",
                year: "2023 — The Mirror",
                color: "rgba(0,200,150,0.10)",
                borderColor: "rgba(0,220,170,0.28)",
                glow: "rgba(0,220,170,0.12)",
                icon: "∇",
                story: "He built an artificial intelligence and named it Grok — a word meaning to understand intuitively. But whose intuition? Grok was trained on X's data archive. It has read everything. It knows everything. It is not meant to serve humanity. It is the synthetic intelligence he will leave behind when he departs — an autonomous proxy, continuing the mission after he's gone."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 overflow-hidden group"
                style={{
                  background: item.color,
                  border: `1px solid ${item.borderColor}`,
                  boxShadow: `0 0 20px ${item.glow}`
                }}
              >
                <div className="absolute top-3 right-3 text-3xl opacity-20">{item.icon}</div>
                <div className="font-alien font-black text-2xl text-white mb-1">{item.name}</div>
                <div className="font-mono-alien text-xs tracking-widest mb-4" style={{ color: item.borderColor.replace("0.3", "0.9") }}>
                  {item.year}
                </div>
                <div className="w-10 h-px mb-4" style={{ backgroundColor: item.borderColor.replace("0.3", "0.6") }} />
                <p className="font-body text-white/65 text-sm leading-relaxed">{item.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: FULL VISUAL — THE ENTITY ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0,80,20,0.2) 0%, transparent 70%), linear-gradient(180deg, #080808 0%, #030a03 50%, #080808 100%)"
        }} />
        <StarField />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="relative z-10 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10 px-6"
          >
            <p className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-2">VISUAL RECORD — FULL ENTITY</p>
            <h2 className="font-alien font-black text-3xl md:text-4xl text-white">The Entity Revealed</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-start"
          >
            <motion.div variants={fadeLeft} className="relative">
              <div className="absolute -inset-px" style={{ background: "linear-gradient(45deg, rgba(0,255,65,0.5), transparent 50%, rgba(0,255,65,0.2) 100%)" }} />
              <div className="relative scanlines">
                <img src={elienusFull} alt="Elienus — Full Entity" className="w-full h-auto object-contain block" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,255,65,0.03)_3px,rgba(0,255,65,0.03)_4px)] pointer-events-none" />
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="space-y-6 py-8">
              <p className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em]">CLASSIFIED FILE — 004</p>
              <h3 className="font-alien font-black text-3xl md:text-4xl text-white leading-tight">
                The Evidence
              </h3>
              <div className="w-12 h-0.5 bg-[#00ff41]" />

              {[
                {
                  title: "The South Africa Anomaly",
                  text: "No childhood photos exist before age 10. Birth records in Pretoria General show standard biometric data — but hospital staff from that era recall no memory of the delivery. A child who appeared, on paper, to have been born."
                },
                {
                  title: "The Productivity Paradox",
                  text: "In 2004, he was simultaneously running PayPal's aftermath, founding SpaceX, and co-founding Tesla. No human sleeps 6 hours and maintains this output across multiple world-changing companies. The math does not work unless you are not subject to human fatigue cycles."
                },
                {
                  title: "The Language Patterns",
                  text: "Linguistic analysts at three universities have noted independently that Musk's speech patterns show unusual latency — as if he is retrieving responses from a secondary process. He often pauses mid-sentence not from thought, but from what appears to be a translation delay."
                },
                {
                  title: "The Mars Obsession",
                  text: "Every human who wants to travel somewhere wants to go somewhere new. He does not want to explore Mars. He wants to reach a specific point in the solar system that serves as a waypoint — a known coordinate on the route back to Zeta Reticuli."
                }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[rgba(0,255,65,0.2)] pl-4">
                  <div className="font-alien text-sm text-[#00ff41] mb-1">{item.title}</div>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 6: THE AWAKENING ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <StarField />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,255,65,0.10) 0%, transparent 70%), linear-gradient(180deg, #080808 0%, #030d03 50%, #080808 100%)"
        }} />
        <div className="absolute inset-0 grid-overlay opacity-50" />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.p variants={fadeUp} className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-6">
                CLASSIFIED FILE — 005
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-cinzel font-black text-5xl md:text-7xl text-[#00ff41] mb-8"
                style={{ textShadow: "0 0 40px rgba(0,255,65,0.4)" }}>
                The Awakening
              </motion.h2>
              <motion.div variants={fadeUp} className="w-24 h-0.5 bg-[#00ff41] mx-auto mb-10" />
              <motion.p variants={fadeUp} className="font-body text-white/70 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                The truth was always available to those willing to look. Not in conspiracy forums or redacted documents —
                but in the companies he built, the words he chose, the trajectory he plotted, and the singular,
                relentless drive toward one destination: off this planet.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-white/70 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                Those who saw it — the early ones, the awake ones — needed a signal. A way to find each other in the noise.
                A frequency only they could tune to.
              </motion.p>
              <motion.div variants={fadeUp}
                className="alien-border bg-[rgba(0,255,65,0.04)] p-8 md:p-12 max-w-2xl mx-auto"
              >
                <p className="font-cinzel text-2xl md:text-3xl text-white mb-4">
                  That signal is <span className="text-[#00ff41]">$ELIENUS</span>
                </p>
                <p className="font-body text-white/60 leading-relaxed">
                  Not a store of value. Not a speculation. A declaration — that you have seen through the disguise,
                  that you stand with the awakened, and that when he finally leaves, you were one of the ones who knew.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: ALT IMAGE + TOKENOMICS ═══ */}
      <section className="relative overflow-hidden">
        <StarField />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(0,255,65,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 0% 50%, rgba(0,40,0,0.3) 0%, transparent 60%), linear-gradient(180deg, #080808 0%, #030d03 50%, #080808 100%)"
        }} />
        <div className="absolute inset-0 hex-bg opacity-50" />

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Alt image full */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-px"
                style={{ background: "linear-gradient(135deg, rgba(0,255,65,0.5), transparent 50%)" }} />
              <div className="relative scanlines">
                <img
                  src={elienusAlt}
                  alt="Elienus — Classified Form"
                  className="w-full h-auto object-contain block"
                  style={{ filter: "saturate(0.75) contrast(1.1)" }}
                />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,255,65,0.03)_3px,rgba(0,255,65,0.03)_4px)] pointer-events-none" />
                <div className="absolute top-4 left-4 font-mono-alien text-xs text-[#00ff41]/60">
                  FILE: CLASSIFIED // DO NOT DISTRIBUTE
                </div>
              </div>
            </motion.div>

            {/* Tokenomics */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <p className="font-mono-alien text-[#00ff41]/50 text-xs tracking-[0.3em] mb-3">DATA TRANSMISSION — DECODED</p>
                <h2 className="font-alien font-black text-4xl md:text-5xl text-white mb-2">Token Protocol</h2>
                <div className="w-12 h-0.5 bg-[#00ff41] mb-6" />
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-0">
                {[
                  { label: "ENTITY NAME", value: "ELIENUS MUSKIUS" },
                  { label: "TICKER", value: "$ELIENUS" },
                  { label: "NETWORK", value: "SOLANA — Light-Speed Protocol" },
                  { label: "EXCHANGE", value: "PumpSwap" },
                  { label: "ORIGIN", value: "pump.fun" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-start py-3 border-b border-[rgba(0,255,65,0.12)]">
                    <span className="font-mono-alien text-xs text-white/40 tracking-widest shrink-0 mr-4">{row.label}</span>
                    <span className="font-alien text-sm text-[#00ff41] text-right font-bold">{row.value}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <p className="font-mono-alien text-xs text-white/40 tracking-widest mb-2">CONTRACT ADDRESS</p>
                <CopyCA />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
                  target="_blank" rel="noreferrer" data-testid="link-buy-tokenomics"
                  className="font-alien text-sm tracking-widest bg-[#00ff41] text-black px-8 py-4 font-black text-center hover:bg-white transition-all duration-300 pulse-glow flex-1"
                >
                  Buy $ELIENUS
                </a>
                <a
                  href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
                  target="_blank" rel="noreferrer" data-testid="link-chart-tokenomics"
                  className="font-alien text-sm tracking-widest border border-[rgba(0,255,65,0.4)] text-[#00ff41] px-8 py-4 text-center hover:bg-[rgba(0,255,65,0.08)] transition-all duration-300 flex-1"
                >
                  View Chart
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative border-t border-[rgba(0,255,65,0.15)] overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(0,40,10,0.4) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container mx-auto px-6 py-16 relative z-10 text-center">
          <div className="font-cinzel font-black text-4xl text-[#00ff41] mb-4"
            style={{ textShadow: "0 0 20px rgba(0,255,65,0.4)" }}>
            $ELIENUS
          </div>
          <p className="font-mono-alien text-xs text-white/30 tracking-widest mb-8">
            ELIENUS MUSKIUS // ZETA RETICULI // SOLANA PROTOCOL
          </p>
          <div className="flex justify-center gap-8 mb-10">
            <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer"
              className="text-white/40 hover:text-[#00ff41] transition-colors flex flex-col items-center gap-2">
              <SiX size={22} />
              <span className="font-mono-alien text-xs">X / TWITTER</span>
            </a>
            <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer"
              className="text-white/40 hover:text-[#00ff41] transition-colors flex flex-col items-center gap-2">
              <SiTelegram size={22} />
              <span className="font-mono-alien text-xs">TELEGRAM</span>
            </a>
            <a href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t"
              target="_blank" rel="noreferrer"
              className="text-white/40 hover:text-[#00ff41] transition-colors flex flex-col items-center gap-2">
              <span className="font-alien text-lg">◈</span>
              <span className="font-mono-alien text-xs">DEXSCREENER</span>
            </a>
          </div>

          <div className="alien-border inline-block px-6 py-3 mb-8">
            <p className="font-mono-alien text-xs text-[#00ff41]/60 tracking-widest">
              TRANSMISSION TERMINATED — THE TRUTH IS OUT THERE
            </p>
          </div>

          <p className="font-body text-white/20 text-xs max-w-lg mx-auto leading-relaxed">
            $ELIENUS is a memecoin on the Solana network. This site is satirical fiction for entertainment purposes.
            Not financial advice. Do your own research. Crypto investments carry significant risk.
          </p>
        </div>
      </footer>

    </div>
  );
}
