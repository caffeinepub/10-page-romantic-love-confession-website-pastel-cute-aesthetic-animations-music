import { PageFadeIn } from '@/components/animations/PageFadeIn';

export default function WhatYouMeanToMe() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 bg-gradient-to-b from-romantic-peach/10 via-romantic-white to-romantic-pink/20">
      <PageFadeIn className="max-w-3xl mx-auto">
        <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender text-center mb-12">
          What You Mean to Me 💌
        </h1>
        
        <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
          <p>
            You feel like peace in chaos 💫 Like home—a sense of belonging 💕 You bring comfort and healing ✨ You inspire me to be better every day 🌸 You are my heart's choice 💖
          </p>
          
          <p className="text-romantic-peach font-medium text-xl">
            You mean everything to me 🌟💕
          </p>
        </div>
      </PageFadeIn>
    </div>
  );
}
