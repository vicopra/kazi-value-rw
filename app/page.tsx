const ALT = "KAZI - Coming Soon. Our new website will be available soon.";

export default function ComingSoon() {
  return (
    <main className="stage">
      {/* Decorative blurred copy of the artwork; fills any space the
          full artwork does not cover so there are never plain bars. */}
      <div className="backdrop" aria-hidden="true" />

      {/* Landscape / desktop / tablet: the full artwork */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="art"
        src="/kazi-coming-soon.webp"
        alt={ALT}
        width={1672}
        height={941}
        decoding="async"
        fetchPriority="high"
      />

      {/* Portrait phones: the same artwork shown as two large, un-stretched
          crops (phone on top, KAZI + Coming Soon below) so everything stays
          big and readable. Hidden on landscape screens. */}
      <div className="portrait" role="img" aria-label={ALT}>
        <div className="portrait-inner">
          <div className="crop crop-phone" />
          <div className="crop crop-message" />
        </div>
      </div>
    </main>
  );
}
