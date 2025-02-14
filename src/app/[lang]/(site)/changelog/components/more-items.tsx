const MoreItems = (props: { numberOfItems: number }) => {
  const { numberOfItems } = props;

  return (
    <div className="w-10 h-6 flex absolute z-[999] bottom-4 right-4 bg-gradient-to-b from-[#6868F7] to-[#4C40D9] rounded-full text-center text-[12px] items-center justify-center text-white font-semibold leading-[14.52px]">
      +{numberOfItems}
    </div>
  );
};

export default MoreItems;
