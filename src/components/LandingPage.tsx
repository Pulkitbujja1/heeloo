import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, Sparkles, Zap, Globe, Users, Award } from 'lucide-react';

const taglines = [
  "UnizX — College? Replaced.",
  "No Classrooms. No Exams. Just Skill.",
  "Built by AI. Powered by Curiosity.",
  "Study Like a Billionaire. Pay Nothing.",
  "A Professor in Your Pocket. A Future in Your Hands.",
  "Not School. Not Online. Something Smarter.",
  "You Don't Need a Degree. You Need UnizX.",
  "Dropouts Welcome. Dreamers Rewarded."
];

const LandingPage: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Brain, title: "AI Professors", desc: "Learn from hyper-realistic AI teachers who adapt to your pace" },
    { icon: Zap, title: "Instant Doubt Solving", desc: "Get answers to any question in seconds, not days" },
    { icon: Globe, title: "Global Access", desc: "World-class education accessible from anywhere" },
    { icon: Users, title: "Community Driven", desc: "Connect with learners and mentors worldwide" },
    { icon: Award, title: "Industry Certificates", desc: "Get recognized credentials that employers value" },
    { icon: Sparkles, title: "Gamified Learning", desc: "Level up your skills with XP, achievements, and rewards" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-gray-850 to-secondary">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300FF87%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-slow"></div>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex justify-between items-center p-6 md:p-8"
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center animate-glow">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
            UnizX
          </span>
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/dashboard')}
          className="px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-dark transition-colors"
        >
          Get Started
        </motion.button>
      </motion.header>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full bg-gradient-to-br from-accent to-accent-dark rounded-3xl animate-float flex items-center justify-center">
              <Brain className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-xl animate-pulse-slow"></div>
          </div>
        </motion.div>

        <motion.h1
          key={currentTagline}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
            {taglines[currentTagline]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
        >
          The world's first AI university simulator. Learn from hyper-realistic AI professors, 
          get instant doubt resolution, and build skills that actually matter.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
            className="px-8 py-4 bg-accent text-primary font-bold text-lg rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-accent/25"
          >
            Start Learning Free
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-accent text-accent font-bold text-lg rounded-full hover:bg-accent/10 transition-all duration-300"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-black text-accent">100K+</div>
            <div className="text-gray-400">Active Learners</div>
          </div>
          <div>
            <div className="text-3xl font-black text-accent">500+</div>
            <div className="text-gray-400">AI Courses</div>
          </div>
          <div>
            <div className="text-3xl font-black text-accent">50+</div>
            <div className="text-gray-400">Countries</div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            Why UnizX is <span className="text-accent">Different</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-gray-850 to-secondary rounded-2xl border border-gray-750 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 py-20 px-6 bg-gradient-to-r from-accent/10 to-transparent"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Ready to Replace College?
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join millions of learners who chose skills over degrees. Start your journey today.
          </motion.p>
          
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
            className="px-12 py-4 bg-accent text-primary font-bold text-xl rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-accent/25"
          >
            Begin Your First AI-Powered Class
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;