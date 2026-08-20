import { AvatarIcon } from '@radix-ui/react-icons';
import { CameraIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Accept, DropzoneOptions, useDropzone } from 'react-dropzone';

import { cn } from '../utils/utils';

export type FileUploadProps = {
  label?: string;
  onChange: (value: File[]) => void;
  value?: File[];
  className?: string;
  classNameContent?: string;
  accept?: Accept;
  options?: DropzoneOptions;
};

function FileUpload({
  onChange,
  value = [],
  label = 'Add Image',
  className,
  classNameContent,
  accept = { 'image/*': [] },
  options
}: FileUploadProps) {
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop: (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    ...options
  });

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'relative h-36 w-36 overflow-hidden rounded-full bg-gray-200 shadow-2xl',
          classNameContent
        )}
      >
        <div {...getRootProps({ className: 'dropzone cursor-pointer' })}>
          <input {...getInputProps()} />
          {value.length > 0 ? (
            <ImagePreview file={value[0]} />
          ) : (
            <AvatarIcon className="h-36 w-36 text-gray-100" />
          )}

          <p className="absolute -bottom-5 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center bg-gray-300 bg-opacity-50 py-1 text-xs font-normal text-muted-foreground">
            <CameraIcon className="h-4 w-4 text-muted-foreground" />
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function ImagePreview({ file }: { file: File }) {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setObjectUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return objectUrl ? (
    <img
      src={objectUrl}
      alt="Preview"
      className="absolute h-full w-full rounded-full object-cover"
    />
  ) : null;
}

export { FileUpload, ImagePreview };
