import React from 'react';
import { BookOpen } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center animate-bounce-subtle">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <div className="absolute inset-0 w-12 h-12 border-2 border-primary-200 rounded-lg animate-spin" />
      </div>
      <p className="mt-4 text-slate-600 font-medium">Kitaplar yükleniyor...</p>
    </div>
  );
};

export default LoadingSpinner;