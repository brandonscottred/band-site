const commentsForm = document.getElementById('commentsForm');
const comments = document.querySelector('.comments__card');

const date = new Date();
console.log(date);
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}/${day}/${year}`;
console.log(currentDate);


let commentsArray = [
    {
    name: 'Connor Walton',
    timestamp: '02/17/2021',
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
    name: 'Emilie Beach',
    timestamp: '01/09/2021',
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",    
    },
    {
    name: 'Miles Acosta',
    timestamp: '12/20/2020',
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }
];

commentsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputNameVal = event.target.Name.value;
    const inputCommentVal = event.target.Comment.value;

    if (inputNameVal !== '' && inputCommentVal !== '') {
        commentsArray.push ({
            name: inputNameVal,
            timestamp: currentDate,
            comment: inputCommentVal,
        });
        renderComments();
        event.target.reset();
    } else {
        alert('please enter your name and a comment');
    }
});

function renderComments() {
    comments.innerHTML = '';
    commentsArray.forEach(function (comment) {
        const commentName = document.createElement('h3');
        commentName.innerText = comment.name;
        const commentText = document.createElement('p');
        commentText.innerText = comment.comment;
        const commentDate = document.createElement('p');
        commentDate.innerText = comment.timestamp;

        comments.appendChild(commentName);
        comments.appendChild(commentDate);
        comments.appendChild(commentText);
    });
}

renderComments();