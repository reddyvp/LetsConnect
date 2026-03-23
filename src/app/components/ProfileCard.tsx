import { motion, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { Profile } from '../types';
import { MapPin, Info } from 'lucide-react';
import { useState } from 'react';

interface ProfileCardProps {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
  style?: React.CSSProperties;
}

export function ProfileCard({ profile, onSwipe, style }: ProfileCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      onSwipe(direction);
    }
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % profile.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + profile.photos.length) % profile.photos.length);
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate, opacity, ...style }}
      onDragEnd={handleDragEnd}
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Photo */}
        <div className="relative h-full">
          <img
            src={profile.photos[currentPhotoIndex]}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          
          {/* Photo indicators */}
          <div className="absolute top-4 left-0 right-0 flex gap-1 px-4">
            {profile.photos.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 rounded-full bg-white/30"
              >
                {index <= currentPhotoIndex && (
                  <div className="h-full bg-white rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Photo navigation zones */}
          <div className="absolute inset-0 flex">
            <button
              onClick={prevPhoto}
              className="flex-1 cursor-pointer"
              aria-label="Previous photo"
            />
            <button
              onClick={nextPhoto}
              className="flex-1 cursor-pointer"
              aria-label="Next photo"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Info button */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Info className="w-5 h-5 text-white" />
          </button>

          {/* Profile info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {!showInfo ? (
              <>
                <div className="flex items-baseline gap-2 mb-2">
                  <h2 className="text-3xl">{profile.name}</h2>
                  <span className="text-2xl">{profile.age}</span>
                </div>
                <div className="flex items-center gap-1 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.distance} km away</span>
                </div>
                {profile.occupation && (
                  <p className="text-sm mb-3">{profile.occupation}</p>
                )}
                <p className="text-sm line-clamp-2">{profile.bio}</p>
              </>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg mb-2">About</h3>
                  <p className="text-sm">{profile.bio}</p>
                </div>
                {profile.occupation && (
                  <div>
                    <h3 className="text-lg mb-2">Occupation</h3>
                    <p className="text-sm">{profile.occupation}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-lg mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
