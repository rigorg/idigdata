type Props = {
  children: React.ReactNode;
  caption?: string;
  size?: "page" | "hero";
};

export default function FilmPlate({ children, caption, size = "page" }: Props) {
  return (
    <figure className={`folio-film-plate folio-film-plate--${size}`}>
      {children}
      {caption ? (
        <figcaption className="folio-film-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
