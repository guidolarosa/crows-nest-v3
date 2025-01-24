import Image from "next/image";
import { PiCaretDoubleDownLight } from "react-icons/pi";
import AuroraEffect from "./AuroraEffect";

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col z-10">
      <AuroraEffect className="z-10 pointer-events-none"/>
      {/* <div className="z-0 absolute top-0 left-0 w-screen h-screen">
        <Image fill src="/images/services/sala_proyeccion.jpg" alt="CN" className="opacity-50 z-0"></Image>
      </div> */}
      <div className="flex flex-col items-center gap-4 grow justify-center relative w-screen z-20">
        <div className="h-40 lg:h-52 aspect-video relative">
          <Image src="/images/logo-big.svg" fill alt="Logo"  className="object-bottom"/>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <h1 className="text-4xl font-black">CROWS NEST</h1>
          <strong className="font-normal opacity-50">
            Professional Color Grading
          </strong>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center py-20 z-20">
        <PiCaretDoubleDownLight className="text-4xl" />
      </div>
    </div>
  );
};

export default Hero;
