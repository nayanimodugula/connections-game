import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";

function InfoModal() {
  return (
    <BaseModal
      title={<h6 className="font-space-mono"> How To Play Groupology? </h6>}
      trigger={<Info className="mr-4" />}
      initiallyOpen={false}
      actionButtonText={<p className="font-space-mono"> Got it! </p>}
    >
      <p className="font-space-mono" >
        Welcome to WordQuest! Immerse yourself in language exploration. Group words into themed sets, each unlocking new linguistic adventures. Sharpen your skills, challenge friends, and embark on a journey of learning and fun!
        </p>
    </BaseModal>
  );
}

export default InfoModal;
