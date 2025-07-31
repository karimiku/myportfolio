import React, { useState, useEffect } from 'react'

interface TypeWriterProps {
    text: string
    delay?: number
    speed?: number
    className?: string
    showCursor?: boolean
}

const TypeWriter: React.FC<TypeWriterProps> = ({
    text,
    delay = 0,
    speed = 100,
    className = '',
    showCursor = true
}) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setStarted(true)
        }, delay)

        return () => clearTimeout(startTimer)
    }, [delay])

    useEffect(() => {
        if (!started) return

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, speed)

            return () => clearTimeout(timer)
        }
    }, [currentIndex, text, speed, started])

    return (
        <span className={`font-bold italic ${className}`} style={{
            whiteSpace: 'nowrap',
            display: 'inline-block',
            overflow: 'visible',
            paddingRight: '2rem',
            minWidth: 'fit-content'
        }}>
            {displayText}
            {showCursor && currentIndex < text.length && (
                <span className="animate-pulse text-primary-400 ml-1">|</span>
            )}
        </span>
    )
}

export default TypeWriter