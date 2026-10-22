// Renders HTML produced from our own content/*.md files.
export default function Markdown({ html, className = "" }: { html: string; className?: string }) {
  return <div className={`md ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
