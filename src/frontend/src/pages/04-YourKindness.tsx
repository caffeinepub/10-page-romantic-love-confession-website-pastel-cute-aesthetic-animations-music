import { PageFadeIn } from '@/components/animations/PageFadeIn';

export default function YourKindness() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 bg-gradient-to-b from-romantic-lavender/10 via-romantic-white to-romantic-peach/10">
      <PageFadeIn className="max-w-3xl mx-auto">
        <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender text-center mb-12">
          Your Kindness 💕
        </h1>
        
        <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
          <p>
            Your kindness isn't just something you do—it's who you are 💖 You help others without expecting anything back ✨ You make me feel valued in ways I've never experienced 🌸 Your kindness brings light to everyone 💫
          </p>
          
          <p className="text-romantic-peach font-medium text-xl">
            Your kindness makes the world feel lighter 🌟💕
          </p>
        </div>
      </PageFadeIn>
    </div>
  );
}
