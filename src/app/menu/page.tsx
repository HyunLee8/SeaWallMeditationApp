import TextType from '../../components/TextType';
import FadeContent from '../../components/FadeContent'
import Aurora from '../../components/Aurora';
import DecryptedText from '../../components/DecryptedText';
import ScrollReveal from '../../components/ScrollReveal';
import Image from "next/image";



<TextType
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

export default function menu() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center">
      <div className="pt-80 pb-100 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-center text-7xl font-bold">Reimagining Meditation</h1>
        </div>
        <TextType
          text={["The next gen meditation app", "Engineered for Inner Balance", "Find stillness in motion", "Breath. Focus. Evolve"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="mt-3"
        />
        <div>
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <button className="p-3 mt-4 border rounded-full">Discover</button>
          </FadeContent>
        </div>
      </div>
      <div className=" flex-wrap text-white pb-200">
        <div className="mr-auto">
          <h1 className="font-light text-3xl ml-5">Overview</h1>
        </div>
        <div className="ml-auto pb-10">
          <p className="font-light pl-5 mr-5 max-w-125 min-w-90 ml-auto pb-5 text-base">Turn every moment into clarity. Adaptive soundscapes help you focus, unwind, and recharge — bringing your mind into harmony with your day. Powered by intelligent audio, our app creates immersive sound that adapts to your mood for deeper focus, calm, and rest.</p>
          <p className="font-light pl-5 mr-5 max-w-125 min-w-90 ml-auto text-gray-500 text-base">あらゆる瞬間をクリアに。アダプティブサウンドスケープが集中力、リラックス、そして活力を高め、心と一日の調和をもたらします。インテリジェントオーディオを搭載したこのアプリは、あなたの気分に合わせて臨場感あふれるサウンドを作り出し、より深い集中力、落ち着き、そして安らぎをもたらします。</p>
        </div>
        <div className="flex">
          <img className="object-cover h-100 w-150" src="Seawall1.png" />
          <img className="h-100 w-100 ml-auto" src="Seawall3.png"/>
        </div>
      </div>
    </div>
  )
}