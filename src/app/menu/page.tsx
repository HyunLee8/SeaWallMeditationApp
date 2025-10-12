'use client';

import TextType from '../../components/TextType';
import FadeContent from '../../components/FadeContent'
import Aurora from '../../components/Aurora';
import DecryptedText from '../../components/DecryptedText';
import ScrollReveal from '../../components/ScrollReveal';
import Image from "next/image";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';



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
          <h1 className="text-center text-7xl font-bold">Envisioning Euphoria</h1>
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
      <div className=" flex-wrap text-white min-h-screen pb-50">
        <div className="mr-auto">
          <h1 className="font-light text-xl pl-10 pt-10">Overview</h1>
        </div>
        <div className="ml-auto mb-25 p-5">
          <p className="font-light pl-5 max-w-125 min-w-90 ml-auto pb-5 text-base">“A thing of beauty is a joy forever: its loveliness increases; it will never pass into nothingness; but still, like music, will vibrate in the minds of those who can hear, filling them with pleasure, and raising them to a state of bliss beyond the daily humdrum of life.”</p>
          <p className="font-light pl-5 max-w-125 min-w-90 ml-auto text-gray-500 text-base">「美しいものは永遠の喜びです。その愛らしさは増し、決して消え去ることはありません。しかし、音楽のように、聞く人の心の中で響き続け、喜びで満たし、日々の単調な生活を超えた至福の境地へと引き上げます。」</p>
        </div>
        <div className="flex flex-wrap p-5 pb-40">
          <img className="object-cover h-110 w-150" src="Seawall5.png" />
          <img className="h-75 w-90 ml-auto" src="Seawall6.png" />
        </div>
      </div>
      <div className="bg-black min-h-screen flex justify-center items-center flex-col pb-100">
        <h1 className="text-6xl mb-5">Meditate</h1>
        <p className="max-w-90 text-center mb-5">Let time slow down. Drift away as gentle tones align your mind, breath, and body.</p>
        <button className="relative overflow-hidden px-10 py-3 bg-black text-white border border-white font-semibold group">
          <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Express
          </span>
        </button>
      </div>
      <div className="bg-black min-h-screen flex justify-center items-center flex-col pb-100">
        <h1 className="text-6xl mb-5">Sleep</h1>
        <p className="max-w-90 text-center mb-5">As the world quiets, let sound cradle your thoughts. Let it carry you softly into dream.</p>
        <button className="relative overflow-hidden px-10 py-3 bg-black text-white border border-white font-semibold group">
          <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Express
          </span>
        </button>
      </div>
      <div className="bg-black min-h-screen flex justify-center items-center flex-col pb-100">
        <h1 className="text-6xl mb-5">Focus</h1>
        <p className="max-w-90 text-center mb-5">Step into still concentration. Every frequency aligns with your rhythm, anchoring you in clarity</p>
        <button className="relative overflow-hidden px-10 py-3 bg-black text-white border border-white font-semibold group">
          <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Express
          </span>
        </button>
      </div>
      <div className="bg-black min-h-screen flex justify-center items-center flex-col bg-gradient-to-b from-black to-blue-500">
        <h1 className="text-6xl mb-5 text-blue-500 ">Euphoria</h1>
        <p className="max-w-90 text-center mb-5">Pushed further into the euphoric zone, let sound elevate it. Every tone enhances the moment.</p>
        <button className="relative overflow-hidden px-10 py-3 bg-white text-blue-500 font-semibold group">
          <span className="absolute inset-0 bg-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Express
          </span>
        </button>
      </div> 
    </div>
  )
}