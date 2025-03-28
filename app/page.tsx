"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import BackgroundVideo from "@/components/background-video"
import Image from "next/image"
import { X } from "lucide-react"

// Type des props pour SocialIcon
type SocialIconProps = {
  href: string
  imgSrc: string
  alt: string
  tooltip: string
  activeTooltip: string | null
  handleMouseEnter: (tooltip: string) => void
  handleMouseLeave: () => void
}

// Composant pour les icônes sociales
function SocialIcon({
  href,
  imgSrc,
  alt,
  tooltip,
  activeTooltip,
  handleMouseEnter,
  handleMouseLeave,
}: SocialIconProps) {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleMouseEnter(tooltip)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-14 h-14 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
          <Image src={imgSrc} alt={alt} width={40} height={40} />
        </div>
      </a>
      {activeTooltip === tooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          <div className="backdrop-blur-sm bg-black/30 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            {tooltip}
          </div>
          <div className="w-2 h-2 backdrop-blur-sm bg-black/30 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      )}
    </div>
  )
}

export default function LandingPage() {
  const [showAbout, setShowAbout] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  const handleMouseEnter = (tooltip: string) => {
    setActiveTooltip(tooltip)
  }

  const handleMouseLeave = () => {
    setActiveTooltip(null)
  }

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <BackgroundVideo />

      <div className="absolute inset-0 flex flex-col items-center justify-between">
        <div className="w-full"></div>

        <div className="w-full flex flex-col items-center">
          {/* Navigation en bas */}
          <div className="z-10 mb-23">
            <div className="backdrop-blur-lg rounded-3xl p-3 flex items-end gap-4 shadow-lg">
              <SocialIcon
                href="https://t.me/+oZ54ZhFjXjExMzlk"
                imgSrc="/assets/telegram-logo2.png"
                alt="Telegram"
                tooltip="Telegram"
                activeTooltip={activeTooltip}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
              <SocialIcon
                href="https://x.com/knowledgesolana"
                imgSrc="/assets/x-logo2.png"
                alt="Twitter"
                tooltip="X"
                activeTooltip={activeTooltip}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
              <SocialIcon
                href="https://dexscreener.com/solana/5am2meizfq5ydcdcw4m2zdhlrv2f1gf5tzjzdljggfxt"
                imgSrc="/assets/dexscreener-logo2.png"
                alt="Dexscreener"
                tooltip="Dexscreener"
                activeTooltip={activeTooltip}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />

              {/* Divider */}
              <div className="h-10 w-px backdrop-blur-sm bg-gray-700/30 mx-1"></div>

              {/* About Button */}
              <div className="relative group">
                <button
                  onClick={() => setShowAbout(true)}
                  onMouseEnter={() => handleMouseEnter("About $KNOWLEDGE")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-14 h-14 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                    <Image
                      src="/assets/robin-logo.png"
                      alt="Robin"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </button>
                {activeTooltip === "About $KNOWLEDGE" && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                    <div className="backdrop-blur-sm bg-black/30 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      About $KNOWLEDGE
                    </div>
                    <div className="w-2 h-2 backdrop-blur-sm bg-black/30 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bouton Copy Contract */}
          <div className="z-10 mb-8 relative mt-4">
            <Button
              className="bg-gradient-to-r from-[#e63946]/70 to-[#e63946]/50 hover:from-[#e63946]/80 hover:to-[#e63946]/60 text-white px-6 py-3 text-lg rounded-2xl flex items-center gap-2 transition-transform hover:scale-105 backdrop-blur-sm"
              onClick={() => {
                navigator.clipboard.writeText("FcRw48xZw1wF81hhKgoqN2EgJ5UmmxkmMqbfqTj6eDGJ")
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 2000)
              }}
            >
              Copy Contract Address
              {isCopied && <span className="text-green-500">Copied!</span>}
            </Button>
          </div>
        </div>
      </div>

      {/* Modal About */}
      {showAbout && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="bg-[#2A2A2A] rounded-lg w-full max-w-md mx-4 shadow-xl relative">
            <div className="flex items-center justify-between p-3 border-b border-gray-700">
              <h2 className="text-white text-base font-bold">About $KNOWLEDGE</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowAbout(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 text-white text-sm space-y-3">
              <p>$KNOWLEDGE - The Professor of Memeconomics</p>
              <p>
                Mr. Knowledge is the wise mentor of degens, teaching meme coins at Moon Academy.
                He trains his students to outsmart scams and navigate crypto chaos.
              </p>
              <p>In $KNOWLEDGE We Trust — Because smart degens always win. 🚀📚</p>

              <div className="flex justify-center mt-4">
                <Image src="/assets/robin-logo.png" alt="Robin Logo" width={128} height={128} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
