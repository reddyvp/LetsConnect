import { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { X, Heart, Star, RotateCcw } from 'lucide-react';
import { Profile } from '../types';
import { profiles as initialProfiles } from '../data/mockData';

export function DiscoverPage() {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);

  const currentProfile = profiles[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      // Simulate random match (30% chance)
      if (Math.random() > 0.7) {
        setShowMatch(true);
        setTimeout(() => setShowMatch(false), 3000);
      }
    }
    
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 300);
  };

  const handleButtonSwipe = (direction: 'left' | 'right') => {
    handleSwipe(direction);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (currentIndex >= profiles.length) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl mb-2">No more profiles</h2>
          <p className="text-gray-600 mb-6">Check back later for new people nearby</p>
          <button
            onClick={() => setCurrentIndex(0)}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Cards area */}
      <div className="flex-1 px-4 pt-4 pb-20 relative">
        <div className="max-w-md mx-auto h-full relative">
          {/* Show next card underneath */}
          {currentIndex + 1 < profiles.length && (
            <ProfileCard
              key={profiles[currentIndex + 1].id}
              profile={profiles[currentIndex + 1]}
              onSwipe={() => {}}
              style={{
                scale: 0.95,
                zIndex: 1
              }}
            />
          )}
          
          {/* Current card */}
          {currentProfile && (
            <ProfileCard
              key={currentProfile.id}
              profile={currentProfile}
              onSwipe={handleSwipe}
              style={{
                zIndex: 2
              }}
            />
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-0 left-0 right-0 pb-8 pt-4 bg-gradient-to-t from-white via-white to-transparent">
        <div className="flex justify-center items-center gap-4 px-4">
          <button
            onClick={() => handleButtonSwipe('left')}
            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
          
          <button
            onClick={handleUndo}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-yellow-500 hover:bg-yellow-50 transition-colors disabled:opacity-40"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => handleButtonSwipe('right')}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
          >
            <Heart className="w-8 h-8 fill-current" />
          </button>
        </div>
      </div>

      {/* Match modal */}
      {showMatch && currentProfile && (
        <div className="fixed inset-0 bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center text-white px-8">
            <h1 className="text-5xl mb-8 animate-bounce">It's a Match!</h1>
            <div className="flex justify-center gap-8 mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={currentProfile.photos[0]}
                  alt={currentProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-xl mb-8">
              You and {currentProfile.name} liked each other!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
