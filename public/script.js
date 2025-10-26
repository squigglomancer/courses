// Define your courses as data
const courses = [
    {
      id: 'course-137A',
      title: 'Intro to Quantum Mechanics',
      code: '137A',
      term: 'Spring 2023',
      sections: [
        {
          title: 'Discussion notes',
          zipUrl: 'public/assets/downloadables/137a/discussions/discussions.zip',
          files: [
            { name: 'discussion 1 (complex numbers).pdf', url: 'public/assets/downloadables/137a/discussions/discussion 1 (complex numbers).pdf' },
            { name: 'discussion 2 and 3 (linear algebra).pdf', url: 'public/assets/downloadables/137a/discussions/discussion 2 and 3 (linear algebra).pdf' },
            { name: 'discussion 4 (spin one-half problem set).pdf', url: 'public/assets/downloadables/137a/discussions/discussion 4 (spin one-half problem set).pdf' },
            { name: 'discussion 5 (spin one-half, photon polarization).pdf', url: 'public/assets/downloadables/137a/discussions/discussion 5 (spin one-half, photon polarization).pdf' },
            { name: 'discussion 6 (spin one-half rotations).pdf', url: 'public/assets/downloadables/137a/discussions/discussion 5 (spin one-half, photon polarization).pdf' },
            { name: 'discussion 7 (position and momentum operators).pdf', url: 'public/assets/downloadables/137a/discussions/Discussion 7 (position and momentum operators).pdf' },
            { name: 'discussion 8 (momentum).pdf', url: 'public/assets/downloadables/137a/discussions/Discussion 8 (momentum).pdf' },
            { name: 'discussion 9 (harmonic oscillator).pdf', url: 'public/assets/downloadables/137a/discussions/Discussion 9 (harmonic oscillator).pdf' },
            { name: 'discussion 10 (1D scattering).pdf', url: 'public/assets/downloadables/137a/discussions/Discussion 10 (1D scattering).pdf' },
            { name: 'discussion 11 (Quantum Mechanics in 3D).pdf', url: 'public/assets/downloadables/137a/discussions/Discussion 11 (Quantum Mechanics in 3D).pdf' },
            { name: 'discussion 12 (Angular Momentum and Spherical Harmonics).pdf', url: 'public/assets/downloadables/137a/discussions/Discussion 12 (Angular Momentum and Spherical Harmonics).pdf' },
            { name: 'discussion 13 (Hydrogen Atom).pdf', url: 'public/assets/downloadables/137a/discussions/Discussion 13 (Hydrogen Atom).pdf' }
          ]
        },
        {
          title: 'Homework problems',
          zipUrl: 'public/assets/downloadables/137a/homeworks/problems.zip',
          files: [
            { name: 'problem set 0 (optional math review).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 0.pdf' },
            { name: 'problem set 1 (linear algebra).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 1.pdf' },
            { name: 'problem set 2 (more linear algebra).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 2.pdf' },
            { name: 'problem set 3 (foundational concepts).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 3.pdf' },
            { name: 'problem set 4 (measurements).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 4.pdf' },
            { name: 'problem set 5 (spin one-half, spin-one).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 5.pdf' },
            { name: 'problem set 6 (1D wave functions).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 6.pdf' },
            { name: 'problem set 7 (more wave functions, expectation values).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 7.pdf' },
            { name: 'problem set 8 (parity, time evolution).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 8.pdf' },
            { name: 'problem set 9 (Ehrenfest\'s theorem, probability current).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 9.pdf' },
            { name: 'problem set 10 (angular momentum, 3D harmonic oscillator).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 10.pdf' },
            { name: 'problem set 11 (coherent states).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 11.pdf' },
            { name: 'problem set 12 (hydrogen atom, spherical well).pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 12.pdf' }
          ]
        },
        {
          title: 'Homework solutions',
          zipUrl: 'public/assets/downloadables/137a/homeworks/solutions.zip',
          files: [
            { name: 'solutions 1.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 1 Solution.pdf' },
            { name: 'solutions 2.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 2 Solution.pdf' },
            { name: 'solutions 3.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 3 Solution.pdf' },
            { name: 'solutions 4.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 4 Solution.pdf' },
            { name: 'solutions 5.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 5 Solution.pdf' },
            { name: 'solutions 6.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 6 Solutions.pdf' },
            { name: 'solutions 7.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 7 Solutions.pdf' },
            { name: 'solutions 8.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 8 Solution.pdf' },
            { name: 'solutions 9.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 9 Solutions.pdf' },
            { name: 'solutions 10.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 10 Solutions.pdf' },
            { name: 'solutions 11.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 11 Solutions.pdf' },
            { name: 'solutions 12.pdf', url: 'public/assets/downloadables/137a/homeworks/Homework 12 Solutions.pdf' }
          ]
        },
        {
          title: 'Exams and solutions',
          zipUrl: 'public/assets/downloadables/137a/exams/course_files_export.zip',
          files: [
            { name: 'practice midterm (with solutions).pdf', url: 'public/assets/downloadables/137a/exams/Practice midterm with solutions.pdf' },
            { name: 'midterm (with solutions).pdf', url: 'public/assets/downloadables/137a/exams/Midterm with solutions.pdf' },
            { name: 'practice final.pdf', url: 'public/assets/downloadables/137a/exams/Final Practice Problems.pdf' },
            { name: 'practice final solutions.pdf', url: 'public/assets/downloadables/137a/exams/Final Practice Solutions.pdf' },
          ]
        }
      ]
    },




    // {
    //   id: 'course-138',
    //   title: 'Advanced Quantum Mechanics',
    //   code: '138',
    //   term: 'Fall 2023',
    //   sections: [
    //     {
    //       title: 'Lecture notes',
    //       zipUrl: '/assets/aqm/lectures.zip',
    //       files: [
    //         { name: 'lecture_1.pdf', url: '/assets/aqm/lecture_1.pdf' },
    //         { name: 'lecture_2.pdf', url: '/assets/aqm/lecture_2.pdf' }
    //       ]
    //     }
    //   ]
    // }



  ];




  
  // Function to create a course element
  function createCourse(courseData) {
    const course = document.createElement('section');
    course.className = 'course';
    course.id = courseData.id;
  
    // Create header
    course.innerHTML = `
      <div class="course-header">
        <button class="dots-btn" title="Options" aria-haspopup="menu" aria-expanded="false">⋮</button>
        <button class="expand-btn" title="Expand/collapse course" aria-expanded="false">▶</button>
        <a class="course-title">${courseData.title}</a>
        <span class="course-info">(${courseData.code}, ${courseData.term})</span>
  
        <div class="menu" role="menu" hidden>
          <button type="button" role="menuitem" data-action="toggle-all">Expand/collapse all (alt+clk)</button>
          <hr style="border:none;border-top:1px solid var(--menu-border);margin:0.25rem 0;">
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" role="menuitem">
            <button type="button">License</button>
          </a>
        </div>
      </div>
    `;
  
    // Create content
    const content = document.createElement('div');
    content.className = 'course-content hidden';
  
    courseData.sections.forEach(section => {
      const details = document.createElement('details');
      if (section.zipUrl) {
        details.dataset.zip = section.zipUrl;
      }
  
      const summary = document.createElement('summary');
      summary.innerHTML = `<span class="chevron" aria-hidden="true">▶</span>${section.title}`;
      details.appendChild(summary);
  
      const ul = document.createElement('ul');
  
      // Add files if present
      if (section.files) {
        section.files.forEach(file => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${file.url}" target="_blank" rel="noopener noreferrer">${file.name}</a>`;
          ul.appendChild(li);
        });
  
        // Add "download all" link if there's a zip
        if (section.zipUrl) {
          const li = document.createElement('li');
          const sectionType = section.title.toLowerCase().replace(' and solutions', '').replace(/s$/, '');
          li.innerHTML = `<a href="${section.zipUrl}" class="download-all" title="Download a ZIP of all ${section.title.toLowerCase()}">download all</a>`;
          ul.appendChild(li);
        }
      }
  
      // Add links if present
      if (section.links) {
        section.links.forEach(link => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.description}">${link.name}</a>`;
          ul.appendChild(li);
        });
      }
  
      details.appendChild(ul);
      content.appendChild(details);
    });
  
    course.appendChild(content);
    return course;
  }
  
  // Initialize all courses with event handlers
  function initializeCourse(course) {
    const courseContent = course.querySelector('.course-content');
    const expandCollapseBtn = course.querySelector('.expand-btn');
    const toggleMenuBtn = course.querySelector('.dots-btn');
    const menu = course.querySelector('.menu');
    const courseTitle = course.querySelector('.course-title');
  
    let courseExpanded = false;
  
    function setCourseExpanded(expanded) {
      courseExpanded = expanded;
      courseContent.classList.toggle('hidden', !expanded);
      expandCollapseBtn.textContent = expanded ? '▼' : '▶';
      expandCollapseBtn.setAttribute('aria-expanded', String(expanded));
    }
  
    function expandAllSections() {
      setCourseExpanded(true);
      courseContent.querySelectorAll('details').forEach(d => d.open = true);
    }
  
    function collapseAllSections() {
      courseContent.querySelectorAll('details').forEach(d => d.open = false);
      setCourseExpanded(false);
    }
  
    function handleTopLevelToggle(e) {
      if (e && e.altKey) {
        const willExpand = !courseExpanded;
        if (willExpand) expandAllSections();
        else collapseAllSections();
      } else {
        setCourseExpanded(!courseExpanded);
      }
    }
  
    expandCollapseBtn.addEventListener('click', handleTopLevelToggle);
    courseTitle.addEventListener('click', handleTopLevelToggle);
  
    toggleMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = menu.hasAttribute('hidden');
      menu.toggleAttribute('hidden');
      toggleMenuBtn.setAttribute('aria-expanded', String(willOpen));
      if (!menu.hasAttribute('hidden')) {
        const firstItem = menu.querySelector('button[role="menuitem"]');
        if (firstItem) firstItem.focus();
      }
    });
  
    menu.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === 'toggle-all') {
        const willExpand = !courseExpanded;
        if (willExpand) expandAllSections();
        else collapseAllSections();
      }
      menu.setAttribute('hidden', '');
      toggleMenuBtn.setAttribute('aria-expanded', 'false');
    });
  
    document.addEventListener('click', (e) => {
      if (!menu.hasAttribute('hidden') && !menu.contains(e.target) && e.target !== toggleMenuBtn) {
        menu.setAttribute('hidden', '');
        toggleMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hasAttribute('hidden')) {
        menu.setAttribute('hidden', '');
        toggleMenuBtn.setAttribute('aria-expanded', 'false');
        toggleMenuBtn.focus();
      }
    });
  
    course.addEventListener('click', (e) => {
      const link = e.target.closest('a.download-all');
      if (!link) return;
      const details = link.closest('details');
      const zip = link.getAttribute('href') || (details && details.dataset.zip);
      if (zip && zip !== '#') {
        e.preventDefault();
        window.open(zip, '_blank', 'noopener,noreferrer');
      }
    });
  
    courseContent.addEventListener('click', (e) => {
      const sum = e.target.closest('summary');
      if (!sum || !e.altKey) return;
      e.preventDefault();
      const details = sum.parentElement;
      const willOpen = !details.open;
      courseContent.querySelectorAll('details').forEach(d => d.open = willOpen);
    });
  
    setCourseExpanded(false);
  }
  
  // Render all courses
  const pageContainer = document.querySelector('.page');
  courses.forEach(courseData => {
    const courseElement = createCourse(courseData);
    pageContainer.appendChild(courseElement);
    initializeCourse(courseElement);
  });