import {ChevronLeft, ChevronRight, Quote} from 'lucide-react';
import {useRef} from 'react';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

export const TestimonialsSection = ({testimonials}: TestimonialsSectionProps) => {
    // Specify HTMLDivElement as the type for the ref
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        const scrollAmount = 380; // Width of one card + gap
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Client Testimonials</h2>
                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} className="text-slate-600"/>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} className="text-slate-600"/>
                    </button>

                    <div
                        className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth"
                    >
                        <div className="flex gap-6" style={{minWidth: 'max-content'}}>
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-white p-6 rounded-lg shadow-lg relative flex-shrink-0"
                                    style={{width: '350px'}}
                                >
                                    <Quote className="absolute top-4 right-4 text-indigo-100" size={32}/>
                                    <div className="mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                                        />
                                    </div>
                                    <p className="text-slate-600 mb-4 italic relative">
                                        "{testimonial.content}"
                                    </p>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

