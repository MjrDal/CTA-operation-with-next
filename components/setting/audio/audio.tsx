"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function RecAudio() {
  const [blob, setBlob] = useState<Blob | null>(null);
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);

    const formDataAudio = new FormData();
    formDataAudio.append("audio", blob);
    console.log(formDataAudio);
    setBlob(blob);

    // try {
    //   const res = await fetch("/api/upload", {
    //     method: "POST",
    //     body: formDataAudio,
    //   });

    //   if (!res.ok) {
    //     console.error("something went wrong. no responce");
    //     return;
    //   }
    // } catch (error) {
    //   console.error("something went wrong");
    // }
  };

  return (
    <div>
      {!blob ? (
        <div>
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
          />
          <button onClick={recorderControls.stopRecording}>
            Stop recording
          </button>
        </div>
      ) : null}
      {blob ? <Button>Téléchargement</Button> : null}
      {blob ? (
        <Button onClick={() => window.location.reload()}>Recommencez</Button>
      ) : null}
    </div>
  );
}
