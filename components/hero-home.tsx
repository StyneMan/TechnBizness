import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex flex-col justify-center ">
            {/* Grid Item 1 */}
            <div className="p-4 rounded-lg pb-12 text-left md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-4xl"
                data-aos="fade-up"
              >
                Empowering Businesses With Technology Solutions
              </h1>
              <p
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-small max-w-[96%] text-transparent md:text-2xl"
                data-aos="fade-up"
              >
                Leverage our proven technology strategies to boost efficiency,
                reduce costs, and outperform competitors. TechnBizness - where
                technical excellence meets business acumen.
              </p>

              <div className="pb-4" />
              <ul className="flex flex-1 items-center justify-start gap-3">
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[16px] px-[16px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                  >
                    Join Community
                  </Link>
                </li>

                <li>
                  <Link
                    href="/signup"
                    className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[16px] px-[16px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                  >
                    Learn More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Grid Item 2 */}
            <div className="hidden md:block p-2 rounded-lg">
              <br />
              <div className="relative group">
                {/* Main Video Thumbnail with Effects */}
                <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Dotted Overlay Pattern (like Tidy demo) */}
                  <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] bg-[length:40px_40px] mix-blend-overlay opacity-10"></div>

                  {/* Video Component */}
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <ModalVideo
                      thumb={VideoThumb}
                      thumbWidth={1104}
                      thumbHeight={576}
                      thumbAlt="Modal video thumbnail"
                      video="videos/video.mp4"
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  </div>

                  {/* Play Button Animation (like Tidy) */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Dots (like Tidy demo) */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-400 rounded-full opacity-70 group-hover:animate-float"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-indigo-300 rounded-full opacity-70 group-hover:animate-float-delay"></div>
              </div>
              {/* <ModalVideo
                thumb={VideoThumb}
                thumbWidth={1104}
                thumbHeight={576}
                thumbAlt="Modal video thumbnail"
                video="videos//video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              /> */}
            </div>

            {/* Add more items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              AI-driven tools for product teams
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
*/