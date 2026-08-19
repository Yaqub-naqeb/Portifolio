export default function SectionHeading({ background, title, label }) {
  return (
    <div className="my-6 sm:my-8 md:my-10 lg:my-12">
      <h2 aria-label={label || title} className="mb-[-3rem]">
        <span
          aria-hidden="true"
          className="block text-center text-[4.5rem] sm:text-8xl lg:text-[8rem] font-semibold opacity-[0.6] text-[#ADD6E84F] px-3 leading-none break-words"
        >
          {background}
        </span>
        <span className="block text-[2rem] sm:text-[2.4rem] text-[#ADD6E8] -translate-y-12 sm:-translate-y-16 text-center">
          {title}
        </span>
      </h2>
    </div>
  );
}
