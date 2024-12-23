import { useState } from "react";
import CardIcon from "../img/cards-icon.svg";
import { Link } from "react-router-dom";
import clickSound from "../audio/punchy-taps-ui-2.mp3";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<string>("6");

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;

    audio.play();
  };

  const handleSelectMode = (mode: string) => {
    setSelectedMode(mode);
    playClickSound();
  };

  // const [tourCompleted, setTourCompleted] = useState(() => {
  //   // Retrieve the tour run status from session storage
  //   const status = localStorage.getItem("homeTourCompleted");
  //   // Parse the status as boolean (if it exists), default to false if not found
  //   return status ? JSON.parse(status) : false;
  // });

  // useEffect(() => {
  //   // Update local storage when tourCompleted changes
  //   localStorage.setItem("homeTourCompleted", JSON.stringify(tourCompleted));
  // }, [tourCompleted]); // Update whenever tourCompleted changes

  const startTour = () => {
    // delete the tour run status in local storage
    playClickSound();
    localStorage.removeItem("homeTourCompleted");
    localStorage.removeItem("playTourCompleted");

    //reload the page
    window.location.reload();
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={CardIcon} alt="icon" className="h-32 mb-7 card-icon" />
        <div className="flex flex-col gap-3">
          <div className="grid w-56 grid-cols-2 p-1 font-semibold border rounded-lg border-primary dark:border-secondary game-mode">
            <button
              type="button"
              title="4 Card Mode"
              onClick={() => handleSelectMode("4")}
              className={`rounded-md py-1 ${selectedMode === "4"
                ? "bg-primary text-secondary dark:bg-secondary dark:text-primary"
                : ""
                }`}
            >
              <p>4 Card</p>
            </button>
            <button
              type="button"
              title="6 Card Mode"
              onClick={() => handleSelectMode("6")}
              className={`rounded-md py-1 ${selectedMode === "6"
                ? "bg-primary text-secondary dark:bg-secondary dark:text-primary "
                : ""
                }`}
            >
              <p>6 Card</p>
            </button>
          </div>
          <Link
            onClick={playClickSound}
            to={`/play/${selectedMode}`}
            className="!w-56 h-10 keyboard flex items-center justify-center play-button"
          >
            Play
          </Link>
          <Link
            onClick={playClickSound}
            to="/how-to-play"
            className="!w-56 h-10 keyboard flex items-center justify-center tutorial"
          >
            How to play
          </Link>
          <button
            onClick={startTour}
            className="!w-56 h-10 keyboard flex items-center justify-center tutorial"
          >
            Start Tour
          </button>
        </div>
      </div>
    </div>
  );
}
