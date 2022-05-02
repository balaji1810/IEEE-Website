let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

var societies = [
  {
    "heading" : "IEEE-SJCE Student branch",
    "href" : "/",
    "src" : "images/stbranch.png",
    "paragraph" : `IEEE-SJCE Student Branch which started as an elite group 29 years ago,
      today has sprawled throughout the campus of SJCE, making the students technically
      more competitive, more professional and capable of enhancing their abilities as an
      engineer. Since then IEEE-SJCE STUDENT BRANCH, a division under Region 10 of IEEE has
      been known for the immensity with which its members were bestowed. The very success
      story of its students as professionals into their respective fields after graduations
      speaks of its standards.`
  },
  {
    "heading" : "ELECTRON DEVICE SOCIETY",
    "href" : "https://eds.ieee.org/",
    "src" : "images/eds-logo.jpg",
    "paragraph" : `EDS promotes excellence in the field of electron devices by enhancing the
      quality of life for humanity through its members’ contributions in R&D, manufacturing, and
      application of electronic and ionic devices. Membership includes access to multiple
      periodicals, opportunities to network with peers, the Resource Center, and exclusive
      webinars.
      To foster professional growth of its members by satisfying their needs for easy access
      to and exchange of technical information, publishing, education, and technical recognition
      and enhancing public visibility in the field of Electron Devices.`
  },
  {
    "heading" : "WOMEN IN ENGINEERING",
    "href" : "https://wie.ieee.org/",
    "src" : "images/wie-logo.png",
    "paragraph" : `IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the
      world to follow their academic interests in a career in engineering and science.
      Our mission is to inspire, engage, encourage, and empower IEEE women student members
      and facilitate the recruitment and retention of women in technical disciplines globally.`
  },
  {
    "heading" : "ROBOTICS AND AUTOMATION SOCIETY",
    "href" : "https://www.ieee-ras.org/",
    "src" : "images/ras-logo.png",
    "paragraph" : `The IEEE Robotics and Automation Society's objectives are scientific, literary and educational in character. The Society strives for the advancement of the theory and
      practice of robotics and automation engineering and science and of the allied arts and
      sciences, and for the maintenance of high professional standards among its members, all
      in consonance with the Constitution and Bylaws of the IEEE and with special attention to
      such aims within the Field of Interest of the Society.`
  }
];

var join_ieee = [
  {
    "src" : "images/join1.png",
    "parab" : "Staying Technically Relevant",
    "paragraph" : "Be aware of the new and changing technologies by getting access to the recent journals, publications and conferences."
  },
  {
    "src" : "images/join2.png",
    "parab" : "Career Resources and Recognition",
    "paragraph" : "Leadership is a skill that must be crafted over time. Keep your career moving in the right direction with IEEE career benefits and resources."
  },
  {
    "src" : "images/join3.png",
    "parab" : "Professional Networking",
    "paragraph" : "With other IEEE members who share similar interests, you can build a network revolving around your profession, industry or projects."
  },
  {
    "src" : "images/join4.png",
    "parab" : "IEEE Chapters",
    "paragraph" : "Engage with others through informative technical meetings"
  },
  {
    "src" : "images/join5.png",
    "parab" : "Building Team spirit & Self confidence",
    "paragraph" : "By organizing events things like leadership, patience, perseverance, felicitation, street-smartness, and stress management come automatically to you."
  },
  {
    "src" : "images/join6.png",
    "parab" : "Global benefits finder",
    "paragraph" : "To uncover IEEE member benefits that are most relevant to you, you may use the Global Benefits finder which will render a list of key IEEE member benefits that can help you accelerate your career plans and help you grow as a technology professional."
  }
];

