import { PageFadeIn } from '@/components/animations/PageFadeIn';
import { SparklesOverlay } from '@/components/animations/SparklesOverlay';

export default function TheFirstMoment() {
  return (
    <>
      <SparklesOverlay />
      <div className="min-h-[calc(100vh-8rem)] py-12 px-4">
        <PageFadeIn className="max-w-3xl mx-auto">
          <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender text-center mb-12">
            The First Moment ✨
          </h1>
          
          <div className="space-y-6 font-rounded text-lg text-romantic-lavender/90 leading-relaxed">
            <p>
              I remember when I first noticed you 💫 You were simply being yourself, radiating warmth without trying 🌸 Something shifted inside me—a pull I couldn't ignore 💕
            </p>
            
            <p className="text-romantic-peach font-medium text-xl">
              That was the moment everything began ✨💖
            </p>
          </div>
        </PageFadeIn>
      </div>
    </>
  );
}
