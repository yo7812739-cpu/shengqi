import { useEffect, useState } from "react";
import svgPaths from "@/imports/伤心/svg-z1h612kl87";

function Countdown() {
  const START = 24 * 60 + 39;
  const [secs, setSecs] = useState(START);
  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s <= 0 ? START : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  return (
    <p className="[word-break:break-word] absolute font-['PingFang_SC:Bold',sans-serif] leading-[normal] left-[134px] not-italic text-[40px] text-white top-[541px] whitespace-nowrap tabular-nums sad-count">
      {mm}:{ss}
    </p>
  );
}

// ---- Dot row data (32 rows) ----
const DOT_ROWS: Array<{ top: number; fillOpacity: number }> = [
  { top: 399, fillOpacity: 0.2 },
  { top: 405, fillOpacity: 0.1 },
  { top: 387, fillOpacity: 0.4 },
  { top: 393, fillOpacity: 0.3 },
  { top: 375, fillOpacity: 0.6 },
  { top: 381, fillOpacity: 0.5 },
  { top: 363, fillOpacity: 0.8 },
  { top: 369, fillOpacity: 0.7 },
  { top: 351, fillOpacity: 1 },
  { top: 357, fillOpacity: 0.9 },
  { top: 339, fillOpacity: 1 },
  { top: 345, fillOpacity: 1 },
  { top: 327, fillOpacity: 1 },
  { top: 333, fillOpacity: 1 },
  { top: 315, fillOpacity: 1 },
  { top: 321, fillOpacity: 1 },
  { top: 303, fillOpacity: 1 },
  { top: 309, fillOpacity: 1 },
  { top: 291, fillOpacity: 1 },
  { top: 297, fillOpacity: 1 },
  { top: 279, fillOpacity: 1 },
  { top: 285, fillOpacity: 1 },
  { top: 267, fillOpacity: 0.9 },
  { top: 273, fillOpacity: 1 },
  { top: 255, fillOpacity: 0.7 },
  { top: 261, fillOpacity: 0.8 },
  { top: 243, fillOpacity: 0.5 },
  { top: 249, fillOpacity: 0.6 },
  { top: 231, fillOpacity: 0.3 },
  { top: 237, fillOpacity: 0.4 },
  { top: 219, fillOpacity: 0.1 },
  { top: 225, fillOpacity: 0.2 },
];

