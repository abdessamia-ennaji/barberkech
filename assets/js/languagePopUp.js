document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('language-popup');
    const content = document.getElementById('content');
    const callUs = document.getElementById('call_us');
    const description = document.getElementById('description');

    const translations = {
        en: {
            call_us: 'Call Us :',
            description: 'This is a sample text.'
        },
        fr: {
            call_us: 'Appelez-nous :',
            description: 'Ceci est un texte d\'exemple.'
        },
        ar: {
            call_us: 'اتصل بنا :',
            description: 'هذا نص تجريبي.'
        }
    };

    const savedLang = localStorage.getItem('selectedLanguage');

    if (!savedLang) {
        popup.style.display = 'flex';
    } else {
        updateContent(savedLang);
    }

    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
            popup.style.display = 'none';
            updateContent(selectedLang);
        });
    });

    function updateContent(lang) {
        callUs.textContent = translations[lang].call_us;
        description.textContent = translations[lang].description;
    }
});



