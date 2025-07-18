import data from '../../data.json';

function Hero() {
  const words = data['section-one'].title.split(' ');

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Imagen de fondo expandida */}
      <img
        src={data['section-one'].image}
        alt={data['section-one'].alt}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Capa oscura opcional para mejorar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Título centrado sobre la imagen */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <h2
          className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          {words.map((word, index) => (
            <span
              key={index}
              style={{
                color: word === 'Connecting' ? '#2B88D9' : 'inherit',
              }}
            >
              {word}{' '}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}

export default Hero;