import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, MessageCircle, Download, BookOpen, ChevronRight, Star, Clock, Users } from 'lucide-react';

const Classroom: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(3600); // 1 hour
  const [selectedTab, setSelectedTab] = useState<'notes' | 'transcript' | 'resources'>('notes');

  const courseInfo = {
    title: 'Python for AI & Machine Learning',
    instructor: 'Dr. Sarah Chen',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&crop=face',
    rating: 4.9,
    students: '45,230',
    progress: 25,
    currentLesson: 'Variables and Data Types',
    lessonNumber: 3,
    totalLessons: 24
  };

  const lessons = [
    { id: 1, title: 'Introduction to Python', duration: '15:30', completed: true },
    { id: 2, title: 'Setting up Development Environment', duration: '12:45', completed: true },
    { id: 3, title: 'Variables and Data Types', duration: '18:20', completed: false, current: true },
    { id: 4, title: 'Control Structures', duration: '22:15', completed: false },
    { id: 5, title: 'Functions and Modules', duration: '25:40', completed: false },
    { id: 6, title: 'Object-Oriented Programming', duration: '28:30', completed: false },
  ];

  const notes = [
    {
      timestamp: '02:15',
      content: 'Python variables are dynamically typed - you don\'t need to declare the type explicitly.',
      highlight: true
    },
    {
      timestamp: '05:30',
      content: 'Common data types: int, float, string, boolean, list, dictionary, tuple',
      highlight: false
    },
    {
      timestamp: '08:45',
      content: 'Use type() function to check the data type of any variable',
      highlight: true
    },
    {
      timestamp: '12:20',
      content: 'String formatting: f-strings are the modern way to format strings in Python',
      highlight: false
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Course Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-850 border-b border-gray-750 p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={courseInfo.avatar}
                alt={courseInfo.instructor}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">{courseInfo.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>by {courseInfo.instructor}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {courseInfo.rating}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {courseInfo.students} students
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Lesson {courseInfo.lessonNumber} of {courseInfo.totalLessons}</div>
                <div className="text-accent font-semibold">{courseInfo.progress}% Complete</div>
              </div>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${courseInfo.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-gray-850 to-secondary rounded-2xl overflow-hidden border border-gray-750">
              {/* Video Area */}
              <div className="relative aspect-video bg-black">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                  alt="AI Professor"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-600 rounded-full h-1 cursor-pointer">
                        <div 
                          className="bg-accent h-1 rounded-full transition-all duration-300" 
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-300 mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                    
                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-accent-dark transition-colors"
                        >
                          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                        </motion.button>
                        
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="text-white hover:text-accent transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </button>
                        
                        <div className="text-white text-sm">
                          <span className="font-semibold">{courseInfo.currentLesson}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button className="px-4 py-2 bg-gray-800/80 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                          0.75x
                        </button>
                        <button className="px-4 py-2 bg-accent text-primary rounded-lg font-semibold text-sm">
                          1x
                        </button>
                        <button className="px-4 py-2 bg-gray-800/80 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                          1.25x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-700">
                <div className="flex">
                  {[
                    { id: 'notes', label: 'Smart Notes', icon: BookOpen },
                    { id: 'transcript', label: 'Transcript', icon: MessageCircle },
                    { id: 'resources', label: 'Resources', icon: Download }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id as any)}
                      className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-colors ${
                        selectedTab === tab.id
                          ? 'text-accent border-b-2 border-accent'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {selectedTab === 'notes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">AI-Generated Notes</h3>
                      <button className="text-accent hover:text-accent-dark transition-colors text-sm">
                        Export Notes
                      </button>
                    </div>
                    
                    {notes.map((note, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-l-4 ${
                          note.highlight 
                            ? 'bg-accent/10 border-accent' 
                            : 'bg-gray-750/50 border-gray-600'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-gray-300">{note.content}</p>
                          </div>
                          <span className="text-xs text-gray-500 ml-4">{note.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {selectedTab === 'transcript' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold">Video Transcript</h3>
                      <button className="text-accent hover:text-accent-dark transition-colors text-sm">
                        Download Transcript
                      </button>
                    </div>
                    
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      <div className="flex space-x-3">
                        <span className="text-accent text-sm font-mono">02:15</span>
                        <p className="text-gray-300">Welcome to this lesson on Python variables and data types. In this section, we'll explore how Python handles different types of data...</p>
                      </div>
                      <div className="flex space-x-3">
                        <span className="text-accent text-sm font-mono">02:45</span>
                        <p className="text-gray-300">Unlike many other programming languages, Python is dynamically typed. This means you don't need to explicitly declare the type of a variable...</p>
                      </div>
                      <div className="flex space-x-3">
                        <span className="text-accent text-sm font-mono">03:20</span>
                        <p className="text-gray-300">Let's start with the most basic data types. We have integers, which are whole numbers like 1, 2, 3...</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedTab === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-bold mb-4">Lesson Resources</h3>
                    
                    <div className="space-y-3">
                      {[
                        { name: 'Python Variables Cheat Sheet', type: 'PDF', size: '2.3 MB' },
                        { name: 'Code Examples - Variables.py', type: 'Python', size: '1.2 KB' },
                        { name: 'Practice Exercises', type: 'Jupyter Notebook', size: '856 KB' },
                        { name: 'Additional Reading Links', type: 'Text', size: '245 B' }
                      ].map((resource, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-750/50 rounded-lg hover:bg-gray-750 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Download className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <p className="font-semibold">{resource.name}</p>
                              <p className="text-sm text-gray-400">{resource.type} • {resource.size}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Ask Doubt Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border border-accent/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Have a doubt about this lesson?</h3>
                  <p className="text-gray-400">Ask our AI tutor for instant clarification</p>
                </div>
                <button className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                  Ask Now
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Lesson Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-850 to-secondary p-6 rounded-2xl border border-gray-750 sticky top-6">
              <h3 className="text-xl font-bold mb-4">Course Lessons</h3>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      lesson.current
                        ? 'bg-accent/20 border-2 border-accent'
                        : lesson.completed
                        ? 'bg-green-500/10 border border-green-500/30 hover:bg-green-500/20'
                        : 'bg-gray-750/50 border border-gray-600 hover:bg-gray-750'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          lesson.current
                            ? 'bg-accent text-primary'
                            : lesson.completed
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-600 text-gray-300'
                        }`}>
                          {lesson.completed ? '✓' : lesson.id}
                        </div>
                        <div>
                          <p className={`font-semibold ${
                            lesson.current ? 'text-accent' : 'text-white'
                          }`}>
                            {lesson.title}
                          </p>
                          <div className="flex items-center text-xs text-gray-400">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </div>
                        </div>
                      </div>
                      
                      {lesson.current && (
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="w-full py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                  Mark as Complete
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;