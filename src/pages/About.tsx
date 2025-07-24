import { motion } from 'framer-motion';
import { Sparkles, Cpu, Zap, Shield, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const features = [
    {
      icon: Cpu,
      title: "KI-optimierte Produktion",
      description: "Modernste Algorithmen steuern unsere Bienenstöcke für maximale Effizienz"
    },
    {
      icon: Zap,
      title: "Digitale Qualitätskontrolle",
      description: "Echtzeit-Monitoring garantiert höchste Qualitätsstandards"
    },
    {
      icon: Shield,
      title: "Nachhaltige Innovation",
      description: "Umweltfreundliche Technologie im Einklang mit der Natur"
    },
    {
      icon: Award,
      title: "Preisgekrönte Qualität",
      description: "Mehrfach ausgezeichneter digitaler Honig aus Velbert"
    }
  ];

  const stats = [
    { number: "50+", label: "Digitale Bienenstöcke" },
    { number: "15", label: "Jahre Erfahrung" },
    { number: "1000+", label: "Zufriedene Kunden" },
    { number: "99.9%", label: "Reinheit garantiert" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-honey-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-honey-100 rounded-full text-honey-700 font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Die Zukunft der Imkerei
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Über
              <span className="block text-honey-600">Velberter Honig</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Wir revolutionieren die traditionelle Imkerei durch innovative 
              Technologie und erschaffen den ersten vollständig digitalen 
              Honig Deutschlands.
            </p>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-honey-200 rounded-full opacity-20"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-48 h-48 bg-forest-200 rounded-full opacity-20"
            animate={{ 
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Unsere
                <span className="text-honey-600"> Geschichte</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Seit 2008 verbinden wir traditionelle Imkerkunst mit modernster 
                  Technologie. Was als kleine Familienimkerei in Velbert begann, 
                  ist heute Deutschlands führende digitale Honigmanufaktur.
                </p>
                
                <p>
                  Durch den Einsatz von KI, IoT-Sensoren und nachhaltigen 
                  Produktionsmethoden haben wir eine völlig neue Art der 
                  Honigproduktion entwickelt - den digitalen Honig.
                </p>
                
                <p>
                  Unsere Mission: Die perfekte Symbiose zwischen Natur und 
                  Technologie zu schaffen, um den reinsten und qualitativ 
                  hochwertigsten Honig zu produzieren.
                </p>
              </div>

              <motion.div 
                className="mt-10 flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <div className="px-6 py-3 bg-white rounded-full shadow-lg">
                  <span className="text-honey-600 font-bold">🏆</span>
                  <span className="ml-2 text-gray-700 font-medium">Bio-zertifiziert</span>
                </div>
                <div className="px-6 py-3 bg-white rounded-full shadow-lg">
                  <span className="text-forest-600 font-bold">🌱</span>
                  <span className="ml-2 text-gray-700 font-medium">100% Nachhaltig</span>
                </div>
                <div className="px-6 py-3 bg-white rounded-full shadow-lg">
                  <span className="text-honey-600 font-bold">🔬</span>
                  <span className="ml-2 text-gray-700 font-medium">Laborgeprüft</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/petek.jpg')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-honey-50 to-forest-50 opacity-70"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Innovation Timeline
                  </h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-4 h-4 bg-honey-500 rounded-full mr-4"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2008</div>
                        <div className="text-gray-600">Gründung der Imkerei</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-4 h-4 bg-forest-500 rounded-full mr-4"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2015</div>
                        <div className="text-gray-600">Erste IoT-Sensoren</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-4 h-4 bg-honey-500 rounded-full mr-4"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2020</div>
                        <div className="text-gray-600">KI-Integration</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-4 h-4 bg-forest-500 rounded-full mr-4"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2023</div>
                        <div className="text-gray-600">Digitaler Honig Launch</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digitale <span className="text-honey-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie, wie modernste Technologie unsere Honigproduktion 
              revolutioniert und höchste Qualität garantiert.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-honey-50 rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <motion.div 
                    className="w-16 h-16 bg-honey-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-honey-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="h-8 w-8 text-honey-600" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-honey-500 to-forest-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Zahlen & Fakten
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Unsere digitale Transformation in beeindruckenden Zahlen
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl md:text-6xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unser <span className="text-honey-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experten aus Imkerei, Technologie und Nachhaltigkeit arbeiten 
              gemeinsam an der Zukunft des Honigs.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-3xl shadow-xl p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-honey-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Experten</h3>
                <p className="text-gray-600">Imker, Ingenieure & Biologen</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zertifiziert</h3>
                <p className="text-gray-600">Bio & Nachhaltigkeits-Standards</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-honey-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-honey-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovativ</h3>
                <p className="text-gray-600">Kontinuierliche Forschung & Entwicklung</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
