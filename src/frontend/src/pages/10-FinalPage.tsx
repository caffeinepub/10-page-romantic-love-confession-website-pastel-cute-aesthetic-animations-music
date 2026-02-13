import { useState } from 'react';
import { PageFadeIn } from '@/components/animations/PageFadeIn';
import { CelebrationHeartsOverlay } from '@/components/animations/CelebrationHeartsOverlay';
import { RomanticButton } from '@/components/RomanticButton';
import { Heart, Sparkles } from 'lucide-react';

export default function FinalPage() {
  const [response, setResponse] = useState<'yes' | 'thinking' | null>(null);
  const [noHidden, setNoHidden] = useState(false);

  return (
    <>
      <CelebrationHeartsOverlay show={response === 'yes'} />
      
      <div className="min-h-[calc(100vh-8rem)] py-12 px-4 bg-gradient-to-b from-romantic-pink/30 via-romantic-lavender/20 to-romantic-peach/20">
        <PageFadeIn className="max-w-3xl mx-auto">
          {response === null && (
            <>
              <div className="text-center mb-12">
                <div className="inline-block mb-6">
                  <Heart className="h-24 w-24 text-romantic-peach fill-romantic-peach animate-pulse-slow" />
                </div>
                
                <h1 className="font-cursive text-4xl sm:text-5xl md:text-7xl text-romantic-lavender mb-8">
                  Will You Be Mine? 💍💌
                </h1>
                
                <p className="font-rounded text-xl text-romantic-lavender/90 leading-relaxed max-w-2xl mx-auto mb-12">
                  I've shared my heart across these pages 💕 Now I'm asking you the most important question ✨
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <RomanticButton
                  size="lg"
                  onClick={() => setResponse('yes')}
                  className="text-2xl px-12 py-8 min-w-[200px]"
                >
                  Yes 💖
                </RomanticButton>
                
                <RomanticButton
                  size="lg"
                  variant="outline"
                  onClick={() => setResponse('thinking')}
                  className="text-2xl px-12 py-8 min-w-[200px]"
                >
                  Let Me Think 😊
                </RomanticButton>
              </div>

              {/* Clickable "No" button that disappears after one click */}
              {!noHidden && (
                <div className="flex justify-center">
                  <RomanticButton
                    size="lg"
                    variant="outline"
                    onClick={() => setNoHidden(true)}
                    className="text-2xl px-12 py-8 min-w-[200px]"
                  >
                    No
                  </RomanticButton>
                </div>
              )}
            </>
          )}
          
          {response === 'yes' && (
            <div className="text-center animate-fade-in">
              <div className="inline-block mb-8">
                <Sparkles className="h-32 w-32 text-romantic-peach animate-pulse-slow" />
              </div>
              
              <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-romantic-peach mb-8">
                You said YES! 💖✨
              </h2>
              
              <p className="font-rounded text-2xl text-romantic-lavender/90 leading-relaxed max-w-2xl mx-auto mb-8">
                You've made me the happiest person! 🌟 My heart is overflowing with joy 💕 Thank you for giving us a chance ✨
              </p>
              
              <div className="bg-romantic-white/80 rounded-3xl p-8 max-w-xl mx-auto border-2 border-romantic-peach/30 shadow-romantic-glow">
                <p className="font-cursive text-3xl text-romantic-lavender mb-4">
                  This is just the beginning 💕
                </p>
                <p className="font-rounded text-lg text-romantic-lavender/80">
                  Our story starts now 🌸✨
                </p>
              </div>
            </div>
          )}
          
          {response === 'thinking' && (
            <div className="text-center animate-fade-in">
              <div className="inline-block mb-8">
                <Heart className="h-24 w-24 text-romantic-lavender fill-romantic-lavender/20 animate-pulse-slow" />
              </div>
              
              <h2 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-romantic-lavender mb-8">
                I'll wait patiently 💕
              </h2>
              
              <p className="font-rounded text-xl text-romantic-lavender/90 leading-relaxed max-w-2xl mx-auto mb-8">
                Take all the time you need 💫 These feelings are real and not going anywhere ✨ I respect whatever you decide 🌸
              </p>
              
              <div className="bg-romantic-lavender/10 rounded-3xl p-8 max-w-xl mx-auto border-2 border-romantic-lavender/20">
                <p className="font-rounded text-lg text-romantic-lavender/80">
                  You deserve someone who sees your worth 💕 I hope I can be that person ✨
                </p>
              </div>
              
              <RomanticButton
                size="lg"
                variant="ghost"
                onClick={() => setResponse(null)}
                className="mt-8"
              >
                Go back
              </RomanticButton>
            </div>
          )}
        </PageFadeIn>
      </div>
    </>
  );
}
