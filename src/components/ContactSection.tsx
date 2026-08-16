import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Copy, Check, Send, Globe, MessageCircle } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleLaunchGmailWeb = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Arvind,\n\nSender Name: ${formData.name || 'Visitor'}\nSender Email: ${formData.email || 'Not specified'}\n\nMessage:\n${formData.message || 'I saw your developer portfolio and wanted to get in touch.'}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.emails.personal}&su=${subject}&body=${body}`, '_blank');
  };

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Arvind! My name is ${formData.name || 'Visitor'} (${formData.email || ''}).\n\nMessage:\n${formData.message || 'I saw your developer portfolio and wanted to connect!'}`
    );
    window.open(`https://wa.me/918429989095?text=${text}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#000000', '#27272a', '#52525b'],
    });

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || 'e0129759-4700-47b8-b2ef-37ec3eb99307';

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          from_name: formData.name,
          replyto: formData.email,
          subject: `Portfolio Message from ${formData.name}`,
          message: `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`,
        }),
      });
    } catch {
      // Silent catch
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      handleLaunchGmailWeb();
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
      
      {/* Clean Minimalist Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-black tracking-tight">
          Let's Connect
        </h2>
        <p className="text-base text-zinc-600 max-w-xl mx-auto font-sans">
          Have a software project idea or web engineering opportunity? Reach out directly to <strong className="text-black font-semibold">{personalDetails.emails.personal}</strong>.
        </p>
      </motion.div>

      {/* Grid with items-stretch for equal card height */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card: Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 studio-card rounded-3xl p-8 border border-zinc-200 bg-white flex flex-col justify-between space-y-6 shadow-sm h-full"
        >
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-heading font-bold text-black">
                Direct Channels
              </h3>
              <p className="text-xs text-zinc-500 font-sans">
                Always open for full-stack & web engineering roles.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Primary Email */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-3">
                <div className="truncate">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Primary Inbox</div>
                  <div className="text-xs font-mono font-semibold text-black truncate">
                    {personalDetails.emails.personal}
                  </div>
                </div>
                <button
                  onClick={() => handleCopyEmail(personalDetails.emails.personal)}
                  className="p-2 rounded-xl border border-zinc-200 bg-white text-zinc-700 hover:text-black transition-colors flex-shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* College Email */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="text-[10px] font-mono text-zinc-500 uppercase font-bold">IIIT Ranchi Email</div>
                <div className="text-xs font-mono font-semibold text-black">
                  {personalDetails.emails.college}
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Phone / WhatsApp</div>
                  <div className="text-xs font-mono font-semibold text-black">
                    {personalDetails.phone}
                  </div>
                </div>
                <button
                  onClick={handleLaunchWhatsApp}
                  className="px-2.5 py-1 rounded-lg border border-zinc-200 bg-white text-xs font-mono font-semibold text-zinc-800 hover:text-black flex items-center gap-1 shadow-sm"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-600" />
                  <span>Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-zinc-200 flex items-center gap-3">
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:text-black transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:text-black transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={handleLaunchGmailWeb}
              className="ml-auto px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-mono font-bold text-zinc-800 hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Gmail Web</span>
            </button>
          </div>
        </motion.div>

        {/* Right Card: Clean Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7 studio-card rounded-3xl p-8 border border-zinc-200 bg-white flex flex-col justify-between space-y-6 shadow-sm h-full"
        >
          <div className="space-y-6 flex-grow flex flex-col">
            <div className="space-y-1">
              <h3 className="text-xl font-heading font-bold text-black">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-500 font-sans">
                Direct inbox delivery to imarvind2121@gmail.com
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-4 my-auto">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto text-xl font-bold shadow-md">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-black">Message Sent!</h4>
                <p className="text-xs text-zinc-600 leading-relaxed max-w-sm mx-auto">
                  Your message has been queued and opened for delivery to <strong className="text-black">{personalDetails.emails.personal}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-5 py-2 rounded-xl border border-zinc-300 text-xs font-mono font-semibold text-zinc-800 hover:bg-zinc-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1 font-semibold uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black placeholder-zinc-400 focus:outline-none focus:border-black text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1 font-semibold uppercase">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black placeholder-zinc-400 focus:outline-none focus:border-black text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1 font-semibold uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black placeholder-zinc-400 focus:outline-none focus:border-black text-sm font-sans resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-md disabled:opacity-50 mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            )}
          </div>

        </motion.div>

      </div>

    </section>
  );
};
