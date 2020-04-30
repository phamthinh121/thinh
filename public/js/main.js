const postMessage = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    fetch('/people', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    })
    .then(res => {
        return res.json();
    })
    .then(result => {
        console.log(result);
        const infor = document.getElementById('infor');
        infor.innerHTML = `
            <div>
            <h1>Name = ${result.name}</h1>
            <p>email = ${result.email}</p>
            <p>Subject = ${result.subject}</p>
            <p>Message = ${result.message}</p>
            </div>
        `
    })
    .catch(e => {
        alert('Some thing erroe. Sorry about that');
    })

}