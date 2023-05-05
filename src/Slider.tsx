import React, { CSSProperties, useEffect, useState } from 'react'

const Slider = () => {



    const frameWidth = document.getElementById('sliderFrame')?.clientWidth
    const [slideDegree, setSlideDegree] = useState(0)
    const [stepCount, setStepCount] = useState(0)

    const requestRef = React.useRef<any>(0);
    const previousTimeRef = React.useRef(Date.now());

         
  React.useEffect(() => {
    const animate = () => {
        if (Date.now()- previousTimeRef.current >8000) {
          
        previousTimeRef.current = Date.now();
          setStepCount (value=>value + 1);
        }
        requestRef.current = requestAnimationFrame(animate);
      }
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  

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

   



    return (



        <div id='sliderFrame' style={sliderFrameStyle}>

            <div style={sliderStyle}>
                <div style={slideStyleF(0, 'rgba(0,255,0, 0.8)')}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur corrupti cumque rerum consequatur iste nobis obcaecati, sapiente fugiat nulla, totam a ratione mollitia aliquid qui soluta eligendi? Quod, dolore tempora?
                </div>
                <div style={slideStyleF(1, 'rgba(255,0,0,0.8)')}>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eius harum veritatis debitis quam aliquam, ratione sed error quod laborum blanditiis sint doloremque iusto deleniti dolore dolorem ipsam quaerat voluptatibus.
                </div>
                <div style={slideStyleF(2, 'rgba(0,0,255,0.8)')}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex cupiditate reprehenderit delectus provident tempora hic odio assumenda consequuntur quibusdam nulla labore, nam dolores voluptatum atque asperiores deleniti id vero.
                </div>
                <div style={slideStyleF(3, 'rgba(255,0,255,0.8)')}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum, vitae velit dolores fugiat non alias commodi sed libero, mollitia omnis corrupti ea exercitationem ipsa id dolorem ullam deserunt debitis?
                </div>


            </div>
            <div style={coverStyle}>
                <div onClick={() => {
                    previousTimeRef.current = Date.now()
                    setSlideDegree(0)

                }} style={coverButtonStyleF(0)}></div>
                <div onClick={() => {
                    previousTimeRef.current = Date.now()
                    setSlideDegree(-1)

                }} style={coverButtonStyleF(-1)}></div>
                <div onClick={() => {
                    previousTimeRef.current = Date.now()
                    setSlideDegree(-2)

                }} style={coverButtonStyleF(-2)}></div>
                <div onClick={() => {
                   previousTimeRef.current = Date.now()
                    setSlideDegree(-3)

                }} style={coverButtonStyleF(-3)}></div>
            </div>

        </div>





    )
}

export default Slider