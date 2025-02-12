import React, { useCallback, useRef } from "react";
import SignaturePad from "react-signature-canvas";

import ReactSignatureCanvas from "react-signature-canvas";
import { Button } from "antd";

type Props = {
  onChange: (param: { url: string; file: any }) => void;
};

const Signature: React.FC<Props> = ({ onChange }) => {
  const sigPad = useRef<ReactSignatureCanvas | null>(null);

  const handleClear = useCallback(() => {
    if (sigPad.current) {
      sigPad.current.clear();
      // onChange({ url: null, file: null });
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (sigPad.current) {
      const dataUrl = sigPad.current.getTrimmedCanvas().toDataURL("image/png");

      const date = new Date().getTime();
      const fileNameDate = date.toString();
      const fileName = `${fileNameDate}.png`;

      sigPad.current.getTrimmedCanvas().toBlob(
        (blob: any) => {
          if (blob) {
            const name = fileName.split(".")[0];
            const nameExt = fileName.split(".")[1];
            const blobExt = blob.type.split("/")[1];
            blob.name = nameExt === blobExt ? fileName : `${name}.${blobExt}`;
            // resolve(blob);
            console.log(blob);
            onChange({ url: dataUrl, file: blob });
          }
        },
        "image/png",
        1
      );
    }
  }, [onChange]);

  return (
    <div className="flex h-[60vh] w-full flex-col gap-4">
      <div className="h-full w-full rounded-md border bg-white">
        <SignaturePad canvasProps={{ className: "sigPad" }} ref={sigPad} />
      </div>
      <div className="flex items-center gap-4">
        <Button
          type="default"
          shape="default"
          className="w-1/3"
          size="large"
          onClick={handleClear}
        >
          پاک کردن
        </Button>
        <Button
          type="primary"
          shape="default"
          className="w-full"
          size="large"
          onClick={handleSubmit}
        >
          ثبت امضا
        </Button>
      </div>
    </div>
  );
};

export default Signature;
