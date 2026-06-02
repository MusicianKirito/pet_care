import { BookingForm } from "@/components/BookingForm";
import { EnvironmentCarousel } from "@/components/EnvironmentCarousel";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import Image from "next/image";

const navItems = [
  ["服务", "#services"],
  ["套餐", "#prices"],
  ["流程", "#process"],
  ["店内环境", "#environment"],
  ["门店信息", "#store-info"],
  ["口碑", "#reviews"],
];

const services = [
  {
    icon: "洗",
    title: "基础洗护",
    text: "温水冲洗、低刺激香波、吹干梳理、耳眼清洁和基础检查。",
  },
  {
    icon: "剪",
    title: "精修造型",
    text: "犬种造型、圆脸修剪、脚底毛清理、指甲修整和局部细节处理。",
  },
  {
    icon: "护",
    title: "皮毛护理",
    text: "深层除浮毛、护毛素护理、打结处理和敏感肌温和方案。",
  },
  {
    icon: "接",
    title: "预约接送",
    text: "附近社区可预约接送，到店前后同步照片和服务进度。",
  },
];

const prices = [
  {
    title: "轻松洗澡",
    text: "适合日常清洁和短毛宠物。",
    price: "¥68",
    items: ["基础沐浴吹干", "耳眼清洁", "指甲修整"],
    featured: false,
    cta: "选择套餐",
  },
  {
    title: "全套洗护",
    text: "洗澡、梳理和局部护理一次完成。",
    price: "¥128",
    items: ["低敏香波护理", "去浮毛梳理", "脚底毛和肛周清理"],
    featured: true,
    cta: "热门预约",
  },
  {
    title: "美容造型",
    text: "适合需要修剪造型的长毛犬猫。",
    price: "¥198",
    items: ["全身造型修剪", "毛结评估处理", "护理照片反馈"],
    featured: false,
    cta: "选择套餐",
  },
];

