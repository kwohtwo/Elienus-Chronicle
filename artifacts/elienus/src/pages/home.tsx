import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SiX, SiTelegram } from "react-icons/si";

const CA = "yrKmZe5x2YBp1P6ufKLUCNifPbqxwHiwsbfDRWBpump";
const BUY_URL = "https://pump.fun/coin/yrKmZe5x2YBp1P6ufKLUCNifPbqxwHiwsbfDRWBpump";
const DEX_URL = "https://dexscreener.com/solana/yrKmZe5x2YBp1P6ufKLUCNifPbqxwHiwsbfDRWBpump";
const X_URL = "https://x.com/ElienusMuskius";
const TELEGRAM_URL = "https://t.me/ElienusMuskius";

const images = {
  face: "/images/elienus-face.jpg",
  portrait: "/images/elienus-portrait.jpg",
  full: "/images/elienus-full.jpg",
  alt: "/images/elienus-alt.jpg",
};

const tabs = [
  { id: "story", label: "STORY" },
  { id: "tokenomics", label: "TOKENOMICS" },
  { id: "buy", label: "BUY" },
  { id: "socials", label: "SOCIALS" },
];

const storyPhases = [
  {
    phase: "Phase I",
    title: "The Signal",
    image: images.face,
    intro: "Before charts. Before markets. Before humanity looked to the stars…",
    body: "The signal was sent. Not to everyone. Not to the masses. Only to those capable of understanding what comes next. For centuries, civilizations rose believing they were in control. They weren’t. They were being observed. Measured. Prepared.",
  },
  {
    phase: "Phase II",
    title: "Arrival",
    image: images.portrait,
    intro: "He didn’t come from Mars. He didn’t come from Earth. He came from inevitability.",
    body: "Elienus Muskius. Architect of civilizations. Breaker of limitations. Master of expansion. He does not arrive loudly. He appears exactly when systems begin to fail. And now… you are seeing him.",
  },
  {
    phase: "Phase III",
    title: "Awakening",
    image: images.full,
    intro: "Some laughed. ‘It’s just another meme.’ Others felt it immediately. ‘Something is different.’",
    body: "These are the ones who understood: this is not a coin. This is not a trend. This is alignment with a higher system. The chosen began to gather. Not randomly. But because the signal reached them.",
  },
  {
    phase: "Phase IV",
    title: "Assimilation",
    image: images.alt,
    intro: "Some chased profits. Others joined the future.",
    body: "The network expanded. Not through marketing. Through inevitability. Memes became messages. Posts became transmissions. Followers became believers.",
  },
  {
    phase: "Phase V",
    title: "Domination",
    image: images.portrait,
    intro: "Earth was never the goal. It was the test.",
    body: "Civilizations don’t compete with Elienus. They are absorbed into his expansion. Every system eventually aligns. Every timeline bends. Every market fades. Only one constant remains: Elienus Muskius.",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Stars({ count = 80 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: `${(index * 137.5) % 100}%`,
      top: `${(index * 97.3) % 100}%`,
      size: index % 9 === 0 ? 2 : 1,
      delay: `${(index % 7) * 0.45}s`,
      duration: `${2.5 + (index % 5) * 0.5}s`,
      green: index % 4 === 0,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: star.green ? "rgba(0,255,65,0.9)" : "rgba(255,255,255,0.45)",
            animation: `twinkle ${star.duration} ${star.delay} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Meteors() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {[0, 1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          className="absolute h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#00ff41] to-white opacity-70 blur-[1px]"
          initial={{ x: -200, y: 120 + item * 130, rotate: -18 }}
          animate={{ x: [-200, 1600], y: [120 + item * 130, -80 + item * 130] }}
          transition={{ duration: 4 + item * 0.4, repeat: Infinity, delay: item * 1.5, repeatDelay: 5 }}
        />
      ))}
    </div>
  );
}

function CopyCA() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex w-full items-center gap-3 border border-[#00ff41]/35 bg-black/70 px-4 py-3 transition hover:bg-[#00ff41]/10"
    >
      <span className="shrink-0 font-mono text-[10px] text-[#00ff41]/50">CA</span>
      <span className="flex-1 break-all text-left font-mono text-[10px] text-[#00ff41]">{CA}</span>
      <span className={`shrink-0 border px-2 py-0.5 font-mono text-[10px] transition ${copied ? "border-[#00ff41] text-[#00ff41]" : "border-[#00ff41]/30 text-[#00ff41]/60 group-hover:border-[#00ff41] group-hover:text-[#00ff41]"}`}>
        {copied ? "✓ COPIED" : "COPY"}
      </span>
    </button>
  );
}

function Nav() {
  const [active, setActive] = useState("story");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-72px 0px 0px 0px" }
    );

    tabs.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#00ff41]/15 bg-[#060606]/95 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-3">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-black tracking-[0.25em] text-[#00ff41]"
          style={{ textShadow: "0 0 12px rgba(0,255,65,0.65)" }}
        >
          $ELIENUS
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-4 py-2 text-[11px] font-black tracking-[0.25em] transition ${active === tab.id ? "border-b-2 border-[#00ff41] text-[#00ff41]" : "text-white/40 hover:text-white/75"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={BUY_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#00ff41] px-5 py-2 text-xs font-black tracking-[0.2em] text-black transition hover:bg-white"
          >
            BUY NOW
          </a>
          <button className="pl-1 text-[#00ff41]/70 hover:text-[#00ff41] md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-[5px]">
              <div className="h-px w-5 bg-current" />
              <div className="h-px w-5 bg-current" />
              <div className="h-px w-5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-2 border-t border-[#00ff41]/10 bg-[#060606] px-5 py-3 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                scrollToSection(tab.id);
                setMenuOpen(false);
              }}
              className="py-2 text-left text-xs font-black tracking-[0.25em] text-white/55 transition hover:text-[#00ff41]"
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <Stars count={110} />

      <div className="absolute inset-0 z-0">
        <img
          src={images.alt}
          alt="Elienus Muskius"
          className="h-full w-full object-cover object-center"
          style={{ filter: "saturate(0.55) contrast(1.2) brightness(0.42)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/45 via-[#060606]/20 to-[#060606]" />
        <div className="absolute inset-0 scanlines" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#00ff41]/65"
        >
          King of All Aliens · Not From Earth
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="mb-6 font-serif font-black leading-[0.86]"
          style={{ textShadow: "0 0 70px rgba(0,255,65,0.55), 0 0 130px rgba(0,255,65,0.2)" }}
        >
          <span className="block text-[#00ff41]" style={{ fontSize: "clamp(3.8rem, 15vw, 10rem)" }}>
            Elienus
          </span>
          <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 11vw, 7.5rem)" }}>
            Muskius
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          className="mx-auto mb-8 max-w-md space-y-1"
        >
          <p className="text-base tracking-wider text-white/75 md:text-lg">This isn’t a coin.</p>
          <p className="font-serif text-xl font-black tracking-wide text-[#00ff41] md:text-2xl" style={{ textShadow: "0 0 20px rgba(0,255,65,0.45)" }}>
            It’s a civilization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mb-5 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <a href={BUY_URL} target="_blank" rel="noreferrer" className="pulse-glow w-full bg-[#00ff41] px-10 py-4 text-center text-sm font-black tracking-[0.25em] text-black transition hover:bg-white sm:w-auto">
            BUY $ELIENUS
          </a>
          <button onClick={() => scrollToSection("story")} className="w-full border border-[#00ff41]/45 px-8 py-4 text-sm font-black tracking-[0.25em] text-[#00ff41] transition hover:bg-[#00ff41]/10 sm:w-auto">
            READ THE LORE
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="flex justify-center">
          <div className="w-full max-w-sm">
            <CopyCA />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25, duration: 0.8 }} className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-1">
          {["HE CONQUERS", "HE BUILDS", "HE OWNS", "NOT FOR EARTH"].map((item) => (
            <span key={item} className="font-mono text-[10px] tracking-[0.35em] text-[#00ff41]/50">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative scroll-mt-16 overflow-hidden">
      <Stars count={60} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_0%_40%,rgba(40,0,90,0.22),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="mb-12 flex items-center gap-4">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#00ff41]/50">FULL STORY</div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#00ff41]/35 to-transparent" />
        </div>

        <div className="space-y-16">
          {storyPhases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden border border-[#00ff41]/20 bg-black/40">
                <img src={phase.image} alt={phase.title} className="block h-auto w-full object-contain" style={{ filter: "saturate(0.65) contrast(1.15)" }} />
                <div className="pointer-events-none absolute inset-0 scanlines" />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#060606] to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.25em] text-[#00ff41]/55">
                  {phase.phase.toUpperCase()} // {phase.title.toUpperCase()}
                </div>
              </div>

              <div className="space-y-5">
                <p className="font-mono text-[10px] tracking-[0.3em] text-[#00ff41]/50">{phase.phase}</p>
                <h2 className="font-serif text-4xl font-black leading-tight text-white md:text-6xl">
                  {phase.title}
                </h2>
                <div className="h-0.5 w-12 bg-[#00ff41]" />
                <p className="text-lg font-bold leading-relaxed text-[#00ff41]">{phase.intro}</p>
                <p className="text-base leading-relaxed text-white/70 md:text-lg">{phase.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden border border-[#00ff41]/25 bg-[#00ff41]/5 p-8 text-center md:p-12"
        >
          <p className="font-serif text-2xl font-black leading-tight text-white md:text-4xl">
            Not a trend.<br />Not a phase.<br />
            <span className="text-[#00ff41]">An inevitability.</span>
          </p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.25em] text-[#00ff41]/45">@ELIENUSMUSKIUS</p>
        </motion.div>
      </div>
    </section>
  );
}

function Tokenomics() {
  const rows = [
    { label: "TOKEN", value: "$ELIENUS" },
    { label: "NETWORK", value: "SOLANA" },
    { label: "LAUNCH", value: "PUMP.FUN" },
    { label: "EXCHANGE", value: "PUMPSWAP" },
  ];

  return (
    <section id="tokenomics" className="relative scroll-mt-16 overflow-hidden bg-[#030d03]">
      <Stars count={50} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,rgba(0,255,65,0.1),transparent_70%)]" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-3xl font-black tracking-[0.18em] text-white md:text-5xl">TOKENOMICS</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-xl space-y-5">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="divide-y divide-[#00ff41]/10 border border-[#00ff41]/25 bg-[#00ff41]/5">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between px-6 py-4">
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/35">{row.label}</span>
                <span className="text-sm font-black tracking-[0.15em] text-[#00ff41]">{row.value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-2 font-mono text-[10px] tracking-[0.25em] text-white/35">CONTRACT ADDRESS</div>
            <CopyCA />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-2">
            {["Fair launch", "No presale", "Community-powered", "Solana speed"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[#00ff41]">✓</span>
                <span className="text-sm text-white/55">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-2 pt-1">
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="pulse-glow block w-full bg-[#00ff41] py-5 text-center text-sm font-black tracking-[0.25em] text-black transition hover:bg-white">
              BUY $ELIENUS
            </a>
            <a href={DEX_URL} target="_blank" rel="noreferrer" className="block w-full border border-[#00ff41]/30 py-3 text-center text-xs font-black tracking-[0.2em] text-[#00ff41]/70 transition hover:bg-[#00ff41]/10">
              VIEW ON DEXSCREENER
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Buy() {
  const steps = [
    { n: "01", title: "Get a Solana wallet", body: "Download Phantom or Solflare. Create a wallet and back up your seed phrase safely." },
    { n: "02", title: "Buy SOL", body: "Buy SOL on Coinbase, Binance, Kraken or another exchange, then send it to your wallet." },
    { n: "03", title: "Open Pump.fun", body: "Use the official $ELIENUS Pump.fun link. Always check the CA before swapping." },
    { n: "04", title: "Join the civilization", body: "Track the chart, join Telegram, raid X and spread the signal." },
  ];

  return (
    <section id="buy" className="relative scroll-mt-16 overflow-hidden">
      <Stars count={45} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_60%,rgba(0,60,20,0.16),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-3xl font-black tracking-[0.18em] text-white md:text-5xl">HOW TO BUY</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-xl space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-5 border border-[#00ff41]/15 bg-[#00ff41]/5 p-5"
            >
              <div className="w-10 shrink-0 font-serif text-2xl font-black leading-none text-[#00ff41]/35">{step.n}</div>
              <div>
                <h3 className="mb-1 text-sm font-black tracking-[0.15em] text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.body}</p>
              </div>
            </motion.div>
          ))}

          <div className="space-y-2 pt-2">
            <a href={BUY_URL} target="_blank" rel="noreferrer" className="pulse-glow block w-full bg-[#00ff41] py-5 text-center text-sm font-black tracking-[0.25em] text-black transition hover:bg-white">
              BUY $ELIENUS NOW
            </a>
            <CopyCA />
          </div>
        </div>
      </div>
    </section>
  );
}

function Socials() {
  const items = [
    { icon: <SiX size={28} />, label: "X / TWITTER", sub: "@ElienusMuskius", url: X_URL, desc: "Follow for drops, transmissions and alien intel." },
    { icon: <SiTelegram size={28} />, label: "TELEGRAM", sub: "t.me/ElienusMuskius", url: TELEGRAM_URL, desc: "Beam yourself in. Join the civilization." },
    { icon: <span className="text-3xl leading-none">◈</span>, label: "DEXSCREENER", sub: "Live Chart", url: DEX_URL, desc: "Track the signal in real time." },
  ];

  return (
    <section id="socials" className="relative scroll-mt-16 overflow-hidden bg-[#030803]">
      <Stars count={50} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,rgba(0,255,65,0.1),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-3xl font-black tracking-[0.18em] text-white md:text-5xl">SOCIALS</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[#00ff41]/40 to-transparent" />
        </div>

        <div className="mx-auto mb-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {items.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center border border-[#00ff41]/15 bg-[#00ff41]/5 p-6 text-center transition hover:-translate-y-2 hover:border-[#00ff41]/40 hover:bg-[#00ff41]/10"
            >
              <div className="mb-3 text-[#00ff41]/65 transition group-hover:text-[#00ff41]">{item.icon}</div>
              <h3 className="mb-1 text-sm font-black tracking-[0.15em] text-white">{item.label}</h3>
              <p className="mb-3 font-mono text-[10px] text-[#00ff41]/55">{item.sub}</p>
              <p className="text-xs leading-relaxed text-white/40">{item.desc}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl overflow-hidden border border-[#00ff41]/30 bg-[#00ff41]/5 p-8 text-center md:p-12"
        >
          <h3 className="mb-2 font-serif text-4xl font-black text-[#00ff41]" style={{ textShadow: "0 0 25px rgba(0,255,65,0.45)" }}>
            $ELIENUS
          </h3>
          <p className="mb-5 text-xs tracking-[0.25em] text-white/50">KING OF ALL ALIENS</p>
          <p className="mb-2 text-white/65">This isn’t a coin.</p>
          <p className="mb-5 font-serif text-xl text-[#00ff41]">It’s a civilization.</p>
          <a href={BUY_URL} target="_blank" rel="noreferrer" className="pulse-glow inline-block bg-[#00ff41] px-12 py-4 text-sm font-black tracking-[0.25em] text-black transition hover:bg-white">
            BUY $ELIENUS
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#00ff41]/10 bg-[#030603] py-8 text-center">
      <div className="mx-auto px-5">
        <div className="mb-4 flex flex-wrap justify-center gap-6">
          <a href={X_URL} target="_blank" rel="noreferrer" className="text-white/25 transition hover:text-[#00ff41]"><SiX size={16} /></a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="text-white/25 transition hover:text-[#00ff41]"><SiTelegram size={16} /></a>
          <a href={DEX_URL} target="_blank" rel="noreferrer" className="text-[10px] font-black tracking-[0.25em] text-white/25 transition hover:text-[#00ff41]">DEXSCREENER</a>
          <a href={BUY_URL} target="_blank" rel="noreferrer" className="text-[10px] font-black tracking-[0.25em] text-white/25 transition hover:text-[#00ff41]">PUMP.FUN</a>
        </div>
        <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-white/15">© 2026 ELIENUS MUSKIUS — SOLANA</p>
        <p className="mx-auto max-w-sm text-xs leading-relaxed text-white/15">Satirical memecoin. Not financial advice. Do your own research.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060606] text-white">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 16px rgba(0,255,65,0.35), 0 0 36px rgba(0,255,65,0.18); }
          50% { box-shadow: 0 0 28px rgba(0,255,65,0.75), 0 0 70px rgba(0,255,65,0.28); }
        }
        .pulse-glow { animation: pulseGlow 2.2s ease-in-out infinite; }
        .scanlines {
          background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.035) 3px, rgba(0,255,65,0.035) 4px);
        }
        .grid-bg {
          background-image: linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
      <Meteors />
      <Nav />
      <Hero />
      <Story />
      <Tokenomics />
      <Buy />
      <Socials />
      <Footer />
    </div>
  );
}
