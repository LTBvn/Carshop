import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ChatBot from '../components/ui/ChatBot';

function CartPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 lg:px-10">
      <SectionHeading title="Liên hệ showroom" subtitle="Tư vấn và đặt lịch xem xe" />
      <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Card className="space-y-6 p-8">
            <h2 className="text-3xl font-semibold text-white">Liên hệ ngay để nhận tư vấn</h2>
            <p className="text-slate-300">
              Ứng dụng không bán xe trực tuyến. Vui lòng gửi yêu cầu để nhân viên showroom liên hệ và hỗ trợ thủ tục, lái thử, báo giá chính xác.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-surface2/90 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Hotline</p>
                <p className="mt-3 text-xl font-semibold text-white">0909 123 456</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-surface2/90 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Email</p>
                <p className="mt-3 text-xl font-semibold text-white">info@showroom.vn</p>
              </div>
            </div>
          </Card>
          <Card className="space-y-6 p-8">
            <h3 className="text-2xl font-semibold text-white">Gửi yêu cầu</h3>
            <form className="space-y-4">
              <label className="block text-sm text-slate-300">
                Tên của bạn
                <input type="text" placeholder="Nguyễn Văn A" className="mt-2 w-full rounded-3xl border border-white/10 bg-surface2/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20" />
              </label>
              <label className="block text-sm text-slate-300">
                Số điện thoại
                <input type="tel" placeholder="0909 123 456" className="mt-2 w-full rounded-3xl border border-white/10 bg-surface2/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20" />
              </label>
              <label className="block text-sm text-slate-300">
                Mẫu xe quan tâm
                <input type="text" placeholder="Toyota Vios, Mitsubishi Xpander..." className="mt-2 w-full rounded-3xl border border-white/10 bg-surface2/90 px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20" />
              </label>
              <Button type="submit">Gửi yêu cầu</Button>
            </form>
          </Card>
        </div>
        <ChatBot />
      </div>
    </section>
  );
}

export default CartPage;
