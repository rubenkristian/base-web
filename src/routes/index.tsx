import Container from "~/components/Container";

export default function About() {
  return (
    <Container>
      <main class="text-center mx-auto">
        <div class="min-h-screen md:mx-0 mx-10 flex flex-col gap-4 text-left items-center justify-center">
          <div class="flex flex-col gap-2">
            <h1 class="w-full font-bold text-xl text-white">
              Hello, I'm Kristian Ruben
            </h1>
            <h2 class="w-full font-bold text-xl text-white">
              Full-stack Developer
            </h2>
            <p class="text-gray-200">
              Delivering powerful backend architectures and seamless frontend
              experiences.
            </p>
          </div>
          <div class="flex w-full gap-4 items-start">
            <a
              href="https://github.com/rubenkristian/"
              target="_blank"
              aria-label="GitHub"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-white hover:text-white transition"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 1C6.48 1 2 5.48 2 11c0 4.42 2.87 8.17 6.84 9.5.5.1.66-.22.66-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.64.07-.63.07-.63 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.13-4.56-5 0-1.1.39-1.99 1.03-2.69-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.3c.85 0 1.71.11 2.51.32 1.9-1.3 2.74-1.03 2.74-1.03.56 1.4.21 2.44.1 2.7.64.7 1.03 1.59 1.03 2.69 0 3.88-2.34 4.75-4.58 5 .36.31.7.92.7 1.86v2.76c0 .27.16.59.67.48A10 10 0 0 0 22 11c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>

            <a
              href="https://x.com/rhyubenkristian"
              target="_blank"
              aria-label="X"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-white hover:text-white transition"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4l16 16M20 4L4 20" />
              </svg>
            </a>

            <a
              href="https://huggingface.co/ruben09"
              target="_blank"
              aria-label="Hugging Face"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition"
            >
              <svg
                class="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <circle cx="9" cy="10" r="1" />
                <circle cx="15" cy="10" r="1" />
                <path d="M8 15s2 2 4 2 4-2 4-2" />
              </svg>
            </a>

            <a
              href="mailto:rubenkristian96@gmail.com"
              aria-label="Email"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
        <div class="min-h-screen md:mx-0 mx-10 flex flex-col gap-12 text-left py-10">
          <div class="flex flex-col gap-2">
            <div class="w-full font-bold text-xl text-white">About Me</div>
            <p class="text-gray-200 leading-relaxed">
              I'm a full-stack developer with over nine years of experience,
              having contributed to a wide range of companies—from{" "}
              <b>marketplaces</b> to <b>blockchain</b> platforms—building robust
              backend systems and&nbsp
              <b>RESTful APIs</b>, while also developing modern frontend
              applications using frameworks like <b>Vue</b> and <b>React</b>.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <div class="w-full font-bold text-xl text-white">Projects</div>
            <div class="flex flex-wrap gap-6 justify-center">
              <a
                href="https://github.com/rubenkristian/debio-indexer"
                target="_blank"
                class="w-72 bg-gray-800 rounded-xl shadow-lg p-5 transition hover:scale-105 hover:shadow-2xl"
              >
                <div class="flex items-center gap-3 mb-3">
                  <i class="fa-brands fa-github text-2xl text-white"></i>
                  <h3 class="text-white text-lg font-semibold">
                    Debio Indexer
                  </h3>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  Full-stack app with NestJS, ElasticSearch, PostgreSQL.
                </p>
                <div class="flex items-center gap-3 text-gray-400 text-sm">
                  <span>
                    <i class="fa-solid fa-circle text-green-500"></i> TypeScript
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i> 120
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/rubenkristian/debio-frontend"
                target="_blank"
                class="w-72 bg-gray-800 rounded-xl shadow-lg p-5 transition hover:scale-105 hover:shadow-2xl"
              >
                <div class="flex items-center gap-3 mb-3">
                  <i class="fa-brands fa-github text-2xl text-white"></i>
                  <h3 class="text-white text-lg font-semibold">
                    Debio Frontend
                  </h3>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  Frontend with Vue, Materialize CSS.
                </p>
                <div class="flex items-center gap-3 text-gray-400 text-sm">
                  <span>
                    <i class="fa-solid fa-circle text-blue-500"></i> TypeScript
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i> 85
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/rubenkristian/myriad-api"
                target="_blank"
                class="w-72 bg-gray-800 rounded-xl shadow-lg p-5 transition hover:scale-105 hover:shadow-2xl"
              >
                <div class="flex items-center gap-3 mb-3">
                  <i class="fa-brands fa-github text-2xl text-white"></i>
                  <h3 class="text-white text-lg font-semibold">Myriad</h3>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  API with NodeJS, MongoDB, NextJS.
                </p>
                <div class="flex items-center gap-3 text-gray-400 text-sm">
                  <span>
                    <i class="fa-solid fa-circle text-yellow-500"></i>{" "}
                    JavaScript
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i> 60
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/riichi-mahjong-dev/backend-riichi"
                target="_blank"
                class="w-72 bg-gray-800 rounded-xl shadow-lg p-5 transition hover:scale-105 hover:shadow-2xl"
              >
                <div class="flex items-center gap-3 mb-3">
                  <i class="fa-brands fa-github text-2xl text-white"></i>
                  <h3 class="text-white text-lg font-semibold">
                    Riichi City Indonesia
                  </h3>
                </div>
                <p class="text-gray-300 text-sm mb-3">
                  Fullstack app with Go, SolidStart, TypeScript, MySQL, Fiber.
                </p>
                <div class="flex items-center gap-3 text-gray-400 text-sm">
                  <span>
                    <i class="fa-solid fa-circle text-yellow-500"></i>{" "}
                    JavaScript
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i> 60
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="w-full font-bold text-xl text-white">
              Skills & Technologies
            </div>
            <div class="flex flex-wrap gap-3 text-white">
              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-indigo-500">
                <i class="fa-brands fa-php"></i>
                PHP
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-red-600">
                <i class="fa-brands fa-laravel"></i>
                Laravel
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-green-500">
                <i class="fa-brands fa-node-js"></i>
                Node.js
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-blue-500">
                <i class="fa-brands fa-golang"></i>
                Go
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-sky-500">
                <i class="fa-brands fa-react"></i>
                React
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-green-600">
                <i class="fa-brands fa-vuejs"></i>
                Vue
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-blue-400">
                <i class="fa-brands fa-docker"></i>
                Docker
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-indigo-500">
                <i class="fa-solid fa-database"></i>
                PostgreSQL
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-white hover:text-black">
                <i class="fa-solid fa-next-js"></i>
                NextJS
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-rose-600">
                <i class="fa-brands fa-nest-js"></i>
                NestJS
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-green-600">
                <i class="fa-brands fa-mongodb"></i>
                MongoDB
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-yellow-500">
                <i class="fa-brands fa-elasticsearch"></i>
                ElasticSearch
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-pink-500">
                <i class="fa-brands fa-meilisearch"></i>
                Meilisearch
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-sky-700">
                <i class="fa-brands fa-java"></i>
                Java
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-violet-600">
                <i class="fa-brands fa-kotlin"></i>
                Kotlin
              </span>

              <span class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition hover:bg-yellow-500">
                <i class="fa-solid fa-plug"></i>
                REST API
              </span>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
