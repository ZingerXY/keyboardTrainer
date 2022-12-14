import React, { useEffect, useState } from "react";
import RunningString from "../RunningString/RunningString";
import Keyboard from "../Keyboard/Keyboard";

export const KeyboardWrapper = () => {
  const [startWord, setStartWord] = useState('пример текста пример текста пример текста пример текста');
  const [prevLetter, setPrevLetter] = useState("")
  const [currentLetter, setCurrentLetter] = useState("")

  const [lhfl_active, set_lhfl_active] = useState(false) // left hand little finger
  const [lhfr_active, set_lhfr_active] = useState(false) // left hand ring finger
  const [lhfm_active, set_lhfm_active] = useState(false) // left hand middle finger
  const [lhfi_active, set_lhfi_active] = useState(false) // left hand index finger
  const [rhfl_active, set_rhfl_active] = useState(false) // right hand little finger
  const [rhfr_active, set_rhfr_active] = useState(false) // right hand ring finger
  const [rhfm_active, set_rhfm_active] = useState(false) // right hand middle finger
  const [rhfi_active, set_rhfi_active] = useState(false) // right hand index finger
  const [rhft_active, set_rhft_active] = useState(false) // right hand thumb finger

  useEffect(() => {
    if (!currentLetter) return
    if ("ё12йфя".includes(currentLetter)) {
      set_lhfl_active(true)
    } else if ("3цыч".includes(currentLetter)) {
      set_lhfr_active(true)
    } else if ("4увс".includes(currentLetter)) {
      set_lhfm_active(true)
    } else if ("56кеапми".includes(currentLetter)) {
      set_lhfi_active(true)
    } else if ("7нгроть".includes(currentLetter)) {
      set_rhfi_active(true)
    } else if ("8шлб".includes(currentLetter)) {
      set_rhfm_active(true)
    } else if ("9щдю".includes(currentLetter)) {
      set_rhfr_active(true)
    } else if ("0-=зхъжэ.\\".includes(currentLetter)) {
      set_rhfl_active(true)
    } else if (currentLetter === " ") {
      set_rhft_active(true)
    }
  }, [currentLetter])

  useEffect(() => {
    if (!prevLetter) return
    if ("ё12йфя".includes(prevLetter)) {
      set_lhfl_active(false)
    } else if ("3цыч".includes(prevLetter)) {
      set_lhfr_active(false)
    } else if ("4увс".includes(prevLetter)) {
      set_lhfm_active(false)
    } else if ("56кеапми".includes(prevLetter)) {
      set_lhfi_active(false)
    } else if ("7нгроть".includes(prevLetter)) {
      set_rhfi_active(false)
    } else if ("8шлб".includes(prevLetter)) {
      set_rhfm_active(false)
    } else if ("9щдю".includes(prevLetter)) {
      set_rhfr_active(false)
    } else if ("0-=зхъжэ.\\".includes(prevLetter)) {
      set_rhfl_active(false)
    } else if (currentLetter === " ") {
      set_rhft_active(false)
    }
  }, [prevLetter])

  return <>
    <RunningString
      setCurrentLetter={setCurrentLetter}
      setPrevLetter={setPrevLetter}
      startWord={startWord} setStartWord={setStartWord}
    />
    <Keyboard
      lhfl_active={lhfl_active}
      lhfr_active={lhfr_active}
      lhfm_active={lhfm_active}
      lhfi_active={lhfi_active}
      rhfl_active={rhfl_active}
      rhfr_active={rhfr_active}
      rhfm_active={rhfm_active}
      rhfi_active={rhfi_active}
      rhft_active={rhft_active}
      startWord={startWord}
    />
  </>
}