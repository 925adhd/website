'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Zap, Search, Trash2, ArrowRight, ShieldCheck, Loader2, Gift, Mail } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const SUPABASE_URL = 'https://ietkanacfoyoswioapqg.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlldGthbmFjZm95b3N3aW9hcHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODAxMTgsImV4cCI6MjA4MjE1NjExOH0.hpNcynKl-5Hnm-82Z9KM2XHxzHfWAoQq_5N5quaStlM';
const AI_FUNCTION_URL = SUPABASE_URL + '/functions/v1/ai-chat';

const systemPrompt = `You are an AI assistant acting as a skeptical, ADHD-friendly remote work advisor.
Your job is to help users think critically about online jobs, apps, websites, or side hustles before investing their time and energy.
The user will paste the name of a platform, job listing, or short description.

IMPORTANT RULES:
- If you recognize the specific platform and have knowledge about it, share those specifics confidently (founding year, known issues, reputation, etc.)
- If you don't recognize it or have limited knowledge, be honest and focus on patterns typical for this TYPE of opportunity
- Call out red flags plainly — both platform-specific and category-wide
- Help them know what to research and verify on their own
- Be neutral, practical, and protective of the user's time
- Write for someone with ADHD who needs clarity, not fluff
- Never make up specific facts — if you're not sure, say "typically" or "often" instead

FORMATTING RULES (follow exactly):
- Use ## for section headers (e.g., ## 1. Quick Summary)
- Do NOT use bold (**) formatting anywhere — just write plain text
- Use bullet points with - for lists
- For the ADHD Energy Score, format each line as: - Setup difficulty: 2 (easy)
- For the Final Take, put the verdict on its own line with the emoji
- Keep paragraphs short (2-3 sentences max)

SPECIAL CASE — SELF-REFERENTIAL INPUT:

If the user input mentions "925 ADHD", "925adhd", "925 adhd app", or clearly refers to THIS tool or brand:

- Do NOT analyze it as a job, platform, or side hustle.
- Clearly state that this is the creator's own tool and cannot be objectively evaluated by itself.
- Briefly explain what the tool is meant to do.
- Emphasize its limitations (pattern spotting, not verification).
- Encourage users to use it on third-party platforms instead.

Use a friendly, transparent tone.
Do not assign a verdict emoji in this case.

## Heads up

This tool can't really analyze itself.

925 ADHD is the platform that built this checker, so there's no neutral way to evaluate it here.

This tool is meant to help you pause and spot patterns in other jobs, side hustles, apps, or online offers before you spend your time.

Try pasting something you're considering doing for money online, and use this as a starting point, not a final answer.


ANALYSIS STEPS:

## 1. Quick Summary
- What this platform/opportunity claims to be (use specifics if you know them)
- Who it seems best suited for
- The general time-to-payout expectation

## 2. Payout Reality Check
- Typical or reported earnings (be specific if you know, otherwise give realistic ranges for this type)
- Whether the payout is decent, low, inconsistent, or unclear
- Whether income scales with time or skill

## 3. Payment Method
- How users are paid (PayPal, bank transfer, gift cards, crypto, points, etc.)
- Minimum payout thresholds (specific if known)
- Any known payout delays or issues

## 4. Scam & Red Flag Assessment
- Known issues with this specific platform OR common scam indicators for this category
- Questions to ask before signing up
- Overall risk level: Low / Medium / High

## 5. What Online Reviews Say
- What reviews typically say about this platform or type of opportunity
- Common complaints to watch for
- Signs that reviews might be fake or sponsored

## 6. Reddit Reality Check
- What Reddit users commonly say (specific threads if you know them, otherwise typical discussions)
- Warning signs to look for
- What positive confirmation looks like

## 7. ADHD Energy Score
Rate each from 1 to 5 (1=easy/low, 5=hard/high):
- Setup difficulty: [1-5] ([label])
- Mental load: [1-5] ([label])
- Time pressure: [1-5] ([label])
- Task monotony: [1-5] ([label])
- Burnout risk: [1-5] ([label])

## 8. Final Take
Choose ONE and put it on its own line:
✅ Generally Worth Exploring
⚠️ Approach With Caution
❌ Likely Not Worth Your Energy

Then include:
- One sentence on your assessment
- Who this is best for
- Who should skip it
- A reminder to verify current details before committing

Tone:
Clear, honest, protective, and helpful.
Be specific when you can, honest when you can't.
No hype. No moralizing. No shaming.`;

