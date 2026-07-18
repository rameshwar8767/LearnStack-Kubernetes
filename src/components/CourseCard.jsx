export default function CourseCard({ course }) {
  return (
    <article className="card">
      <div className="card__punches" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="card__head">
        <span className="card__code">{course.code}</span>
        {course.tag && <span className="card__tag">{course.tag}</span>}
      </div>
      <h3 className="card__title">{course.title}</h3>
      <p className="card__blurb">{course.blurb}</p>
      <div className="card__meta">
        <span>{course.author}</span>
        <span aria-hidden="true">·</span>
        <span>{course.level}</span>
      </div>
      <div className="card__foot">
        <span className="card__hours">{course.hours} hrs</span>
        <span className="card__rating">★ {course.rating}</span>
      </div>
    </article>
  );
}
