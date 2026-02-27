export default function FooterMap() {
  return (
    <div className="h-48 w-full overflow-hidden rounded-lg lg:h-full">
      <iframe
        src="https://www.google.com/maps?q=H%C3%A4uslinger+Str.+5%2C+91056+Erlangen&output=embed&hl=de"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Standort von Hubert's Hausmeister Service GmbH auf Google Maps"
      />
    </div>
  );
}
