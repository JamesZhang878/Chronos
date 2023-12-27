import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";

type PauseModalProps = {
  handleReset: () => void;
  handleStartStop: () => void;
};

const PauseModal: React.FC<PauseModalProps> = ({
  handleReset,
  handleStartStop,
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleClose = () => {
    setOpen(false);
    handleStartStop();
  };
  return (
    <Dialog open={open} onOpenChange={() => handleClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Break Time!</DialogTitle>
          <DialogDescription>
            Take a quick break before returning to your session.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="reset-button" onClick={() => handleReset()}>
            {" "}
            New Session
          </Button>
          <Button
            className="end-button"
            onClick={() => console.log("END BLOCK")}
          >
            {" "}
            End Block
          </Button>
          <Button className="cancel-button" onClick={() => handleStartStop()}>
            {" "}
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PauseModal;
