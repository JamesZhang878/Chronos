import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import Image from "next/image";

type PauseModalProps = {
  handleReset: () => void;
  handleStartStop: () => void;
};

const PauseModal: React.FC<PauseModalProps> = ({
  handleReset,
  handleStartStop,
}) => {
  return (
    <div>
      <AlertDialog open={true}>
        <AlertDialogTrigger>
          <Image src="/img/play.svg" width={50} height={50} alt="play" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Break Time!</AlertDialogTitle>
            <AlertDialogDescription>
              Take a quick break before returning to your session.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => handleStartStop()}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => handleReset()}>
              New Session
            </AlertDialogAction>
            <AlertDialogAction>End Block</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PauseModal;
