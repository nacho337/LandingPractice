import data from '../../data.json';

function TwoSection() {
  const title = data['section-two'].title || '';
  const subtitleText = data['section-two'].subtitle || '';
  const subtitles = (data['section-two'].subtitles || []).filter(Boolean);

  return (
    <div className="w-full px-6 py-10">
      {/* Título centrado */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          {title.split(' ').map((word, index) => (
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
        {/* Subtítulo debajo del título */}
        {subtitleText && (
          <p className="mt-2 text-lg text-gray-600">{subtitleText}</p>
        )}
      </div>

      {/* Imagen */}
      <div className="w-full mb-8">
        <img
          src={data['section-two'].image}
          alt={data['section-two'].alt || 'Section image'}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Subtítulos alineados a la derecha */}
      <div className="flex flex-col md:items-end space-y-2">
        {subtitles.map((subtitle, index) => (
          <p key={index} className="text-lg text-gray-700 md:text-right">
            {subtitle}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TwoSection;