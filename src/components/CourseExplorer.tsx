import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Star, Play, BookOpen, Code, Palette, Brain, TrendingUp, Award } from 'lucide-react';

const CourseExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = [
    { name: 'All', icon: BookOpen, count: 150 },
    { name: 'Programming', icon: Code, count: 45 },
    { name: 'AI & ML', icon: Brain, count: 32 },
    { name: 'Design', icon: Palette, count: 28 },
    { name: 'Business', icon: TrendingUp, count: 25 },
    { name: 'Data Science', icon: BookOpen, count: 20 },
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Python Bootcamp for AI & ML',
      category: 'Programming',
      level: 'Beginner',
      duration: '12 weeks',
      students: '45,230',
      rating: 4.9,
      instructor: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      price: 'Free',
      tags: ['Python', 'AI', 'Machine Learning', 'Beginner'],
      description: 'Master Python programming from scratch and dive into AI/ML applications.',
      progress: 0,
      enrolled: false
    },
    {
      id: 2,
      title: 'React & Next.js Full Stack Development',
      category: 'Programming',
      level: 'Intermediate',
      duration: '16 weeks',
      students: '32,145',
      rating: 4.8,
      instructor: 'Prof. Michael Torres',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      price: 'Free',
      tags: ['React', 'Next.js', 'JavaScript', 'Full Stack'],
      description: 'Build modern web applications with React and Next.js framework.',
      progress: 25,
      enrolled: true
    },
    {
      id: 3,
      title: 'UI/UX Design Mastery',
      category: 'Design',
      level: 'Beginner',
      duration: '8 weeks',
      students: '28,765',
      rating: 4.7,
      instructor: 'Prof. Emma Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      price: 'Free',
      tags: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
      description: 'Learn to design beautiful and user-friendly interfaces.',
      progress: 0,
      enrolled: false
    },
    {
      id: 4,
      title: 'Deep Learning & Neural Networks',
      category: 'AI & ML',
      level: 'Advanced',
      duration: '20 weeks',
      students: '18,432',
      rating: 4.9,
      instructor: 'Dr. James Park',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      price: 'Free',
      tags: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'PyTorch'],
      description: 'Master advanced AI concepts and build sophisticated ML models.',
      progress: 0,
      enrolled: false
    },
    {
      id: 5,
      title: 'Blockchain Development Fundamentals',
      category: 'Programming',
      level: 'Intermediate',
      duration: '14 weeks',
      students: '15,678',
      rating: 4.6,
      instructor: 'Prof. Alex Kumar',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      thumbnail: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      price: 'Free',
      tags: ['Blockchain', 'Solidity', 'Web3', 'Smart Contracts'],
      description: 'Learn blockchain technology and smart contract development.',
      progress: 0,
      enrolled: false
    },
    {
      id: 6,
      title: 'Digital Marketing & Growth Hacking',
      category: 'Business',
      level: 'Beginner',
      duration: '10 weeks',
      students: '22,890',
      rating: 4.5,
      instructor: 'Ms. Lisa Chen',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face',
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      price: 'Free',
      tags: ['Marketing', 'SEO', 'Social Media', 'Analytics'],
      description: 'Master digital marketing strategies and growth techniques.',
      progress: 0,
      enrolled: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesLevel && matchesSearch;
  });

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
            Explore <span className="text-accent">AI-Powered</span> Courses
          </h1>
          <p className="text-xl text-gray-400">Learn from world-class AI professors. All courses are 100% free.</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses, skills, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-850 rounded-xl border border-gray-750 focus:border-accent focus:outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-gray-850 border border-gray-750 rounded-lg px-3 py-2 text-white focus:border-accent focus:outline-none"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-accent text-primary'
                    : 'bg-gray-850 text-gray-400 hover:bg-gray-750 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-gradient-to-br from-gray-850 to-secondary rounded-2xl overflow-hidden border border-gray-750 hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              {/* Course Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-primary px-2 py-1 text-xs font-bold rounded">
                    {course.price}
                  </span>
                </div>
                {course.enrolled && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Progress</span>
                        <span className="text-accent">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={course.avatar}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-400">{course.instructor}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                  {course.enrolled ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Continue Learning
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Start Learning
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {filteredCourses.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-gray-850 text-white font-semibold rounded-lg hover:bg-gray-750 transition-colors border border-gray-750 hover:border-accent/50">
              Load More Courses
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Showing {filteredCourses.length} of 150+ courses
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CourseExplorer;