import ExportedImage from "next-image-export-optimizer";

const Signature = () => {
  return (
    <ExportedImage
      alt="signature"
      src="/images/signature.png"
      width={80}
      height={47}
    />
  );
};

export default Signature;