function DotRow({ top, fillOpacity }: { top: number; fillOpacity: number }) {
  return (
    <div className="absolute h-[2px] left-px opacity-70 w-[374px]" style={{ top }}>
      <svg className="absolute block inset-0 size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 374 2" width="374">
        <g>
          {Array.from({ length: 63 }, (_, i) => (
            <circle key={i} cx={1 + i * 6} cy="1" fill="white" fillOpacity={fillOpacity} r="1" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-px top-[219px]">
      {DOT_ROWS.map((row, i) => (
        <DotRow key={i} top={row.top} fillOpacity={row.fillOpacity} />
      ))}
    </div>
  );
}

// ---- Toolbar helpers ----

function Rectangle({ className }: { className?: string }) {
  return (
    <div className={className || "h-[5px] relative w-[2px]"}>
      <div className="absolute bg-white inset-0 rounded-[2px]" />
    </div>
  );
}

function RotatedInstances() {
  return (
    <div className="absolute contents left-[78px] top-[737px]" data-name="Rotated Instances">
      <Rectangle className="absolute h-[5px] left-[92px] top-[737px] w-[2px]" />
      <Rectangle className="absolute flex items-center justify-center left-[99.36px] size-[4.95px] top-[740.69px]" />
      <Rectangle className="absolute flex h-[2px] items-center justify-center left-[103px] top-[751px] w-[5px]" />
      <Rectangle className="absolute flex items-center justify-center left-[99.36px] size-[4.95px] top-[758.36px]" />
      <Rectangle className="absolute flex h-[5px] items-center justify-center left-[92px] top-[762px] w-[2px]" />
      <Rectangle className="absolute flex items-center justify-center left-[81.69px] size-[4.95px] top-[758.36px]" />
      <Rectangle className="absolute flex h-[2px] items-center justify-center left-[78px] top-[751px] w-[5px]" />
      <Rectangle className="absolute flex items-center justify-center left-[81.69px] size-[4.95px] top-[740.69px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[78px] top-[737px]">
      <div className="absolute left-[86px] size-[15px] top-[744px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
          <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 16" r="7.5" />
        </svg>
      </div>
      <RotatedInstances />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[183px] top-[741px]">
      <div className="absolute bg-white h-[20px] left-[183px] rounded-[5px] top-[741px] w-[4px]" />
      <div className="absolute bg-white h-[20px] left-[196px] rounded-[5px] top-[741px] w-[4px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[58px] top-[721px]">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[60px] left-[58px] rounded-[20px] top-[721px] w-[260px]" />
      <Group />
      <div className="absolute left-[136px] size-[20px] top-[742px]" data-name="Subtract">
        <div className="absolute inset-[0_-20%_-40%_-20%]">
          <svg className="block size-full" fill="none" height="28" preserveAspectRatio="none" viewBox="0 0 28 28" width="28">
            <g filter="url(#filter0_d_0_402)" id="Subtract">
              <path d={svgPaths.p37992b00} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_d_0_402" width="28" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_402" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_402" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group1 />
      <div className="absolute h-[25.196px] left-[227px] top-[738px] w-[21px]" data-name="Union">
        <div className="absolute inset-[0_-19.05%_-31.75%_-19.05%]">
          <svg className="block size-full" fill="none" height="33.1963" preserveAspectRatio="none" viewBox="0 0 29 33.1963" width="29">
            <g filter="url(#filter0_d_0_536)" id="Union">
              <path d={svgPaths.p29e30200} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33.1963" id="filter0_d_0_536" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_536" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_536" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-white border-2 border-solid border-white left-[277px] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] size-[20px] top-[741px]" />
    </div>
  );
}

// ---- Toolbar icon components ----

function Component2() {
  return (
    <div className="absolute left-[172px] size-[20px] top-[49px]" data-name="缩小">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <rect height="18" rx="4" stroke="white" strokeWidth="2" width="18" x="1" y="1" />
        <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="16.6562" x2="12.4136" y1="3.41421" y2="7.65685" />
        <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="12" x2="12" y1="5" y2="8" />
        <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="15" x2="12" y1="8" y2="8" />
        <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="3" x2="7.24264" y1="16.5858" y2="12.3431" />
        <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="7.65625" x2="7.65625" y1="15" y2="12" />
        <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="4.65625" x2="7.65625" y1="12" y2="12" />
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[20px] left-[224px] top-[49px] w-[19px]" data-name="倒">
      <div className="absolute inset-[0_0_0_-5.26%]">
        <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <rect height="17" rx="2" stroke="white" strokeWidth="2" width="9" x="10" y="2" />
          <path d={svgPaths.p23285200} stroke="white" strokeWidth="2" />
          <path d="M3 5C3 2.23858 4.5 1 7 1" stroke="white" strokeWidth="2" />
          <rect fill="white" height="2" width="3" x="2" y="4" />
          <rect fill="white" height="2" transform="matrix(0 -1 -1 0 9 3)" width="3" />
        </svg>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute left-[275px] size-[18px] top-[51px]" data-name="发送">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p270bcb00} stroke="white" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p2dbf8f00} fill="white" />
          <path d="M15 1H19" stroke="white" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1f3c1c00} fill="white" />
        </svg>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[19px] left-[325px] top-[49px] w-[18px]" data-name="下载">
      <div className="absolute inset-[0_-5.56%_-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p3f547000} fill="white" />
          <path d={svgPaths.p1ac1df00} stroke="white" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

// ---- Face pixel groups ----

function Group9() {
  return (
    <div className="absolute contents left-[41px] top-[266px]">
      <div className="absolute bg-white left-[61px] rounded-[1px] size-[10px] top-[266px]" />
      <div className="absolute bg-white left-[51px] rounded-[1px] size-[10px] top-[276px]" />
      <div className="absolute bg-white left-[51px] rounded-[1px] size-[10px] top-[286px]" />
      <div className="absolute bg-white left-[51px] rounded-[1px] size-[10px] top-[336px]" />
      <div className="absolute bg-white left-[51px] rounded-[1px] size-[10px] top-[346px]" />
      <div className="absolute flex items-center justify-center left-[61px] size-[10px] top-[356px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute bg-white left-[41px] rounded-[1px] size-[10px] top-[286px]" />
      <div className="absolute bg-white left-[41px] rounded-[1px] size-[10px] top-[296px]" />
      <div className="absolute bg-white left-[41px] rounded-[1px] size-[10px] top-[306px]" />
      <div className="absolute bg-white left-[41px] rounded-[1px] size-[10px] top-[316px]" />
      <div className="absolute bg-white left-[41px] rounded-[1px] size-[10px] top-[326px]" />
      <div className="absolute bg-white left-[41px] rounded-[1px] size-[10px] top-[336px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[87px] top-[271px]">
      <div className="absolute flex items-center justify-center left-[117px] size-[10px] top-[271px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[107px] size-[10px] top-[271px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[271px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[87px] size-[10px] top-[271px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[271px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[137px] size-[10px] top-[271px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[308px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[308px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[117px] size-[10px] top-[308px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[288px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[107px] size-[10px] top-[328px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[117px] size-[10px] top-[318px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[117px] size-[10px] top-[328px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[288px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[117px] size-[10px] top-[298px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[298px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[87px] size-[10px] top-[298px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[328px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[318px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[328px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[318px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[161px] top-[304px]">
      <div className="absolute flex items-center justify-center left-[180px] size-[10px] top-[327px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[175px] size-[10px] top-[304px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[185px] size-[10px] top-[304px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[161px] size-[10px] top-[347px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[171px] size-[10px] top-[337px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[272px] top-[266px]">
      <div className="absolute flex items-center justify-center left-[296px] size-[10px] top-[266px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[296px] size-[10px] top-[276px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[276px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[286px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[296px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[306px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[316px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[326px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[336px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[306px] size-[10px] top-[346px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[286px] size-[10px] top-[356px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[296px] size-[10px] top-[356px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[296px] size-[10px] top-[346px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[316px] size-[10px] top-[296px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[316px] size-[10px] top-[306px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[316px] size-[10px] top-[316px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[316px] size-[10px] top-[326px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[272px] size-[10px] top-[299px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[222px] top-[272px]">
      <div className="absolute flex items-center justify-center left-[252px] size-[10px] top-[272px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[242px] size-[10px] top-[272px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[272px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[222px] size-[10px] top-[272px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[272px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[272px] size-[10px] top-[272px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[309px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[309px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[252px] size-[10px] top-[309px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[289px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[242px] size-[10px] top-[329px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[252px] size-[10px] top-[319px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[252px] size-[10px] top-[329px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[289px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[252px] size-[10px] top-[299px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[299px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[222px] size-[10px] top-[299px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[329px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[319px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[329px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[319px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[299px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[242px] size-[10px] top-[299px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[242px] size-[10px] top-[309px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[242px] size-[10px] top-[319px]">
        <div className="flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[366px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
    </div>
  );
}

// ---- Animated face assembly ----

function Group7() {
  return (
    <div className="absolute contents left-[41px] top-[266px]">
      {/* Left bracket { — jerks downward */}
      <div className="sad-bracket" style={{ position: "absolute", inset: 0 }}>
        <Group9 />
      </div>
      {/* Left eye — eyebrow wobble up-down */}
      <div className="sad-eye" style={{ position: "absolute", inset: 0 }}>
        <Group3 />
      </div>
      {/* Mouth / nose — sniffs upward */}
      <div className="sad-mouth" style={{ position: "absolute", inset: 0 }}>
        <Group6 />
      </div>
      {/* Right bracket } — jerks downward */}
      <div className="sad-bracket" style={{ position: "absolute", inset: 0 }}>
        <Group5 />
      </div>
      {/* Scattered tear trail pixels (static, from original Group7 body) */}
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[349px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[232px] size-[10px] top-[339px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[349px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[262px] size-[10px] top-[339px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[298px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[107px] size-[10px] top-[318px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[107px] size-[10px] top-[308px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[199px] size-[10px] top-[347px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[189px] size-[10px] top-[337px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-white relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[348px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[97px] size-[10px] top-[338px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[137px] size-[10px] top-[298px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[107px] size-[10px] top-[298px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[348px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[127px] size-[10px] top-[338px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#459eff] relative rounded-[1px] size-[10px]" />
        </div>
      </div>
      {/* Right eye — eyebrow wobble up-down */}
      <div className="sad-eye" style={{ position: "absolute", inset: 0 }}>
        <Group4 />
      </div>
    </div>
  );
}

// ---- Animated tear drops overlay ----

const TEAR_DROPS = [
  // Left eye — two columns
  { left: 97, top: 358, delay: 0 },
  { left: 97, top: 358, delay: 0.9 },
  { left: 97, top: 358, delay: 1.8 },
  { left: 127, top: 358, delay: 0.3 },
  { left: 127, top: 358, delay: 1.2 },
  { left: 127, top: 358, delay: 2.1 },
  // Right eye — two columns
  { left: 232, top: 359, delay: 0.1 },
  { left: 232, top: 359, delay: 1.0 },
  { left: 232, top: 359, delay: 1.9 },
  { left: 262, top: 359, delay: 0.4 },
  { left: 262, top: 359, delay: 1.3 },
  { left: 262, top: 359, delay: 2.2 },
];

function TearDrops() {
  return (
    <>
      {TEAR_DROPS.map((d, i) => (
        <div
          key={i}
          className="absolute sad-tear bg-[#459eff] rounded-[1px] size-[10px]"
          style={{ left: d.left, top: d.top, animationDelay: `${d.delay}s` }}
        />
      ))}
    </>
  );
}

// ---- Main scene ----

function Component1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="计时">
      <div className="absolute bg-gradient-to-b from-[#0058ba] h-[812px] left-0 to-[#152231] top-0 w-[375px]" />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Group2 />
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[53px] left-[151px] rounded-[20px] top-[34px] w-[215px]" />
      <div className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[0] left-[37px] not-italic text-[20px] text-shadow-[0px_4px_4px_rgba(255,255,255,0.2)] text-white top-[101px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 whitespace-pre">熬过无人问津的日子，</p>
        <p className="leading-[normal] whitespace-pre">{`                           才有诗和远方。`}</p>
      </div>
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[13px] not-italic text-[48px] text-white top-[69px] whitespace-nowrap">"</p>
      <Countdown />
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Bold',sans-serif] leading-[normal] left-[168px] not-italic text-[20px] text-shadow-[0px_4px_4px_rgba(255,255,255,0.2)] text-white top-[612px] whitespace-nowrap">英语</p>
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[170px] not-italic text-[12px] text-shadow-[0px_4px_4px_rgba(255,255,255,0.2)] text-white top-[647px] whitespace-nowrap">进行中</p>
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[126px] not-italic text-[12px] text-shadow-[0px_4px_4px_rgba(255,255,255,0.3)] text-white top-[683px] tracking-[0.6px] whitespace-nowrap">习惯-每天完成60分钟</p>
      {/* Breathing polka dots — independent from face animation */}
      <div className="sad-dots" style={{ position: "absolute", inset: 0 }}>
        <Group8 />
      </div>
      <Group7 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['XinYuGongZhengRongTiSTB:Regular',sans-serif] leading-[normal] left-[188px] not-italic text-[#52a4ff] text-[16px] text-center top-[431px] w-[228px]">累了就歇一歇，不用硬撑，你的感受比计划进度重要多了！</p>
      <TearDrops />
    </div>
  );
}

export default function SadScene() {
  return (
    <div className="bg-white relative size-full" data-name="伤心">
      <Component1 />
    </div>
  );
}
