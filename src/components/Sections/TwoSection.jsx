import data from '../../data.json';
import { IoPlaySharp } from 'react-icons/io5';

function TwoSection() {
  return (
    <div className="relative flex justify-center items-center mt-8 sm:mt-20 px-4 sm:px-0 mb-8 overflow-hidden">
      <div
        className="absolute rounded-md inset-0 z-40 flex justify-center items-center left-4 sm:left-0 right-4 sm:right-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0) 14.9%, rgba(255, 255, 255, 0) 36.77%, rgba(33, 137, 226, 0.85) 89.57%)',
          zIndex: 100,
        }}
      >
        <button className="mb-0 relative w-20 h-20 p-3 rounded-full bg-white bg-opacity-20 transition duration-300 ease-in-out hover:bg-opacity-30 active:bg-opacity-40">
          <div className="absolute text-white bg-white rounded-full bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <IoPlaySharp color="white" size={64} className="p-3 pl-4" />
          </div>
        </button>
      </div>
      <img
        src={data['section-four'].image}
        alt={data['section-four'].alt}
        width="100%"
        height="auto"
        className="mx-auto relative z-10 aspect-auto object-cover shadow-sm"
      />
      <div className="absolute grid grid-cols-2 bottom-[2%] md:bottom-[5%] lg:bottom-[10%] gap-10 px-6 lg:px-0 lg:pl-14 items-end">
        <p
          className="text-left text-white text-xs md:text-3xl font-bold w-[90%]"
          style={{ textShadow: '1px 1px 2px black', zIndex: 100 }}
        >
          {data['section-four'].title}
        </p>
        <div className="flex flex-col">
          <p
            className="text-left text-white text-xs md:text-xl lg:text-2xl"
            style={{ textShadow: '1px 1px 2px black', zIndex: 100 }}
          >
            {data['section-four'].subtitle}
          </p>
          {/* <div className="hidden items-center justify-start gap-12 pr-24 mt-1 text-xs md:text-base">
            <div className="flex items-center">
              <img
                src={data['section-four'].band}
                alt={data['section-four'].band_alt}
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <div className="text-white flex flex-col sm:-space-y-1 ml-4">
                <p className="font-semibold">
                  {data['section-four'].band_text1}
                </p>
                <p className="tracking-wider" style={{ lineHeight: '1' }}>
                  {data['section-four'].band_text2}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={data['section-four'].pill}
                alt={data['section-four'].pill_alt}
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <div className="text-white flex flex-col sm:-space-y-1 ml-4">
                <p className="font-semibold">
                  {data['section-four'].pill_text1}
                </p>
                <p className="tracking-wider" style={{ lineHeight: '1' }}>
                  {data['section-four'].pill_text2}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TwoSection;