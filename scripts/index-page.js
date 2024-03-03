const commentsForm = document.getElementById('commentsForm');
const comments = document.querySelector('.comments__card');

function formatDate(timestamp) {
    let toDate = new Date(timestamp).getDate();
    let toMonth = new Date(timestamp).getMonth()+1;
    let toYear = new Date(timestamp).getFullYear();
    let original_date = toMonth+'/'+toDate+'/'+toYear;
    return original_date;
};


// turn into a function to use for s2 AND s3

let commentsArray = [
    // {
    // name: 'Connor Walton',
    // timestamp: '02/17/2021',
    // comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    // },
    // {
    // name: 'Emilie Beach',
    // timestamp: '01/09/2021',
    // comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",    
    // },
    // {
    // name: 'Miles Acosta',
    // timestamp: '12/20/2020',
    // comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    // }
];

const bandSiteApi = new BandSiteApi (apiKey);

const defaultCommentsPromise = bandSiteApi.getComment();
console.log(defaultCommentsPromise); /* use console to get ID of added comments to delete */

defaultCommentsPromise
    .then(result => {
        for(let i = 0; i < result.length; i++) {
            let defaultCommentChain = {
                name: result[i].name,
                comment: result[i].comment,
                timestamp: formatDate(result[i].timestamp)
            }
            commentsArray.push(defaultCommentChain);
            renderComments();
        }
    });

function renderComments() {
    comments.innerHTML = '';
    commentsArray.forEach(function (comment) {
        const commentAvatar = document.createElement('img');
        commentAvatar.className = 'comments__card--avatar';

        const commentRendered = document.createElement('div');
        commentRendered.className = 'comments__card--container';

        const commentName = document.createElement('h3');
        commentName.className = "comments__card--container-title";
        commentName.innerText = comment.name;
        const commentText = document.createElement('p');
        commentText.className = "comments__card--container-text";
        commentText.innerText = comment.comment;
        const commentDate = document.createElement('p');
        commentDate.className = "comments__card--container-date";
        commentDate.innerText = comment.timestamp;

        const divider = document.createElement('div');
        divider.className = 'comments__card--divider';

        comments.appendChild(commentAvatar);
        comments.appendChild(commentRendered);
        commentRendered.appendChild(commentName);
        commentRendered.appendChild(commentDate);
        commentRendered.appendChild(commentText);
        comments.appendChild(divider);
    });
}

renderComments();

commentsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputNameVal = event.target.Name.value;
    const inputCommentVal = event.target.Comment.value;

    if (inputNameVal !== '' && inputCommentVal !== '') {
        const postBody = {
            "name": inputNameVal,
            "comment": inputCommentVal,
        };  
        const postCommentServer = bandSiteApi.postComment(postBody);
        console.log(postCommentServer);
        postCommentServer
            .then(result => {
                commentsArray.unshift ({
                    name: result.name,
                    comment: result.comment,
                    timestamp: currentDate,
                });
                console.log(postCommentServer);
                renderComments();
                event.target.reset()
            })
    } else {
        alert('please enter your name and a comment')
    }
});

// const delId = "897f85f7-3e1c-4acc-9284-ea7e9e71f0fd";
// bandSiteApi.deleteComment()