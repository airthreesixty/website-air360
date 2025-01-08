import ExportedImage from "next-image-export-optimizer";

const Signature = () => {
  return (
    <ExportedImage
      alt="signature"
      src="/images/signature.png"
      width={160}
      height={94}
    />
  );
};

export default Signature;
