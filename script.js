document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('profile-name');
    const nameText = 'Pablo Marotta';
    let index = 0;
    let isDeleting = false;
    let delay = 130;

    function type() {
        if (isDeleting) {
            if (index > 0) {
            nameElement.textContent = nameText.slice(0, index-1);
            index--;
            delay = 100;
            }
            else {
                isDeleting = false;
                delay = 500;
            }
        }
        else {
            if (index < nameText.length) {
                nameElement.textContent = nameText.slice(0, index+1);
                index++;
                delay = 130;
            }
            else {
                isDeleting = true;
                delay = 500;
            }
        }
        setTimeout(type, delay);
    }

    type();
});

// Path: style.css
const styleElement = document.createElement('style');
styleElement.textContent = `
    .menu-item {
        margin: 10px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
    }
`;
document.head.appendChild(styleElement);
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.fontWeight = 'bold';
        item.style.textDecoration = 'underline';
        item.style.cursor = 'pointer';
        item.style.color = getRandomColor(); // Add a random color to the text
    });

    item.addEventListener('mouseout', () => {
        item.style.fontWeight = 'normal';
        item.style.textDecoration = 'none';
        item.style.cursor = 'default';
        item.style.color = ''; // Reset the color to default
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

class Recommendation {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const recommendations = [
    new Recommendation('John Doe', 'Highly skilled engineer with expertise in JavaScript and web development.'),
    new Recommendation('Jane Smith', 'Talented software engineer with a strong background in algorithms and data structures.'),
    new Recommendation('Alex Johnson', 'Experienced full-stack developer with a passion for creating efficient and scalable applications.')
];

function deployRecommendations () {
    recommendationsList.innerHTML = '';
    recommendations.forEach(recommendation => {
        const recommendationCard = document.createElement('div');
        recommendationCard.classList.add('recommendation-card');

        recommendationCard.innerHTML = `
            <h2>${recommendation.name}</h2>
            <p>${recommendation.description}</p>
        `;

        // Add the new recommendation card to the recommendations list
        recommendationsList.appendChild(recommendationCard);
        
    });
}

    // Obtiene el contenedor de las recomendaciones

const recommendationsList = document.getElementById('recommendations-list');

    // Itera sobre las recomendaciones y crea los elementos HTML
    deployRecommendations();



const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let formName = document.getElementById('name').value;
    let formDescription = document.getElementById('recommendation').value;

    if (formDescription === '' ) {
        alert('Please fill with a recommendation message');
        return;
    }
    else if (formName === '') {
        formName = 'Anonymous';
    }

    recommendations.push(new Recommendation(formName, formDescription));

    recommendationsList.innerHTML = '';

    deployRecommendations();

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('recommendation').value = '';
});



// Path: index.html
