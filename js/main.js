// ***************************************
// *************  portfolio **************
// ***************************************

const portfoliosElement = document.querySelector('.exampleWeb');

const portfolios = [
  {
    class: "treehouse",
    title: "Treehouse",
    logo: "img/portfolio/treehouse.png",
    link: "https://teamtreehouse.com/danielefusaridoughty",
    about: "Check out all my Achievements"
  },
  {
    class: "github",
    title: "GitHub",
    logo: "img/portfolio/GitHub.png",
    link: "https://github.com/DanieleFusari",
    about: "My GitHub projects",
  },
  {
    class: "naturalProducts",
    title: "Natural Products",
    logo: "img/portfolio/smudge.png",
    link: "https://smudgenaturalskincare.co.uk",
    about: "After completing the Console Foundations, Version Control, Git & a design courses, I put together a small project website. Hosted on GitHub pages. (Completed 12th February 2019)"
  },
  {
    class: "mrChef",
    title: "Mr Chef",
    logo: "img/portfolio/mr_chef.jpg",
    link: "https://mrchefcatering.co.uk",
    about: "First project after finishing my Object-Oriented PHP & Intermediate PHP. (Completed 25th May 2020)"
  },
  {
    class: "mrChef",
    title: "Mr Chef Invoices",
    logo: "img/portfolio/mr_chef.jpg",
    link: "https://github.com/DanieleFusari/invoices",
    about: "Back office system to manage Mr Chef invoices. PHP and JavaScript (Completed 25th May 2020)"
  },
  {
    class: 'raistudios',
    title: "RaiStudios",
    logo: "img/portfolio/raistudios.jpg",
    link: "https://github.com/DanieleFusari/Rai_Studios",
    about: "",
  }
]

function create (element) {
  return document.createElement(element);
}

for (var i = 0; i < portfolios.length; i++) {

  const portfolio = create('div');
  portfolio.className = "portfolio " + portfolios[i].class;

  const img = create('img');
  img.className = "logo";
  img.src = portfolios[i].logo;
  img.alt = portfolios[i].title;
  portfolio.appendChild(img);

  const h2 = create('h2');
  h2.textContent = portfolios[i].title;
  portfolio.appendChild(h2);

  const p = create('p');
  p.textContent = portfolios[i].about;
  portfolio.appendChild(p);

  const link = create('a');
  link.href = portfolios[i].link;
  link.setAttribute('target', '_blank');
  link.textContent = portfolios[i].title + '....';

  portfolio.appendChild(link);

  portfoliosElement.appendChild(portfolio);
}

// ***************************************
// **************** TOPICS ***************
// ***************************************

const achievements = [
  {
    img: 'img/achievements/html.png',
    topic: 'HTML',
    list: ['HTML5', 'SVG Basics', 'Video and Audio', 'Forms', 'Tables']
  },
  {
    img: 'img/achievements/CSS.png',
    topic: 'CSS',
    list: ['Grid Layout', 'Flexbox Layout', 'Sass Basic', 'Bootstrap 4 Basics', 'SVG Basics']
  },
  {
    img: 'img/achievements/javascript.png',
    topic: 'Full Stack JavaScript',
    list: ['jQuery Basics', 'AJAX Basics', 'Node.js Basics', 'npm Basics', 'npm as a Task Runner', 'Gulp Basics', 'Express Basics', 'REST API With Express']
  },
  {
    img: 'img/achievements/databases.png',
    topic: 'Databases',
    list: ['MySQL', 'SQLite', 'SQL Reporting', 'MongoDB Basics']
  },
  {
    img: 'img/achievements/diglit.png',
    topic: 'Digital Literacy',
    list: ['How the Internet Works', 'How the Web Works', 'Computer Basics']
  },
  {
    img: 'img/achievements/development_tools.png',
    topic: 'Development Tools',
    list: ['Regular Expressions', 'Git Branches Merging', 'Introduction to Git', 'Text Editors', 'Web Accessibility', 'HTTP Basics', 'GitHub Basics', 'Website Optimization', 'Console Foundations', 'Technology Foundations']
  },
  {
    img: 'img/achievements/php.png',
    topic: 'PHP',
    list: ['Beginning PHP', 'Error Handling in PHP', 'Basic Websites', 'Local PHP Dev Environment', 'Integrating Databases', 'Exception Handling', 'JWT', 'Array Control Structures', 'File Handling', 'CRUD Operations', 'Authentication', ]
  },
  {
    img: 'img/achievements/security.png',
    topic: 'Security',
    list: ['Introduction to Application Security']
  },
  {
    img: 'img/achievements/python.png',
    topic: 'Python',
    list: ['Beginning Python', 'Intermediate Python', 'Exploring Flask', 'Exploring Django']
  }
]

