'use client';

import { GraduationCap, Play, Clock, CheckCircle, Award, BookOpen, ChevronRight, Star, Lock } from 'lucide-react';
import Link from 'next/link';

const courses = [
    {
        id: 1,
        title: 'Event Security Fundamentals',
        category: 'Security',
        duration: '4 hours',
        lessons: 12,
        progress: 100,
        completed: true,
        certificate: true,
    },
    {
        id: 2,
        title: 'Crowd Management & Safety',
        category: 'Security',
        duration: '6 hours',
        lessons: 18,
        progress: 65,
        completed: false,
        certificate: false,
    },
    {
        id: 3,
        title: 'First Aid & Emergency Response',
        category: 'Safety',
        duration: '8 hours',
        lessons: 24,
        progress: 0,
        completed: false,
        certificate: false,
    },
    {
        id: 4,
        title: 'Customer Service Excellence',
        category: 'Hospitality',
        duration: '3 hours',
        lessons: 10,
        progress: 0,
        completed: false,
        certificate: false,
    },
];

const certifications = [
    { name: 'Certified Event Security Professional', issueDate: '2025-10-15', expiryDate: '2027-10-15' },
];

export default function StaffAcademyPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Supplify Academy</h1>
                    <p className="text-muted-foreground mt-1">Enhance your skills and earn certifications</p>
                </div>
                <Link href="/growth/academy" className="btn btn-primary">
                    <BookOpen className="w-4 h-4" />
                    Browse All Courses
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">4</p>
                            <p className="text-sm text-muted-foreground">Enrolled</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">1</p>
                            <p className="text-sm text-muted-foreground">Completed</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                            <Award className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">1</p>
                            <p className="text-sm text-muted-foreground">Certificates</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">10h</p>
                            <p className="text-sm text-muted-foreground">Time Spent</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continue Learning */}
            {courses.filter(c => c.progress > 0 && c.progress < 100).length > 0 && (
                <div className="card p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                            <Play className="w-8 h-8 text-accent" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-primary">Continue Learning</h3>
                            <p className="text-muted-foreground">Crowd Management & Safety</p>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden max-w-xs">
                                    <div className="h-full bg-accent rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                <span className="text-sm font-medium text-primary">65%</span>
                            </div>
                        </div>
                        <button className="btn btn-primary">
                            Resume
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Courses */}
            <div className="card">
                <div className="p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">My Courses</h3>
                </div>
                <div className="divide-y divide-border-light">
                    {courses.map((course) => (
                        <div key={course.id} className="p-5 hover:bg-secondary-light transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${course.completed ? 'bg-success/10' : 'bg-primary/10'
                                    }`}>
                                    {course.completed ? (
                                        <CheckCircle className="w-7 h-7 text-success" />
                                    ) : (
                                        <GraduationCap className="w-7 h-7 text-primary" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-primary">{course.title}</h4>
                                        {course.certificate && (
                                            <Award className="w-4 h-4 text-warning" />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                        <span>{course.category}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {course.duration}
                                        </span>
                                        <span>•</span>
                                        <span>{course.lessons} lessons</span>
                                    </div>
                                    {course.progress > 0 && course.progress < 100 && (
                                        <div className="mt-2 flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden max-w-xs">
                                                <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }}></div>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{course.progress}%</span>
                                        </div>
                                    )}
                                </div>
                                <button className={`btn ${course.completed ? 'btn-secondary' : 'btn-primary'}`}>
                                    {course.completed ? 'Review' : course.progress > 0 ? 'Continue' : 'Start'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            {certifications.length > 0 && (
                <div className="card">
                    <div className="p-5 border-b border-border-light">
                        <h3 className="font-semibold text-primary">My Certifications</h3>
                    </div>
                    <div className="p-5">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-warning/10 to-warning/5 rounded-xl border border-warning/20">
                                <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-warning" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-primary">{cert.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Issued {new Date(cert.issueDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} •
                                        Valid until {new Date(cert.expiryDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </p>
                                </div>
                                <button className="btn btn-secondary">
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
