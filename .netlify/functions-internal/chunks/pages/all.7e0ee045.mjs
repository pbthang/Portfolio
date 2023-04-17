/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as defineStyleVars, g as renderHead } from '../astro.9d15025c.mjs';
import 'html-escaper';
import contentful from 'contentful';

const $$Astro$c = createAstro("https://pbthang.netlify.app");
const $$TimelineCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TimelineCard;
  const { title = "Lorem ipsum dolor", timeline = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="card flex bg-base-100 shadow-xl md:max-w-md md:w-[48%] w-full max-w-md">
  <div class="card-body">
    <h2 class="card-title text-2xl">${title}</h2>
    <div>

    <ol class="relative border-l border-accent mt-4">
        ${timeline.map((t) => renderTemplate`<li class="mb-8 ml-4">
            <div class="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border-none"></div>
            <time class="mb-1 text-sm leading-none text-current opacity-60">${t.time}</time>
            <h3 class="text-lg font-medium text-current leading-6">${t.title}</h3>
            <div class="mb-2 text-sm text-current opacity-90 font-normal">${t.organization}</div>
            <p class="mb-4 text-base text-current opacity-60 font-normal">${t.description}</p>
            <!-- <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> -->
        </li>`)}            
        
    </ol>

    </div>
    <!-- <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div> -->
  </div>
</div>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/TimelineCard.astro");

const $$Astro$b = createAstro("https://pbthang.netlify.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$About;
  const { img, education, experience } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="container flex justify-center mx-auto py-8 w-full astro-V2CBYR3P" id="About">
  <div class="px-4 py-8 astro-V2CBYR3P">
    <h1 class="text-4xl font-bold mb-6 astro-V2CBYR3P">About me</h1>
    <div class="md:flex justify-between max-w-4xl gap-8 space-y-4 md:space-y-0 astro-V2CBYR3P">
      <div class="avatar aspect-auto flex-0 astro-V2CBYR3P">
        <div class="w-60 max-w-md rounded-lg astro-V2CBYR3P">
          <img${addAttribute(img, "src")} alt="profile-img" class="astro-V2CBYR3P">
        </div>
      </div>
      <div class="mockup-code w-[90vw] sm:w-full break-words flex-1 astro-V2CBYR3P">
        <pre data-prefix="$" class="text-success astro-V2CBYR3P"><code class="astro-V2CBYR3P">whoami</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">Pham Ba Thang</code></pre>
        <pre data-prefix="$" class="text-success astro-V2CBYR3P"><code class="astro-V2CBYR3P">cat info.txt</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">Hi, I am Pham Ba Thang.</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">I study Computer Science at NUS.</code></pre>
        <pre data-prefix="$" class="text-success astro-V2CBYR3P"><code class="astro-V2CBYR3P">less interest.txt</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">I'm interested in creating applications that are</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">aesthetically pleasing and solve real problems.</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">I have experience in frontend development with React</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">and backend development with Node.js.</code></pre>
        <pre class="astro-V2CBYR3P"><code class="astro-V2CBYR3P">:q</code></pre>
        <pre data-prefix="$" class=" astro-V2CBYR3P"><code class="astro-V2CBYR3P">Thank you and have a nice day!<span class="blinking astro-V2CBYR3P">_</span></code></pre>
      </div>
    </div>
    <div class="md:flex md:justify-between mt-8 md:space-y-0 space-y-8 astro-V2CBYR3P">
      ${renderComponent($$result, "TimelineCard", $$TimelineCard, { "title": "Education", "timeline": education, "class": "astro-V2CBYR3P" })}
      ${renderComponent($$result, "TimelineCard", $$TimelineCard, { "title": "Experience", "timeline": experience, "class": "astro-V2CBYR3P" })}
    </div>
  </div>
</section>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/About.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$a = createAstro("https://pbthang.netlify.app");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="flex justify-center mx-auto py-8 bg-primary w-full astro-XMIVUP5A" id="Contact">\n  <div class="container flex justify-center astro-XMIVUP5A">\n    <div class="px-4 py-8 w-full max-w-6xl astro-XMIVUP5A">\n      <h1 class="text-4xl font-bold mb-6 astro-XMIVUP5A">Contact</h1>\n      <div class="astro-XMIVUP5A">\n        <div data-tf-widget="pXaDC19G" data-tf-opacity="100" data-tf-iframe-props="title=Contact Form Portfolio" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;height:500px;" class="astro-XMIVUP5A">\n        </div><script src="//embed.typeform.com/next/embed.js"><\/script>\n      </div>\n    </div>\n  </div>\n</section>'])), maybeRenderHead($$result));
}, "/Users/pbthang/pbthang-portfolio/src/components/Contact.astro");

