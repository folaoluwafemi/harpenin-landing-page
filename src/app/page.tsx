"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      
      {/* Navigation */}
      <nav className="w-full max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-accent">harpenin</span>
          <span className="px-2 py-0.5 rounded border border-gray-300 text-[10px] font-semibold tracking-wider text-gray-500 uppercase">Studio</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="#" className="hover:text-foreground transition-colors">View our Pricing</Link>
          <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
             <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
          </div>
          <Link href="#" className="hover:text-foreground transition-colors">Join the partner program</Link>
        </div>

        <Link 
          href="https://apps.apple.com/us/app/harpenin/id6450974861"
          className="px-5 py-2.5 bg-gray-200 dark:bg-gray-800 text-foreground rounded-full text-sm font-semibold hover:bg-gray-300 transition-all flex items-center gap-2"
        >
          Get Early Access
          <ArrowRight className="w-4 h-4" />
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-20 md:pt-32 pb-32 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">The Event Command Center</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-8 text-balance max-w-4xl"
        >
          The operating system for organizers who build experiences, <br className="hidden md:block" />
          <span className="text-gray-400">not just crowds.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed mb-12"
        >
          One dashboard to manage content, engagement, communication, and everything happening inside your event app.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="#"
            className="px-10 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-bold hover:scale-105 transition-transform tracking-wide uppercase"
          >
            Get Early Access
          </Link>
        </motion.div>

      </section>

      {/* Visual Representation (Mockup) */}
      <section className="w-full px-6 pb-20 overflow-visible">
        <div className="max-w-[1200px] mx-auto relative h-[600px] md:h-[800px]">
          
          {/* Phone Mockup Frame */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] md:w-[380px] h-[650px] md:h-[750px] bg-black rounded-[50px] p-3 shadow-2xl z-10"
          >
            <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative">
               {/* Phone Content Placeholder */}
               <div className="w-full h-full bg-gray-50 flex flex-col">
                  {/* Header */}
                  <div className="h-16 bg-white border-b flex items-center justify-between px-6">
                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                     <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                  </div>
                  {/* Hero Image in App */}
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-700 m-4 rounded-2xl p-4 flex flex-col justify-end text-white">
                    <div className="text-xs opacity-80 uppercase tracking-wider mb-1">Harpenin Tech Conf</div>
                    <div className="text-xl font-bold">Framework of Future</div>
                  </div>
                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-3 px-4">
                     <div className="h-24 bg-white rounded-xl shadow-sm p-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                           <Users className="w-4 h-4" />
                        </div>
                        <div className="text-xs text-gray-400">Attendees</div>
                     </div>
                     <div className="h-24 bg-white rounded-xl shadow-sm p-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                           <BarChart3 className="w-4 h-4" />
                        </div>
                        <div className="text-xs text-gray-400">Analytics</div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Floating Card: Attendees */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-32 left-0 md:left-20 lg:left-32 bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 z-20 w-64"
          >
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Attendees</div>
            <div className="text-3xl font-bold mb-3">2,847</div>
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-800 bg-gray-200"></div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-800 bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">+12</div>
            </div>
          </motion.div>

          {/* Floating Card: Check-ins */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-40 right-0 md:right-20 lg:right-32 bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 z-20 w-72"
          >
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Check-ins Today</div>
            <div className="text-3xl font-bold mb-4">1,423</div>
            <div className="flex items-end gap-2 h-16">
               {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                 <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-accent rounded-t-sm"></div>
               ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Harpenin Inc. All rights reserved.</p>
      </footer>

    </main>
  );
}