var events = [
  {
    "src" : "https://www.ieeesjce.com/static/media/ieee-day.813df8f0.jpg",
    "heading" : "IEEE ECLECTIC",
    "paragraph" : "Stuck with loads of classes and piling assignments?We're here to change your pace and ..."
  },
  {
    "src" : "https://www.ieeesjce.com/static/media/sim2.0.209615b8.png",
    "heading" : "Simtool 2.0",
    "paragraph" : "The EDS chapter of IEEE-SJCE brings you a 3-day workshop, SIMTOOL 2.0"
  },
  {
    "src" : "https://www.ieeesjce.com/static/media/CN-1.3848a319.jpg",
    "heading" : "Just Code It",
    "paragraph" : "To all the geeks out there, it's time to bring out your analytical and problem-solving skills on board."
  },
  {
    "src" : "https://www.ieeesjce.com/static/media/py.c66050be.jpg",
    "heading" : "Python Bootcamp",
    "paragraph" : "In 2021, Python is the most widely used multi-purpose programming language. Name a domain, ..."
  },
  {
    "src" : "https://www.ieeesjce.com/static/media/imgp.8ca45066.jpg",
    "heading" : "Image Processing",
    "paragraph" : "The RAS wing is back with IMAGE PROCESSING WORKSHOP a 3-day workshop where we plan to take you ..."
  },
  {
    "src" : "https://www.ieeesjce.com/static/media/pod.154957b4.jpg",
    "heading" : "Alumni Podcast",
    "paragraph" : "We have witnessed first hand perspectives of a lucrative education overseas and the possible opportunities ..."
  },
  {
    "src" : "https://www.ieeesjce.com/static/media/talk.54fdebfd.png",
    "heading" : "Talk on EECS",
    "paragraph" : "Do you have plans to explore a hardware and software integrated domain and have no idea where to get started? ..."
  },
  {
    "src" : "https://www.ieeesjce.com/static/media/CN-2.190824a3.jpg",
    "heading" : "Webinar by CN",
    "paragraph" : "Coding Ninjas in association with IEEE-SJCE presents a webinar on ROADMAP TO CRACK INTERNSHIP AND PLACEMENT INTERVIEWS ..."
  }
];

var mentors = [
  {
    "src" : "images/mgv.jpg",
    "email" : "mailto:example@gmail.com",
    "name" : "DR. M G VEENA",
    "role" : "Branch Councelor"
  },
  {
    "src" : "images/spk.jpeg",
    "email" : "mailto:example@gmail.com",
    "name" : "DR. SUDARSHAN P K",
    "role" : "RAS ADVISOR"
  },
  {
    "src" : "images/sbk.jpg",
    "email" : "mailto:example@gmail.com",
    "name" : "DR. S B RUDRASWAMY",
    "role" : "EDS ADVISOR"
  },
  {
    "src" : "images/shas.jpg",
    "email" : "mailto:example@gmail.com",
    "name" : "MR. SHASHIDHAR R",
    "role" : "SBMDC ADVISOR"
  },
  {
    "src" : "images/ssp.jpg",
    "email" : "mailto:example@gmail.com",
    "name" : "MS. SUPREETHA M",
    "role" : "WIE ADVISOR"
  }
];

var links = [
  {
    href : "https://jssstuniv.in/",
    name : "JSS STU"
  },
  {
    href : "https://www.ieee.org/",
    name : "IEEE.org"
  },
  {
    href : "https://wie.ieee.org/",
    name : "IEEE WIE"
  },
  {
    href : "http://www.ieee-ras.org/",
    name : "IEEE RAS"
  },
  {
    href : "https://eds.ieee.org/",
    name : "IEEE EDS"
  },
  {
    href : "https://standards.ieee.org/",
    name : "IEEE Standards"
  },
  {
    href : "https://ieeebangalore.org/",
    name : "IEEE-Bengaluru section"
  },
];

var media_icon = [
  {
    media : "Facebook",
    href : "https://www.facebook.com/ieeesjce/",
    view : "0 0 320 512",
    pathd : "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
  },
  {
    media : "Instagram",
    href : "https://www.instagram.com/ieee_sjce/",
    view : "0 0 448 512",
    pathd : `M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`
  },
  {
    media : "LinkedIn",
    href : "https://www.linkedin.com/company/ieee-sjce/",
    view : "0 0 448 512",
    pathd : "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  },
  {
    media : "YouTube",
    href : "https://www.youtube.com/user/IEEESJCE",
    view : "0 0 576 512",
    pathd : "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
  }
];

var options = {
  societies : societies,
  join : join_ieee,
  events : events,
  mentors : mentors,
  links : links,
  icons : media_icon
}

app.get('/', (req, res) => {
  res.render('index', options);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
