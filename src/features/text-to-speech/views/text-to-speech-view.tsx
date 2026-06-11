"use client";


// With the @ alias (Clean and predictable)
import { TextInputPanel } from "@/features/text-to-speech/components/text-input-panel";
import { VoicePreviewPlaceholder } from "@/features/text-to-speech/components/voice-preview-placeholder";
import { SettingsPanel } from "@/features/text-to-speech/components/settings-panel";
import {
  TTSFormValues,
  TextToSpeechForm,
  defaultTTSValues
 } from "@/features/text-to-speech/components/text-to-speech-form";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/routers/client";
import { TTSVoicesProvider } from "../context/tts-voices-context";

export function TextToSpeechView({
  initialValues,
} : {
    initialValues?: Partial<TTSFormValues>;
}) {
  const trpc = useTRPC();
  const {
    data: voices,
  } = useSuspenseQuery(trpc.voices.getAll.queryOptions());

  const { custom : customVoices, system: systemVoices } = voices;

  const allVoices = [...customVoices, ...systemVoices];
  const fallbackVoiceId = allVoices[0]?.id ?? "";
  
  //Requested voice may be no longer exist ( deleted) fall back  to first available
  const resolvedVoiceId = 
        initialValues?.voiceId &&
        allVoices.some((v)  => v.id === initialValues.voiceId)
          ? initialValues.voiceId
          : fallbackVoiceId;

          const defaultValues : TTSFormValues = {
              ...defaultTTSValues,
              ...initialValues,
              voiceId : resolvedVoiceId,
          };

  return (
    <TTSVoicesProvider value={{ customVoices, systemVoices, allVoices}}>
    <TextToSpeechForm defaultValues={defaultValues}>
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <TextInputPanel />
        <VoicePreviewPlaceholder />
      </div>
      <SettingsPanel />
    </div>

    </TextToSpeechForm>
    </TTSVoicesProvider>
  );
}