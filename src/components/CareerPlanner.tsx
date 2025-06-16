import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, CheckCircle, Clock, Star, Brain, Code, Palette, TrendingUp, Download, Play, Book, Award } from 'lucide-react';

const CareerPlanner: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<string>('data-scientist');

  const careerPaths = [
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      icon: Brain,
      description: 'Analyze complex data to drive business decisions',
      averageSalary: '$120,000',
      demand: 'Very High',
      timeToMaster: '12-18 months',
      skills: ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      icon: Brain,
      description: 'Build and deploy AI/ML systems and applications',
      averageSalary: '$140,000',
      demand: 'Extremely High',
      timeToMaster: '15-24 months',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'MLOps'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'fullstack-developer',
      title: 'Full Stack Developer',
      icon: Code,
      description: 'Build complete web applications from frontend to backend',
      averageSalary: '$95,000',
      demand: 'High',
      timeToMaster: '10-15 months',
      skills: ['JavaScript', 'React', 'Node.js', 'Databases', 'DevOps'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      icon: Palette,
      description: 'Design beautiful and user-friendly digital experiences',
      averageSalary: '$85,000',
      demand: 'High',
      timeToMaster: '8-12 months',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'HTML/CSS'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'blockchain-developer',
      title: 'Blockchain Developer',
      icon: Code,
      description: 'Build decentralized applications and smart contracts',
      averageSalary: '$130,000',
      demand: 'Very High',
      timeToMaster: '12-18 months',
      skills: ['Solidity', 'Web3', 'Smart Contracts', 'DeFi', 'Cryptocurrency'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      icon: TrendingUp,
      description: 'Lead product strategy and cross-functional teams',
      averageSalary: '$110,000',
      demand: 'High',
      timeToMaster: '10-15 months',
      skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile', 'Leadership'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const currentCareer = careerPaths.find(career => career.id === selectedCareer)!;

  const weeklyPlan = [
    {
      week: 1,
      title: 'Python Fundamentals',
      type: 'Skill',
      progress: 100,
      status: 'completed',
      tasks: ['Variables & Data Types', 'Control Structures', 'Functions', 'Object-Oriented Programming'],
      hours: 15
    },
    {
      week: 2,
      title: 'Data Analysis with Pandas',
      type: 'Skill',
      progress: 100,
      status: 'completed',
      tasks: ['DataFrames', 'Data Cleaning', 'Aggregations', 'Merging Data'],
      hours: 18
    },
    {
      week: 3,
      title: 'Sales Prediction Model',
      type: 'Project',
      progress: 75,
      status: 'in-progress',
      tasks: ['Data Collection', 'EDA', 'Model Building', 'Evaluation'],
      hours: 20
    },
    {
      week: 4,
      title: 'Statistics Assessment',
      type: 'Test',
      progress: 0,
      status: 'upcoming',
      tasks: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Regression'],
      hours: 8
    },
    {
      week: 5,
      title: 'Machine Learning Basics',
      type: 'Skill',
      progress: 0,
      status: 'upcoming',
      tasks: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'],
      hours: 25
    },
    {
      week: 6,
      title: 'Customer Segmentation',
      type: 'Project',
      progress: 0,
      status: 'upcoming',
      tasks: ['Data Preprocessing', 'Clustering Analysis', 'Visualization', 'Business Insights'],
      hours: 22
    }
  ];

  const milestones = [
    { title: 'Complete Python Mastery', date: 'Feb 2024', completed: true },
    { title: 'First ML Project', date: 'Mar 2024', completed: true },
    { title: 'Statistics Certification', date: 'Apr 2024', completed: false },
    { title: 'Advanced ML Techniques', date: 'Jun 2024', completed: false },
    { title: 'Portfolio Website', date: 'Aug 2024', completed: false },
    { title: 'Job Applications', date: 'Sep 2024', completed: false }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'upcoming': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 border-green-500/30';
      case 'in-progress': return 'bg-yellow-500/20 border-yellow-500/30';
      case 'upcoming': return 'bg-gray-500/20 border-gray-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-primary p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Career <span className="text-accent">Roadmap</span>
          </h1>
          <p className="text-xl text-gray-400">Plan your path to success with AI-powered guidance</p>
        </motion.div>

        {/* Career Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Choose Your Career Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerPaths.map((career) => (
              <motion.div
                key={career.id}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCareer(career.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  selectedCareer === career.id
                    ? `bg-gradient-to-br ${career.color} bg-opacity-20 border-accent`
                    : 'bg-gray-850 border-gray-750 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${career.color}`}>
                    <career.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{career.title}</h3>
                    <p className="text-sm text-gray-400">{career.averageSalary}/year</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{career.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-1 rounded-full ${
                    career.demand === 'Extremely High' ? 'bg-red-500/20 text-red-400' :
                    career.demand === 'Very High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {career.demand} Demand
                  </span>
                  <span className="text-gray-400">{career.timeToMaster}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Career Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className={`bg-gradient-to-br ${currentCareer.color} bg-opacity-10 p-8 rounded-2xl border border-accent/30`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center space-x-4 mb-6 lg:mb-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${currentCareer.color}`}>
                  <currentCareer.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-2">{currentCareer.title} Path</h2>
                  <p className="text-gray-300">{currentCareer.description}</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4 lg:items-end">
                <button className="px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-accent-dark transition-colors flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Plan as PDF</span>
                </button>
                <button className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>Assign AI Mentor</span>
                </button>
              </div>
            </div>

            {/* Skills Required */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3">Skills You'll Master</h3>
              <div className="flex flex-wrap gap-2">
                {currentCareer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/20 text-accent font-semibold rounded-full text-sm border border-accent/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-8 rounded-2xl border border-gray-750">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Calendar className="w-6 h-6 text-accent mr-3" />
                  Weekly Roadmap
                </h2>
                <div className="text-sm text-gray-400">
                  Week 3 of 24 • 12.5% Complete
                </div>
              </div>

              <div className="space-y-6">
                {weeklyPlan.map((week, index) => (
                  <motion.div
                    key={week.week}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`p-6 rounded-xl border-2 ${getStatusBg(week.status)} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                          <span className="text-accent font-bold">W{week.week}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{week.title}</h3>
                          <div className="flex items-center space-x-3 mt-1">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              week.type === 'Skill' ? 'bg-blue-500/20 text-blue-400' :
                              week.type === 'Project' ? 'bg-green-500/20 text-green-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {week.type}
                            </span>
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="w-4 h-4 mr-1" />
                              {week.hours}h
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        {week.status === 'completed' && <CheckCircle className="w-6 h-6 text-green-400" />}
                        {week.status === 'in-progress' && (
                          <button className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-dark transition-colors flex items-center space-x-2">
                            <Play className="w-4 h-4" />
                            <span>Continue</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {week.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Progress</span>
                          <span className={getStatusColor(week.status)}>{week.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              week.status === 'completed' ? 'bg-green-400' : 'bg-accent'
                            }`}
                            style={{ width: `${week.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-300 mb-2">Key Topics:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {week.tasks.map((task, taskIndex) => (
                          <div
                            key={taskIndex}
                            className={`flex items-center space-x-2 text-sm ${
                              week.status === 'completed' ? 'text-green-400' : 'text-gray-300'
                            }`}
                          >
                            {week.status === 'completed' ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <div className="w-4 h-4 border-2 border-gray-500 rounded-full" />
                            )}
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Milestones & Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Progress Overview */}
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Target className="w-5 h-5 text-accent mr-2" />
                Progress Overview
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Overall Progress</span>
                  <span className="text-accent font-bold">12.5%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3">
                  <div className="bg-accent h-3 rounded-full w-[12.5%]" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">2</div>
                    <div className="text-xs text-gray-400">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">1</div>
                    <div className="text-xs text-gray-400">In Progress</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400">3</div>
                    <div className="text-xs text-gray-400">Upcoming</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">108h</div>
                    <div className="text-xs text-gray-400">Total Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Key Milestones
              </h3>
              
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      milestone.completed ? 'bg-green-500/10' : 'bg-gray-700/50'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${
                      milestone.completed ? 'bg-green-400' : 'bg-gray-500'
                    }`} />
                    <div className="flex-1">
                      <p className={`font-semibold ${
                        milestone.completed ? 'text-green-400' : 'text-gray-300'
                      }`}>
                        {milestone.title}
                      </p>
                      <p className="text-xs text-gray-400">{milestone.date}</p>
                    </div>
                    {milestone.completed && (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CareerPlanner;