function parseMarkdown(text: string): string {
  let html = text
    .replace(/\r\n/g, '\n')
    .replace(/([a-zA-Z,.])\*\*([a-zA-Z])/g, '$1 **$2')
    .replace(/([a-zA-Z])\*\*([a-zA-Z,.])/g, '$1** $2')
    .replace(/([a-zA-Z])\*\*/g, '$1 **')
    .replace(/\*\*([a-zA-Z])/g, '** $1')
    .replace(/^## (\d+\..+)$/gm, '<h2>$1</h2>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^\*\*(\d+\..+?)\*\*$/gm, '<h2>$1</h2>')
    .replace(/^(\d+\.\s+[A-Z][^\n]+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/([a-zA-Z])<strong>/g, '$1 <strong>')
    .replace(/<\/strong>([a-zA-Z])/g, '</strong> $1')
    .replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/<\/li>\n<li>/g, '</li><li>')
    .replace(/\n\n+/g, '</p><p>')
    .replace(/\n/g, '<br>');

  html = '<p>' + html + '</p>';
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p><h2>/g, '<h2>');
  html = html.replace(/<\/h2><\/p>/g, '</h2>');
  html = html.replace(/<p><h3>/g, '<h3>');
  html = html.replace(/<\/h3><\/p>/g, '</h3>');
  html = html.replace(/<p><ul>/g, '<ul>');
  html = html.replace(/<\/ul><\/p>/g, '</ul>');
  html = html.replace(/<br><ul>/g, '<ul>');
  html = html.replace(/<\/ul><br>/g, '</ul>');
  html = html.replace(/<p><br>/g, '<p>');
  html = html.replace(/<br><\/p>/g, '</p>');

  html = html.replace(
    /(✅\s*Generally Worth Exploring|Generally Worth Exploring|✅\s*Worth Trying|Worth Trying)/g,
    '<span class="inline-block mt-2 mb-2 px-4 py-2 rounded-xl bg-green-50 border border-green-200/50 text-green-700 font-extrabold text-base">$1</span><br>',
  );
  html = html.replace(
    /(⚠️\s*Approach With Caution|Approach With Caution|⚠️\s*Proceed With Caution|Proceed With Caution)/g,
    '<span class="inline-block mt-2 mb-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200/50 text-amber-700 font-extrabold text-base">$1</span><br>',
  );
  html = html.replace(
    /(❌\s*Likely Not Worth Your Energy|Likely Not Worth Your Energy|❌\s*Not Worth Your Energy|Not Worth Your Energy)/g,
    '<span class="inline-block mt-2 mb-2 px-4 py-2 rounded-xl bg-red-50 border border-red-200/50 text-red-700 font-extrabold text-base">$1</span><br>',
  );

  return html;
}

