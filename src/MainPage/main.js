const projects = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    description: 'Визначає чи є рік високосним',
    category: 'numerical',
    link: 'src/Projects/LeapYearCheck/index.html',
  },
  {
    id: 2,
    name: 'Вгадай число',
    description: 'Вгадай число від 1 до 100',
    category: 'numerical',
    link: 'src/Projects/GuessTheNumber/index.html',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    description: 'Гра проти комп\'ютера',
    category: 'game',
    link: 'src/Projects/RockPaperScissors/index.html',
  },
  {
    id: 4,
    name: 'Калькулятор',
    description: 'Простий калькулятор',
    category: 'numerical',
    link: 'src/Projects/SimpleCalculator/index.html',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    description: 'Підраховує час',
    category: 'numerical',
    link: 'src/Projects/TimeConverter/index.html',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
    link: 'src/Projects/DinoGame/index.html',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
    link: 'src/Projects/BallMove/index.html',
  },
  {
    id: 8,
    name: 'Найбільше число',
    description: 'Знаходить найбільше число',
    category: 'numerical',
    link: 'src/Projects/MaxOfThree/index.html',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
    link: 'src/Projects/SimpleCalculator/index.html',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
    link: 'src/Projects/ScientistsData/index.html',
  },
]

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filters__item');
  const projectsList = document.querySelector('.projects__list');

  const displayProjects = (category) => {
    const currentItems = document.querySelectorAll('.projects__item');

    currentItems.forEach(item => {
      item.classList.add('fade-out');
    });

    setTimeout(() => {
      projectsList.innerHTML = '';

      const filteredProjects = category === 'all'
          ? projects
          : projects.filter(project => project.category === category);

      filteredProjects.forEach(project => {
        if(project.description === undefined) {
          project.description = 'Опис відсутній';
        }

        const projectElement = `
          <li class="projects__item fade-in" data-category="${project.category}" data-link="${project.link}">
            <div>
              <img src="src/MainPage/img/inspiration.png" alt="${project.name}">
            </div>
              <p class="project__name">${project.name}</p>
              <p class="project__type">${project.description}</p>
          </li>
        `;
        projectsList.innerHTML += projectElement;
      });

      // Add click listeners to new project items
      const projectItems = document.querySelectorAll('.projects__item');
      projectItems.forEach(item => {
        item.addEventListener('click', () => {
          const link = item.getAttribute('data-link');
          window.location.href = link;
        });
      });
    }, 100);
  };

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
      if(filterValue === 'all') {
        filterButtons.forEach(btn => btn.classList.remove('active'));
      }
      displayProjects(filterValue);
    });
  });

  displayProjects('all');
});