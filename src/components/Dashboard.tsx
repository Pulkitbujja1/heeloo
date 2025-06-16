import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Award, Clock, Brain, Zap, BookOpen, Users, Play, Star, MessageCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const motivationalQuotes = [
    "Today's knowledge is tomorrow's power.",
    "Every expert was once a beginner.",
    "The best time to learn was yesterday. The second best time is now.",
    "Skills are the new currency of success."
  ];

  const todayQuote = motivationalQuotes[new Date().getDate() % motivationalQuotes.length];

  const stats = [
    { icon: Target, label: 'Daily XP Goal', value: '450 / 500', progress: 90, color: 'text-accent' },
    { icon: TrendingUp, label: 'Current Streak', value: '7 Days', progress: 70, color: 'text-blue-400' },
    { icon: Award, label: 'Certificates', value: '3 Earned', progress: 100, color: 'text-yellow-400' },
    { icon: Clock, label: 'Hours This Week', value: '12.5h', progress: 65, color: 'text-purple-400' },
  ];

  const aiProfessors = [
    { name: 'Dr. Sarah Chen', subject: 'Machine Learning', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face', rating: 4.9, students: '25K+' },
    { name: 'Prof. Michael Torres', subject: 'Web Development', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face', rating: 4.8, students: '30K+' },
    { name: 'Dr. Priya Sharma', subject: 'Data Science', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face', rating: 4.9, students: '22K+' },
  ];

  const trendingCourses = [
    { title: 'Python for AI & ML', level: 'Beginner', duration: '8 weeks', students: '45K+', rating: 4.8, progress: 25 },
    { title: 'React & Next.js Mastery', level: 'Intermediate', duration: '12 weeks', students: '32K+', rating: 4.9, progress: 0 },
    { title: 'UI/UX Design Principles', level: 'Beginner', duration: '6 weeks', students: '28K+', rating: 4.7, progress: 0 },
    { title: 'Blockchain Development', level: 'Advanced', duration: '16 weeks', students: '18K+', rating: 4.6, progress: 0 },
  ];

  return (
    <div className="min-h-screen bg-primary p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Hi Alex, Ready to Build Your Future? 🚀
          </h1>
          <p className="text-xl text-gray-400 italic">"{todayQuote}"</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <p className="text-gray-400 mb-3">{stat.label}</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  className="bg-accent h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Professors Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-8 rounded-2xl border border-gray-750">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Brain className="w-6 h-6 text-accent mr-3" />
                  Your AI Professors
                </h2>
                <Link to="/courses" className="text-accent hover:text-accent-dark transition-colors">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {aiProfessors.map((professor, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-gray-750/50 rounded-xl hover:bg-gray-750 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={professor.avatar}
                        alt={professor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h3 className="font-bold text-lg">{professor.name}</h3>
                      <p className="text-accent text-sm">{professor.subject}</p>
                      <div className="flex items-center mt-1 space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm">{professor.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-400">{professor.students}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                      Chat Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Ask Doubt Button */}
            <Link to="/ai-tutor">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent to-accent-dark p-6 rounded-2xl text-center cursor-pointer animate-glow"
              >
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-primary font-bold text-lg mb-2">Ask a Doubt Now</h3>
                <p className="text-primary/80 text-sm">Get instant AI-powered answers</p>
              </motion.div>
            </Link>

            {/* Career Roadmap */}
            <Link to="/career">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                <Target className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-bold text-lg mb-2">Resume Career Roadmap</h3>
                <p className="text-gray-400 text-sm">Continue your AI Engineer path</p>
                <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full w-2/3" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Week 3 of 12</p>
              </motion.div>
            </Link>

            {/* Daily Challenge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750 hover:border-yellow-400/50 transition-all duration-300"
            >
              <Award className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="font-bold text-lg mb-2">Today's Challenge</h3>
              <p className="text-gray-400 text-sm mb-3">Complete 3 Python exercises</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">2/3 completed</span>
                <span className="text-accent font-bold">+50 XP</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trending Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <TrendingUp className="w-6 h-6 text-accent mr-3" />
              Trending This Week
            </h2>
            <Link to="/courses" className="text-accent hover:text-accent-dark transition-colors">
              Explore All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCourses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {course.students} students
                  </div>
                </div>

                {course.progress > 0 ? (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-accent">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ) : null}

                <button className="w-full flex items-center justify-center py-3 bg-accent/10 text-accent font-semibold rounded-lg hover:bg-accent/20 transition-colors">
                  {course.progress > 0 ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Start Free
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;