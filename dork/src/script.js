function subdomainDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function portDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function urlDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function genericDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}



function allDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}


function orDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function gitDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

function cmsDork(dork) {
    const domain = document.getElementById('searchdomain').value;
    if (domain) {
        const finalDork = dork.replace('example.com', domain);
        
        if (finalDork.startsWith('http://') || finalDork.startsWith('https://')) {
            window.open(finalDork, '_blank');
        } else {

            window.open(`https://www.google.com/search?q=${encodeURIComponent(finalDork)}`, '_blank');
        }
    } else {
        alert('Please enter a target domain.');
    }
}

const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';
    themeLabel.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

function toggleTheme() {
    if (themeSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeLabel.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeLabel.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

themeSwitch.addEventListener('change', toggleTheme);
