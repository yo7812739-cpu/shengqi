import { useEffect, useState } from "react";
import AngryScene from "@/components/AngryScene";

const BASE_W = 375;
const BASE_H = 812;

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / BASE_W, window.innerHeight / BASE_H));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="size-full flex items-center justify-center overflow-hidden bg-[#8b2700]">
      <div
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        <AngryScene />
      </div>
    </div>
  );
}
