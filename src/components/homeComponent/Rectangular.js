import { PROFILE } from "@/data/profile";

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    href: PROFILE.facebook,
    src: "/images/social/facebook.png",
  },
  {
    label: "Instagram",
    href: PROFILE.instagram,
    src: "/images/social/instagram.png",
  },
  {
    label: "LinkedIn",
    href: PROFILE.linkedin,
    src: "/images/social/linkedin.png",
  },
  {
    label: "GitHub",
    href: PROFILE.github,
    src: "/images/social/github.png",
  },
];

export default function Rectangular() {
  return (
    <div className="flex rounded-lg gap-2 sm:gap-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 transition-all duration-300 backdrop-blur-sm hover:scale-105 bg-[#9cd5ee64] hover:bg-[#9cd5ee80] dark:bg-[#505C62] dark:hover:bg-[#505C6290]">
      {SOCIAL_ICONS.map((social) => (
        <a
          key={social.label}
          target="_blank"
          rel="noopener noreferrer"
          href={social.href}
          aria-label={social.label}
          className="flex items-center justify-center min-w-[40px] min-h-[36px] p-1 sm:p-1.5 rounded-md active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:brightness-75 dark:hover:brightness-125 transition-all duration-300 hover:scale-110"
        >
          <img
            src={social.src}
            className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7"
            alt=""
            width={28}
            height={28}
            loading="lazy"
            decoding="async"
          />
        </a>
      ))}
    </div>
  );
}
