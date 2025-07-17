import data from '../../data.json';

function Project() {
  return (
    <section id="project">
      <div className="relative grid text-center gap-4 my-4">
        <div
          className="w-full h-full p-0 py-0"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative w-full">
            <img
              src={data.project.picture}
              alt={`${data.project.title} image`}
              className="w-full h-full object-cover"
            />
            <div className="w-full md:absolute bottom-0 left-0 md:bg-opacity-10 bg-[#D3E8FBB2] z-20 p-4">
              <div className="flex items-center justify-center sm:gap-6 text-primary font-bold text-center">
                <div className="flex items-center logo-project">
                  <img
                    src={data.project.logo}
                    alt={data.project.alt}
                    className="w-[64px] hidden sm:flex"
                    style={{
                      filter: 'drop-shadow(1px 1px 2px gray)',
                    }}
                  />
                </div>
                <p
                  className="text-xl sm:text-2xl md:text-4xl text-center w-4/6"
                  style={{ textShadow: '1px 1px 2px gray' }}
                >
                  {data.project.title}
                </p>
              </div>
              <p
                className="w-[90%] mx-auto text-gray_dark text-italic py-4 md:py-8 font-semibold text-center"
                style={{ textShadow: '1px 1px 2px white' }}
              >
                {data.project.paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;