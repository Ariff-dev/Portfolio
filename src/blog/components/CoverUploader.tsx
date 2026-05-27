import { useRef, useState } from "react";
import { FaCloudUploadAlt, FaTimes, FaSpinner } from "react-icons/fa";
import { uploadToCloudinary } from "../lib/cloudinary";

interface CoverUploaderProps {
  value: string | null;
  onChange: (url: string | null) => void;
}

export const CoverUploader = ({ value, onChange }: CoverUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed (JPG, PNG, WebP…)");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be smaller than 10 MB");
      return;
    }

    setError(null);
    setIsUploading(true);
    setProgress(0);

    try {
      const result = await uploadToCloudinary(file, setProgress);
      onChange(result.secure_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed. Check your Cloudinary config.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="cover-uploader">
      {value ? (
        <div className="cover-uploader__preview">
          <img src={value} alt="Cover image" className="cover-uploader__img" />
          <button
            type="button"
            className="cover-uploader__remove"
            onClick={() => onChange(null)}
            aria-label="Remove cover image"
          >
            <FaTimes size={14} />
          </button>
        </div>
      ) : (
        <div
          className={`cover-uploader__zone ${isDragging ? "cover-uploader__zone--drag" : ""} ${isUploading ? "cover-uploader__zone--uploading" : ""}`}
          onClick={() => !isUploading && inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          aria-label="Upload cover image"
          onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        >
          {isUploading ? (
            <div className="cover-uploader__uploading">
              <FaSpinner size={24} className="cover-uploader__spinner" />
              <span>Uploading… {progress}%</span>
              <div className="cover-uploader__progress-bar">
                <div className="cover-uploader__progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
          ) : (
            <>
              <FaCloudUploadAlt size={32} className="cover-uploader__icon" />
              <span className="cover-uploader__label">
                Drag an image or <u>click here</u>
              </span>
              <span className="cover-uploader__hint">PNG, JPG, WebP · Max 10 MB</span>
            </>
          )}
        </div>
      )}

      {error && <p className="cover-uploader__error">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: "none" }}
        aria-hidden="true"
      />
    </div>
  );
};
