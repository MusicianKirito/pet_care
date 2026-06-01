"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/assets/store-reception.png",
    title: "接待与零售区",
    alt: "中国高端宠物洗护店的接待与零售展示区",
    text: "前台、洗护用品展示和到店动线清晰，第一眼就能感受到专业与整洁。",
  },
  {
    image: "/assets/store-wash.png",
    title: "洗护护理区",
    alt: "中国高端宠物洗护店的洗护护理区",
    text: "独立浴缸、玻璃分区和有序工具墙，让洗护流程更安心可控。",
  },
  {
    image: "/assets/store-lounge.png",
    title: "休息等候区",
    alt: "中国高端宠物洗护店的客户休息和宠物等候区",
    text: "主人休息、宠物短暂停留和可视窗结合，等待时间也能从容舒适。",
  },
];

export function EnvironmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % totalSlides);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  const showSlide = (index: number) => {
    setCurrentSlide((index + totalSlides) % totalSlides);
  };

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_290px] items-stretch gap-6 max-lg:grid-cols-1">
      <div
        className="relative min-h-[520px] overflow-hidden rounded-lg bg-[#dfeee9] shadow-soft max-sm:min-h-[430px]"
        aria-label="店内环境轮播图"
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <article className="relative min-h-[520px] min-w-full max-sm:min-h-[430px]" key={slide.title}>
              <Image
                className="object-cover"
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 830px"
              />
              <div className="absolute bottom-6 left-6 right-6 max-w-[430px] rounded-lg bg-white/90 p-5 backdrop-blur max-sm:bottom-[72px] max-sm:left-3.5 max-sm:right-3.5">
                <h3 className="mb-1.5 text-[22px] font-bold">{slide.title}</h3>
                <p className="text-[15px] text-muted">{slide.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="absolute bottom-[22px] right-[22px] flex gap-2.5 max-sm:left-3.5 max-sm:right-auto" aria-label="轮播控制">
          <button
            className="grid h-[42px] w-[42px] place-items-center rounded-full border border-brand/20 bg-white/90 text-xl text-brand-dark"
            type="button"
            aria-label="上一张"
            onClick={() => showSlide(currentSlide - 1)}
          >
            ←
          </button>
          <button
            className="grid h-[42px] w-[42px] place-items-center rounded-full border border-brand/20 bg-white/90 text-xl text-brand-dark"
            type="button"
            aria-label="下一张"
            onClick={() => showSlide(currentSlide + 1)}
          >
            →
          </button>
        </div>
      </div>

      <aside className="grid gap-3.5 max-lg:grid-cols-3 max-sm:grid-cols-1" aria-label="环境亮点">
        <div className="card p-[22px]">
          <strong className="mb-1.5 block text-lg text-brand-dark">可视化护理</strong>
          <span className="text-sm text-muted">透明隔断与明确动线，让主人了解洗护进度。</span>
        </div>
        <div className="card p-[22px]">
          <strong className="mb-1.5 block text-lg text-brand-dark">分区更安静</strong>
          <span className="text-sm text-muted">接待、洗护、吹干、等候相对独立，降低宠物应激。</span>
        </div>
        <div className="card p-[22px]">
          <strong className="mb-1.5 block text-lg text-brand-dark">高标准清洁</strong>
          <span className="text-sm text-muted">石材、瓷砖和玻璃材质易清洁，工具分类收纳并定时消毒。</span>
        </div>
        <div className="mt-1 flex gap-2 max-lg:col-span-3 max-sm:col-span-1" aria-label="轮播分页">
          {slides.map((slide, index) => (
            <button
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index ? "w-[26px] bg-brand" : "w-2.5 bg-brand/25"
              }`}
              key={slide.title}
              type="button"
              aria-label={`查看${slide.title}`}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}
