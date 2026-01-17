export default function Ratings({ rating }) {
  const ratingStars = Array(5).fill("empty-star");

  const fullStars = Math.floor(rating);
  const remainder = rating % 1;

  for (let i = 0; i < fullStars && i < 5; i++) {
    ratingStars[i] = "full-star";
  }

  if (fullStars < 5) {
    ratingStars[fullStars] =
      remainder <= 0.25
        ? "empty-star"
        : remainder <= 0.75
        ? "half-star"
        : "full-star";
  }

  return (
    <div className="rating">
      <p>{rating.toFixed(1)}</p>
      <div className="stars">
        {ratingStars.map((star, i) => (
          <img key={i} src={`/${star}.png`} alt={star} />
        ))}
      </div>
    </div>
  );
}
