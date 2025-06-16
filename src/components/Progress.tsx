import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Calendar, Award, TrendingUp, Clock, Book, CheckCircle, Star, Download, Share2 } from 'lucide-react';

const Progress: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');

  const overallStats = {
    totalXP: 15650,
    currentLevel: 12,
    nextLevelXP: 17500,
    streak: 23,
    certificates: 5,
    coursesCompleted: 8,
    hoursLearned: 127,
    averageScore: 94
  };

  const achievements = [
    { id: 1, title: 'First Steps', description: 'Completed your first course', icon: '🎯', earned: true, date: '2024-01-15' },
    { id: 2, title: 'Streak Master', description: '7-day learning streak', icon: '🔥', earned: true, date: '2024-01-22' },
    { id: 3, title: 'Python Pro', description: 'Mastered Python basics', icon: '🐍', earned: true, date: '2024-02-05' },
    { id: 4, title: 'AI Explorer', description: 'Completed ML fundamentals', icon: '🤖', earned: true, date: '2024-02-18' },
    { id: 5, title: 'Community Helper', description: 'Helped 10 students', icon: '🤝', earned: false, date: null },
    { id: 6, title: 'Speed Learner', description: 'Complete course in 3 days', icon: '⚡', earned: false, date: null },
    { id: 7, title: 'Perfect Score', description: 'Score 100% on assessment', icon: '💯', earned: false, date: null },
    { id: 8, title: 'Marathon', description: '30-day learning streak', icon: '🏃', earned: false, date: null },
  ];

  const coursesProgress = [
    {
      id: 1,
      title: 'Python for AI & ML',
      progress: 95,
      status: 'Near Completion',
      lastAccessed: '2 hours ago',
      certificate: true,
      rating: 4.9
    },
    {
      id: 2,
      title: 'React & Next.js Development',
      progress: 35,
      status: 'In Progress',
      lastAccessed: '1 day ago',
      certificate: false,
      rating: null
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      progress: 100,
      status: 'Completed',
      lastAccessed: '1 week ago',
      certificate: true,
      rating: 4.8
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      progress: 68,
      status: 'In Progress',
      lastAccessed: '3 days ago',
      certificate: false,
      rating: null
    },
  ];

  const weeklyActivity = [
    { day: 'Mon', xp: 450, hours: 2.5 },
    { day: 'Tue', xp: 320, hours: 1.8 },
    { day: 'Wed', xp: 580, hours: 3.2 },
    { day: 'Thu', xp: 290, hours: 1.5 },
    { day: 'Fri', xp: 620, hours: 3.8 },
    { day: 'Sat', xp: 480, hours: 2.9 },
    { day: 'Sun', xp: 350, hours: 2.1 },
  ];

  const certificates = [
    {
      id: 1,
      title: 'Python Programming Fundamentals',
      issueDate: '2024-02-05',
      credentialId: 'UNX-PY-2024-001',
      level: 'Beginner',
      skills: ['Python', 'Variables', 'Functions', 'Data Types']
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      issueDate: '2024-02-20',
      credentialId: 'UNX-DSA-2024-002',
      level: 'Intermediate',
      skills: ['Arrays', 'Trees', 'Graphs', 'Sorting']
    },
    {
      id: 3,
      title: 'Machine Learning Basics',
      issueDate: '2024-03-01',
      credentialId: 'UNX-ML-2024-003',
      level: 'Advanced',
      skills: ['Regression', 'Classification', 'Neural Networks', 'TensorFlow']
    },
  ];

  const maxXP = Math.max(...weeklyActivity.map(day => day.xp));

  return (
    <div className="min-h-screen bg-primary p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-black mb-2">
                Your Learning <span className="text-accent">Journey</span>
              </h1>
              <p className="text-xl text-gray-400">Track your progress and celebrate achievements</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex bg-gray-850 rounded-lg p-1">
                {(['week', 'month', 'year'] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 text-sm rounded-md transition-colors capitalize ${
                      selectedPeriod === period 
                        ? 'bg-accent text-primary font-semibold' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
              
              <button className="px-4 py-2 bg-gray-850 text-gray-400 hover:text-white rounded-lg transition-colors flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-6 rounded-2xl border border-accent/30">
            <div className="flex items-center justify-between mb-4">
              <Trophy className="w-8 h-8 text-accent" />
              <span className="text-3xl font-black text-accent">{overallStats.totalXP.toLocaleString()}</span>
            </div>
            <p className="text-gray-300 font-semibold">Total XP</p>
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Level {overallStats.currentLevel}</span>
                <span className="text-accent">Level {overallStats.currentLevel + 1}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${(overallStats.totalXP / overallStats.nextLevelXP) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-orange-400" />
              <span className="text-3xl font-black text-orange-400">{overallStats.streak}</span>
            </div>
            <p className="text-gray-300 font-semibold">Day Streak</p>
            <p className="text-sm text-gray-400 mt-1">Keep it going! 🔥</p>
          </div>

          <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-yellow-400" />
              <span className="text-3xl font-black text-yellow-400">{overallStats.certificates}</span>
            </div>
            <p className="text-gray-300 font-semibold">Certificates</p>
            <p className="text-sm text-gray-400 mt-1">{overallStats.coursesCompleted} courses completed</p>
          </div>

          <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-black text-blue-400">{overallStats.hoursLearned}h</span>
            </div>
            <p className="text-gray-300 font-semibold">Learning Time</p>
            <p className="text-sm text-gray-400 mt-1">Avg score: {overallStats.averageScore}%</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Activity Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-8 rounded-2xl border border-gray-750">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <TrendingUp className="w-6 h-6 text-accent mr-3" />
                  Weekly Activity
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-2" />
                    XP Earned
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
                    Hours Studied
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {weeklyActivity.map((day, index) => (
                  <div key={day.day} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-semibold text-gray-400">{day.day}</div>
                    <div className="flex-1 flex items-center space-x-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-3 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(day.xp / maxXP) * 100}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                          className="bg-accent h-full rounded-full"
                        />
                      </div>
                      <div className="w-20 text-right">
                        <span className="text-accent font-bold">{day.xp}</span>
                        <span className="text-gray-400 text-xs"> XP</span>
                      </div>
                      <div className="w-16 text-right">
                        <span className="text-blue-400 font-semibold">{day.hours}h</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-8 rounded-2xl border border-gray-750 h-fit">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-3" />
                Achievements
              </h2>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      achievement.earned
                        ? 'bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/30'
                        : 'bg-gray-750/50 border-gray-600'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`text-2xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold ${achievement.earned ? 'text-white' : 'text-gray-400'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${achievement.earned ? 'text-gray-300' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && achievement.date && (
                          <p className="text-xs text-yellow-400 mt-1">
                            Earned on {new Date(achievement.date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      {achievement.earned && (
                        <CheckCircle className="w-5 h-5 text-yellow-400" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Course Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-gray-850 to-secondary p-8 rounded-2xl border border-gray-750">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Book className="w-6 h-6 text-accent mr-3" />
              Course Progress
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coursesProgress.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 bg-gray-750/50 rounded-xl border border-gray-600 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg">{course.title}</h3>
                    {course.certificate && (
                      <Award className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-accent font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          course.progress === 100 ? 'bg-green-400' : 'bg-accent'
                        }`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      course.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      course.status === 'Near Completion' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {course.status}
                    </span>
                    <span className="text-gray-400">{course.lastAccessed}</span>
                  </div>

                  {course.rating && (
                    <div className="flex items-center mt-3 pt-3 border-t border-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                      <span className="text-gray-400 text-sm ml-2">Your rating</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-br from-gray-850 to-secondary p-8 rounded-2xl border border-gray-750">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-3" />
                Your Certificates
              </h2>
              <button className="text-accent hover:text-accent-dark transition-colors">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 p-6 rounded-xl border border-yellow-400/30 cursor-pointer"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-400">Issued on {new Date(cert.issueDate).toLocaleDateString()}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Level:</span>
                      <span className={`font-semibold ${
                        cert.level === 'Beginner' ? 'text-green-400' :
                        cert.level === 'Intermediate' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>{cert.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ID:</span>
                      <span className="text-white font-mono text-xs">{cert.credentialId}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Skills Verified:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center py-2 bg-yellow-400/20 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400/30 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;