import { ChangeEvent } from "react";
import { useUploadsFilesMutation } from "../../../../services/files/uploadsFiles";
import { useEffect } from "react";
type TypeUploadFile = (
  onChange: (...event: any[]) => void,
  folder?: string
) => {
  isLoading: boolean;
  uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const useUploadFiles: TypeUploadFile = (onChange, folder) => {
  const [upload, { isLoading, isSuccess, res }] = useUploadsFilesMutation({
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      isSuccess,
      isLoading,
      res: data?.[0],
    }),
  });

  useEffect(() => {
    if (res) onChange(`http://localhost:5000${res?.url}`);
  }, [isSuccess]);

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    const formData = new FormData();
    formData.append("file", files[0]);

    await upload({ file: formData, folder });
  };

  return { isLoading, uploadFile };
};
