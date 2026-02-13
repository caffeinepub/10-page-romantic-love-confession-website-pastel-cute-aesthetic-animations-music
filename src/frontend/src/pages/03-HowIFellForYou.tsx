import { PageFadeIn } from '@/components/animations/PageFadeIn';

export default function HowIFellForYou() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 bg-gradient-to-b from-romantic-white via-romantic-pink/20 to-romantic-white">
      <PageFadeIn className="max-w-3xl mx-auto">
        <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender text-center mb-12">
          How I Fell for You 🌸
        </h1>
        
        <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
          <p>
            Your kindness captured me first 💕 Not performative, but genuine and natural ✨ You treat everyone with respect and care 🌟 I fell for your authenticity and gentle spirit 💖
          </p>
          
          <p className="text-romantic-peach font-medium text-xl">
            I fell for you because of your kindness 💫🌸
          </p>
        </div>
      </PageFadeIn>
    </div>
  );
}
