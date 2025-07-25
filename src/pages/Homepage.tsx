import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Leaf, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Homepage: React.FC = () => {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const slides = [
    {
      type: "video",
      source: "/images/slider vidoe.mp4",
      poster: "/images/slider1.jpg",
      title: "Natürlicher Honig",
      subtitle: "aus der Natur",
      description: "Traditionelle Imkerei trifft moderne Technologie. Entdecken Sie unseren hochwertigen Honig aus Velbert."
    },
    {
      type: "image",
      source: "/images/velberter honig.jpg",
      title: "Velberter Honig",
      subtitle: "seit Generationen",
      description: "Erleben Sie die Perfektion unserer handwerklichen Honigproduktion in modernster Qualität."
    },
    {
      type: "image", 
      source: "/images/slider2.jpg",
      title: "Natürliche Perfektion",
      subtitle: "in Waben-Form",
      description: "Erleben Sie die faszinierende Welt der Bienenwaben und deren perfekte Geometrie in der Natur."
    },
    {
      type: "image",
      source: "/images/slider 3.jpg",
      title: "Unsere Bienenvölker",
      subtitle: "im Velberter Wald",
      description: "Mitten in der Natur stehen unsere Bienenstöcke und produzieren den reinsten Honig der Region."
    }
  ];

  // Auto-advance slider with different timing for video vs images
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    const duration = currentSlideData.type === "video" ? 6000 : 4000; // 6s for video, 4s for images
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);
    
    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleVideo = () => {
    if (videoRef.current && slides[currentSlide].type === "video") {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image/Video Slider Background */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut"
              }}
            >
              {slides[currentSlide].type === "video" ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster={slides[currentSlide].poster}
                >
                  <source src={slides[currentSlide].source} type="video/mp4" />
                  {/* Fallback image if video fails */}
                  <img
                    src={slides[currentSlide].poster || slides[currentSlide].source}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                </video>
              ) : (
                <div className="relative w-full h-full bg-gray-800">
                  <img
                    src={slides[currentSlide].source}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 'center',
                      objectFit: 'cover',
                      filter: 'brightness(0.85) contrast(1.1) saturate(1.1)'
                    }}
                  />
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        {/* Video Control Button - only show when current slide is video */}
        {slides[currentSlide].type === "video" && (
          <button
            onClick={toggleVideo}
            className="absolute bottom-32 sm:bottom-40 right-2 sm:right-4 lg:right-8 z-20 p-2 sm:p-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            {isPlaying ? (
              <div className="w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center">
                <div className="w-1 sm:w-2 h-3 sm:h-4 bg-white mr-1"></div>
                <div className="w-1 sm:w-2 h-3 sm:h-4 bg-white"></div>
              </div>
            ) : (
              <Play className="h-4 w-4 sm:h-6 sm:w-6" />
            )}
          </button>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-20 sm:bottom-24 lg:bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-honey-500 scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] flex flex-col justify-center px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span>{slides[currentSlide].title}</span>
                <span className="block text-honey-400 mt-1 sm:mt-2">{slides[currentSlide].subtitle}</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/ueber-uns"
              className="bg-honey-500 hover:bg-honey-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <span className="hidden sm:inline">Unsere Geschichte entdecken</span>
              <span className="sm:hidden">Unsere Geschichte</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              to="/galerie"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Galerie ansehen</span>
              <span className="sm:hidden">Galerie</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Modern About Section */}
      <section ref={aboutRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
                Natürlicher Honig
                <span className="block text-honey-600">in digitaler Perfektion</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Wir verbinden jahrhundertealte Imkertradition mit modernster Technologie. 
                Unser digitaler Ansatz ermöglicht es uns, jeden Schritt der Honigproduktion 
                zu überwachen und höchste Qualität zu garantieren.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8">
                Von der Blüte bis zum Glas - erleben Sie Transparenz und Qualität 
                in einer neuen Dimension.
              </p>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center text-honey-600 font-semibold text-base sm:text-lg hover:text-honey-700 transition-colors duration-300"
              >
                Mehr erfahren
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>

            <motion.div 
              className="relative mt-8 lg:mt-0"
              variants={itemVariants}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/manzaera.jpg"
                  alt="Moderne Imkerei"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-honey-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-lg sm:text-2xl">100%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            variants={itemVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Warum digitaler Honig?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Modernste Sensortechnologie und datengesteuerte Prozesse 
              sorgen für unvergleichliche Qualität und Transparenz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-honey-100 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-honey-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                Qualitätskontrolle
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Jeder Produktionsschritt wird digital überwacht und 
                dokumentiert für gleichbleibend höchste Qualität.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-forest-100 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-forest-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                Nachhaltigkeit
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Intelligente Überwachung der Bienenvölker und 
                ihrer Umgebung für optimalen Umweltschutz.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-honey-100 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-honey-600" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                Transparenz
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Vollständige Rückverfolgbarkeit von der Blüte bis 
                zu Ihrem Glas durch digitale Technologie.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section ref={productsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unsere Honig-Vielfalt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jede Sorte ein digitales Meisterwerk der Natur
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
          >
            {[
              {
                name: "Wald-Honig",
                image: "/images/petek.jpg",
                description: "Kräftig und aromatisch aus den Wäldern um Velbert"
              },
              {
                name: "Blüten-Honig",
                image: "/images/insan ve petek.jpg",
                description: "Mild und süß von heimischen Wildblumen"
              },
              {
                name: "Bio-Honig",
                image: "/images/petekler orman.png",
                description: "100% biologisch zertifiziert und digital überwacht"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 right-0 p-6 text-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-200">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-honey-500 to-honey-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Bereit für digitalen Honig?
          </h2>
          <p className="text-lg sm:text-xl text-honey-100 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns und erfahren Sie mehr über unsere 
            innovativen Honigprodukte und nachhaltigen Methoden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-white text-honey-600 hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Jetzt kontaktieren
            </Link>
            <Link
              to="/galerie"
              className="border-2 border-white text-white hover:bg-white hover:text-honey-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Galerie entdecken
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;
