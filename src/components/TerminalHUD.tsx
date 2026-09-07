import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';
import { Reveal } from './Reveal';

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
        <div className="space-y-1 text-[#C9E8B0]">
          <p className="text-white font-bold">Nauman Arif — Backend AI &amp; Automation Engineer</p>
          <p>• 2x SOFTEC National Champion ('26 AI Hackathon, '25 Game Development)</p>
          <p>• Built production voice &amp; automation infrastructure across 5 European countries (Portugal, Romania, Ireland, Spain, Czech Republic)</p>
          <p>• 300+ conversational prompt sets delivered across 10+ client brands (95% booking accuracy)</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
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
          <div className="space-y-1 text-[#C9E8B0]">
            <p className="text-white font-bold">Nauman Arif — Backend AI &amp; Automation Engineer</p>
            <p>• Winner, SOFTEC '26 National AI Hackathon (1st of 80+ teams)</p>
            <p>• Winner, SOFTEC '25 National Game Development Competition</p>
            <p>• Author, Empirical Urban Coexistence Study (N=406)</p>
          </div>
        );
        break;

      case 'awards':
        res = (
          <div className="space-y-1.5 text-[#FFE066]">
            <p>🥇 1st Place — SOFTEC ’26 National AI Hackathon (Opportunity Copilot)</p>
            <p>🥇 1st Place — SOFTEC ’25 Game Development Competition (Cyber-Bloom: Ayra’s Quest)</p>
          </div>
        );
        break;

      case 'experience':
        res = (
          <div className="space-y-2 text-[#C9E8B0]">
            <div>
              <span className="text-white font-semibold">Global Health (Portugal - Remote):</span> Backend AI &amp; Automation Engineer [Nov 2025 – Present]
              <p className="text-xs text-[#8FA87E]">• n8n, ElevenLabs voice agents, Stripe idempotent checkout across 5 EU countries.</p>
            </div>
            <div>
              <span className="text-white font-semibold">Hatzs Dimension:</span> Associate AI Engineer [Jun 2025 – Nov 2025]
              <p className="text-xs text-[#8FA87E]">• 30+ prompt sets weekly, 40% turnaround reduction, 95% booking accuracy.</p>
            </div>
            <div>
              <span className="text-white font-semibold">CAAISC:</span> R&amp;D Intern [Jun 2025 – Aug 2025]
              <p className="text-xs text-[#8FA87E]">• Full-duplex STT (Deepgram) → LLM → TTS (Cartesia) pipeline.</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="space-y-1 text-[#C9E8B0]">
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
          <div className="space-y-1 text-[#C9E8B0]">
            <p className="text-white font-bold">Strategies for Co-existence of Stray Animals and Humans in Urban Areas</p>
            <p>Authors: Nauman Arif (Lead Author), Khadeja Masood, Ashna Masood, Faisal Bukhari</p>
            <p>Sample: N=406 urban citizens | χ² = 36.19 (p=0.0027) | PCA PC1 = 44.4%</p>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-[#C9E8B0]">
            <p>Email: <a href="mailto:naumanarif432@gmail.com" className="text-[#FFE066] underline">naumanarif432@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/naumanariff/" target="_blank" rel="noreferrer" className="text-[#FFE066] underline">linkedin.com/in/naumanariff</a></p>
            <p>GitHub: <a href="https://github.com/Nauman0x" target="_blank" rel="noreferrer" className="text-[#FFE066] underline">github.com/Nauman0x</a></p>
          </div>
        );
        break;

      case 'help':
        res = (
          <div className="text-xs text-[#8FA87E]">
            Available commands: <span className="text-[#8FD14F] font-bold">whoami</span>, <span className="text-[#8FD14F] font-bold">awards</span>, <span className="text-[#8FD14F] font-bold">experience</span>, <span className="text-[#8FD14F] font-bold">projects</span>, <span className="text-[#8FD14F] font-bold">research</span>, <span className="text-[#8FD14F] font-bold">contact</span>, <span className="text-[#8FD14F] font-bold">clear</span>
          </div>
        );
        break;

      default:
        res = (
          <div className="text-[#FF8A80]">
            Command not recognized: "{cmd}". Type <span className="text-[#8FD14F] font-bold">help</span> or click the buttons below.
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
    <section id="console" className="py-24 bg-black border-t-[3px] border-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-xs text-[#8FD14F] font-bold uppercase tracking-widest mb-3">
            <Terminal className="h-4 w-4" />
            <span>INTERACTIVE COMMAND INTERFACE // 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4 font-heading">
            Terminal Console Emulator
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A0] max-w-2xl font-normal leading-relaxed mb-8">
            Inspect production logs, querying system credentials, award history, and architectural principles directly from the CLI.
          </p>
        </Reveal>

        {/* Command Pill Shortcuts */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-[#8FD14F] font-bold">QUICK COMMANDS:</span>
          {['whoami', 'awards', 'experience', 'projects', 'research', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 bg-[#111111] hover:bg-[#1C1C1C] border-2 border-[#8FD14F]/50 hover:border-[#8FD14F] text-[11px] font-mono font-bold text-[#8FD14F] transition-all"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="bg-[#0A0A0A] border-[3px] border-[#8FD14F] shadow-[8px_8px_0_0_#8FD14F] overflow-hidden font-mono text-xs">
          {/* Window Topbar */}
          <div className="px-4 py-3 bg-[#141414] border-b-2 border-[#8FD14F]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5A36] border border-black" />
              <span className="h-3 w-3 rounded-full bg-[#FFC300] border border-black" />
              <span className="h-3 w-3 rounded-full bg-[#8FD14F] border border-black" />
              <span className="ml-2 text-[11px] text-white font-bold">nauman@systems-node:~</span>
            </div>
            <div className="text-[11px] text-[#6B6B6B]">BASH v5.2</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#8FD14F]">
                  <span className="font-bold">nauman@systems:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-[#8FD14F]/30">{item.response}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Line */}
          <div className="px-6 py-3.5 bg-[#111111] border-t-2 border-[#8FD14F]/30 flex items-center gap-2">
            <span className="text-[#8FD14F] font-bold">nauman@systems:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help' or click any command above..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-[#5B5B5B]"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="p-1.5 bg-[#8FD14F] hover:bg-[#A3E066] text-black font-bold transition-all border-2 border-black"
              aria-label="Execute command"
            >
              <CornerDownLeft className="h-3.5 w-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
