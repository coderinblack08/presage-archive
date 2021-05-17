import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

const useRecorder = (
  setAudio: React.Dispatch<React.SetStateAction<string>>
) => {
  const [recorder, setRecorder] = useState<MediaRecorder>();
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const { time, start, pause, reset } = useTimer();

  useEffect(() => {
    if (recorder) {
      if (recording) {
        recorder.start();
        reset();
        start();
      } else {
        if (recorder.state !== "inactive") {
          recorder.stop();
          pause();
        }
      }
    } else {
      if (recording) {
        requestRecorder().then(setRecorder).catch(console.error);
      }
      return;
    }

    const handleData = (e: BlobEvent) => {
      const url = URL.createObjectURL(e.data);
      setAudioURL(url);
      setAudio(url);
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, recording]);

  const toggleRecording = () => setRecording(!recording);
  const clearAudio = () => {
    URL.revokeObjectURL(audioURL);
    setAudioURL("");
    reset();
  };

  return { duration: time, clearAudio, toggleRecording, recording, audioURL };
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  return new MediaRecorder(stream);
}

export default useRecorder;
