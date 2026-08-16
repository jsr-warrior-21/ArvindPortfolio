import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { personalDetails, skillCategories, projects } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">Arvind Yadav Interactive CLI [Version 1.0.0]</p>
          <p className="text-slate-400">Type <span className="text-amber-400 font-bold">help</span> to list available developer commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          const cliBtn = document.querySelector('[title*="Ctrl+K"]') as HTMLElement;
          cliBtn?.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <p><strong className="text-amber-400">bio</strong> - View Arvind's education, degree & background summary</p>
            <p><strong className="text-amber-400">skills</strong> - View key technical skills overview</p>
            <p><strong className="text-amber-400">projects</strong> - List featured project repositories</p>
            <p><strong className="text-amber-400">stats</strong> - Display CodeChef contest rating & DSA problem metrics</p>
            <p><strong className="text-amber-400">contact</strong> - Print email and profile links</p>
            <p><strong className="text-amber-400">clear</strong> - Clear terminal output history</p>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><span className="text-cyan-400">Name:</span> {personalDetails.name}</p>
            <p><span className="text-cyan-400">Institution:</span> {personalDetails.college}</p>
            <p><span className="text-cyan-400">Degree:</span> {personalDetails.degree}</p>
            <p><span className="text-cyan-400">CGPA:</span> {personalDetails.cgpa}</p>
            <p><span className="text-cyan-400">Location:</span> {personalDetails.location}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <span className="text-violet-400 font-bold">{cat.title}:</span>{' '}
                <span className="text-slate-400">{cat.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono">
            {projects.map((proj) => (
              <div key={proj.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-cyan-400 font-bold">{proj.title} ({proj.period})</p>
                <p className="text-slate-300">{proj.subtitle}</p>
                <p className="text-emerald-400 text-[11px]">{proj.metrics}</p>
                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline text-[11px]">
                  {proj.githubUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'stats':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p>🏅 <span className="text-cyan-400">CodeChef Rating:</span> {personalDetails.stats.contestRating} (3-Star)</p>
            <p>🏆 <span className="text-cyan-400">CodeChef Global Rank:</span> #{personalDetails.stats.globalRank} in Starters 226</p>
            <p>⚡ <span className="text-cyan-400">Algorithmic DSA Solved:</span> {personalDetails.stats.dsaSolved}+ Problems</p>
            <p>🚀 <span className="text-cyan-400">Hackathon MVPs Built:</span> {personalDetails.stats.hackathonMVPs} Prototypes</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p>📧 Email: <span className="text-cyan-400">{personalDetails.emails.personal}</span></p>
            <p>🎓 IIIT Email: <span className="text-cyan-400">{personalDetails.emails.college}</span></p>
            <p>🐙 GitHub: <a href={personalDetails.socials.github} target="_blank" rel="noreferrer" className="text-blue-400 underline">{personalDetails.socials.github}</a></p>
            <p>💼 LinkedIn: <a href={personalDetails.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{personalDetails.socials.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo':
        output = (
          <p className="text-rose-400 font-mono text-xs">Permission denied: Arvind is already root administrator of this portfolio! ⚡</p>
        );
        break;

      default:
        output = (
          <p className="text-rose-400 font-mono text-xs">
            Command not recognized: "{cmd}". Type <strong className="text-amber-400">help</strong> to see valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Heavy Backdrop */}
      <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md" onClick={onClose} />

      {/* Terminal Window Box */}
      <div className="relative w-full max-w-2xl h-[520px] rounded-2xl border border-slate-700/80 shadow-2xl z-10 flex flex-col overflow-hidden font-mono text-sm bg-slate-950 text-white">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              arvind@iiitranchi:~
            </span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-cyan-400 font-bold">arvind@portfolio:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-xs">arvind@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'bio', 'projects', 'stats'..."
            className="flex-1 bg-transparent border-none outline-none text-xs text-white placeholder-slate-500 font-mono"
          />
          <button type="submit" className="text-slate-400 hover:text-cyan-400">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
