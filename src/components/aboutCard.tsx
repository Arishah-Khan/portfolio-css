import "@/styles/about-card.css"

interface CardProps {
  degree: string;
  institute: string;
  year: string;
}

export default function Card({ degree, institute, year }: CardProps) {
  return (
    <div className="card-container">
      <h2 className="card-title">
        {degree}
      </h2>
      <h4 className="card-year">
        {year}
      </h4>
      <h6 className="card-institute">
        {institute}
      </h6>
    </div>
  );
}
