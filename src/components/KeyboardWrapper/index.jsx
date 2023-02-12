import React, { useEffect, useState } from "react";
import RunningString from "../RunningString/RunningString";
import Keyboard from "../Keyboard/Keyboard";
import { generateStirng } from '../../lib/stringGenerators/index';
import { useSelector } from "react-redux";

export const KeyboardWrapper = ({
  isStringFinished,
  setIsStringFinished,
  taskSettings,
}) => {
  const [startWord, setStartWord] = useState("");
  const [prevLetter, setPrevLetter] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");

  const [lhfl_active, set_lhfl_active] = useState(false) // left hand little finger
  const [lhfr_active, set_lhfr_active] = useState(false) // left hand ring finger
  const [lhfm_active, set_lhfm_active] = useState(false) // left hand middle finger
  const [lhfi_active, set_lhfi_active] = useState(false) // left hand index finger
  const [rhfl_active, set_rhfl_active] = useState(false) // right hand little finger
  const [rhfr_active, set_rhfr_active] = useState(false) // right hand ring finger
  const [rhfm_active, set_rhfm_active] = useState(false) // right hand middle finger
  const [rhfi_active, set_rhfi_active] = useState(false) // right hand index finger
  const [rhft_active, set_rhft_active] = useState(false) // right hand thumb finger
  const { language } = useSelector((state) => state.DataReducer);

  // перенести буквы в редьюсер, добавить подгрузку в зависимости от языка
  const lhfl_letters = "ё12йфя"
  const lhfr_letters = "3цыч"
  const lhfm_letters = "4увс"
  const lhfi_letters = "56кеапми"
  const rhfl_letters = "0-=зхъжэ.\\"
  const rhfr_letters = "9щдю"
  const rhfm_letters = "8шлб"
  const rhfi_letters = "7нгроть"
  const rhft_letters = ""

  useEffect(() => {
    if (!currentLetter) return;
    if (lhfl_letters.includes(currentLetter)) {
      set_lhfl_active(true);
    } else if (lhfr_letters.includes(currentLetter)) {
      set_lhfr_active(true);
    } else if (lhfm_letters.includes(currentLetter)) {
      set_lhfm_active(true);
    } else if (lhfi_letters.includes(currentLetter)) {
      set_lhfi_active(true);
    } else if (rhfi_letters.includes(currentLetter)) {
      set_rhfi_active(true);
    } else if (rhfm_letters.includes(currentLetter)) {
      set_rhfm_active(true);
    } else if (rhfr_letters.includes(currentLetter)) {
      set_rhfr_active(true);
    } else if (rhfl_letters.includes(currentLetter)) {
      set_rhfl_active(true);
    } else if (currentLetter === " ") {
      set_rhft_active(true);
    }
  }, [currentLetter]);

  useEffect(() => {
    if (!prevLetter) return;
    if (lhfl_letters.includes(prevLetter) && !lhfl_letters.includes(currentLetter)) {
      set_lhfl_active(false);
    } else if (lhfr_letters.includes(prevLetter) && !lhfr_letters.includes(currentLetter)) {
      set_lhfr_active(false);
    } else if (lhfm_letters.includes(prevLetter) && !lhfm_letters.includes(currentLetter)) {
      set_lhfm_active(false);
    } else if (lhfi_letters.includes(prevLetter) && !lhfi_letters.includes(currentLetter)) {
      set_lhfi_active(false);
    } else if (rhfi_letters.includes(prevLetter) && !rhfi_letters.includes(currentLetter)) {
      set_rhfi_active(false);
    } else if (rhfm_letters.includes(prevLetter) && !rhfm_letters.includes(currentLetter)) {
      set_rhfm_active(false);
    } else if (rhfr_letters.includes(prevLetter) && !rhfr_letters.includes(currentLetter)) {
      set_rhfr_active(false);
    } else if (rhfl_letters.includes(prevLetter) && !rhfl_letters.includes(currentLetter)) {
      set_rhfl_active(false);
    } else if (currentLetter === " ") {
      set_rhft_active(false);
    }
  }, [prevLetter, currentLetter]);

  useEffect(() => {
    if (!isStringFinished && taskSettings.type) {
      setStartWord(generateStirng(taskSettings.type, taskSettings.amount, language));
    }
    if (!isStringFinished && taskSettings.description) {
      setStartWord(taskSettings.description);
    }
  }, [isStringFinished, language]);


  return (
    <>
      <RunningString
        setCurrentLetter={setCurrentLetter}
        setPrevLetter={setPrevLetter}
        startWord={startWord}
        setStartWord={setStartWord}
        isStringFinished={isStringFinished}
        setIsStringFinished={setIsStringFinished}
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
  );
};
