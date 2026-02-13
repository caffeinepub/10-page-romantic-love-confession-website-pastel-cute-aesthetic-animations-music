import { PageFadeIn } from '@/components/animations/PageFadeIn';

export default function MyTrueConfession() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 bg-gradient-to-b from-romantic-white via-romantic-pink/30 to-romantic-lavender/20">
      <PageFadeIn className="max-w-3xl mx-auto">
        <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender text-center mb-12">
          My True Confession 💖
        </h1>
        
        <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
          <div className="bg-romantic-white/80 rounded-3xl p-8 space-y-6 border-2 border-romantic-peach/30 shadow-romantic-glow">
            <p className="text-2xl font-cursive text-romantic-peach text-center">
              I fell for you because of your kindness 💕
            </p>
            
            <p className="text-2xl font-cursive text-romantic-peach text-center">
              I don't just like you... I love you 💖
            </p>
            
            <p>
              This is deep, genuine, all-consuming love ✨ I love your gentle spirit and genuine heart 🌸 I love who you are completely 💫
            </p>
            
            <p className="text-2xl font-cursive text-romantic-lavender text-center">
              I love you, completely and sincerely 🌟💕
            </p>
          </div>
        </div>
      </PageFadeIn>
    </div>
  );
}
