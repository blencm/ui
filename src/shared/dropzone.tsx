import * as React from "react";
import { Accept, DropzoneOptions, useDropzone } from "react-dropzone";
import { cn } from "../utils/utils";

export type DropzoneProps = {
  label?: string;
  description?: string;
  descriptionActive?: string;
  onChange?: (value: File[]) => void;
  onDrop?: (value: File[]) => void;
  value?: File[];
  className?: string;
  descriptionClassName?: string;
  dropzoneClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
  accept?: Accept;
  options?: DropzoneOptions;
};

function Dropzone({
  label,
  onChange,
  onDrop,
  value,
  className,
  description = "Drag and drop some files here, or click to select files",
  descriptionActive = "Drop the files here ...",
  accept,
  options,
  descriptionClassName,
  dropzoneClassName,
  valueClassName,
  labelClassName,
}: DropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      onChange?.(acceptedFiles);
      onDrop?.(acceptedFiles);
    },
    accept,
    ...options,
  });

  return (
    <div className={cn("space-y-2", className)}>
      {label && <p className={cn("font-medium", labelClassName)}>{label}</p>}
      <div
        {...getRootProps()}
        className={cn(
          "cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400",
          isDragActive && "border-blue-500 bg-blue-50",
          dropzoneClassName
        )}
      >
        <input {...getInputProps()} />
        <p className={cn("text-gray-600", descriptionClassName)}>
          {isDragActive ? descriptionActive : description}
        </p>
      </div>

      {value && value.length > 0 && (
        <ul className={cn("text-sm text-gray-700 space-y-1", valueClassName)}>
          {value.map((file, idx) => (
            <li key={idx}>&bull; {file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { Dropzone };
