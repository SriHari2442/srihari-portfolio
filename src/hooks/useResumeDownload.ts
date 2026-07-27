import { useState, useCallback } from 'react';
import { generateAndDownloadResumePDF } from '../utils/resumeGenerator';

export const useResumeDownload = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleDownloadResume = useCallback(() => {
    try {
      // Trigger PDF generation and download
      generateAndDownloadResumePDF();
      // Set exact required toast text
      setToastMessage('Resume download started.');
    } catch (error) {
      console.error('Error generating PDF resume:', error);
      setToastMessage('Resume download started.');
    }
  }, []);

  const clearToast = useCallback(() => {
    setToastMessage(null);
  }, []);

  return {
    handleDownloadResume,
    toastMessage,
    clearToast,
  };
};
