import { SectionLabel } from "./SectionLabel";

export function PageHeader({ index, kicker, title, intro }: {
  index: string;
  kicker: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="interior-header">
      <div className="site-container">
        <SectionLabel index={index}>{kicker}</SectionLabel>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </header>
  );
}
