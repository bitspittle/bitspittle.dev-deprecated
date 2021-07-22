import React, {useEffect, useRef, useState} from 'react';
import {ColorMode} from "@chakra-ui/color-mode/dist/types/color-mode.utils";
import {Box, BoxProps, useColorMode} from "@chakra-ui/react";

export interface RenderArgs {
    /** The canvas context which provides drawing functionality */
    ctx: CanvasRenderingContext2D,
    /** The width of the canvas */
    width: number,
    /** The height of the canvas */
    height: number,

    /** The current color mode of the site. */
    colorMode: ColorMode,

    /**
     * Time elapsed since last frame.
     *
     * It could be useful to accumulate these locally at the drawing function, like:
     *
     * ```
     * let state = {
     *     elapsedMs: 0
     * }
     * function draw(args: DrawArgs): void {
     *   state.elapsedMs += args.deltaMs
     *   ...
     * }
     * ```
     */
    deltaMs: number,
}

interface CanvasProps extends BoxProps {
    width: number,
    height: number,
    /**
     * The render handler.
     *
     * Will be triggered as frequently as possible, unless
     * {@link minDeltaMs} is set.
     */
    render: (args: RenderArgs) => void,

    /**
     * If set, ensures that draw won't be called more than once per
     * this period.
     *
     * By default, this value isn't set, but {@link ONE_FRAME_MS_60_FPS} is probably a
     * decent value.
     */
    minDeltaMs?: number,

    /**
     * If set, ensures that the delta passed into {@link RenderArgs} will be
     * capped.
     *
     * This is useful to make sure that render behavior doesn't explode after
     * sitting on a breakpoint for a while, and by default is set to half a
     * second.
     */
    maxDeltaMs?: number,
}

export const ONE_FRAME_MS_60_FPS = 16

const Canvas: React.FunctionComponent<CanvasProps> = (
    {
        width,
        height,
        render,
        minDeltaMs = null,
        maxDeltaMs = ONE_FRAME_MS_60_FPS * 30,
        ...props
    }) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const {colorMode} = useColorMode()
    if (maxDeltaMs === null) {
        maxDeltaMs = Number.MAX_VALUE
    }

    useEffect(() => {
        if (ref.current) {
            const canvas = ref.current;
            const ctx = canvas.getContext('2d');
            if (ctx != null) {
                let requestId: number;
                let lastTimestamp = Date.now()

                const renderCallback = () => {
                    const now = Date.now()
                    const deltaMs = now - lastTimestamp
                    if (minDeltaMs == null || deltaMs >= minDeltaMs) {
                        render({
                            ctx: ctx,
                            deltaMs: Math.min(deltaMs, maxDeltaMs),
                            width: width,
                            height: height,
                            colorMode: colorMode,
                        })
                        lastTimestamp = now
                    }
                    requestId = requestAnimationFrame(renderCallback)
                }
                renderCallback()

                return () => {
                    cancelAnimationFrame(requestId)
                }
            }
        }
    });

    return (
        <Box {...props}>
            <canvas ref={ref} width={width} height={height}/>
        </Box>
    )

};

export default Canvas;