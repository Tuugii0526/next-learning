"use client"

import { useSelectedLayoutSegment } from "next/navigation";

export default function Layout({
  children,
  team,
  analytics
}: Readonly<{ children: React.ReactNode; team: React.ReactNode ;analytics:React.ReactNode}>) {
    const whereAmI=useSelectedLayoutSegment('analytics')
  return (
    <div className="w-full h-screen grid grid-cols-2 items-center justify-items-center">
      {children}
      {team}
      {analytics}
      <p>Where am I: {whereAmI}</p>
    </div>
  );
}
