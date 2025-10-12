import ShinyText from "../components/ShinyText"
import LiquidEther from '../components/LiquidEther';
import Link from "next/link";

export default function Home() {
  return (
      <div className="w-full h-screen relative flex justify-center items-center">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div id="home" className="absolute flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold animate-pulse">SEA WALL</h1>
          <h1 className="font-bold text-3xl">防潮堤</h1>
          <Link href="/menu">
            <ShinyText
              text="Click here to Continue"
              disabled={false}
              speed={3}
              className='custom-class p-5'
            />
          </Link>
        </div>
      </div>
  );
}
