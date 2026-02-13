import { PageFadeIn } from '@/components/animations/PageFadeIn';

export default function MyPromiseToYou() {
  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 bg-gradient-to-b from-romantic-lavender/10 via-romantic-white to-romantic-peach/10">
      <PageFadeIn className="max-w-3xl mx-auto">
        <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender text-center mb-12">
          My Promise to You ✨
        </h1>
        
        <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
          <p>
            I promise respect, loyalty, and genuine care 💕 I'll cherish your heart like the precious gift it is ✨ I'll support your dreams and comfort you always 🌸 I'll never take your kindness for granted 💖
          </p>
          
          <p className="text-romantic-peach font-medium text-xl">
            These are commitments from the depths of my heart 🌟💫
          </p>
        </div>
      </PageFadeIn>
    </div>
  );
}
