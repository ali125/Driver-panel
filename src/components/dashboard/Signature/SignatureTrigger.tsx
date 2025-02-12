import React, { useState } from "react";
import Title from "@/components/common/Title";
import { Button, Modal } from "antd";
import Signature from "./Signature";

type Props = {
  isSigned: boolean;
  onDone: (params: { file: any; url: string }) => void;
};

const SignatureTrigger: React.FC<Props> = ({ isSigned, onDone }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmitSignature = (params: { file: any; url: string }) => {
    onDone(params);
    handleClose();
  };

  return (
    <>
      <Button
        type={isSigned ? "default" : "primary"}
        shape="default"
        size="large"
        className="w-full text-lg font-bold"
        onClick={() => setIsOpen(true)}
      >
        {isSigned ? "اصلاح امضا" : "امضا"}
      </Button>
      <Modal
        title={
          <Title className="mb-4 flex items-center gap-2">انتخاب امضا</Title>
        }
        footer={null}
        open={isOpen}
        onCancel={handleClose}
      >
        <Signature onChange={handleSubmitSignature} />
      </Modal>
    </>
  );
};

export default SignatureTrigger;
