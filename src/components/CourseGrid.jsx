import CourseCard from "./CourseCard.jsx";

export default function CourseGrid({ categories, activeCategory, onCategoryChange, courses }) {
  return (
    <section className="catalog" id="catalog">
      <div className="catalog__head">
        <h2>The Stacks</h2>
        <div className="catalog__filters" role="tablist" aria-label="Filter by subject">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`chip ${activeCategory === cat ? "chip--active" : ""}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {courses.length === 0 ? (
        <p className="catalog__empty">
          No cards match that search. Try a different title, topic or instructor.
        </p>
      ) : (
        <div className="catalog__grid">
          {courses.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}
