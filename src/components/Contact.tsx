import React, { useState } from 'react';
import { Clock, MapPin, Mail, Send, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Reveal } from './Reveal';

const EMAIL = 'naumanarif432@gmail.com';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || 'a stranger'}`);
    const body = encodeURIComponent(`${note}\n\n— ${name}${from ? ` (${from})` : ''}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#EDE9F8] border-t-[3px] border-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="inline-block px-3 py-1 mb-4 bg-[#FF5FA2] border-2 border-black text-[10px] font-mono font-bold text-black -rotate-2 shadow-[2px_2px_0_0_#000000]">
            THE LAST PAGE
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4 font-heading">
            <span className="text-black">LET&rsquo;S </span>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #111111' }}>TALK.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#3A342A] max-w-xl mb-12">
            Got something you want built, or half-built and stuck? Write it down below &mdash; I read everything.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          {/* Note form */}
          <Reveal>
          <form
            onSubmit={handleSubmit}
            className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-6 sm:p-8"
          >
            <button
              type="button"
              className="mb-6 px-4 py-2 bg-[#8FD14F] border-2 border-black text-xs font-mono font-bold text-black shadow-[2px_2px_0_0_#000000] pointer-events-none"
            >
              WRITE ME A NOTE
            </button>

            <label className="block mb-4">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-black mb-1.5">Your Name</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="who's writing?"
                className="w-full px-3 py-2.5 bg-[#EDE9F8] border-2 border-black font-mono text-sm text-black placeholder-[#8A8474] focus:outline-none focus:bg-white"
              />
            </label>

            <label className="block mb-4">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-black mb-1.5">Where Do I Reply?</span>
              <input
                type="email"
                required
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="you@email.com"
                className="w-full px-3 py-2.5 bg-[#EDE9F8] border-2 border-black font-mono text-sm text-black placeholder-[#8A8474] focus:outline-none focus:bg-white"
              />
            </label>

            <label className="block mb-6">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-black mb-1.5">The Note</span>
              <textarea
                required
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="what are we building?"
                className="w-full px-3 py-2.5 bg-[#EDE9F8] border-2 border-black font-mono text-sm text-black placeholder-[#8A8474] focus:outline-none focus:bg-white resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full px-5 py-3 bg-[#FFC300] hover:bg-[#FFD84D] text-black font-mono text-sm font-bold border-[3px] border-black shadow-[3px_3px_0_0_#000000] hover:shadow-[4px_4px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              <span>SEND IT</span>
            </button>
            <p className="text-center text-[10px] font-mono text-[#8A8474] mt-3">
              OPENS YOUR MAIL APP &middot; NOTHING STORED HERE
            </p>
          </form>
          </Reveal>

          {/* Side info */}
          <Reveal delay={120} className="space-y-6">
            <div className="bg-black border-[3px] border-black shadow-[6px_6px_0_0_#FFC300] p-6">
              <div className="text-xs font-mono font-bold text-[#FFC300] uppercase tracking-widest mb-4">The Basics</div>
              <div className="space-y-3 text-sm text-white font-mono">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-[#8FD14F] shrink-0" />
                  <span>I reply within about a day</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#8FD14F] shrink-0" />
                  <span>Remote &middot; Available Worldwide</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#8FD14F] shrink-0" />
                  <a href={`mailto:${EMAIL}`} className="hover:underline break-all">{EMAIL}</a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/15 text-xs font-mono font-bold text-[#8FD14F]">
                CURRENTLY TAKING ON CONTRACT &amp; FULL-TIME WORK.
              </div>
            </div>

            <div className="bg-white border-[3px] border-black shadow-[6px_6px_0_0_#000000] p-6">
              <div className="text-xs font-mono font-bold text-black uppercase tracking-widest mb-4">Elsewhere</div>
              <div className="space-y-2.5">
                <a
                  href="https://github.com/Nauman0x"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 border-2 border-black hover:bg-[#EDE9F8] transition-colors"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono font-bold text-black">
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </span>
                  <span className="text-[#5C5648]">&rarr;</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/naumanariff/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 border-2 border-black hover:bg-[#EDE9F8] transition-colors"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono font-bold text-black">
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn
                  </span>
                  <span className="text-[#5C5648]">&rarr;</span>
                </a>
                <a
                  href="https://naumanarif.itch.io/cyber-bloom"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 border-2 border-black hover:bg-[#EDE9F8] transition-colors"
                >
                  <span className="flex items-center gap-2.5 text-xs font-mono font-bold text-black">
                    <Send className="h-4 w-4" />
                    Itch.io
                  </span>
                  <span className="text-[#5C5648]">&rarr;</span>
                </a>
              </div>
            </div>

            <a
              href="#"
              className="w-full px-5 py-3 bg-[#4D7CFE] hover:brightness-110 text-white font-mono text-xs font-bold border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-all flex items-center justify-center gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              <span>BACK TO THE TOP</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
