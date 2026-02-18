import React, { useState } from 'react';
import { FileCheck, Search, Calendar, Clock, Video, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const StepCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col h-full transition-all duration-500 group hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1">
    
    {/* Glossy sheen effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    {/* Glow blobs */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-green/20 transition-all duration-500"></div>
    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500"></div>

    <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500">
      {icon}
    </div>
    
    <h3 className="relative z-10 text-[24px] font-bold text-white mb-4 font-display tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">{title}</h3>
    <p className="relative z-10 text-gray-400 text-[16px] leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
  </div>
);

const CalendarWidget = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // February 2026
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 1, 4)); // Feb 4, 2026
    const [is24Hour, setIs24Hour] = useState(true);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get days in month
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);

    // Generate calendar days with empty slots for proper alignment
    const calendarDays: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        calendarDays.push(i);
    }

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        setSelectedDate(null);
        setSelectedTime(null);
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        setSelectedDate(null);
        setSelectedTime(null);
    };

    const selectDay = (day: number) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(newDate);
        setSelectedTime(null);
    };

    const isSelected = (day: number) => {
        if (!selectedDate) return false;
        return selectedDate.getDate() === day &&
               selectedDate.getMonth() === currentDate.getMonth() &&
               selectedDate.getFullYear() === currentDate.getFullYear();
    };

    const isToday = (day: number) => {
        const today = new Date();
        return today.getDate() === day &&
               today.getMonth() === currentDate.getMonth() &&
               today.getFullYear() === currentDate.getFullYear();
    };

    // Generate available time slots
    const getTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour <= 22; hour++) {
            for (let min = 0; min < 60; min += 20) {
                if (hour === 22 && min > 40) break;
                const time24 = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
                if (is24Hour) {
                    slots.push(time24);
                } else {
                    const period = hour >= 12 ? 'PM' : 'AM';
                    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
                    slots.push(`${hour12}:${min.toString().padStart(2, '0')} ${period}`);
                }
            }
        }
        return slots;
    };

    const timeSlots = getTimeSlots();

    const formatSelectedDate = () => {
        if (!selectedDate) return '';
        return `${shortDayNames[selectedDate.getDay()]} ${selectedDate.getDate().toString().padStart(2, '0')}`;
    };
    
    return (
        <div className="bg-white rounded-[32px] overflow-hidden flex flex-col w-full max-w-[1000px] mx-auto shadow-2xl text-black">
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 lg:w-[35%] bg-gray-50/50">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-500 font-bold text-sm">DashBloom</span>
                </div>
                <h3 className="text-gray-500 font-bold mb-1 text-sm">Project Discovery with</h3>
                <h2 className="text-2xl font-black mb-6 flex items-center gap-2 font-display">Rez <span className="text-orange-500">⚡</span></h2>
                
                <p className="text-gray-600 text-[15px] mb-8 leading-relaxed">
                    This is a quick meeting to learn about your project and goals, and to see how we can help.<br/><br/>
                    <strong>We'll cover:</strong><br/>
                    1. Your requirements and objectives.<br/>
                    2. How we can support you.<br/>
                    3. Your questions and the next steps.
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                        <Clock className="w-5 h-5 text-gray-400" /> 20m
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                        <Video className="w-5 h-5 text-gray-400" /> Google Meet
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                        <Globe className="w-5 h-5 text-gray-400" /> Asia/Dhaka
                    </div>
                </div>
            </div>

            {/* Calendar */}
            <div className="p-8 lg:p-10 lg:w-[40%] border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-lg">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
                    <div className="flex gap-1">
                         <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                         <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                </div>
                
                <div className="grid grid-cols-7 gap-y-6 text-center text-sm mb-4">
                    {dayNames.map(d => <div key={d} className="text-[11px] text-gray-400 font-bold tracking-wider">{d}</div>)}
                </div>
                
                <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-sm">
                    {calendarDays.map((day, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                            {day !== null ? (
                                <button 
                                    onClick={() => selectDay(day)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] transition-all
                                        ${isSelected(day)
                                            ? 'bg-[#111] text-white shadow-lg shadow-black/20' 
                                            : isToday(day)
                                            ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    {day}
                                </button>
                            ) : (
                                <div className="w-10 h-10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Time Slots */}
            <div className="p-8 lg:p-10 lg:w-[25%] flex flex-col">
                 <div className="flex justify-between items-center mb-8">
                    <h3 className="text-gray-400 font-bold">{selectedDate ? formatSelectedDate() : 'Select a date'}</h3>
                    {/* 12h/24h Toggle */}
                    <div className="bg-gray-100 p-1 rounded flex text-xs font-bold">
                        <button 
                            onClick={() => setIs24Hour(false)}
                            className={`px-2 py-1 rounded transition-all ${!is24Hour ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            12h
                        </button>
                        <button 
                            onClick={() => setIs24Hour(true)}
                            className={`px-2 py-1 rounded transition-all ${is24Hour ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            24h
                        </button>
                    </div>
                </div>
                
                {selectedDate ? (
                    <div className="space-y-3 overflow-y-auto max-h-[300px] custom-scrollbar pr-2">
                        {timeSlots.map(time => (
                            <button 
                                key={time} 
                                onClick={() => setSelectedTime(time)}
                                className={`w-full py-3 border font-bold rounded-xl transition-all flex items-center justify-center gap-2 group
                                    ${selectedTime === time 
                                        ? 'border-black ring-2 ring-black bg-gray-50' 
                                        : 'border-gray-200 text-gray-800 hover:border-black hover:ring-1 hover:ring-black'
                                    }
                                `}
                            >
                                <div className={`w-2 h-2 rounded-full bg-green-500 transition-transform ${selectedTime === time ? 'scale-125' : 'group-hover:scale-125'}`}></div>
                                {time}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                        Please select a date first
                    </div>
                )}
                
                {selectedDate && selectedTime && (
                    <button className="mt-6 w-full py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all">
                        Confirm Booking
                    </button>
                )}
            </div>
            </div>
            
            {/* Cal.com branding */}
            <div className="w-full border-t border-gray-100 py-4 text-center">
                <span className="text-gray-400 font-bold text-lg font-display tracking-tight">Cal.com</span>
            </div>
        </div>
    );
}

const NextStepsSection: React.FC = () => {
    return (
        <div className="bg-[#050505] py-24 relative overflow-hidden">

             <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-4 tracking-tight leading-[1.2]">
                        What happens next?
                    </h2>
                    <p className="text-gray-400 text-[20px] leading-[1.5]">
                        Our team reviews every inquiry personally.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <StepCard 
                        icon={<FileCheck className="w-6 h-6" />}
                        title="Initial enquiry"
                        description="Once you share a few details, we'll confirm receipt and take a proper look. Nothing is automated - every enquiry is read by someone on our team."
                    />
                     <StepCard 
                        icon={<Search className="w-6 h-6" />}
                        title="Considered review"
                        description="We take time to understand your business, goals, and where a podcast might fit. This helps us be honest about whether we're the right partner - and whether now is the right moment."
                    />
                     <StepCard 
                        icon={<Calendar className="w-6 h-6" />}
                        title="Discovery Call"
                        description="If it feels like a good match, we'll suggest a short call to talk through your goals, our approach, and whether it makes sense to explore things further."
                    />
                </div>

                {/* Earth Background Section */}
                <div className="relative">
                    {/* Earth Illustration */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/4 w-[900px] h-[900px] pointer-events-none z-0">
                        <img 
                            src="/earth.png" 
                            alt="" 
                            className="w-full h-full object-contain opacity-60"
                        />
                    </div>

                    {/* Ellipse Blur Effects */}
                    <img 
                        src="/Ellipse 11.png" 
                        alt="" 
                        className="absolute pointer-events-none blur-sm opacity-30 z-0"
                        style={{
                            left: '15%',
                            top: '20%',
                            transform: 'translate(-50%, -50%) scale(1.2)',
                            mixBlendMode: 'screen',
                        }}
                    />
                    <img 
                        src="/Ellipse 12.png" 
                        alt="" 
                        className="absolute pointer-events-none blur-sm opacity-30 z-0"
                        style={{
                            right: '10%',
                            top: '30%',
                            transform: 'translate(50%, -50%) scale(1.2)',
                            mixBlendMode: 'screen',
                        }}
                    />

                    {/* Transition to Calendar */}
                    <div className="text-center mb-16 relative z-10 pt-20">
                        <h2 className="text-[32px] lg:text-[56px] font-display font-medium text-white mb-6 tracking-tight leading-[1.2]">
                            Book a free 1:1 consultation <br/>
                            with our workflow experts
                        </h2>
                        <p className="text-gray-400 text-[20px] leading-[1.5] flex items-center justify-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                             Have a project in mind? Schedule a time with us.
                             <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                        </p>
                    </div>

                    {/* Calendar Embed */}
                    <div className="relative z-10">
                        <CalendarWidget />
                    </div>
                </div>

             </div>
        </div>
    )
}

export default NextStepsSection;