import clsx from "clsx";
import Vimeo from "@u-wave/react-vimeo";

const VideoModal = ({
  open,
  currentVimeoId,
  setCurrentVimeoId,
}: {
  open: boolean;
  currentVimeoId: string;
  setCurrentVimeoId: (vimeoId?: string) => void;
}) => {
  return (
    <div
      className={clsx(
        "fixed flex items-center justify-center w-screen h-screen z-40 opacity-0 top-0 left-0 pointer-events-none",
        open && "opacity-100 pointer-events-auto"
      )}
    >
      <div
        className="bg-[rgba(0,0,0,0.5)] backdrop-blur-md w-full h-full left-0 absolute z-10"
        onClick={() => {
          setCurrentVimeoId();
        }}
      ></div>
      <div
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={clsx("bg-black aspect-video z-20 w-9/12")}
      >
        <Vimeo video={currentVimeoId} autoplay muted={false}/>
      </div>
    </div>
  );
};

export default VideoModal;
