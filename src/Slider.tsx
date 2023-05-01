import React, { CSSProperties, useEffect, useState } from 'react'

const Slider = () => {



    const frameWidth = document.getElementById('sliderFrame')?.clientWidth
    const [slideDegree, setSlideDegree] = useState(0)
    const [stepCount, setStepCount] = useState(0)
    const [lastSlideChangeTime, setLastSlideChangeTime] = useState(Date.now)



    function timerF() {
        if (Date.now() - lastSlideChangeTime > 8000) {
            setStepCount(stepCount + 1)
            setLastSlideChangeTime(Date.now)
        }
        requestAnimationFrame(timerF)
    }
    requestAnimationFrame(timerF)






    const sliderFrameStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 'auto',
        height: '500px',
        width: `100%`,
        // backgroundColor: 'white',
        transformStyle: 'preserve-3d',
        overflow: 'hidden',
    }

    const sliderStyle: CSSProperties = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        transform: `rotateY(${slideDegree}deg)`,
        height: '100%',
        width: '100%',
        transformStyle: 'preserve-3d',
        transition: '1s',

    }

    const coverStyle: CSSProperties = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '5%',
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',

    }



    const coverButtonStyleF = (slideNumber: number) => {


        const coverButtonStyle: CSSProperties = {
            backgroundColor: slideNumber === slideDegree ? 'rgba(0,0,0,0.8' : 'rgba(200,200,200,0.8',
            height: '20px',
            width: '20px',
            marginRight: '10px',
            borderRadius: '50%',
            cursor: 'pointer'

        }

        return coverButtonStyle
    }

    const slideStyleF = (degree: number, color: string) => {
        let translateTo: number | undefined;
        if (frameWidth) {
            translateTo = Math.ceil(frameWidth * 57.3)
        }
        const slideStyle: any = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '20px',
            width: `${frameWidth}px`,
            height: '100%',
            backgroundColor: `${color}`,
            transform: ` rotateY(${degree}deg) translateZ(${translateTo}px)`,

        }

        return slideStyle
    }

    useEffect(() => {
        if (stepCount > 0) {
            if (slideDegree === -3) {
                setSlideDegree(0)
            }
            else {
                setSlideDegree(slideDegree - 1)
            }
        }
    }, [stepCount])



    return (



        <div id='sliderFrame' style={sliderFrameStyle}>

            <div style={sliderStyle}>
                <div style={slideStyleF(0, 'rgba(0,255,0, 0.8)')}>
        1
                </div>
                <div style={slideStyleF(1, 'rgba(255,0,0,0.8)')}>
2
                </div>
                <div style={slideStyleF(2, 'rgba(0,0,255,0.8)')}>
3
                </div>
                <div style={slideStyleF(3, 'rgba(255,0,255,0.8)')}>
4
                </div>


            </div>
            <div style={coverStyle}>
                <div onClick={() => {
                    setLastSlideChangeTime(Date.now())
                    setSlideDegree(0)

                }} style={coverButtonStyleF(0)}></div>
                <div onClick={() => {
                    setLastSlideChangeTime(Date.now())
                    setSlideDegree(-1)

                }} style={coverButtonStyleF(-1)}></div>
                <div onClick={() => {
                    setLastSlideChangeTime(Date.now())
                    setSlideDegree(-2)

                }} style={coverButtonStyleF(-2)}></div>
                <div onClick={() => {
                    setLastSlideChangeTime(Date.now())
                    setSlideDegree(-3)

                }} style={coverButtonStyleF(-3)}></div>
            </div>

        </div>





    )
}

export default Slider