import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

export const TerminalHUD: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      response: (
        <div className="space-y-1 text-[#C4BED9]">
          <p className="text-white font-bold">Nauman Arif — Backend AI &amp; Automation Engineer</p>
          <p>• 2x SOFTEC National Champion ('26 AI Hackathon, '25 Game Development)</p>
          <p>• Built production voice &amp; automation infrastructure across 5 European countries (Portugal, Romania, Ireland, Spain, Czech Republic)</p>
          <p>• 300+ conversational prompt sets delivered across 10+ client brands (95% booking accuracy)</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let res: React.ReactNode = '';

    switch (cleanCmd) {
      case 'whoami':
        res = (
          <div className="space-y-1 text-[#C4BED9]">
            <p className="text-white font-bold">Nauman Arif — Backend AI &amp; Automation Engineer</p>
            <p>• Winner, SOFTEC '26 National AI Hackathon (1st of 80+ teams)</p>
            <p>• Winner, SOFTEC '25 National Game Development Competition</p>
            <p>• Author, Empirical Urban Coexistence Study (N=406)</p>
          </div>
        );
        break;

      case 'awards':
        res = (
          <div className="space-y-1.5 text-[#D8B4FE]">
            <p>🥇 1st Place — SOFTEC ’26 National AI Hackathon (Opportunity Copilot)</p>
            <p>🥇 1st Place — SOFTEC ’25 Game Development Competition (Cyber-Bloom: Ayra’s Quest)</p>
          </div>
        );
        break;

      case 'experience':
        res = (
          <div className="space-y-2 text-[#C4BED9]">
            <div>
              <span className="text-white font-semibold">Global Health (Portugal - Remote):</span> Backend AI &amp; Automation Engineer [Nov 2025 – Present]
              <p className="text-xs text-[#8E84A4]">• n8n, ElevenLabs voice agents, Stripe idempotent checkout across 5 EU countries.</p>
            </div>
            <div>
              <span className="text-white font-semibold">Hatzs Dimension:</span> Associate AI Engineer [Jun 2025 – Nov 2025]
              <p className="text-xs text-[#8E84A4]">• 30+ prompt sets weekly, 40% turnaround reduction, 95% booking accuracy.</p>
            </div>
            <div>
              <span className="text-white font-semibold">CAAISC:</span> R&amp;D Intern [Jun 2025 – Aug 2025]
              <p className="text-xs text-[#8E84A4]">• Full-duplex STT (Deepgram) → LLM → TTS (Cartesia) pipeline.</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="space-y-1 text-[#C4BED9]">
            <p>• <strong className="text-white">Opportunity Copilot:</strong> Next.js 16 + ElevenLabs Voice (SOFTEC '26 Winner)</p>
            <p>• <strong className="text-white">VR-ASSM Conversational AI:</strong> Meta Quest VR + ConvAI + PostgreSQL</p>
            <p>• <strong className="text-white">Cyber-Bloom:</strong> Unity 2D Adventure Platformer (SOFTEC '25 Winner)</p>
            <p>• <strong className="text-white">Paw's Pal:</strong> Gemini Vision Animal Triage + Google Places</p>
            <p>• <strong className="text-white">Brain Tumor Detection:</strong> YOLOv8 + Meta SAM MRI segmentation</p>
            <p>• <strong className="text-white">Telemedicine Pipeline:</strong> Wix Velo + WhatsApp API + Stripe</p>
          </div>
        );
        break;

      case 'research':
        res = (
          <div className="space-y-1 text-[#C4BED9]">
            <p className="text-white font-bold">Strategies for Co-existence of Stray Animals and Humans in Urban Areas</p>
            <p>Authors: Nauman Arif (Lead Author), Khadeja Masood, Ashna Masood, Faisal Bukhari</p>
            <p>Sample: N=406 urban citizens | χ² = 36.19 (p=0.0027) | PCA PC1 = 44.4%</p>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-[#C4BED9]">
            <p>Email: <a href="mailto:naumanarif432@gmail.com" className="text-[#9D72E8] underline">naumanarif432@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/naumanariff/" target="_blank" rel="noreferrer" className="text-[#9D72E8] underline">linkedin.com/in/naumanariff</a></p>
            <p>GitHub: <a href="https://github.com/Nauman0x" target="_blank" rel="noreferrer" className="text-[#9D72E8] underline">github.com/Nauman0x</a></p>
          </div>
        );
        break;

      case 'help':
        res = (
          <div className="text-xs text-[#A89EC0]">
            Available commands: <span className="text-[#9D72E8]">whoami</span>, <span className="text-[#9D72E8]">awards</span>, <span className="text-[#9D72E8]">experience</span>, <span className="text-[#9D72E8]">projects</span>, <span className="text-[#9D72E8]">research</span>, <span className="text-[#9D72E8]">contact</span>, <span className="text-[#9D72E8]">clear</span>
          </div>
        );
        break;

      default:
        res = (
          <div className="text-rose-400">
            Command not recognized: "{cmd}". Type <span className="text-[#9D72E8] font-bold">help</span> or click the buttons below.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, response: res }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <section id="console" className="py-24 bg-[#08060E] border-t border-[#1C152B] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#9D72E8] uppercase tracking-widest mb-3">
          <Terminal className="h-4 w-4" />
          <span>INTERACTIVE COMMAND INTERFACE // 05</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Terminal Console Emulator
        </h2>
        <p className="text-sm sm:text-base text-[#A197B8] max-w-2xl font-normal leading-relaxed mb-8">
          Inspect production logs, querying system credentials, award history, and architectural principles directly from the CLI.
        </p>

        {/* Command Pill Shortcuts */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-[#786D8E]">QUICK COMMANDS:</span>
          {['whoami', 'awards', 'experience', 'projects', 'research', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded bg-[#130E22] hover:bg-[#201838] border border-[#2B2044] hover:border-[#9D72E8] text-[11px] font-mono text-[#D8B4FE] transition-colors"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl bg-[#0C0916] border border-[#2B2144] shadow-2xl overflow-hidden font-mono text-xs">
          {/* Window Topbar */}
          <div className="px-4 py-3 bg-[#130E24] border-b border-[#241A3A] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] text-[#8C81A6]">nauman@systems-node:~</span>
            </div>
            <div className="text-[11px] text-[#716885]">BASH v5.2</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#9D72E8]">
                  <span className="text-[#B794F4]">nauman@systems:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-[#241C36]">{item.response}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Line */}
          <div className="px-6 py-3.5 bg-[#090710] border-t border-[#201733] flex items-center gap-2">
            <span className="text-[#9D72E8] font-bold">nauman@systems:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help' or click any command above..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-[#5B5270]"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="p-1 rounded bg-[#171126] text-[#9D72E8] hover:text-white"
            >
              <CornerDownLeft className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