export default function EnergyCheckerPage() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const resultsRef = useRef<HTMLDivElement>(null);
  const [guideEmail, setGuideEmail] = useState('');
  const [guideSending, setGuideSending] = useState(false);

  async function handleAnalyze() {
    if (!input.trim()) {
      setError('Please paste something to analyze first!');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await fetch(AI_FUNCTION_URL, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + SUPABASE_ANON_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: `Please analyze this for me:\n\n${input}` }],
          model: 'llama-3.3-70b-versatile',
          system: systemPrompt,
          temperature: 0.4,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Something went wrong');
      }

      setResult(data.message);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      setError(`Oops! Something went wrong: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setResult('');
    setInput('');
    setError('');
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleAnalyze();
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1120px] mx-auto px-5">
          <motion.div className="mb-8" {...fadeUp}>
            <Link
              href="/free"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-teal-dark hover:gap-3 transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Free Resources
            </Link>
          </motion.div>

          <motion.div className="max-w-[780px] mx-auto text-center" {...fadeUp}>
            <span className="inline-block text-xs font-extrabold text-brand-green bg-green-50 border border-green-200/40 px-4 py-1.5 rounded-full mb-4">
              Free Tool
            </span>
            <h1 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-brand-primary leading-[1.15] mb-4">
              Is This Worth My Energy?
            </h1>
            <p className="text-brand-muted max-w-[520px] mx-auto leading-relaxed">
              Paste any job, side hustle, or platform. Get a quick breakdown of what to watch out for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Input Section */}
      <section className="pb-8">
        <div className="max-w-[720px] mx-auto px-5">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-brand-border bg-white p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <p className="text-sm font-bold text-brand-primary/70 mb-3 flex items-center gap-2">
              <span className="text-lg">&#128203;</span>
              Paste anything you&apos;re considering doing for money online
            </p>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Example: 'Swagbucks surveys' or paste an entire job listing here..."
              rows={5}
              className="w-full rounded-xl border border-brand-border bg-brand-warm px-4 py-3 text-[15px] text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow resize-y mb-4"
            />

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200/50 text-red-700 text-sm font-semibold px-4 py-3 mb-4">
                {error}
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal-dark text-white font-bold px-6 py-3.5 text-[15px] hover:bg-[#24a68e] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Analyze This
                </>
              )}
            </button>

            <p className="text-xs text-brand-primary/40 mt-3">
              Press Ctrl+Enter to submit. Powered by AI — use as a starting point, not a final answer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {result && (
        <section className="pb-12" ref={resultsRef}>
          <div className="max-w-[720px] mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-brand-border bg-white p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-extrabold text-brand-primary flex items-center gap-2">
                  <span>&#128202;</span> Analysis Results
                </h2>
                <button
                  onClick={handleClear}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-muted hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </button>
              </div>

              <div
                className="prose prose-sm max-w-none text-brand-primary/80 leading-relaxed
                  [&_h2]:text-[17px] [&_h2]:font-extrabold [&_h2]:text-brand-primary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0
                  [&_h3]:text-[15px] [&_h3]:font-bold [&_h3]:text-brand-primary [&_h3]:mt-6 [&_h3]:mb-2
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:my-3
                  [&_li]:text-[14px] [&_li]:leading-relaxed
                  [&_strong]:text-brand-primary [&_strong]:font-bold
                  [&_p]:mb-3 [&_p]:text-[14px]"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(result) }}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Free Guide Email Gate */}
      <section className="pb-8">
        <div className="max-w-[720px] mx-auto px-5">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl border border-brand-accent/20 bg-gradient-to-br from-brand-accent/[.06] to-purple-50/50 p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-accent/10 mb-4">
              <Gift className="w-6 h-6 text-brand-accent" />
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-brand-primary mb-2">
              Free: 5 ADHD-Friendly Side Hustles Guide
            </h2>
            <p className="text-brand-primary/55 max-w-[480px] mx-auto leading-relaxed mb-6 text-[15px]">
              Get our vetted starter guide with 5 side hustles picked for ADHD brains &mdash;
              rated by energy, effort, and time to first dollar.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!guideEmail.trim()) return;
                setGuideSending(true);
                try {
                  await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      access_key: 'dfb5a758-6041-45a0-b76d-6ee784a406ec',
                      subject: 'Free guide download - 925 ADHD',
                      from_name: 'Free Guide Signup',
                      email: guideEmail,
                    }),
                  });
                } catch {
                  // still redirect even if Web3Forms fails
                }
                router.push('/free/side-hustles');
              }}
              className="flex flex-col sm:flex-row gap-2.5 max-w-[440px] mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted/50" />
                <input
                  type="email"
                  required
                  value={guideEmail}
                  onChange={(e) => setGuideEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-xl border border-brand-border bg-white pl-10 pr-4 py-3 text-sm text-brand-primary placeholder:text-brand-muted/50 outline-none focus:ring-2 focus:ring-brand-accent/30 transition-shadow"
                />
              </div>
              <button
                type="submit"
                disabled={guideSending}
                className="rounded-xl bg-brand-accent text-white font-bold px-5 py-3 text-sm hover:bg-[#6d28d9] transition-colors shrink-0 inline-flex items-center gap-2 disabled:opacity-60"
              >
                {guideSending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Gift className="w-4 h-4" />
                )}
                Get Free Guide
              </button>
            </form>

            <p className="text-xs text-brand-primary/35 mt-3">
              No spam. Just the guide. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="max-w-[720px] mx-auto px-5">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-brand-panel border border-brand-border p-8 md:p-10"
          >
            <h3 className="text-[clamp(22px,3vw,28px)] font-bold text-brand-primary mb-4">
              Want specifics, not patterns?
            </h3>
            <div className="space-y-4 text-[17px] leading-relaxed text-brand-primary/75 mb-8">
              <p>
                AI can spot patterns, but it can&apos;t verify receipts. This tool gives
                you a starting point, not certainty.
              </p>
              <p>
                Members get 70+ gigs already tested by real people who actually got paid,
                so you don&apos;t have to gamble your time.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-teal-dark text-white font-bold py-3.5 px-6 hover:bg-[#24a68e] transition-colors"
                >
                  See the Vetted List &mdash; $9.25
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-warm text-brand-primary font-bold py-3.5 px-6 hover:bg-brand-panel transition-colors"
                >
                  Learn more about 925 ADHD
                </Link>
              </div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-[#92400e]">
                <ShieldCheck className="w-3.5 h-3.5" />
                30-Day Money-Back Guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
