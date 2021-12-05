async function upvoteClickHandler(event) {
    event.preventDefault();
    console.log('click')
  
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
  
const dog_name = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
    const response = await fetch('/api/users/vote', {
    method: 'PUT',
    body: JSON.stringify({ 
      //dog_name: dog_name,
      vote_id: id,
        
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
