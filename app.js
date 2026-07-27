(() => {
  "use strict";

  const data = window.portfolioData;
  const qs = (selector, parent = document) => parent.querySelector(selector);
  const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const tags = (items) =>
    `<ul class="tag-list" aria-label="Technologies">${items
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("")}</ul>`;

  const renderContent = () => {
    qs("#about-copy").textContent = data.person.about;

    qs("#metrics").innerHTML = data.metrics
      .map(
        ({ value, label }) => `
          <div class="metric reveal">
            <strong>${escapeHtml(value)}</strong>
            <span>${escapeHtml(label)}</span>
          </div>`,
      )
      .join("");

    qs("#experience-list").innerHTML = data.experience
      .map(
        (item, index) => `
          <article class="experience-row reveal ${item.featured ? "featured" : ""}">
            <div class="experience-index">${String(index + 1).padStart(2, "0")}</div>
            <div class="experience-meta">
              <p>${escapeHtml(item.organization)}</p>
              <span>${escapeHtml(item.dates)}</span>
              <span>${escapeHtml(item.location)}</span>
            </div>
            <div class="experience-body">
              ${item.featured ? '<span class="feature-label">Featured enterprise work</span>' : ""}
              <h3>${escapeHtml(item.role)}</h3>
              <p>${escapeHtml(item.summary)}</p>
              ${
                item.impact.length
                  ? `<ul class="impact-list">${item.impact
                      .map((point) => `<li>${escapeHtml(point)}</li>`)
                      .join("")}</ul>`
                  : ""
              }
              ${tags(item.technologies)}
            </div>
          </article>`,
      )
      .join("");

    qs("#project-grid").innerHTML = data.projects
      .map(
        (project, index) => `
          <article class="project-card reveal ${project.featured ? "project-featured" : ""}">
            ${
              project.image
                ? `<div class="project-image">
                    <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" width="1280" height="720" loading="lazy" />
                    <span>Featured build</span>
                  </div>`
                : `<div class="project-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>`
            }
            <div class="project-content">
              <p class="project-eyebrow">${escapeHtml(project.eyebrow)}</p>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.summary)}</p>
              ${tags(project.technologies.slice(0, project.featured ? 8 : 5))}
              <button class="text-button project-open" type="button" data-project="${index}" aria-haspopup="dialog">
                Explore case study <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>`,
      )
      .join("");

    qs("#research-grid").innerHTML = data.researchTeaching
      .map(
        (item) => `
          <article class="research-card reveal">
            <div><span class="type-label">${escapeHtml(item.type)}</span><span>${escapeHtml(item.dates)}</span></div>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="research-org">${escapeHtml(item.organization)}</p>
            <p>${escapeHtml(item.description)}</p>
            ${
              item.link
                ? `<a class="text-button inline-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>`
                : ""
            }
          </article>`,
      )
      .join("");

    qs("#skill-grid").innerHTML = data.skills
      .map(
        (group, index) => `
          <article class="skill-card reveal">
            <div class="skill-card-heading"><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(group.title)}</h3></div>
            <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>`,
      )
      .join("");

    const education = data.education;
    qs("#education-card").innerHTML = `
      <img src="assets/Ohio_State_University_seal.svg" alt="" width="104" height="104" loading="lazy" />
      <div>
        <p class="project-eyebrow">${escapeHtml(education.dates)}</p>
        <h3>${escapeHtml(education.school)}</h3>
        <p>${escapeHtml(education.degree)}</p>
        <p class="education-detail">${escapeHtml(education.detail)}</p>
      </div>`;

    qs("#award-list").innerHTML = data.awards
      .map(
        (award) => `
          <article class="award-row reveal">
            <div><h3>${escapeHtml(award.title)}</h3><p>${escapeHtml(award.date)}</p></div>
            <div><strong>${escapeHtml(award.place)}</strong><span>${escapeHtml(award.prize)}</span></div>
          </article>`,
      )
      .join("");
  };

  const dialog = qs("#project-dialog");
  const dialogContent = qs("#dialog-content");
  let lastTrigger = null;

  const openProject = (index, trigger) => {
    const project = data.projects[index];
    if (!project) return;
    lastTrigger = trigger;
    dialogContent.innerHTML = `
      <p class="project-eyebrow">${escapeHtml(project.eyebrow)}</p>
      <h2 id="dialog-title">${escapeHtml(project.title)}</h2>
      <p class="dialog-summary">${escapeHtml(project.summary)}</p>
      ${
        project.image
          ? `<img class="dialog-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" width="1280" height="720" />`
          : ""
      }
      <div class="case-grid">
        <div><p class="case-label">The problem</p><p>${escapeHtml(project.problem)}</p></div>
        <div><p class="case-label">My contribution</p><p>${escapeHtml(project.contribution)}</p></div>
        <div><p class="case-label">The outcome</p><p>${escapeHtml(project.result)}</p></div>
      </div>
      ${tags(project.technologies)}
      <a class="button primary dialog-link" href="${escapeHtml(project.link)}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(project.linkLabel)} <span aria-hidden="true">↗</span>
      </a>
      ${
        project.github
          ? `<a class="button secondary dialog-link" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>`
          : ""
      }
      ${
        project.gallery
          ? `<img class="dialog-image secondary-image" src="${escapeHtml(project.gallery)}" alt="The OSU SmartParking team developing the project at HackOHI/O" width="800" height="1422" loading="lazy" />`
          : ""
      }`;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  };

  const closeDialog = () => {
    dialog.close();
    document.body.classList.remove("dialog-open");
    lastTrigger?.focus();
  };

  const setupTheme = () => {
    const button = qs(".theme-toggle");
    const syncLabel = () => {
      const dark = document.documentElement.dataset.theme === "dark";
      button.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
    };
    syncLabel();
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
      syncLabel();
    });
  };

  const setupMenu = () => {
    const button = qs(".menu-toggle");
    const links = qs(".nav-links");
    const close = () => {
      button.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
      document.body.classList.remove("menu-open");
    };
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      links.classList.toggle("open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    qsa("a", links).forEach((link) => link.addEventListener("click", close));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) close();
    });
  };

  const setupReveal = () => {
    const elements = qsa(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
  };

  const setupActiveNavigation = () => {
    const links = qsa('.nav-links a[href^="#"]');
    const sections = links.map((link) => qs(link.getAttribute("href"))).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) =>
          link.toggleAttribute("aria-current", link.getAttribute("href") === `#${visible.target.id}`),
        );
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
  };

  renderContent();
  setupTheme();
  setupMenu();
  setupReveal();
  setupActiveNavigation();

  qs("#year").textContent = new Date().getFullYear();
  qsa(".project-open").forEach((button) =>
    button.addEventListener("click", () => openProject(Number(button.dataset.project), button)),
  );
  qs(".dialog-close").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
})();
