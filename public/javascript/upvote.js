const sequelize = require("../../config/connection");

async function upvoteClickHandler(event) {
    event.preventDefault();
    console.log('click')
  

const dog_name = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

const response = await fetch('/api/vote', {
    method: 'PUT',
    body: JSON.stringify({ 
      
      // dog_name: dog_name,
      vote_id: id,  
      // user_id: this.user_id,
      // username: this.username 
        
      }),
      headers: {
        'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
    console.log('vote received')
    document.location.reload();
    } else {
      console.log('vote didnt work')
    alert(response.statusText);
    }
  };

  document.querySelector('.upvote-form').addEventListener('submit', upvoteClickHandler);
