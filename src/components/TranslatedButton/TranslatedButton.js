import React from "react";
import * as styles from "./TranslatedButton.module.css";
import { Toggle } from "../ui/toggle";

import { GameStatusContext } from "../../providers/GameStatusProvider";
import { Button } from "../ui/button";

function TranslatedButton({ word, fullCandidateSize }) {
  //const fontSizeByWordLength = 9characters works with 0.6rem

  function getFontSize(word) {
    const baseLength = 7;
    const wordLength = word.length;
    let fontSize = 1;
    if (wordLength > baseLength) {
      const numExtraChars = wordLength - baseLength;
      fontSize = fontSize - numExtraChars * 0.1;
      fontSize = Math.max(0.5, fontSize);
      return `${fontSize}em`;
    } else {
      return null;
    }
  }
  // word = "washingtonian";
  return (
    <Button
      className={styles.button}
      variant="outline"
    >
      <p
        style={{ fontSize: getFontSize(word) }}
        className="font-space-mono uppercase sm:text-xs md:text-xs"
      >
        {word}
      </p>
    </Button>
  );
}

export default TranslatedButton;
