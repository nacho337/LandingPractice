import data from '../../data.json';

function FourSection() {
  return (
    <div
      className="w-full h-full p-8 py-10 sm:py-12"
      style={{
        backgroundImage: `url(${data.backgrounds[1]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="sm:grid sm:grid-cols-2 gap-6 items-start">
        <p className="text-white col-span-2 text-2xl w-full lg:w-1/2 py-6 font-bold">
          {data['section-six'].title}
        </p>
        <div className="flex items-center sm:items-end gap-6 sm:gap-3 py-6 justify-center">
          <p className="text-white text-7xl">01.</p>
          <div className="flex flex-col gap-4">
            <p className="text-white text-xl font-semibold">
              {data['section-six'].subtitle1}
            </p>
            <p className="text-white text-md">
              {data['section-six'].description1}
            </p>
          </div>
        </div>
        <div className="flex items-center sm:items-end gap-3 py-6 justify-center">
          <p className="text-white text-7xl">02.</p>
          <div className="flex flex-col gap-4">
            <p className="text-white text-xl font-semibold">
              {data['section-six'].subtitle2}
            </p>
            <p className="text-white text-md w-5/6">
              {data['section-six'].description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourSection;