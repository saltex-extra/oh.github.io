const noteSpeed = 5; // Notes speed in pixels per frame
let score = 0;

function createNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    note.style.left = Math.random() * 750 + 'px'; // Random position between 0 and 750px
    document.querySelector('.notes-container').appendChild(note);

    const fallInterval = setInterval(() => {
        const position = parseInt(note.style.top) || 0;
        if (position >= 550) { // If note reaches the bottom
            clearInterval(fallInterval);
            note.remove();
        } else {
            note.style.top = position + noteSpeed + 'px';
        }
    }, 16);

    note.addEventListener('click', () => {
        score++;
        updateScore();
        note.remove();
    });
}

function updateScore() {
    document.querySelector('.score').innerText = 'Score: ' + score;
}

setInterval(createNote, 1000); // Generate notes every second


