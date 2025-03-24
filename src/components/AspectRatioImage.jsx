function AspectRatioImage({ src, alt, aspectRatio = '16/9', objectFit = 'cover' }) {
  const [paddingTop] = aspectRatio.split('/');
  const ratio = (paddingTop[1] / paddingTop[0]) * 100;

  return (
    <div style={{ width: '100%', position: 'relative', paddingTop: `${ratio}%` }}>
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit,
        }}
      />
    </div>
  );
}

export default AspectRatioImage;