import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function AnimationContainer({ animation, children }) {
    return (
        <ScrollAnimation style={{ height: "100%" }} animateIn={animation} animateOnce offset={0}>
            {children}
        </ScrollAnimation>
    )
}

export default AnimationContainer
