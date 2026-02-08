import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

// EXPERIMENTAL BRUTALIST PORTFOLIO
// Aesthetic: Raw industrial meets avant-garde typography
// Font: Staatliches (industrial condensed) + Share Tech Mono (technical mono)
// Color: Black, white, electric lime (#c0ff00), safety orange (#ff6b00)
// Layout: Asymmetric grid-breaking composition with intentional tension

type View = 'home' | 'work' | 'lab' | 'contact'

interface Work {
  id: string
  title: string
  metric: string
  angle: number
}

interface Experiment {
  title: string
  span: string
  bg: string
}

const Portfolio = () => {
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<View>('home')
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 700 })
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 700 })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  const works: Work[] = useMemo(() => [
    { id: 'PRJ_001', title: 'E-COMMERCE PLATFORM', metric: '+47%', angle: -2 },
    { id: 'PRJ_002', title: 'HEALTHCARE SYSTEM', metric: '500K', angle: 1.5 },
    { id: 'PRJ_003', title: 'FINTECH ANALYTICS', metric: '$2M', angle: -1 },
    { id: 'PRJ_004', title: 'BANKING MOBILE', metric: '4.8★', angle: 2 },
  ], [])

  const experiments: Experiment[] = useMemo(() => [
    { title: 'GENERATIVE\nART', span: 'col-span-2 sm:col-span-4 md:col-span-3 lg:col-span-5', bg: 'bg-[#c0ff00]' },
    { title: 'REALTIME\nCOLLAB', span: 'col-span-2 sm:col-span-4 md:col-span-3 lg:col-span-7', bg: 'bg-black text-white' },
    { title: 'VOICE\nINTERFACE', span: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4', bg: 'bg-[#ff6b00] text-white' },
    { title: 'CSS\nFRAMEWORK', span: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4', bg: 'bg-white border-2 sm:border-4 border-black' },
    { title: 'AUDIO\nSYNTH', span: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4', bg: 'bg-[#c0ff00]' },
    { title: 'ML\nTOOLKIT', span: 'col-span-2 sm:col-span-4 md:col-span-4 lg:col-span-8', bg: 'bg-black text-white' },
    { title: 'CREATIVE\nCODE', span: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4', bg: 'bg-[#ff6b00] text-white' },
  ], [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Staatliches&family=Share+Tech+Mono&display=swap');
        `}</style>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-white text-center"
          >
            <div className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] leading-none tracking-wider" style={{ fontFamily: "'Staatliches', sans-serif" }}>
              <motion.span
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, times: [0, 0.3, 0.7, 1] }}
                className="text-[#c0ff00]"
              >
                V
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, delay: 0.2, times: [0, 0.3, 0.7, 1] }}
                className="text-[#ff6b00]"
              >
                E
              </motion.span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1 bg-white mt-6"
          />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Staatliches&family=Share+Tech+Mono&display=swap');
        
        :root {
          --lime: #c0ff00;
          --orange: #ff6b00;
        }
        
        body { 
          font-family: 'Staatliches', sans-serif;
          letter-spacing: 0.05em;
        }
        
        .mono { 
          font-family: 'Share Tech Mono', monospace;
          letter-spacing: 0.02em;
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,.03) 25%, rgba(0,0,0,.03) 26%, transparent 27%),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,.03) 25%, rgba(0,0,0,.03) 26%, transparent 27%);
          background-size: 60px 60px;
        }
      `}</style>

      {/* Custom Cursor */}
      <motion.div
        className="hidden md:block fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{ left: cursorXSpring, top: cursorYSpring, x: -12, y: -12 }}
      >
        <div className="w-full h-full border-2 border-[#c0ff00] rotate-45" />
      </motion.div>

      {/* Background Elements */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-0 w-[2px] h-full bg-[#c0ff00] rotate-12 origin-top" />
        <div className="absolute right-1/4 top-0 w-[3px] h-full bg-[#ff6b00] -rotate-6 origin-top" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b-4 border-black"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-5 flex justify-between items-center">
          <button
            onClick={() => setView('home')}
            className="text-lg sm:text-xl md:text-2xl tracking-wider hover:text-[#c0ff00] transition-colors"
          >
            VINS/EVINALON
          </button>
          <div className="flex gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm tracking-widest">
            {(['work', 'lab', 'contact'] as const).map((item) => (
              <button
                key={item}
                onClick={() => setView(item)}
                className={`hover:text-[#ff6b00] transition-colors ${
                  view === item ? 'text-[#ff6b00]' : ''
                }`}
              >
                [{item.toUpperCase()}]
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 sm:pt-28 md:pt-32"
          >
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] leading-[0.9] tracking-wider mb-8 sm:mb-12 md:mb-16">
                  <motion.span
                    className="inline-block"
                    animate={{ rotate: [-1, 1, -1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    PRODUCT
                  </motion.span>
                  <br />
                  <span className="text-[#c0ff00]">ENGINEER</span>
                  <span className="text-[#ff6b00]">//</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-24 md:mb-32">
                  <div className="border-l-2 sm:border-l-4 border-black pl-4 sm:pl-6 md:pl-8">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8">
                      BUILDING RADICAL DIGITAL EXPERIENCES THROUGH EXPERIMENTAL 
                      DESIGN SYSTEMS AND UNCONVENTIONAL INTERFACES.
                    </p>
                    <div className="mono text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                      <div>→ REACT / TYPESCRIPT / NODE.JS</div>
                      <div>→ WEBGL / CREATIVE CODING</div>
                      <div>→ PERFORMANCE / ACCESSIBILITY</div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="aspect-square bg-[#c0ff00] flex items-center justify-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                  >
                    ✦
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'YEARS', value: '8+' },
                    { label: 'PROJECTS', value: '50+' },
                    { label: 'RATING', value: '99%' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 hover:bg-black hover:text-[#c0ff00] transition-all cursor-default"
                      style={{ transform: `rotate(${(i - 1) * 1.5}deg)` }}
                    >
                      <div className="mono text-[10px] sm:text-xs mb-1.5 sm:mb-2">[{stat.label}]</div>
                      <div className="text-4xl sm:text-5xl md:text-6xl tracking-wider">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.main>
        )}

        {view === 'work' && (
          <motion.main
            key="work"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 sm:pt-28 md:pt-32"
          >
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
              <motion.h2
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider mb-10 sm:mb-16 md:mb-20"
              >
                SELECTED
                <br />
                <span className="text-[#ff6b00]">WORK//</span>
              </motion.h2>

              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {works.map((work, index) => (
                  <motion.article
                    key={work.id}
                    initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                    className="border-2 sm:border-4 border-black p-6 sm:p-8 md:p-12 hover:bg-[#c0ff00] transition-all cursor-pointer"
                    style={{ transform: `rotate(${work.angle}deg)` }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
                      <div>
                        <div className="mono text-[10px] sm:text-xs mb-2 sm:mb-3">[{work.id}]</div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider">{work.title}</h3>
                      </div>
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#ff6b00]">{work.metric}</div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.main>
        )}

        {view === 'lab' && (
          <motion.main
            key="lab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 sm:pt-28 md:pt-32"
          >
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider mb-12 sm:mb-16 md:mb-24 text-center"
              >
                <span className="text-[#c0ff00]">EXPERI</span>
                <span>MENTAL</span>
                <span className="text-[#ff6b00]">//</span>
              </motion.h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4">
                {experiments.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className={`${exp.span} ${exp.bg} p-4 sm:p-6 md:p-8 lg:p-10 cursor-pointer aspect-square flex items-center justify-center`}
                  >
                    <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight whitespace-pre-line text-center tracking-wider">
                      {exp.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.main>
        )}

        {view === 'contact' && (
          <motion.main
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 sm:pt-28 md:pt-32"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32">
              <motion.h2
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] leading-none tracking-wider mb-12 sm:mb-16 md:mb-20"
              >
                LET'S
                <br />
                <span className="text-[#c0ff00]">COLLAB</span>
                <span className="text-[#ff6b00]">ORATE</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 bg-[#c0ff00]"
                >
                  <div className="mono text-[10px] sm:text-xs mb-2 sm:mb-3">[EMAIL]</div>
                  <a 
                    href="mailto:hello@vinsevinalon.com"
                    className="text-base sm:text-lg md:text-xl lg:text-2xl hover:underline break-all"
                  >
                    hello@vinsevinalon.com
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 bg-[#ff6b00] text-white"
                >
                  <div className="mono text-[10px] sm:text-xs mb-2 sm:mb-3">[SOCIAL]</div>
                  <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-lg">
                    <a href="https://github.com/vinsevinalon" className="block hover:underline">
                      → GITHUB
                    </a>
                    <a href="https://linkedin.com/in/vinsevinalon" className="block hover:underline">
                      → LINKEDIN
                    </a>
                    <a href="https://twitter.com/vinsevinalon" className="block hover:underline">
                      → TWITTER
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.form
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6"
              >
                <div>
                  <label className="mono text-[10px] sm:text-xs mb-1.5 sm:mb-2 block">[NAME]</label>
                  <input
                    type="text"
                    className="w-full border-2 sm:border-4 border-black p-3 sm:p-4 text-base sm:text-lg md:text-xl tracking-wider focus:outline-none focus:bg-[#c0ff00] transition-colors"
                  />
                </div>
                <div>
                  <label className="mono text-[10px] sm:text-xs mb-1.5 sm:mb-2 block">[EMAIL]</label>
                  <input
                    type="email"
                    className="w-full border-2 sm:border-4 border-black p-3 sm:p-4 text-base sm:text-lg md:text-xl tracking-wider focus:outline-none focus:bg-[#c0ff00] transition-colors"
                  />
                </div>
                <div>
                  <label className="mono text-[10px] sm:text-xs mb-1.5 sm:mb-2 block">[MESSAGE]</label>
                  <textarea
                    rows={5}
                    className="w-full border-2 sm:border-4 border-black p-3 sm:p-4 text-base sm:text-lg md:text-xl tracking-wider resize-none focus:outline-none focus:bg-[#c0ff00] transition-colors"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-black text-[#c0ff00] p-4 sm:p-5 md:p-6 text-lg sm:text-xl md:text-2xl tracking-widest hover:bg-[#ff6b00] hover:text-white transition-colors"
                >
                  SEND//→
                </motion.button>
              </motion.form>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      <footer className="border-t-2 sm:border-t-4 border-black mt-16 sm:mt-24 md:mt-32">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 mono text-[10px] sm:text-xs text-center sm:text-left">
          <div>© 2026 VINS EVINALON</div>
          <div className="tracking-wider">
            <span className="text-[#c0ff00]">BRUTALIST</span>
            <span className="text-[#ff6b00]">/EXPERIMENTAL</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
