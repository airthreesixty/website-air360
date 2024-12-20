const FeatureCard = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-[24px] lg:gap-[48px] items-center justify-center text-primary font-hero">
      <div className="relative flex items-center p-[2px] lg:p-[4px] justify-center w-full max-w-[572px] rounded-[20px] bg-gradient-5 drop-shadow-gradient-5">
        <div className="relative overflow-hidden w-full h-full pl-[24px] pt-[24px] lg:pl-[48px] lg:pt-[48px] bg-white rounded-[18px] lg:rounded-[16px]">
          <div className="pr-[24px] lg:pr-[48px]">
            <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black">
              On-Page-Analytics
            </h2>
            <p className="mt-[8px] lg:mt-[16px] textp leading-[28px] lg:leading-[32px] tracking-[-0.3px]">
              Measure overall how many users or companies use, adopt and return
              to your features.
            </p>
          </div>
          <div className="mt-[24px] lg:mt-[48px] p-[2px] lg:p-[4px] rounded-tl-[20px] bg-gradient-5 drop-shadow-gradient-5 relative bottom-[-2px] lg:bottom-[-4px] right-[-2px] lg:right-[-4px] w-full lg:w-[524px] h-full lg:h-[426px] drop-shadow-multi-colored">
            <div className="relative w-full h-full bg-white rounded-tl-[18px] lg:rounded-tl-[16px]">
              <img
                src="/sunburst.png"
                className="w-full h-full object-cover rounded-tl-[18px] lg:rounded-tl-[16px]"
                alt="Computed Traits"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center p-[2px] lg:p-[4px] justify-center w-full max-w-[572px] rounded-[20px] bg-gradient-5 drop-shadow-gradient-5">
        <div className="relative overflow-hidden w-full h-full pl-[24px] pt-[24px] lg:pl-[48px] lg:pt-[48px] bg-white rounded-[18px] lg:rounded-[16px]">
          <div className="pr-[24px] lg:pr-[48px]">
            <h2 className="w-full text-[24px] leading-[34px] lg:text-[40px] lg:leading-[50px] font-black">
              On-Page-Analytics
            </h2>
            <p className="mt-[8px] lg:mt-[16px] textp leading-[28px] lg:leading-[32px] tracking-[-0.3px]">
              Measure overall how many users or companies use, adopt and return
              to your features.
            </p>
          </div>
          <div className="mt-[24px] lg:mt-[48px] p-[2px] lg:p-[4px] rounded-tl-[20px] bg-gradient-5 drop-shadow-gradient-5 relative bottom-[-2px] lg:bottom-[-4px] right-[-2px] lg:right-[-4px] w-full lg:w-[524px] h-full lg:h-[426px] drop-shadow-multi-colored">
            <div className="relative w-full h-full bg-white rounded-tl-[18px] lg:rounded-tl-[16px]">
              <img
                src="/sunburst.png"
                className="w-full h-full object-cover rounded-tl-[18px] lg:rounded-tl-[16px]"
                alt="Computed Traits"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
