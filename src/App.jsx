import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CourseGrid from "./components/CourseGrid.jsx";
import Footer from "./components/Footer.jsx";
import { courses, categories } from "./data/courses.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const matchesCategory = activeCategory === "All" || c.category === activeCategory;
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.author.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const stats = {
    count: courses.length,
    instructors: new Set(courses.map((c) => c.author)).size,
    categories: categories.length - 1,
  };

  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero query={query} onQueryChange={setQuery} stats={stats} />
        <CourseGrid
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          courses={filtered}
        />
      </main>
      <Footer />
    </div>
  );
}
