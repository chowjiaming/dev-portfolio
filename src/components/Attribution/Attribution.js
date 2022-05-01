import "./Attribution.css";

export default function Attribution() {
  return (
    <section className="attribution">
      <p className="attribution__text">
        Crafted with ♥ by{" "}
        <a
          className="attribution__text attribution__text--link"
          href="https://github.com/chowjiaming"
        >
          Joseph Chow
        </a>
        .
      </p>
    </section>
  );
}
