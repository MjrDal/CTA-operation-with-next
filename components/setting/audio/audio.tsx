"use client";

import { uploadAction } from "@/actions/upload";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

interface Props {
  id: string;
  radio: string | null;
}

export default function RecAudio({ id, radio }: Props) {
  const interventionId = id;
  const interventionRadio = radio;
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
    setBlob(blob);
  };

  async function upload(blob: Blob) {
    const formDataAudio = new FormData();
    formDataAudio.append("audio", blob);
    uploadAction(formDataAudio, id, radio);
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
    window.location.reload();
  }
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
      {blob ? (
        <Button
          onClick={() => {
            upload(blob);
          }}
        >
          Téléchargement
        </Button>
      ) : null}
      {blob ? (
        <Button onClick={() => window.location.reload()}>Recommencez</Button>
      ) : null}
    </div>
  );
}
