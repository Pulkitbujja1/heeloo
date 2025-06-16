import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, ThumbsDown, Reply, Search, Filter, Plus, Star, Clock, User, Tag, TrendingUp, Award, Eye } from 'lucide-react';

const Community: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Most Recent');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'All', count: 1247 },
    { name: 'Python', count: 342 },
    { name: 'JavaScript', count: 298 },
    { name: 'AI/ML', count: 187 },
    { name: 'Career', count: 156 },
    { name: 'Projects', count: 134 },
    { name: 'Internships', count: 89 },
    { name: 'General', count: 41 }
  ];

  const sortOptions = ['Most Recent', 'Most Helpful', 'Most Discussed', 'Trending'];

  const questions = [
    {
      id: 1,
      title: 'How to handle missing values in pandas DataFrame?',
      content: 'I\'m working on a data analysis project and have a DataFrame with missing values. What are the best practices for handling NaN values in pandas?',
      author: 'Alex Kumar',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      timestamp: '2 hours ago',
      category: 'Python',
      tags: ['pandas', 'data-analysis', 'missing-values'],
      upvotes: 23,
      downvotes: 2,
      replies: 8,
      views: 156,
      hasAcceptedAnswer: true,
      isAnswered: true
    },
    {
      id: 2,
      title: 'Best resources for learning React hooks?',
      content: 'I\'m transitioning from class components to functional components with hooks. Can anyone recommend good tutorials or courses for mastering React hooks?',
      author: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      timestamp: '4 hours ago',
      category: 'JavaScript',
      tags: ['react', 'hooks', 'learning-resources'],
      upvotes: 18,
      downvotes: 0,
      replies: 12,
      views: 89,
      hasAcceptedAnswer: false,
      isAnswered: true
    },
    {
      id: 3,
      title: 'How to prepare for machine learning interviews?',
      content: 'I have interviews coming up for ML engineer positions. What topics should I focus on and what kind of coding questions should I expect?',
      author: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      timestamp: '6 hours ago',
      category: 'Career',
      tags: ['machine-learning', 'interviews', 'career-advice'],
      upvotes: 45,
      downvotes: 1,
      replies: 15,
      views: 234,
      hasAcceptedAnswer: false,
      isAnswered: true
    },
    {
      id: 4,
      title: 'Building a portfolio website - tech stack recommendations?',
      content: 'I want to build a portfolio website to showcase my projects. Should I use React, Vue, or plain HTML/CSS? Looking for something that\'s both impressive and easy to maintain.',
      author: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      timestamp: '8 hours ago',
      category: 'Projects',
      tags: ['portfolio', 'web-development', 'tech-stack'],
      upvotes: 12,
      downvotes: 0,
      replies: 6,
      views: 67,
      hasAcceptedAnswer: false,
      isAnswered: true
    },
    {
      id: 5,
      title: 'Understanding Big O notation with practical examples',
      content: 'I\'m struggling to understand time complexity analysis. Can someone explain Big O notation with real-world examples that make sense?',
      author: 'David Park',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      timestamp: '12 hours ago',
      category: 'General',
      tags: ['algorithms', 'big-o', 'computer-science'],
      upvotes: 31,
      downvotes: 3,
      replies: 9,
      views: 178,
      hasAcceptedAnswer: true,
      isAnswered: true
    },
    {
      id: 6,
      title: 'Remote internship opportunities for beginners?',
      content: 'I\'m a beginner in web development and looking for remote internship opportunities. Any suggestions for companies that hire entry-level interns?',
      author: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      timestamp: '1 day ago',
      category: 'Internships',
      tags: ['internships', 'remote-work', 'beginners'],
      upvotes: 27,
      downvotes: 2,
      replies: 11,
      views: 145,
      hasAcceptedAnswer: false,
      isAnswered: true
    }
  ];

  const topContributors = [
    { name: 'Dr. Sarah Chen', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face', points: 2847, badge: 'AI Expert' },
    { name: 'Prof. Michael Torres', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face', points: 2156, badge: 'Web Dev Guru' },
    { name: 'Alex Kumar', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face', points: 1923, badge: 'Python Pro' },
    { name: 'Priya Sharma', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face', points: 1687, badge: 'Data Scientist' }
  ];

  const trendingTopics = [
    { name: 'ChatGPT Integration', posts: 45, growth: '+23%' },
    { name: 'React 18 Features', posts: 32, growth: '+18%' },
    { name: 'Python Automation', posts: 28, growth: '+15%' },
    { name: 'Remote Work Tips', posts: 24, growth: '+12%' }
  ];

  const filteredQuestions = questions.filter(question => {
    const matchesCategory = selectedCategory === 'All' || question.category === selectedCategory;
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-black mb-2">
                Community <span className="text-accent">Forum</span>
              </h1>
              <p className="text-xl text-gray-400">Connect, learn, and grow together</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-0 px-6 py-3 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Ask Question</span>
            </motion.button>
          </div>
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
              placeholder="Search questions, topics, or users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-850 rounded-xl border border-gray-750 focus:border-accent focus:outline-none text-white placeholder-gray-400"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">Sort by:</span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-gray-850 border border-gray-750 rounded-lg px-3 py-2 text-white focus:border-accent focus:outline-none"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-accent text-primary'
                        : 'bg-gray-850 text-gray-400 hover:bg-gray-750 hover:text-white'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Questions List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {filteredQuestions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    {/* Vote Section */}
                    <div className="flex flex-col items-center space-y-2 min-w-[60px]">
                      <button className="p-2 text-gray-400 hover:text-accent transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                      </button>
                      <span className="text-lg font-bold text-accent">{question.upvotes - question.downvotes}</span>
                      <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                        <ThumbsDown className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white hover:text-accent transition-colors">
                          {question.title}
                        </h3>
                        {question.hasAcceptedAnswer && (
                          <div className="flex items-center space-x-1 text-green-400 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Solved</span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-2">{question.content}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {question.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Question Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <img
                              src={question.avatar}
                              alt={question.author}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-sm text-gray-400">{question.author}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{question.timestamp}</span>
                          </div>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            question.category === 'Python' ? 'bg-blue-500/20 text-blue-400' :
                            question.category === 'JavaScript' ? 'bg-yellow-500/20 text-yellow-400' :
                            question.category === 'AI/ML' ? 'bg-purple-500/20 text-purple-400' :
                            question.category === 'Career' ? 'bg-green-500/20 text-green-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {question.category}
                          </span>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Reply className="w-4 h-4" />
                            <span>{question.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{question.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <button className="px-8 py-3 bg-gray-850 text-white font-semibold rounded-lg hover:bg-gray-750 transition-colors border border-gray-750 hover:border-accent/50">
                Load More Questions
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Top Contributors */}
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                Top Contributors
              </h3>
              
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-yellow-400 text-primary' :
                        index === 1 ? 'bg-gray-400 text-primary' :
                        index === 2 ? 'bg-orange-400 text-primary' :
                        'bg-accent text-primary'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{contributor.name}</p>
                      <p className="text-xs text-gray-400">{contributor.badge}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-accent font-bold text-sm">{contributor.points.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-accent mr-2" />
                Trending Topics
              </h3>
              
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-750/50 rounded-lg hover:bg-gray-750 transition-colors cursor-pointer">
                    <div>
                      <p className="font-semibold text-sm">{topic.name}</p>
                      <p className="text-xs text-gray-400">{topic.posts} posts</p>
                    </div>
                    <span className="text-green-400 text-xs font-semibold">{topic.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750">
              <h3 className="text-xl font-bold mb-4">Community Stats</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Questions</span>
                  <span className="font-bold text-accent">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Members</span>
                  <span className="font-bold text-accent">8,432</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Answers Today</span>
                  <span className="font-bold text-accent">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Rate</span>
                  <span className="font-bold text-green-400">94%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community;