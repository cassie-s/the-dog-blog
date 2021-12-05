async function upvoteClickHandler(event) {
    event.preventDefault();
    console.log('click')
  
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
  
    const response = await fetch('/api/upvote', {
    method: 'PUT',
    body: JSON.stringify({ 
      post_id: id,
        
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
