"use client";

import { useState } from "react";

const defaultVisitTime = "09:30";

function getTomorrowDateValue() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function BookingForm() {
  const [visitDate, setVisitDate] = useState(getTomorrowDateValue);
  const [visitTime, setVisitTime] = useState(defaultVisitTime);

  return (
    <form className="m-[18px] rounded-lg bg-white p-7 text-ink max-sm:p-6" onSubmit={(event) => event.preventDefault()}>
      <label className="mb-1.5 block text-sm font-bold text-muted" htmlFor="name">
        您的称呼
      </label>
      <input
        className="mb-3.5 min-h-11 w-full rounded-lg border border-ink/15 px-3 py-2.5 font-sans text-ink"
        id="name"
        name="name"
        type="text"
        placeholder="例如：小满妈妈"
      />

      <label className="mb-1.5 block text-sm font-bold text-muted" htmlFor="pet">
        宠物类型
      </label>
      <select className="mb-3.5 min-h-11 w-full rounded-lg border border-ink/15 px-3 py-2.5 font-sans text-ink" id="pet" name="pet">
        <option>小型犬</option>
        <option>中大型犬</option>
        <option>猫咪</option>
        <option>其他宠物</option>
      </select>

      <label className="mb-1.5 block text-sm font-bold text-muted" htmlFor="service">
        预约服务
      </label>
      <select className="mb-3.5 min-h-11 w-full rounded-lg border border-ink/15 px-3 py-2.5 font-sans text-ink" id="service" name="service">
        <option>全套洗护</option>
        <option>轻松洗澡</option>
        <option>美容造型</option>
        <option>皮毛护理</option>
      </select>

      <fieldset className="mb-3.5 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-muted" htmlFor="visit-date">
            期望到店日期
          </label>
          <input
            className="min-h-11 w-full rounded-lg border border-ink/15 px-3 py-2.5 font-sans text-ink"
            id="visit-date"
            name="visitDate"
            type="date"
            value={visitDate}
            onChange={(event) => setVisitDate(event.target.value)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-bold text-muted" htmlFor="visit-time">
            期望到店时间
          </label>
          <input
            className="min-h-11 w-full rounded-lg border border-ink/15 px-3 py-2.5 font-sans text-ink"
            id="visit-time"
            name="visitTime"
            type="time"
            min="09:30"
            max="21:00"
            step="1800"
            value={visitTime}
            onChange={(event) => setVisitTime(event.target.value)}
          />
        </div>
      </fieldset>

      <label className="mb-1.5 block text-sm font-bold text-muted" htmlFor="note">
        补充说明
      </label>
      <textarea
        className="mb-3.5 min-h-[92px] w-full resize-y rounded-lg border border-ink/15 px-3 py-2.5 font-sans text-ink"
        id="note"
        name="note"
        placeholder="例如：怕吹风、皮肤敏感、毛发打结等"
      />

      <button className="btn" type="submit">
        提交预约信息
      </button>
    </form>
  );
}
