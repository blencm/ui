import { cn } from "../utils/utils";
import * as React from "react";
import { Button } from "../components/Button/button";
import { Modal } from "../components/modal";

type TAlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
  title?: string;
  description?: string;
  className?: string;
  cancelText?: string;
  confirmText?: string;
  children?: React.ReactNode;
};
const AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  title = "Are you sure?",
  description = "Are you sure you want to continue?",
  cancelText = "Cancel",
  confirmText = "Confirm",
  className,
  children,
}: TAlertModalProps) => {
  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onClose={onClose}
      className={className}
    >
      {children ? (
        children
      ) : (
        <div className="flex w-full items-center justify-end space-x-2 pt-6">
          <Button disabled={loading} variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            disabled={loading}
            variant="destructive"
            className={cn("text-white")}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      )}
    </Modal>
  );
};

export { AlertModal };
