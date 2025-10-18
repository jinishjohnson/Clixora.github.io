
"use client";
import { useState } from "react";

const quotes = [
    {
        id: 1,
        image: "/sr1.jpg",
        author: "William Shakespeare",
        title: "Hamlet",
        text: `To be, or not to be, that is the question: Whether 'tis nobler in the mind
    to suffer The slings and arrows of outrageous fortune, Or to take arms against
    a sea of troubles, And by opposing end them: to die, to sleep no more; and by a sleep, to say we end.`,
    },
    {
        id: 2,
        image: "/sr2.jpg",
        author: "Albert Einstein",
        title: "Scientist",
        text: `Imagination is more important than knowledge. For knowledge is limited,
    whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.`,
    },
    {
        id: 3,
        image: "/sr3.jpg",
        author: "Maya Angelou",
        title: "Poet",
        text: `You will face many defeats in life, but never let yourself be defeated.
    Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.`,
    },
];

export default function QuoteSlider() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    };

    const { image, author, title, text } = quotes[index];

    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <img
                            src={image}
                            alt={author}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>

                    <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {author}
                        </h2>
                        <p className="text-blue-600 font-medium">
                            {title}
                        </p>
                        <p className="text-gray-700 italic">
                            "{text}"
                        </p>

                        <div className="flex items-center gap-3 pt-4">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 bg-blue-200 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                                aria-label="Previous slide"
                            >
                                ←
                            </button>

                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                                aria-label="Next slide"
                            >
                                →
                            </button>

                            <div className="flex gap-2 ml-2">
                                {quotes.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setIndex(idx)}
                                        className={`w-2 h-2 rounded-full ${idx === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
