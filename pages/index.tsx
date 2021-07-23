import Layout from "../components/layouts/Layout";
import {H1, H3} from "../components/elements/Headings";
import Canvas, {ONE_FRAME_MS_60_FPS, RenderArgs} from "../components/elements/Canvas";
import {getBrandColors} from "../theme/colors";
import {Spacer} from "@chakra-ui/react";

function render(args: RenderArgs): void {
    // Adapted from: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations#an_animated_clock
    let i;
    const date = new Date();
    const ctx = args.ctx;
    const r = Math.min(args.width, args.height) / 2

    ctx.save();
    ctx.clearRect(0, 0, args.width, args.height);
    ctx.translate(r, r);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = getBrandColors(args.colorMode).fg;
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Hour marks
    ctx.save();
    for (i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
        if (i % 5!= 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    const sec = date.getSeconds();
    const min = date.getMinutes();
    let hr = date.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = getBrandColors(args.colorMode).link;
    ctx.fillStyle = getBrandColors(args.colorMode).link;;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = getBrandColors(args.colorMode).link
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.restore();
}

export default function Home() {
    return (
        <Layout
            description="A developer blog with tutorials and experiences from the industry"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
        >
            <H1>
                Bit Spittle
            </H1>
            <br/>
            <H3>
                Developer tutorials, blog posts, and other garbage
            </H3>
            <Spacer />
            <Canvas width={400} height={400} minDeltaMs={ONE_FRAME_MS_60_FPS * 5} render={render}/>
            <Spacer />
        </Layout>
    )
}
