import TextType from '../../components/TextType';
import FadeContent from '../../components/FadeContent'
import Aurora from '../../components/Aurora';

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
      <div className="h-300 flex">
        <h1 className="text-3xl ml-3">Overview</h1>
        <p></p>
      </div>
    </div>
  )
}