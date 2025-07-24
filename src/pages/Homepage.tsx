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
  
  const slides = [
    {
      image: "/images/slider1.jpg",
      title: "Digitaler Honig",
      subtitle: "aus der Natur",
      description: "Traditionelle Imkerei trifft moderne Technologie. Entdecken Sie unseren hochwertigen Honig aus Velbert."
    },
    {
      image: "/images/slider2.jpg",
      title: "Natürliche Perfektion",
      subtitle: "in Waben-Form",
      description: "Erleben Sie die faszinierende Welt der Bienenwaben und deren perfekte Geometrie in der Natur."
    },
    {
      image: "/images/slider 3.jpg",
      title: "Unsere Bienenvölker",
      subtitle: "im Velberter Wald",
      description: "Mitten in der Natur stehen unsere Bienenstöcke und produzieren den reinsten Honig der Region."
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
        {/* Image Slider Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 z-20 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 z-20 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {slides[currentSlide].title}
                <span className="block text-honey-400">{slides[currentSlide].subtitle}</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/ueber-uns"
              className="bg-honey-500 hover:bg-honey-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Unsere Geschichte entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/galerie"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Galerie ansehen
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Modern About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Natürlicher Honig
                <span className="block text-honey-600">in digitaler Perfektion</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Wir verbinden jahrhundertealte Imkertradition mit modernster Technologie. 
                Unser digitaler Ansatz ermöglicht es uns, jeden Schritt der Honigproduktion 
                zu überwachen und höchste Qualität zu garantieren.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Von der Blüte bis zum Glas - erleben Sie Transparenz und Qualität 
                in einer neuen Dimension.
              </p>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center text-honey-600 font-semibold text-lg hover:text-honey-700 transition-colors duration-300"
              >
                Mehr erfahren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/manzaera.jpg"
                  alt="Moderne Imkerei"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-honey-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">100%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Warum digitaler Honig?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modernste Sensortechnologie und datengesteuerte Prozesse 
              sorgen für unvergleichliche Qualität und Transparenz.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-honey-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Qualitätskontrolle
              </h3>
              <p className="text-gray-600">
                Jeder Produktionsschritt wird digital überwacht und 
                dokumentiert für gleichbleibend höchste Qualität.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-forest-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nachhaltigkeit
              </h3>
              <p className="text-gray-600">
                Intelligente Überwachung der Bienenvölker und 
                ihrer Umgebung für optimalen Umweltschutz.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-honey-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-honey-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transparenz
              </h3>
              <p className="text-gray-600">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-200">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-honey-500 to-honey-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit für digitalen Honig?
          </h2>
          <p className="text-xl text-honey-100 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns und erfahren Sie mehr über unsere 
            innovativen Honigprodukte und nachhaltigen Methoden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-white text-honey-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Jetzt kontaktieren
            </Link>
            <Link
              to="/galerie"
              className="border-2 border-white text-white hover:bg-white hover:text-honey-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
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
