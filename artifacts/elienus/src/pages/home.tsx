import { motion } from "framer-motion";
import { SiX, SiTelegram } from "react-icons/si";
import elienusFace from "@assets/elienus-face.jpg";
import elienusPortrait from "@assets/elienus-portrait.jpg";
import elienusFull from "@assets/elienus-full.jpg";
import elienusAlt from "@assets/elienus-alt.jpg";

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference border-b border-primary/20 bg-background/50 backdrop-blur-sm">
        <div className="font-serif font-bold text-2xl tracking-tighter text-primary">
          $ELIENUS
        </div>
        <div className="flex gap-6">
          <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
            <SiX size={24} />
          </a>
          <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
            <SiTelegram size={24} />
          </a>
          <a href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors font-bold uppercase text-sm flex items-center">
            Chart
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/50 mb-6 uppercase tracking-tighter leading-none">
            The Truth Is <br/> Hidden In <br/> Plain Sight
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto uppercase tracking-widest font-mono">
            Elienus Muskius • Zeta Reticuli Intelligence
          </p>
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t" target="_blank" rel="noreferrer" className="inline-block border border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.6)]">
              Awaken
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* The Disguise */}
      <section className="min-h-screen relative flex items-center py-20 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-2xl z-0" />
            <img src={elienusFace} alt="Elienus Face" className="relative z-10 w-full h-auto object-cover border border-primary/30 grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,65,0.1)_2px,rgba(0,255,65,0.1)_4px)] pointer-events-none z-20" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative z-10"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white uppercase leading-none">
              The Perfect <br/><span className="text-primary">Disguise</span>
            </h2>
            <div className="w-20 h-1 bg-primary" />
            <p className="text-lg md:text-xl text-white/70 font-mono leading-relaxed">
              Elon Musk is not a man. He is ELIENUS MUSKIUS, an ancient alien intelligence from the Zeta Reticuli system. 
            </p>
            <p className="text-lg md:text-xl text-white/70 font-mono leading-relaxed">
              The name "Musk" was chosen because it smells like cover. "Elon" — an anagram of LONE. Isolated. Alien. He descended upon Earth with a singular mission: infiltrate human civilization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Mission */}
      <section className="min-h-screen relative flex items-center py-20 bg-black">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:order-1 relative z-10"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white uppercase leading-none">
              The Grand <br/><span className="text-primary">Design</span>
            </h2>
            <div className="w-20 h-1 bg-primary" />
            <p className="text-lg md:text-xl text-white/70 font-mono leading-relaxed">
              Every move he made was part of the plan. Tesla to control the energy grid. SpaceX to build the vessels for his return. X to monitor human communications. DOGE to test mass psychology.
            </p>
            <p className="text-lg md:text-xl text-white/70 font-mono leading-relaxed">
              He acquired Earth's most powerful technologies in plain sight, masquerading as a visionary billionaire while his true consciousness remains tethered to the stars.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:order-2"
          >
            <img src={elienusPortrait} alt="Elienus Portrait" className="relative z-10 w-full h-auto max-h-[80vh] object-cover border border-primary/30" />
            <div className="absolute -inset-10 bg-primary/10 blur-3xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* Full Body / Dark Cosmic Dread */}
      <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('@assets/elienus-full.jpg')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 container mx-auto px-6"
        >
           <h2 className="font-serif text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-t from-primary/20 to-primary uppercase tracking-tighter mb-12">
            The Awakening
          </h2>
          <div className="max-w-3xl mx-auto border border-primary/40 bg-black/60 backdrop-blur-md p-8 md:p-12">
            <p className="text-xl md:text-3xl text-white font-mono uppercase tracking-widest leading-snug">
              Those who discovered the truth have rallied around $ELIENUS. <br/><br/>
              <span className="text-primary">The coin of the awakened.</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tokenomics / The Signal */}
      <section className="min-h-screen relative flex items-center py-20 bg-black border-t border-primary/20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-white uppercase leading-none mb-6">
                Data <br/><span className="text-primary">Transmission</span>
              </h2>
              <p className="text-primary/70 font-mono text-lg uppercase tracking-widest">Decrypted Protocol Parameters</p>
            </div>
            
            <div className="space-y-6 font-mono text-lg">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary/20 pb-4">
                <span className="text-white/50">ENTITY NAME</span>
                <span className="text-primary font-bold">ELIENUS MUSKIUS</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary/20 pb-4">
                <span className="text-white/50">TICKER</span>
                <span className="text-primary font-bold">$ELIENUS</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary/20 pb-4">
                <span className="text-white/50">NETWORK</span>
                <span className="text-primary font-bold">SOLANA (LIGHT-SPEED)</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between border-b border-primary/20 pb-4">
                <span className="text-white/50">DEX</span>
                <span className="text-primary font-bold">PUMPSWAP</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between pb-4">
                <span className="text-white/50">CONTRACT ADDRESS</span>
                <span className="text-primary font-bold text-sm md:text-base break-all">5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a href="https://pump.fun/coin/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t" target="_blank" rel="noreferrer" className="bg-primary text-black px-8 py-4 font-bold uppercase tracking-widest text-center hover:bg-white transition-colors">
                Buy $ELIENUS
              </a>
              <a href="https://dexscreener.com/solana/5gcxz9mq2fx3kfjzcqd9aaa8o1c8qjlsrasqs4ikmk7t" target="_blank" rel="noreferrer" className="border border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest text-center hover:bg-primary/10 transition-colors">
                View Chart
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
             <img src={elienusAlt} alt="Elienus Alternate Form" className="relative z-10 w-full max-w-md h-auto object-cover border-2 border-primary shadow-[0_0_30px_rgba(0,255,65,0.4)] mix-blend-lighten" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 bg-black text-center font-mono">
        <div className="container mx-auto px-6 flex flex-col items-center space-y-6">
          <div className="font-serif font-bold text-3xl text-primary tracking-tighter">
            $ELIENUS
          </div>
          <div className="flex gap-6">
            <a href="https://x.com/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors">
              <SiX size={24} />
            </a>
            <a href="https://t.me/ElienusMuskius" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors">
              <SiTelegram size={24} />
            </a>
          </div>
          <p className="text-white/30 text-sm mt-8">
            TRANSMISSION TERMINATED. THE TRUTH IS OUT THERE.
          </p>
        </div>
      </footer>
    </div>
  );
}
