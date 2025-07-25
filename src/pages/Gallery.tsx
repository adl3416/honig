import { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: 'bienen' | 'honig' | 'natur' | 'digital' | 'video';
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('alle');

  // High-quality images for modern honey company
  const images: GalleryImage[] = [
    {
      id: 1,
      src: '/images/slider vidoe.mp4',
      alt: 'Digitale Bienenstocküberwachung - Video',
      title: 'Smart Beehive Monitoring',
      category: 'video'
    },
    {
      id: 2,
      src: '/images/velberter honig.jpg',
      alt: 'Velberter Honig Premium Logo',
      title: 'Velberter Honig Markenzeichen',
      category: 'honig'
    },
    {
      id: 3,
      src: '/images/slider.png',
      alt: 'Premium Slider Design',
      title: 'Moderne Honig Präsentation',
      category: 'honig'
    },
    {
      id: 4,
      src: '/images/petek.jpg',
      alt: 'Premium Honigwaben',
      title: 'Goldene Honigwaben',
      category: 'honig'
    },
    {
      id: 5,
      src: '/images/manzaera.jpg',
      alt: 'Velberter Naturlandschaft',
      title: 'Unberührte Natur um Velbert',
      category: 'natur'
    },
    {
      id: 6,
      src: '/images/slider2.jpg',
      alt: 'Moderne Imkerei Technologie',
      title: 'Digitaler Imker bei der Arbeit',
      category: 'digital'
    },
    {
      id: 7,
      src: '/images/insan ve petek.jpg',
      alt: 'Artisan Honig Abfüllung',
      title: 'Handwerkliche Honig-Abfüllung',
      category: 'honig'
    },
    {
      id: 8,
      src: '/images/petekler orman.png',
      alt: 'Blütenmeer für Bienen',
      title: 'Wildblumenwiese in voller Blüte',
      category: 'natur'
    },
    {
      id: 9,
      src: '/images/slider 3.jpg',
      alt: 'Biene mit Sensortechnologie',
      title: 'IoT-Sensoren im Bienenstock',
      category: 'digital'
    },
    {
      id: 10,
      src: '/images/slider.jpg',
      alt: 'Premium Honig Kollektion',
      title: 'Exklusive Honig-Sammlung',
      category: 'honig'
    },
    {
      id: 11,
      src: '/images/manzaera.jpg',
      alt: 'Mystischer Morgenwald',
      title: 'Morgendämmerung im Bienenwald',
      category: 'natur'
    },
    {
      id: 12,
      src: '/images/slider1.jpg',
      alt: 'Digital Dashboard für Imkerei',
      title: 'Smart Beekeeping Dashboard',
      category: 'digital'
    },
    {
      id: 13,
      src: '/images/petekler orman.png',
      alt: 'Nebel über Bienenwiesen',
      title: 'Mystische Landschaft bei Sonnenaufgang',
      category: 'natur'
    }
  ];

  const filters = [
    { key: 'alle', label: 'Alle Bilder', icon: '🍯' },
    { key: 'video', label: 'Videos', icon: '🎥' },
    { key: 'digital', label: 'Digital & Tech', icon: '💻' },
    { key: 'bienen', label: 'Bienen & Imkerei', icon: '🐝' },
    { key: 'honig', label: 'Honigprodukte', icon: '🍯' },
    { key: 'natur', label: 'Natur & Landschaft', icon: '🌿' }
  ];

  const filteredImages = activeFilter === 'alle' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Digitale
            <span className="block text-honey-600">Honig-Galerie</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tauchen Sie ein in die Welt der modernen Imkerei - wo Tradition 
            auf Innovation trifft und digitale Technologie natürliche Perfektion schafft.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center text-gray-500 mr-4">
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium">Filter:</span>
          </div>
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-honey-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-honey-50 hover:text-honey-600 shadow-md hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter} // Re-trigger animation when filter changes
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                variants={itemVariants}
                layout
                onClick={() => openImage(image)}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square overflow-hidden">
                  {image.src.endsWith('.mp4') ? (
                    <video
                      src={image.src}
                      poster="/images/video-poster.jpg"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                      controls
                      muted
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                      loading="lazy"
                    />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute top-0 left-0 right-0 p-6 text-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <div className="flex items-center text-sm text-gray-200">
                    <span className="capitalize">{image.category}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-honey-500 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {filters.find(f => f.key === image.category)?.icon} {image.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl text-gray-500 mb-4">
              Keine Bilder in dieser Kategorie gefunden.
            </p>
            <button
              onClick={() => setActiveFilter('alle')}
              className="bg-honey-500 text-white px-6 py-3 rounded-full hover:bg-honey-600 transition-colors duration-300"
            >
              Alle Bilder anzeigen
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div 
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white hover:text-honey-400 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-300"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Media */}
              {selectedImage.src.endsWith('.mp4') ? (
                <video
                  src={selectedImage.src}
                  poster="/images/video-poster.jpg"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  controls
                  autoPlay
                  muted
                />
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
              
              {/* Image Info */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black via-black/70 to-transparent rounded-t-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 capitalize">
                  Kategorie: {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
