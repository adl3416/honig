import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
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
    <div className="py-20 bg-gradient-to-br from-gray-50 to-honey-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Digitaler
            <span className="block text-honey-600">Kontakt</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Haben Sie Fragen zu unserem digitalen Honig oder möchten Sie Teil 
            der Zukunft der Imkerei werden? Wir freuen uns auf Ihre Nachricht!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Sprechen Sie mit uns
              </h2>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-honey-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-honey-200 transition-colors duration-300">
                    <MapPin className="h-8 w-8 text-honey-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Besuchen Sie uns</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Digitale Imkerei Zentrale<br />
                      Musterstraße 123<br />
                      42551 Velbert<br />
                      Deutschland
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-forest-200 transition-colors duration-300">
                    <Phone className="h-8 w-8 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rufen Sie uns an</h3>
                    <p className="text-gray-600 text-lg font-medium">+49 (0) 2051 123456</p>
                    <p className="text-gray-500 text-sm">24/7 Digital Support</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-honey-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-honey-200 transition-colors duration-300">
                    <Mail className="h-8 w-8 text-honey-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Schreiben Sie uns</h3>
                    <p className="text-gray-600 text-lg font-medium">info@velberterhonig.de</p>
                    <p className="text-gray-500 text-sm">Antwort binnen 24 Stunden</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-forest-200 transition-colors duration-300">
                    <Clock className="h-8 w-8 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Montag - Freitag:</span>
                        <span className="font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samstag:</span>
                        <span className="font-medium">9:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sonntag:</span>
                        <span className="font-medium text-gray-400">Geschlossen</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-honey-50 to-forest-50 rounded-2xl relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/petekler orman.png')" }}
                ></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    🚀 Digitale Innovation
                  </h3>
                  <p className="text-gray-600">
                    Erleben Sie die Zukunft der Imkerei! Vereinbaren Sie einen 
                    Termin für eine exklusive Tour durch unsere digitale 
                    Honigproduktion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nachricht senden
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-honey-500 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder="Ihr vollständiger Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    E-Mail Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-honey-500 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder="ihre.email@beispiel.de"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-honey-500 focus:border-transparent transition-all duration-300 text-lg resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Interesse an digitalem Honig..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-honey-500 to-honey-600 hover:from-honey-600 hover:to-honey-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Wird gesendet...
                    </div>
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="ml-3 h-6 w-6" />
                    </>
                  )}
                </motion.button>

                {submitMessage && (
                  <motion.div 
                    className="p-6 bg-green-50 border-2 border-green-200 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-green-800 font-medium text-center">{submitMessage}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
