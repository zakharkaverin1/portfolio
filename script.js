//Section 1
const intro = document.getElementById("intro-text");
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const introText = data.rus.text.section1.intro;
        typeText(intro, introText);
    });

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
            setTimeout(typeChar, 100);
            setTimeout(typeChar, 100);
        }
    }
    typeChar();
}


