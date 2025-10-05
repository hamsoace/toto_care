import React, { useState } from 'react';

const PPD_QUESTIONS = [
    "I have been able to laugh and see the funny side of things.",
    "I have looked forward with enjoyment to things.",
    "I have blamed myself unnecessarily when things went wrong.",
    "I have been anxious or worried for no good reason.",
    "I have felt scared or panicky for no very good reason.",
    "Things have been getting on top of me.",
    "I have been so unhappy that I have had difficulty sleeping.",
    "I have felt sad or miserable.",
    "I have been so unhappy that I have been crying.",
    "The thought of harming myself has occurred to me."
];

const PPD_ANSWERS = [
    "As much as I always could",
    "Rather less than I used to",
    "Definitely less than I used to",
    "Hardly at all"
];

interface Interpretation {
    text: string;
    textColor: string;
    borderColor: string;
    details: string;
}

const PPDScreening: React.FC<{onComplete: () => void}> = ({ onComplete }) => {
    const [view, setView] = useState<'screening' | 'results'>('screening');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [score, setScore] = useState(0);
    const [interpretation, setInterpretation] = useState<Interpretation | null>(null);

    const calculateAndSetResults = (finalAnswers: number[]) => {
        let totalScore = 0;
        finalAnswers.forEach((answerIndex, questionIndex) => {
            // Questions 1 & 2 (index 0, 1) are scored 0, 1, 2, 3 based on answer index.
            // The rest (index 2-9) are reverse scored 3, 2, 1, 0.
            if (questionIndex < 2) {
                totalScore += answerIndex;
            } else {
                totalScore += (3 - answerIndex);
            }
        });

        setScore(totalScore);

        if (totalScore >= 13) {
            setInterpretation({
                text: 'High Risk',
                textColor: 'text-danger',
                borderColor: 'border-danger',
                details: 'It is very important that you speak with your doctor or a mental health professional as soon as possible. Help is available, and you are not alone.'
            });
        } else if (totalScore >= 10) {
            setInterpretation({
                text: 'Moderate Risk',
                textColor: 'text-warning',
                borderColor: 'border-warning',
                details: "We recommend discussing these results with your doctor or a mental health professional. They can help you understand what you're feeling and discuss next steps."
            });
        } else {
            setInterpretation({
                text: 'Low Risk',
                textColor: 'text-success',
                borderColor: 'border-success',
                details: "This is a positive sign. Continue to monitor how you feel, and remember to reach out for support from your partner, family, or friends if things change."
            });
        }

        setView('results');
    };

    const handleAnswer = (answerIndex: number) => {
        const newAnswers = [...answers, answerIndex];
        setAnswers(newAnswers);
        if (currentQuestion < PPD_QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateAndSetResults(newAnswers);
        }
    }

    const progress = ((currentQuestion + 1) / PPD_QUESTIONS.length) * 100;

    const renderScreening = () => (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center font-semibold text-lg text-gray-700 mb-6 min-h-[6em] flex items-center justify-center">
                {PPD_QUESTIONS[currentQuestion]}
            </p>
            <div className="space-y-3">
                {PPD_ANSWERS.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full text-left p-4 bg-light-blue rounded-lg text-primary font-semibold hover:bg-blue-200 transition-colors"
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );

    const renderResults = () => {
        if (!interpretation) return null;

        return (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Your Score</h2>
                <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center border-8 ${interpretation.borderColor}`}>
                    <span className={`text-5xl font-bold ${interpretation.textColor}`}>{score}</span>
                    <span className="text-xl font-bold text-gray-400 mt-2">/30</span>
                </div>
                <h3 className={`text-2xl font-bold mt-4 ${interpretation.textColor}`}>{interpretation.text}</h3>
                <p className="text-gray-600 mt-2 mb-6">{interpretation.details}</p>
                <button
                    onClick={onComplete}
                    className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Done
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 bg-gray-50 min-h-screen max-w-md mx-auto">
            <h1 className="text-xl font-bold text-gray-800">Mental Wellness Check</h1>
            
            {view === 'screening' ? (
                <p className="text-sm text-gray-600 mb-4">Over the past 7 days...</p>
            ) : (
                <p className="text-sm text-gray-600 mb-4">Your screening results are ready.</p>
            )}
            
            {view === 'screening' && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div className="bg-primary h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
            )}

            {view === 'screening' ? renderScreening() : renderResults()}
            
            <p className="text-xs text-gray-500 text-center mt-6">This is not a medical diagnosis. If you're feeling distressed, please contact a healthcare provider.</p>
        </div>
    );
};

export default PPDScreening;