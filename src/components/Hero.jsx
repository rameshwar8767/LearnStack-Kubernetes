export default function Hero({ query, onQueryChange, stats }) {
  return (
    <section className="hero" id="top">
      <div className="hero__stamp" aria-hidden="true">EST. 2026</div>
      <h1 className="hero__title">
        Browse the <em>stacks.</em>
        <br />
        Borrow a skill.
      </h1>
      <p className="hero__sub">
        A small, honest catalog of courses — no autoplay trailers, no fake urgency
        timers. Just {stats.count} courses, filed by subject, waiting to be checked out.
      </p>

      <div className="drawer">
        <span className="drawer__label">Card catalog</span>
        <input
          className="drawer__input"
          type="text"
          placeholder="Search by title, topic or instructor…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Search courses"
        />
      </div>

      <dl className="hero__stats">
        <div>
          <dt>Courses</dt>
          <dd>{stats.count}</dd>
        </div>
        <div>
          <dt>Instructors</dt>
          <dd>{stats.instructors}</dd>
        </div>
        <div>
          <dt>Subjects</dt>
          <dd>{stats.categories}</dd>
        </div>
      </dl>
    </section>
  );
}
