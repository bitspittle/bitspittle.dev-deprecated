import React, {useEffect, useRef, useState} from 'react';
import {ColorMode} from "@chakra-ui/color-mode/dist/types/color-mode.utils";
import {useColorMode} from "@chakra-ui/react";

export interface DrawArgs {
    /** The canvas context which provides drawing functionality */
    ctx: CanvasRenderingContext2D,
    /** The width of the canvas */
    width: number,
    /** The height of the canvas */
    height: number,

    /** The current color mode of the site. */
    colorMode: ColorMode,

    /** A function to call to request an additional frame be rendered. */
    requestUpdate(): void

     /** Time elapsed since last rendering started. */
    elapsedMs: number,
}

interface CanvasProps {
    width: number;
    height: number;
    draw: (args: DrawArgs) => void;
}

const Canvas: React.FunctionComponent<CanvasProps> = (
    {
        width,
        height,
        draw,
    }) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const { colorMode } = useColorMode()
    const [ initialTime ] = useState(Date.now())

    useEffect(() => {
        if (ref.current) {
            const canvas = ref.current;
            const ctx = canvas.getContext('2d');
            if (ctx != null) {
                let requestId: number;

                const render = () => {
                    draw({
                        ctx: ctx,
                        elapsedMs: Date.now() - initialTime,
                        width: width,
                        height: height,
                        colorMode: colorMode,
                        requestUpdate: () => {
                            requestId = requestAnimationFrame(render)
                        }
                    })
                }

                render()

                return () => {
                    cancelAnimationFrame(requestId)
                }
            }
        }
    });

    return <canvas ref={ref} width={width} height={height}/>;
};

export default Canvas;