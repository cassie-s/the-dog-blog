
async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    console.log(comment_text);
  
    const dog_name = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            dog_name: dog_name,
            comment_text: comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  // document.querySelector('.comment-form').addEventListener('click', console.log('hello'));
  document.querySelector('.comment-form').addEventListener('submit', (commentFormHandler));
