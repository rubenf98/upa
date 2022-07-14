import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function AnimationContainer({ animation, children }) {
    return (
        <ScrollAnimation animateIn={animation} animateOnce offset={0}>
            {children}
        </ScrollAnimation>
    )
}

export default AnimationContainer
