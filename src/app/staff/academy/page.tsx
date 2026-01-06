'use client';

import { useState } from 'react';
import { GraduationCap, Play, Clock, CheckCircle, Award, BookOpen, ChevronRight, Star, Lock, X, Download } from 'lucide-react';
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
    const [showCourse, setShowCourse] = useState<number | null>(null);
    const [showCertificate, setShowCertificate] = useState(false);

    const selectedCourse = courses.find(c => c.id === showCourse);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Course Modal */}
            {showCourse && selectedCourse && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">{selectedCourse.title}</h3>
                            <button onClick={() => setShowCourse(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="text-center py-6">
                            <div className={`w-20 h-20 ${selectedCourse.completed ? 'bg-success/10' : 'bg-primary/10'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                {selectedCourse.completed ? (
                                    <CheckCircle className="w-10 h-10 text-success" />
                                ) : (
                                    <Play className="w-10 h-10 text-primary" />
                                )}
                            </div>
                            <p className="text-muted-foreground">{selectedCourse.category}</p>
                            <p className="text-sm text-muted-foreground mt-2">{selectedCourse.duration} • {selectedCourse.lessons} lessons</p>
                            {!selectedCourse.completed && selectedCourse.progress > 0 && (
                                <div className="mt-4">
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <span className="text-sm text-muted-foreground">Progress</span>
                                        <span className="font-bold text-primary">{selectedCourse.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full max-w-xs mx-auto">
                                        <div className="h-2 bg-primary rounded-full" style={{ width: `${selectedCourse.progress}%` }}></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setShowCourse(null)} className="flex-1 btn btn-secondary">Close</button>
                            <button onClick={() => setShowCourse(null)} className="flex-1 btn btn-primary">
                                {selectedCourse.completed ? 'Review Course' : selectedCourse.progress > 0 ? 'Continue' : 'Start Course'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Certificate Modal */}
            {showCertificate && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Certificate</h3>
                            <button onClick={() => setShowCertificate(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 rounded-xl border border-warning/20 text-center">
                            <Award className="w-16 h-16 text-warning mx-auto mb-4" />
                            <p className="text-xl font-bold text-primary">{certifications[0].name}</p>
                            <p className="text-sm text-muted-foreground mt-2">
                                Issued {new Date(certifications[0].issueDate).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Valid until {new Date(certifications[0].expiryDate).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowCertificate(false)} className="flex-1 btn btn-secondary">Close</button>
                            <button onClick={() => setShowCertificate(false)} className="flex-1 btn btn-primary">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                            <p className="text-2xl font-bold text-primary">21 hrs</p>
                            <p className="text-sm text-muted-foreground">Learning Time</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continue Learning */}
            {courses.some(c => c.progress > 0 && !c.completed) && (
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
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
                        <button onClick={() => setShowCourse(2)} className="btn btn-primary">
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
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${course.completed ? 'bg-success/10' : 'bg-primary/10'
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
                                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground flex-wrap">
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
                                <button
                                    onClick={() => setShowCourse(course.id)}
                                    className={`btn ${course.completed ? 'btn-secondary' : 'btn-primary'}`}
                                >
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
                            <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-gradient-to-r from-warning/10 to-warning/5 rounded-xl border border-warning/20">
                                <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-warning" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-primary">{cert.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Issued {new Date(cert.issueDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} •
                                        Valid until {new Date(cert.expiryDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </p>
                                </div>
                                <button onClick={() => setShowCertificate(true)} className="btn btn-secondary">
                                    <Download className="w-4 h-4" />
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
