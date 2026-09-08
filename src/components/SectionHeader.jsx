import Reveal from './Reveal'

export default function SectionHeader({ index, eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal
      className={`section-heading ${align === 'center' ? 'mx-auto text-center items-center' : ''}`}
    >
      <div className="section-kicker">
        <span>{index}</span>
        <span className="section-kicker-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </Reveal>
  )
}
