import data from '../../data.json';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="flex flex-col justify-center pt-10 sm:pt-20 pb-6 pr-6 pl-10 sm:px-16 bg-[#F1F8FF] mt-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-12 text-black">
        {/* Columna 1 */}
        <div className="relative flex flex-col col-span-5 justify-between sm:col-span-2 pr-6">
          <a href="/#" className="pb-4">
            <div className="flex items-center py-4 justify-center gap-3 pr-4 max-h-20 hover:animate-pulse">
              <img
                height={200}
                width={200}
                src={data['section-header'].logo}
                alt={data['section-header'].alt}
                className="sm:ml-4 xl:ml-0"
              />
            </div>
            <p className="text-base">{data['section-footer'].paragraph}</p>
          </a>
        </div>
        {/* Columna 2 */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold mb-6">
            {data['section-footer'].links.Company.name}
          </h2>
          <div className="mt-2">
            {data['section-footer'].links.Company.data.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.toLowerCase().replace(/\s+/g, '')}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <p className="sm:text-base text-sm cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary">
                    {item}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Columna 3 */}
        <div className="hidden col-span-1">
          <h2 className="text-lg font-bold mb-6">
            {data['section-footer'].links.Support.name}
          </h2>
          <div className="mt-2">
            {data['section-footer'].links.Support.data.map((item, index) => (
              <a key={index}>
                <p className="sm:text-base text-sm cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary">
                  {item}
                </p>
              </a>
            ))}
          </div>
        </div>
        {/* Columna 4 */}
        <div className="col-span-2 text-center sm:col-span-1 sm:text-left relative">
          <h2 className="text-lg font-bold mb-6">
            {data['section-footer'].links.Contact.name}
          </h2>
          <div className="mt-2">
            {data['section-footer'].links.Contact.data.map((item, index) => (
              <a key={index}>
                <p className="sm:text-base text-sm truncate cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary">
                  {item}
                </p>
              </a>
            ))}
          </div>

          <a href={data.blog.url} target="_blank" className="ml-auto">
            <div
              title={data.blog.text}
              className="text-center hover:text-primary cursor-pointer mt-4 flex items-start gap-1 justify-center sm:justify-start w-full"
            >
              <img
                width={32}
                height={32}
                src={data.blog.icon}
                alt={`${data.blog.title} icon`}
              />
              <div className="flex flex-col text-left">
                <p className="text-md md:text-lg font-bold">
                  {data.blog.title}
                </p>
                <h6 className="hidden lg:flex text-[12px] -mt-1 text-gray_default">
                  {data.blog.text}
                </h6>
              </div>
            </div>
          </a>
        </div>
        {/* Fin de las columnas */}
      </div>
      <div
        className="flex items-center gap-1 text-[12px] mt-8 text-center mx-auto"
        style={{ minWidth: 'max-content' }}
      >
        <p className="text-gray_light">{data['section-footer'].links.copy}</p>
        <p>{data['section-footer'].links['copy-name']}</p>
      </div>
    </footer>
  );
}

export default Footer;