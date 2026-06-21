import { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className = "" }: TiltCardProps) {
  return (
    <div
      className={`group relative border-l-2 border-transparent transition-colors duration-300 hover:border-red ${className}`}
    >
      <div className="glass-card h-full p-6 transition-colors duration-300 group-hover:bg-[#141414]">
        {children}
      </div>
    </div>
  );
}
