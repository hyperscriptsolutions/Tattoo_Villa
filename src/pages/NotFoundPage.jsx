import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Eye, Calendar, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-charcoal-950 text-center">
      <SEOHead
        title="404 - Page Not Found | Tattoo Villa Delhi"
        description="The page you are looking for does not exist. Explore Tattoo Villa Delhi's tattoo portfolio or book a consultation."
        canonicalUrl="/404"
      />

      <div className="max-w-md mx-auto space-y-6">
        <span className="text-gold-gradient font-serif text-8xl font-black block tracking-tighter">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
          Artwork Not Found
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          The page or design concept you are searching for has been moved or does not exist. Navigate back to explore our master tattoo studio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto py-3 px-6 rounded-xl bg-gold-metallic text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/gallery"
            className="w-full sm:w-auto py-3 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider border border-zinc-800 flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4 text-gold-400" />
            <span>View Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
