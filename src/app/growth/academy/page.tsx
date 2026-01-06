'use client';

import { useState } from 'react';
import { GraduationCap, BookOpen, Clock, Users, Award, CheckCircle, Play, Star, Lock } from 'lucide-react';

// Mock course data
const courses = [
    {
        id: 'course-001',
        title: 'Event Safety Certification',
        category: 'Safety',
        duration: '4 hours',
        enrolled: 234,
        rating: 4.8,
        lessons: 8,
        completed: false,
        required: true,
        image: '🛡️'
    },
    {
        id: 'course-002',
        title: 'Crowd Management 101',
        category: 'Operations',
        duration: '3 hours',
        enrolled: 189,
        rating: 4.6,
        lessons: 6,
        completed: true,
        required: true,
        image: '👥'
    },
    {
        id: 'course-003',
        title: 'VIP Guest Relations',
        category: 'Hospitality',
        duration: '2 hours',
        enrolled: 156,
        rating: 4.9,
        lessons: 5,
        completed: false,
        required: false,
        image: '⭐'
    },
    {
        id: 'course-004',
        title: 'Emergency Response Protocol',
        category: 'Safety',
        duration: '5 hours',
        enrolled: 312,
        rating: 4.7,
        lessons: 10,
        completed: false,
        required: true,
        image: '🚨'
    },
    {
        id: 'course-005',
        title: 'Audio/Visual Equipment Basics',
        category: 'Technical',
        duration: '3.5 hours',
        enrolled: 98,
        rating: 4.5,
        lessons: 7,
        completed: true,
        required: false,
        image: '🎬'
    },
    {
        id: 'course-006',
        title: 'Saudi Event Regulations',
        category: 'Compliance',
        duration: '2.5 hours',
        enrolled: 421,
        rating: 4.8,
        lessons: 6,
        completed: false,
        required: true,
        image: '📋'
    },
];

const certifications = [
    { name: 'Crowd Management', date: '2025-11-15', status: 'verified' },
    { name: 'A/V Equipment', date: '2025-12-01', status: 'verified' },
];

export default function AcademyPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Safety', 'Operations', 'Hospitality', 'Technical', 'Compliance'];

    const filteredCourses = selectedCategory === 'All'
        ? courses
        : courses.filter(c => c.category === selectedCategory);

    const completedCount = courses.filter(c => c.completed).length;
    const progressPercent = Math.round((completedCount / courses.filter(c => c.required).length) * 100);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Supplify Academy</h1>
                    <p className="text-muted-foreground mt-1">Upskill your team with certified event training</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    View Certificates
                </button>
            </div>

            {/* Progress Banner */}
            <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                        <GraduationCap className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Your Learning Progress</h3>
                        <p className="text-white/70 text-sm mt-1">Complete required certifications before event date</p>
                        <div className="mt-3">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-white/70">Required Courses</span>
                                <span className="font-medium">{progressPercent}% complete</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full bg-success transition-all"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-bold">{completedCount}/{courses.filter(c => c.required).length}</p>
                        <p className="text-sm text-white/70">Certifications Earned</p>
                    </div>
                </div>
            </div>

            {/* My Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold text-primary mb-4">Your Verified Badges</h2>
                <div className="flex gap-4">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-success/10 border border-success/30 rounded-xl">
                            <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-success" />
                            </div>
                            <div>
                                <p className="font-medium text-primary">{cert.name}</p>
                                <p className="text-xs text-muted-foreground">Earned {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                            </div>
                            <span className="ml-2 px-2 py-0.5 bg-success text-white text-xs font-medium rounded-full flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                Verified
                            </span>
                        </div>
                    ))}
                    <div className="flex items-center gap-3 px-4 py-3 bg-secondary border border-border rounded-xl border-dashed">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                            <Lock className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="font-medium text-muted-foreground">More badges to earn</p>
                            <p className="text-xs text-muted-foreground">Complete courses to unlock</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                ? 'bg-primary text-white'
                                : 'bg-white border border-border text-muted-foreground hover:bg-secondary'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className={`bg-white rounded-2xl shadow-sm border overflow-hidden card-hover ${course.completed ? 'border-success/30' : 'border-border'
                            }`}
                    >
                        {/* Course Header */}
                        <div className="relative h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <span className="text-5xl">{course.image}</span>
                            {course.completed && (
                                <div className="absolute top-3 right-3 bg-success text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    Completed
                                </div>
                            )}
                            {course.required && !course.completed && (
                                <div className="absolute top-3 left-3 bg-warning text-white px-2 py-1 rounded-full text-xs font-medium">
                                    Required
                                </div>
                            )}
                        </div>

                        {/* Course Content */}
                        <div className="p-5">
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{course.category}</span>
                            <h3 className="font-semibold text-primary mt-1">{course.title}</h3>

                            <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {course.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    {course.lessons} lessons
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-warning fill-warning" />
                                        <span className="text-sm font-medium text-primary">{course.rating}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        <Users className="w-3 h-3 inline mr-1" />
                                        {course.enrolled} enrolled
                                    </span>
                                </div>
                                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${course.completed
                                        ? 'bg-secondary text-primary hover:bg-secondary-dark'
                                        : 'bg-primary text-white hover:bg-primary-light'
                                    }`}>
                                    {course.completed ? (
                                        <>Review</>
                                    ) : (
                                        <>
                                            <Play className="w-4 h-4" />
                                            Start
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl">🎓</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary">Create Custom Training</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                            Build custom learning paths for your team based on your event requirements
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
