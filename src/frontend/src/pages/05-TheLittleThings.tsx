import { PageFadeIn } from '@/components/animations/PageFadeIn';
import { HeartAccents } from '@/components/animations/HeartAccents';

export default function TheLittleThings() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4">
      <PageFadeIn className="max-w-3xl mx-auto">
        <div className="text-center mb-12 relative inline-block w-full">
          <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender relative inline-block">
            The Little Things 💫
            <HeartAccents count={8} />
          </h1>
        </div>
        
        <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
          <p>
            Your smile lights up everything 🌟 Your voice is mesmerizing 💕 The way you care and notice details 💖 Your laugh is pure joy ✨ These little things are everything to me 🌸
          </p>
          
          <p className="text-romantic-peach font-medium text-xl">
            Every little thing about you is a reason to love you more 💫💕
          </p>
        </div>
      </PageFadeIn>
    </div>
  );
}
