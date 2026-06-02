"use client";

import { useEffect, useMemo, useState } from "react";

const reviews = [
  {
    text: "我家比熊容易打结，护理师很耐心，修完圆圆的特别可爱，还提醒我哪些地方要多梳。",
    name: "陈女士",
    pet: "比熊 · 奶糖",
    tag: "精修造型",
  },
  {
    text: "猫咪比较胆小，店里安排了安静时段，洗完没有炸毛，回家状态也很好。",
    name: "林女士",
    pet: "英短 · 豆包",
    tag: "猫咪洗护",
  },
  {
    text: "价格提前说清楚，中途会发照片，接送也准时。以后固定来这里洗。",
    name: "周先生",
    pet: "柯基 · 芝士",
    tag: "预约接送",
  },
  {
    text: "第一次带老年犬来，护理师动作很轻，吹水也会停下来安抚。回家后皮肤没有发红。",
    name: "王女士",
    pet: "贵宾 · Lucky",
    tag: "敏感护理",
  },
  {
    text: "店里没有刺鼻香味，工具和台面都很干净。洗完毛很蓬松，脚底毛也修得很细。",
    name: "赵先生",
    pet: "萨摩耶 · 雪糕",
    tag: "全套洗护",
  },
  {
    text: "临近搬家前想给猫做一次深度清洁，客服沟通很细，护理结束还发了耳朵和指甲的反馈。",
    name: "许女士",
    pet: "布偶 · 蓝蓝",
    tag: "护理反馈",
  },
  {
    text: "两只狗一起预约也安排得很顺，时间没有拖太久。小狗洗完还愿意跟护理师贴贴。",
    name: "何先生",
    pet: "柴犬 · 元宝",
    tag: "多宠家庭",
  },
  {
    text: "之前在别处吹干会紧张，这里分区比较安静，还能看到护理进度，等待时心里踏实很多。",
    name: "姜女士",
    pet: "雪纳瑞 · 摩卡",
    tag: "可视护理",
  },
];

export function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0);
  const totalReviews = reviews.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentReview((review) => (review + 1) % totalReviews);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [totalReviews]);

  const visibleReviews = useMemo(
    () => Array.from({ length: 3 }, (_, index) => reviews[(currentReview + index) % totalReviews]),
    [currentReview, totalReviews],
  );

  const showReview = (index: number) => {
    setCurrentReview((index + totalReviews) % totalReviews);
  };

  return (
    <div aria-label="客户评价轮播">
      <div className="mb-5 flex items-center justify-between gap-4 max-sm:grid">
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-brand-dark">
          <span className="rounded-full bg-mint px-3 py-2">4.9 / 5.0 平均评分</span>
          <span className="rounded-full bg-cream px-3 py-2">98% 顾客愿意推荐</span>
        </div>
        <div className="flex gap-2.5" aria-label="评价轮播控制">
          <button
            className="grid h-[42px] w-[42px] place-items-center rounded-full border border-brand/20 bg-white text-xl text-brand-dark shadow-card transition hover:bg-mint"
            type="button"
            aria-label="上一条评价"
            onClick={() => showReview(currentReview - 1)}
          >
            ←
          </button>
          <button
            className="grid h-[42px] w-[42px] place-items-center rounded-full border border-brand/20 bg-white text-xl text-brand-dark shadow-card transition hover:bg-mint"
            type="button"
            aria-label="下一条评价"
            onClick={() => showReview(currentReview + 1)}
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[18px] overflow-hidden max-lg:grid-cols-2 max-sm:grid-cols-1">
        {visibleReviews.map((review, index) => (
          <article
            className="card flex min-h-[240px] animate-review-slide flex-col p-6"
            key={`${review.name}-${review.pet}-${currentReview}`}
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="tracking-[2px] text-[#f4a62a]">★★★★★</div>
              <span className="rounded-full bg-mint px-2.5 py-1 text-xs font-bold text-brand-dark">{review.tag}</span>
            </div>
            <p className="mb-5 text-[#40504d]">“{review.text}”</p>
            <div className="mt-auto border-t border-ink/10 pt-4">
              <strong className="block">{review.name}</strong>
              <span className="text-sm text-muted">{review.pet}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2" aria-label="评价轮播分页">
        {reviews.map((review, index) => (
          <button
            className={`h-2.5 rounded-full transition-all ${
              currentReview === index ? "w-[28px] bg-brand" : "w-2.5 bg-brand/25 hover:bg-brand/45"
            }`}
            key={`${review.name}-${review.pet}`}
            type="button"
            aria-label={`查看${review.name}的评价`}
            onClick={() => showReview(index)}
          />
        ))}
      </div>
    </div>
  );
}
