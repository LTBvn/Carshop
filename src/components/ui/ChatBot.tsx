import { useMemo, useState } from 'react';

const suggestions = [
  { question: 'Tôi muốn xem xe số sàn giá rẻ', answer: 'Chúng tôi có Honda City, Kia Morning và Toyota Vios phù hợp nhu cầu tiết kiệm và dễ vận hành.' },
  { question: 'Có xe gia đình 7 chỗ nào không?', answer: 'Hiện có Mitsubishi Xpander và Hyundai Santa Fe phù hợp cho gia đình, rộng rãi và tiện dụng.' },
  { question: 'Làm sao để xem xe tại showroom?', answer: 'Bạn có thể gửi yêu cầu liên hệ, chúng tôi sẽ đặt lịch xem xe tại showroom trong ngày làm việc.' },
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Chào bạn! Tôi là trợ lý showroom. Bạn cần hỗ trợ gì hôm nay?' },
  ]);

  const buttons = useMemo(
    () => suggestions.map((item) => item.question),
    []
  );

  const handleQuestion = (question: string) => {
    const matched = suggestions.find((item) => item.question === question);
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: question },
      { sender: 'bot', text: matched?.answer ?? 'Xin lỗi, tôi sẽ chuyển yêu cầu của bạn đến đội ngũ tư vấn.' },
    ]);
  };

  return (
    <section className="glass-panel card-glow rounded-[32px] border border-slate-200 dark:border-white/10 p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-600 dark:text-slate-400">Trợ lý showroom</p>
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Chat hỗ trợ ngay</h2>
        </div>
        <span className="rounded-full bg-slate-200 dark:bg-white/5 px-4 py-2 text-xs text-slate-600 dark:text-slate-300">24/7</span>
      </div>
      <div className="space-y-4 pb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-3xl p-4 text-sm ${message.sender === 'bot' ? 'bg-slate-100 dark:bg-surface2/90 text-slate-700 dark:text-slate-200' : 'bg-violet-100 dark:bg-violet-500/15 text-violet-950 dark:text-white self-end'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {buttons.map((buttonText) => (
          <button
            key={buttonText}
            type="button"
            onClick={() => handleQuestion(buttonText)}
            className="rounded-3xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-surface/80 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-200 transition hover:border-slate-400 dark:hover:border-white/20"
          >
            {buttonText}
          </button>
        ))}
      </div>
    </section>
  );
}
