const skills = '<div class="incoming"><h1>Incoming ...</h1></div>'
const contact = '<div class="incoming"><h1>Incoming ...</h1></div>'
const aboutme = '<div class="text"><p class="name">Hi, my name is Jeremy.</p><p>I am a student a Epitech - European Institute of Technology<br>Passionate about new technologies, I am constantly looking to improve my skills.</p></div>'


let content = document.getElementById('content')
const AboutMe = document.getElementById('AboutMe')
const Skills = document.getElementById('Skills')
const Contact = document.getElementById('Contact')


content.innerHTML = aboutme


let activeSection = "aboutme"


function fade(contenu, section) {

    if (activeSection !== section) {
        content.classList.remove('fadeIn')
        content.classList.add('fadeOut')
        setTimeout(() => {
            content.innerHTML = contenu
            content.classList.remove('fadeOut')
            content.classList.add('fadeIn')
            activeSection = section
        }, 500);
    }


}


AboutMe.addEventListener('click', (e) => {
    fade(aboutme, "aboutme")
})


Skills.addEventListener('click', () => {
    fade(skills, "skills")
})

Contact.addEventListener('click', () => {
    fade(contact, "contact")
})