const $$Astro$9 = createAstro("https://pbthang.netlify.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  const { img, resume } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hero min-h-screen bg-cover bg-center bg-fixed relative"${addAttribute(`background-image: url(${img});`, "style")}>
  <a class="absolute bottom-0 pt-2 pb-4 w-full group flex justify-center z-10" href="#About" aria-label="Scroll to main section">
    <i class="ti ti-chevron-down text-4xl group-hover:translate-y-2 group-hover:text-accent duration-300"></i>
  </a>
  <div class="hidden">Image by rawpixel.com on Freepik</div>
  <!-- <div class="hero min-h-screen bg-cover bg-center bg-fixed relative"> -->
  <canvas class="hero-bg hero-overlay bg-opacity-10 w-full h-full z-0 bg-secondary"></canvas>
  <div class="hero-overlay bg-opacity-40 z-0"></div>
  <div class="hero-content w-10/12 text-neutral-content z-3" role="region" aria-label="Hello world! I am Thang Pham, a Software Engineer, a CS student, and a Vietnamese">
    <div class="max-w-2xl w-full font-bold text-white">
      <div class="opacity-70">
        <div class="mb-4 text-4xl sm:text-5xl lg:text-6xl">Hello world!</div>
        <div class="mb-4 text-2xl sm:text-4xl lg:text-5xl">
          I am Thang Pham,
        </div>
        <div class="mb-8 text-2xl sm:text-4xl lg:text-5xl">
          a <span id="typewriter"></span>
        </div>
      </div>
      <a${addAttribute(resume, "href")} class="btn btn-primary group pl-4 pr-[4px] items-center gap-1" target="_blank" rel="noreferrer" role="button" aria-label="view my resume" aria-expanded="false">
        <span>My resume</span>
        <i class="ti ti-arrow-narrow-right text-2xl -translate-y-[1px] group-hover:translate-x-4 transition-all duration-300 ease-in-out"></i>
      </a>
    </div>
  </div>
</div>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/Hero.astro");

const $$Astro$8 = createAstro("https://pbthang.netlify.app");
const $$CarouselCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CarouselCard;
  const { title = "Lorem ipsum dolor", imgSrc, id, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="relative carousel-slide inline-block whitespace-normal rounded-box ml-4 aspect-video bg-cover bg-center snap-center w-10/12"${addAttribute(id, "id")}${addAttribute(`background-image: url(${imgSrc});`, "style")}>
  <div class="absolute top-0 left-0 w-full h-full rounded-box bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-4">
    <a${addAttribute(link, "href")} target="_blank" rel="noreferrer" class="text-white hover:-translate-y-1 hover:text-accent duration-200">
      <h2 class="text-md sm:text-2xl font-bold">${title}</h2>
      <div class="text-xs sm:text-base opacity-80 break-words max-w-xs sm:max-w-lg">
        ${renderSlot($$result, $$slots["default"])}
      </div>
    </a>
  </div>
</div>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/CarouselCard.astro");

const $$Astro$7 = createAstro("https://pbthang.netlify.app");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Projects;
  const { projects } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="container flex justify-center mx-auto py-8 w-full astro-AMNG4ZVP" id="Projects">
  <div class="px-4 py-8 astro-AMNG4ZVP">
    <h1 class="text-4xl font-bold mb-6 ml-4 astro-AMNG4ZVP">My projects</h1>
    <div class="w-full max-w-8xl astro-AMNG4ZVP">
      <div class="slider whitespace-nowrap overflow-scroll overflow-y-hidden scrollbar-hide snap-mandatory snap-x w-[360px] sm:w-[600px] md:w-[720px] lg:w-[960px] xl:w-[1100px] astro-AMNG4ZVP">
        ${projects.map((project) => renderTemplate`${renderComponent($$result, "CarouselCard", $$CarouselCard, { "id": `project-${project.title.replace(/\s+/g, "")}`, "title": project.title, "imgSrc": project.imgSrc, "link": project.link, "class": "astro-AMNG4ZVP" }, { "default": ($$result2) => renderTemplate`${project.description}` })}`)}
      </div>
      <!-- <div class="btn-group flex gap-2 justify-end w-full mt-4">
        <button class="left-btn btn-square btn-primary btn-sm rounded"
          >&lt;</button
        >
        <button class="right-btn btn-square btn-primary btn-sm rounded"
          >&gt;</button
        >
      </div> -->
      <div class="w-full flex justify-center gap-1 mt-2 astro-AMNG4ZVP">
        ${projects.map((p, idx) => renderTemplate`<a${addAttribute(`#project-${p.title.replace(/\s+/g, "")}`, "href")} class="astro-AMNG4ZVP">
              <button class="btn-square btn-primary btn-xs rounded astro-AMNG4ZVP">
                ${idx + 1}
              </button>
            </a>`)}
      </div>
    </div>
  </div>
</section>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/Projects.astro");

const $$Astro$6 = createAstro("https://pbthang.netlify.app");
const $$SkillCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SkillCard;
  const { title = "Lorem ipsum dolor", icon, color } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead($$result)}<div class="group mockup-window overflow-hidden bg-base-300 flex shadow-xl w-full md:w-full md:max-w-4xl max-w-md astro-U5AYKEOR"${addAttribute($$definedVars, "style")}>
  <div class="px-4 py-16 bg-base-200 astro-U5AYKEOR">
    <div class="relative z-10 astro-U5AYKEOR">
      <h2 class="text-2xl font-bold astro-U5AYKEOR">${title}</h2>
      <p class="mt-4 astro-U5AYKEOR">${renderSlot($$result, $$slots["default"])}</p>
    </div>
    <i${addAttribute(`ti ti-${icon} absolute top-8 -right-16 text-current text-[14rem] opacity-40 astro-U5AYKEOR`, "class")}></i>
    <!-- <div class="card-actions justify-end"> -->
    <!-- <button class="btn btn-primary">Listen</button> -->
  </div>
</div>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/SkillCard.astro");

const $$Astro$5 = createAstro("https://pbthang.netlify.app");
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Skills;
  const { skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="py-8 bg-primary w-full" id="Skills">
  <div class="flex justify-center w-full">
    <div class="px-4 py-8 w-full max-w-md md:max-w-4xl">
      <h1 class="text-4xl font-bold mb-6">Skills</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8">
        ${skills.map((skill) => renderTemplate`${renderComponent($$result, "SkillCard", $$SkillCard, { "title": skill.title, "icon": skill.icon, "color": skill.color }, { "default": ($$result2) => renderTemplate`<ul>
                ${skill.content.map((content) => renderTemplate`<li class="">${content}</li>`)}
              </ul>` })}`)}
      </div>
    </div>
  </div>
</section>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/Skills.astro");

const $$Astro$4 = createAstro("https://pbthang.netlify.app");
const $$Loader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Loader;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-4QWS3APC">
  <div class="loader astro-4QWS3APC">
    <span class="astro-4QWS3APC"></span><span class="astro-4QWS3APC"></span><span class="astro-4QWS3APC"></span><span class="astro-4QWS3APC"></span><span class="astro-4QWS3APC"></span>
  </div>
  <div class="mt-4 astro-4QWS3APC">Loading...</div>
</div>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/Loader.astro");

const $$Astro$3 = createAstro("https://pbthang.netlify.app");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<nav class="navbar fixed top-0 z-30 h-16 w-full transition-all duration-100 shadow-transparent bg-opacity-60 text-base-content astro-5BLMO7YK">
  <div class="navbar-start astro-5BLMO7YK">
    <div class="dropdown astro-5BLMO7YK">
      <label tabindex="0" class="btn btn-ghost md:hidden astro-5BLMO7YK">
        <i${addAttribute(`ti ti-menu-2 text-2xl astro-5BLMO7YK`, "class")}></i>
      </label>
      <ul tabindex="0" class="menu dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-opacity-80 shadow-transparent text-base-content astro-5BLMO7YK">
        ${navLinks.map((nl) => renderTemplate`<li class="navlink astro-5BLMO7YK">
              <div${addAttribute(nl.href, "data-href")} class="astro-5BLMO7YK">${nl.name}</div>
            </li>`)}
      </ul>
    </div>
    <div class="btn btn-ghost normal-case text-xl astro-5BLMO7YK" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">
      <i${addAttribute(`ti ti-code-dots text-2xl astro-5BLMO7YK`, "class")}></i>

      <span class="ml-2 text-base-content astro-5BLMO7YK">pbthang</span>
    </div>
  </div>
  <div class="navbar-center hidden md:flex text-base-content astro-5BLMO7YK">
    <ul class="menu menu-horizontal rounded-box astro-5BLMO7YK">
      ${navLinks.map((nl) => renderTemplate`<li class="navlink astro-5BLMO7YK">
            <div${addAttribute(nl.href, "data-href")} class="astro-5BLMO7YK">${nl.name}</div>
          </li>`)}
    </ul>
  </div>
  <div class="navbar-end astro-5BLMO7YK">
    <!-- <a class="btn">Get started</a> -->
  </div>
</nav>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/Navbar.astro");

const $$Astro$2 = createAstro("https://pbthang.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { contacts } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footer footer-center p-8 bg-primary text-primary-content">
  <div class="grid grid-flow-col gap-4">
    <a class="link link-hover hover:text-accent duration-150" href="#About">About me</a>
    <a class="link link-hover hover:text-accent duration-150" href="#Skills">Skills</a>
    <a class="link link-hover hover:text-accent duration-150" href="#Projects">My projects</a>
    <a class="link link-hover hover:text-accent duration-150" href="#Contact">Contact</a>
  </div>
  <div>
    <div class="grid grid-flow-col gap-4">
      ${contacts.map((c) => renderTemplate`<a${addAttribute(c.link, "href")} target="_blank" rel="noreferrer" class="hover:text-accent duration-150"${addAttribute(c.name, "aria-label")}>
            <i${addAttribute(`ti ti-${c.icon} text-2xl`, "class")}></i>
          </a>`)}
    </div>
    <div class="flex items-center gap-1">
      <i class="ti ti-map-pin text-2xl"></i>
      <span>Singapore</span>
    </div>
  </div>
  <div class="leading-6">
    <p>Made by Thang Pham</p>
  </div>
</footer>`;
}, "/Users/pbthang/pbthang-portfolio/src/components/Footer.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://pbthang.netlify.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Thang Pham's Portfolio",
    contacts,
    photo
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width">\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css">\n    <meta name="generator"', ">\n    <title>", '</title>\n    <meta name="description" content="Portfolio - Thang Pham - a Software Engineer">\n    <meta name="robots" content="index, follow">\n\n    <meta property="og:title" content="Pham Ba Thang - Portfolio">\n    <meta property="og:url" content="https://pbthang.netlify.app/">\n    <meta property="og:image"', '>\n    <meta property="og:type" content="website">\n    <meta property="og:description" content="Hi, I am Thang Pham, a Software Engineer and a Computer Science student at NUS">\n    <script async src="https://www.googletagmanager.com/gtag/js?id=G-39ELLHV7XG"><\/script>', '</head>\n\n  <!-- Google tag (gtag.js) -->\n\n  <body>\n    <div id="preloader" class="fixed z-50 bg-primary w-screen h-screen flex justify-center items-center duration-200">\n      ', '\n    </div>\n    <div class="page opacity-0">\n      ', "\n      ", "\n      ", "\n    </div>\n  \n\n</body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(photo, "content"), renderHead($$result), renderComponent($$result, "Loader", $$Loader, {}), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "contacts": contacts }));
}, "/Users/pbthang/pbthang-portfolio/src/layouts/Layout.astro");

const $$Astro = createAstro("https://pbthang.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const client = contentful.createClient({
    space: "wxnegh3rm24i" ,
    environment: "master",
    // defaults to 'master' if not set
    accessToken: "LPLQSFXVPlEioR7mtScGNBqo1CEWMsB7s3pcfPke77Y" 
  });
  const response = await client.getEntry("4YbeNIPoSrVXEhCUaGs9Yp");
  const coverImage = "https:" + response.fields.coverImage.fields.file.url;
  const profileImage = "https:" + response.fields.profileImage.fields.file.url;
  const resume = "https:" + response.fields.resume.fields.file.url;
  const education = response.fields.education;
  const experience = response.fields.experience;
  const skills = response.fields.skills;
  const projectImages = response.fields.projectImages.map((obj) => {
    return "https:" + obj.fields.file.url;
  });
  const projects = response.fields.projects.map((obj, index) => {
    return { ...obj, imgSrc: projectImages[index] };
  });
  const contacts = response.fields.contacts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "contacts": contacts, "photo": profileImage }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "img": coverImage, "resume": resume })}${maybeRenderHead($$result2)}<main class="">
    ${renderComponent($$result2, "About", $$About, { "img": profileImage, "education": education, "experience": experience })}
    ${renderComponent($$result2, "Skills", $$Skills, { "skills": skills })}
    ${renderComponent($$result2, "Projects", $$Projects, { "projects": projects })}
    ${renderComponent($$result2, "Contact", $$Contact, {})}
  </main>` })}`;
}, "/Users/pbthang/pbthang-portfolio/src/pages/index.astro");

const $$file = "/Users/pbthang/pbthang-portfolio/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
