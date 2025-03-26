"use client"

import { Button } from "@/components/ui/button"
import BackgroundVideo from "@/components/background-video"
import Image from "next/image"

export default function LandingPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <BackgroundVideo />

      <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-end">
        <div className="mb-4 px-4 z-10">
          <div className="bg-[#29221E] rounded-2xl p-3 flex gap-3 shadow-lg">
            <div className="bg-black rounded-xl w-16 h-16 flex items-center justify-center">
              <a
                href="https://t.me/+iGnLYdwJuk9iOTNi"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 flex items-center justify-center w-full h-full"
              >
                <Image src="/assets/telegram-logo.png" alt="Telegram" width={40} height={40} className="w-9 h-9" />
              </a>
            </div>
            <div className="bg-black rounded-xl w-16 h-16 flex items-center justify-center">
              <a
                href="https://x.com/Robin_OnSol"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 flex items-center justify-center w-full h-full"
              >
                <Image src="/assets/x-logo.png" alt="Twitter" width={40} height={40} className="w-9 h-9" />
              </a>
            </div>
            <div className="bg-black rounded-xl w-16 h-16 flex items-center justify-center">
              <a
                href="https://dexscreener.com/solana/5am2meizfq5ydcdcw4m2zdhlrv2f1gf5tzjzdljggfxt"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 flex items-center justify-center w-full h-full"
              >
                <Image
                  src="/assets/dexscreener-logo.png"
                  alt="Dexscreener"
                  width={40}
                  height={40}
                  className="w-9 h-9"
                />
              </a>
            </div>
            <div className="bg-black rounded-xl w-16 h-16 flex items-center justify-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/5am2MEiZfQ5yDcdCw4M2zdhLRV2F1gf5TZjZDLJGgfXT"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 flex items-center justify-center w-full h-full"
              >
                <Image src="/assets/dextools-logo.png" alt="Dextools" width={40} height={40} className="w-9 h-9" />
              </a>
            </div>
            <div className="bg-black rounded-xl w-16 h-16 flex items-center justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 flex items-center justify-center w-full h-full"
              >
                <Image src="/assets/robin-logo.png" alt="Robin" width={40} height={40} className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-12 px-4 z-10">
          <Button
            className="bg-[#29221E] hover:bg-[#29221E]/90 text-white px-6 py-3 text-lg rounded-xl flex items-center gap-2 transition-transform hover:scale-105"
            onClick={() => {
              navigator.clipboard.writeText("FcRw48xZw1wF81hhKgoqN2EgJ5UmmxkmMqbfqTj6eDGJ")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            Copy Contract Address
          </Button>
        </div>
      </div>
    </main>
  )
}