const achievement = document.querySelector('.achievements')

achievements.forEach(achv => {
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const a = document.createElement('a');

  img.src = achv.img;
  img.alt = achv.topic;
  img.style.cursor = 'pointer';
  img.className = 'achievements_img';
  a.setAttribute('title', 'Completed Click for more information')
  div.className = 'achievements_div';
  h2.textContent = achv.topic;

  a.appendChild(img)
  div.appendChild(a);
  div.appendChild(h2);
  achievement.appendChild(div);
})

// Need to Acheve section

// const needAchieve = [
//   {
//     img: 'img/achievements/php.png',
//     topic: 'PHP',
//     list: ['Beginning PHP', 'Error Handling in PHP', 'Basic Websites', 'Local PHP Dev Environment', 'Integrating PHP with Databases']
//   },
//   {
//     img: 'img/achievements/security.png',
//     topic: 'Security',
//     list: ['Introduction to Application Security']
//   },
//   {
//     img: 'img/achievements/python.png',
//     topic: 'Python',
//     list: ['Next years project']
//   }
// ]
//
//   const whatNext = document.querySelector('.what_next')
//
//   needAchieve.forEach(achv => {
//     const div2 = document.createElement('div');
//     const h22 = document.createElement('h2');
//     const img2 = document.createElement('img');
//
//     img2.src = achv.img;
//     img2.alt = achv.topic;
//     img2.style.cursor = 'pointer';
//     img2.className = 'achievements_img'
//     div2.className = 'achievements_div'
//     h22.textContent = achv.topic;
//
//     div2.appendChild(img2);
//     div2.appendChild(h22);
//     whatNext.appendChild(div2);
  // })

//*********************
// Click on icon for more information on extra courses.
//*********************

let extraInfo_icon = document.querySelectorAll('#topics img');
extraInfo_icon = Array.from(extraInfo_icon);

extraInfo_icon.forEach(icon => {
  icon.addEventListener('click', (e) => {
    console.log(e.target.alt);
    // display list box
    const each_icon_outer = document.querySelector('.each-icon-outer');
    each_icon_outer.style.display = 'block';

    // close the box via the X
    const x = document.querySelector('.x span');
    x.addEventListener('click', ()=> {
      each_icon_outer.style.display = 'none';
      while (list_icons_details.firstChild) {
      list_icons_details.removeChild(list_icons_details.firstChild);
    }
  });

    // add the list items
    const list_icons_details = document.querySelector('.list_icons_details');

    if(!!window.chrome) {
        icon(achievements, e.path[0].alt);
        icon(needAchieve, e.path[0].alt);
    } else  {
        icon(achievements, e.target.alt);
        icon(needAchieve, e.target.alt);
      }
    // } else {
    //   console.log('browser error use Chrome fire fox');
    // }

// (typeof InstallTrigger !== 'undefined')

    function icon(twolist, browser) {
      for (let i = 0; i < twolist.length; i++) {
        if(twolist[i].topic === browser) {
          for (let j = 0; j < twolist[i].list.length; j++) {
            const li = document.createElement('li');
            li.textContent = twolist[i].list[j];
            list_icons_details.appendChild(li);
          }
        }
      }
    }
  });
});


// CV

const buttonCV = document.querySelector('#contact button')

buttonCV.addEventListener('click', () => {
  window.open('Attachments/cv.pdf')
})