const steps = [
  {
    title: "预约与评估",
    text: "确认宠物体型、毛况、性格和过敏史，提前安排合适护理师。",
  },
  {
    title: "温和洗护",
    text: "按毛发状态选择香波和水温，洗净后充分吹干，避免潮湿闷毛。",
  },
  {
    title: "交付反馈",
    text: "说明皮肤、耳朵、指甲和毛结情况，并给出居家梳理建议。",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-white/60 bg-[#fbfffd]/90 backdrop-blur">
        <nav className="page-container flex min-h-[74px] items-center justify-between gap-6 max-sm:min-h-[66px]" aria-label="主导航">
          <a className="flex items-center gap-2.5 font-extrabold tracking-wide" href="#">
            <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-brand text-xl text-white">爪</span>
            <span>泡泡爪宠物洗护</span>
          </a>
          <div className="flex items-center gap-[22px] text-[15px] text-[#40504d] max-lg:hidden">
            {navItems.map(([label, href]) => (
              <a className="hover:text-brand-dark" href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="btn max-sm:min-h-[38px] max-sm:px-3 max-sm:text-sm" href="#booking">
            立即预约
          </a>
        </nav>
      </header>

      <main>
        <section className="relative isolate min-h-[680px] overflow-hidden bg-mint max-lg:min-h-[620px] max-sm:min-h-[720px]">
          <Image
            className="-z-20 object-cover object-center max-lg:object-[62%_center]"
            src="/assets/hero-grooming.png"
            alt="明亮宠物洗护店里，美容师为狗狗进行洗护后的擦干护理"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(246,255,251,0.96)_0%,rgba(246,255,251,0.86)_36%,rgba(246,255,251,0.22)_70%,rgba(246,255,251,0.08)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(246,255,251,0.97)_0%,rgba(246,255,251,0.82)_55%,rgba(246,255,251,0.2)_100%)]" />
          <div className="page-container grid min-h-[680px] max-w-[1120px] content-center py-[74px] max-lg:min-h-[620px] max-sm:min-h-[720px]">
            <div className="max-w-[620px]">
              <span className="eyebrow">温和洗护 · 可视护理 · 猫狗友好</span>
              <h1 className="mb-5 mt-4 max-w-[600px] text-[clamp(42px,6vw,72px)] font-extrabold leading-[1.05] max-sm:text-[40px]">
                让毛孩子干净舒服，也让主人放心。
              </h1>
              <p className="mb-[30px] max-w-[540px] text-lg text-[#435451]">
                泡泡爪提供宠物洗澡、美容修剪、皮毛护理和预约接送服务。使用低刺激洗护产品，按体型和毛况定制护理流程。
              </p>
              <div className="mb-[34px] flex flex-wrap gap-3.5">
                <a className="btn" href="#booking">
                  预约到店
                </a>
                <a className="btn btn-secondary" href="#prices">
                  查看价格
                </a>
              </div>
              <div className="grid max-w-[540px] grid-cols-3 overflow-hidden rounded-[18px] border border-brand/20 bg-white/80 shadow-soft max-sm:grid-cols-1" aria-label="门店数据">
                {[
                  ["4.9", "顾客评分"],
                  ["30min", "快速基础洗护起"],
                  ["1v1", "专属护理师"],
                ].map(([value, label]) => (
                  <div className="border-r border-ink/15 p-[18px] last:border-r-0 max-sm:border-b max-sm:border-r-0 max-sm:last:border-b-0" key={label}>
                    <strong className="block text-[26px] leading-none text-brand-dark">{value}</strong>
                    <span className="text-[13px] text-muted">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="services">
          <div className="page-container">
            <SectionHead
              title="从清洁到造型，一次安排妥当"
              text="根据宠物年龄、皮肤状态、毛发长度和情绪反应调整服务节奏，减少等待和应激。"
            />
            <div className="grid grid-cols-4 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
              {services.map((service) => (
                <article className="card p-6" key={service.title}>
                  <div className="mb-[18px] grid h-12 w-12 place-items-center rounded-[14px] bg-mint text-2xl font-bold text-brand-dark">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-[15px] text-muted">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[linear-gradient(180deg,#f6fffb_0%,#fffaf0_100%)]" id="prices">
          <div className="page-container">
            <SectionHead title="清晰透明的洗护套餐" text="价格会因体型、毛量、打结程度略有调整，到店评估后再确认。" />
            <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-2 max-sm:grid-cols-1">
              {prices.map((plan) => (
                <article className={`card p-7 ${plan.featured ? "-translate-y-2 border-brand/40 shadow-glow max-lg:translate-y-0" : ""}`} key={plan.title}>
                  <h3 className="mb-2 text-xl font-bold">{plan.title}</h3>
                  <p className="text-[15px] text-muted">{plan.text}</p>
                  <div className="my-[18px] text-4xl font-extrabold leading-none text-brand-dark">
                    {plan.price} <small className="text-sm font-medium text-muted">起</small>
                  </div>
                  <ul className="mb-[22px] grid gap-2.5 text-[15px] text-[#40504d]">
                    {plan.items.map((item) => (
                      <li className="before:mr-2 before:font-extrabold before:text-brand before:content-['✓']" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a className={`btn ${plan.featured ? "" : "btn-secondary"}`} href="#booking">
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="process">
          <div className="page-container grid grid-cols-[0.9fr_1.1fr] items-center gap-9 max-lg:grid-cols-1">
            <div className="rounded-lg bg-cream p-[34px] shadow-soft">
              <span className="eyebrow">门店流程</span>
              <h2 className="mb-3 mt-4 text-[34px] font-extrabold leading-tight">每一步都能看得见，少一点担心。</h2>
              <p className="text-muted">到店先做皮肤、毛结和情绪评估，再开始洗护。过程中会记录异常情况，服务结束后给出护理建议。</p>
              <div className="mt-[22px] flex flex-wrap gap-2.5">
                {["独立吹水区", "消毒工具", "分犬猫时段", "护理反馈"].map((tag) => (
                  <span className="rounded-full bg-white px-3 py-2 text-sm font-bold text-brand-dark" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <article className="grid grid-cols-[46px_1fr] gap-4 rounded-lg border border-ink/15 bg-white p-5" key={step.title}>
                  <div className="grid h-[46px] w-[46px] place-items-center rounded-full bg-brand font-extrabold text-white">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">{step.title}</h3>
                    <p className="text-[15px] text-muted">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="environment">
          <div className="page-container">
            <SectionHead
              title="中国高端宠物洗护店内环境"
              text="三处核心空间采用统一的玉绿色、暖木、浅石材和黄铜细节，呈现干净、安静、可视化的高端洗护体验。"
            />
            <EnvironmentCarousel />
          </div>
        </section>

        <section className="section-pad bg-[linear-gradient(180deg,#f6fffb_0%,#fffaf0_100%)]" id="store-info">
          <div className="page-container">
            <SectionHead
              title="门店信息"
              text="门店位于上海市宜川路街道陕西北路1620号，靠近光明城市公园和华生大厦，建议提前 1 天预约。"
            />
            <div className="grid grid-cols-2 gap-[18px] max-lg:grid-cols-1">
              <article className="card p-[26px]">
                <h3 className="mb-3.5 text-[22px] font-bold">泡泡爪宠物洗护店</h3>
                <ul className="grid gap-3 text-[#40504d]">
                  <StoreInfo label="营业时间" value="周一至周日 10:00-21:00" />
                  <StoreInfo label="联系电话" value="138-0000-6688" />
                  <StoreInfo label="门店地址" value="上海市宜川路街道陕西北路1620号" />
                  <StoreInfo label="微信预约" value="BubblePawsCare" />
                  <StoreInfo label="到店提示" value="首次到店请携带免疫记录，敏感皮肤请提前说明。" />
                </ul>
              </article>
              <article className="card relative grid min-h-[322px] overflow-hidden bg-[#f4fbff]" aria-label="上海市宜川路街道陕西北路1620号门店位置示意">
                <Image
                  className="object-cover"
                  src="/assets/store-map-ai.png"
                  alt="可爱清新的宠物店风格地图，标记泡泡爪宠物洗护位于上海市宜川路街道陕西北路1620号"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad" id="reviews">
          <div className="page-container">
            <SectionHead title="附近铲屎官的真实反馈" text="好洗护不只是香喷喷，更是宠物状态稳定、细节处理干净。" />
            <ReviewCarousel />
          </div>
        </section>

        <section className="py-[86px] max-sm:py-16" id="booking">
          <div className="page-container grid grid-cols-[1.05fr_0.95fr] gap-6 overflow-hidden rounded-lg bg-brand-dark text-white max-lg:grid-cols-1">
            <div className="p-[42px] max-sm:p-6">
              <span className="eyebrow">现在预约</span>
              <h2 className="mb-4 mt-4 text-[clamp(30px,4vw,44px)] font-extrabold leading-tight">告诉我们毛孩子的情况，安排合适时段。</h2>
              <p className="text-white/80">营业时间：周一至周日 10:00-21:00。建议提前 1 天预约，节假日和周末请尽早确认。</p>
              <div className="mt-6 grid gap-3 text-white/90">
                <span>电话：138-0000-6688</span>
                <span>地址：上海市宜川路街道陕西北路1620号</span>
                <span>微信：BubblePawsCare</span>
              </div>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/15 py-6 text-center text-sm text-muted">
        <div className="page-container">© 2026 泡泡爪宠物洗护店 · 用温柔和专业照顾每一只毛孩子</div>
      </footer>
    </>
  );
}

function SectionHead({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-[34px] flex items-end justify-between gap-7 max-lg:grid max-lg:grid-cols-1">
      <h2 className="max-w-[620px] text-[clamp(30px,4vw,46px)] font-extrabold leading-tight">{title}</h2>
      <p className="max-w-[410px] text-muted">{text}</p>
    </div>
  );
}

function StoreInfo({ label, value }: { label: string; value: string }) {
  return (
    <li>
      <strong className="inline-block min-w-[74px] text-ink">{label}</strong>
      {value}
    </li>
  );
}
