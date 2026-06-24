import React from 'react';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  title: string;
  description: string;
  imageUrl: string;
  readMoreLink: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, imageUrl, readMoreLink }) => {
  return (
    <div className="group relative h-64 w-full max-w-md overflow-hidden rounded-lg border border-gray-200">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      />

      {/* Overlay and Content */}
      <div
        className={cn(
          'absolute inset-0 flex flex-col justify-between bg-white/80 p-6 backdrop-blur-sm',
          'transition-all duration-500 ease-in-out group-hover:translate-y-4 group-hover:opacity-0'
        )}
      >
        <div>
          <Trophy className="h-8 w-8 text-yellow-500" />
          <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
