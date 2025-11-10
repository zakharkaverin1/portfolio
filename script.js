const switcherRus = document.getElementById("rus");
const switcherEng = document.getElementById("eng");

// Общая функция для смены языка
function switchLanguage(lang) {
    // ОДИН fetch запрос
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const languageData = data[lang];

            // Navigation
            const nav = languageData.section1;
            document.getElementById("nav-intro").innerHTML = nav["nav-intro"];
            document.getElementById("nav-about").innerHTML = nav["nav-about"];
            document.getElementById("nav-projects").innerHTML = nav["nav-projects"];

            // Section 1 с анимацией печати
            const intro = document.getElementById("intro-text");
            const introText = languageData.section1.intro;
            typeText(intro, introText);

            // Section 2
            const section2 = languageData.section2;
            document.getElementById("skills-title").innerHTML = section2["skills-title"];
            document.getElementById("html-skills").innerHTML = section2["html-skills"];
            document.getElementById("js-skills").innerHTML = section2["js-skills"];
            document.getElementById("py-skills").innerHTML = section2["python-skills"];
            document.getElementById("go-skills").innerHTML = section2["golang-skills"];
            document.getElementById("other-title").innerHTML = section2["other-title"];
            document.getElementById("lang-skills").innerHTML = section2["languages-skills"];
            document.getElementById("about-text-1").innerHTML = section2["about-text-1"];
            document.getElementById("about-text-2").innerHTML = section2["about-text-2"];

            // Section 3
            const section3 = languageData.section3;
            document.getElementById("projects-title").innerHTML = section3["projects-title"];
            document.getElementById("project1-title").innerHTML = section3["project1-title"];
            document.getElementById("project1-description").innerHTML = section3["project1-description"];
            document.getElementById("project1-feature1").innerHTML = section3["project1-feature1"];
            document.getElementById("project1-feature2").innerHTML = section3["project1-feature2"];
            document.getElementById("project1-feature3").innerHTML = section3["project1-feature3"];
            document.getElementById("project1-feature4").innerHTML = section3["project1-feature4"];

            // Сохраняем выбранный язык
            localStorage.setItem('preferredLanguage', lang);
        })
        .catch(error => {
            console.error('Error loading language data:', error);
        });
}

// Функция анимации печати (вынесена наружу)
function typeText(element, text) {
    let i = 0;
    element.innerHTML = '';

    function typeChar() {
        if (i < text.length) {
            if (text.substr(i, 6) === '&nbsp;') {
                element.innerHTML += '&nbsp;';
                i += 6;
            } else {
                element.innerHTML += text[i];
                i++;
            }
            setTimeout(typeChar, 50);
        }
    }
    typeChar();
}

// Обработчики событий
switcherRus.addEventListener("click", function() {
    switchLanguage('rus');
});

switcherEng.addEventListener("click", function() {
    switchLanguage('eng');
});

// Загружаем язык при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    switchLanguage('rus');
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const defaultLanguage = savedLanguage || 'rus'; // русский по умолчанию

    switchLanguage(defaultLanguage);
});
