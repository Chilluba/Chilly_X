import React, { useState, useCallback, useEffect } from 'react';
import { UploadCloud, X } from 'lucide-react';

interface ImageUploadProps {
  initialImageUrl?: string;
  onImageUpload: (base64: string) => void;
  onImageRemove: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ initialImageUrl, onImageUpload, onImageRemove }) => {
  const [preview, setPreview] = useState<string | null>(initialImageUrl || null);
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    setPreview(initialImageUrl || null);
  }, [initialImageUrl]);

  const handleFileChange = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String);
        onImageUpload(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFileChange(event.dataTransfer.files[0]);
    }
  }, [onImageUpload]);

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleFileChange(event.target.files[0]);
    }
  };
  
  const handleRemoveImage = () => {
    setPreview(null);
    onImageRemove();
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  }

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  if (preview) {
    return (
      <div>
        <label className="block text-sm font-mono text-gray-400 mb-1">Image Preview</label>
        <div className="relative group">
          <img src={preview} alt="Project preview" className="w-full h-auto max-h-64 object-contain rounded-md bg-white/5" />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-brand-bg-900/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
            aria-label="Remove image"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-sm font-mono text-gray-400 mb-1">Project Image</label>
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`flex justify-center items-center w-full h-48 border-2 border-dashed rounded-md cursor-pointer transition-colors ${isDragOver ? 'border-brand-accent bg-white/10' : 'border-white/20 hover:border-white/40'}`}
        role="button"
        tabIndex={0}
        aria-label="Image upload dropzone"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
          aria-hidden="true"
        />
        <div className="text-center text-gray-400 pointer-events-none">
          <UploadCloud className="mx-auto h-10 w-10 mb-2" />
          <p className="text-sm">Drag & drop an image here</p>
          <p className="text-xs">or click to select a file</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;