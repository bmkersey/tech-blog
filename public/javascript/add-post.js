async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-text"]').value;
    

    const response = await fetch('/api/posts/', {
        method: 'post',
        body: JSON.stringify({
            title,
            content
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        });
    
        if (response.ok) {
            console.log('success')
            document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);