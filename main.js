let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/dakotachantz");
req.addEventListener("load", reqListener);
req.send();

function reqListener() {
    let data = JSON.parse(this.responseText);

    const heading = `
    <p>${data.name}</p>
`
    const basics =
        `
    <h2>The Basics</h2>
    <div class="basics_content">
    <p>Name: ${data.name}</p>
    <p>Github URL: <a href="${data.html_url}">${data.login}</a></p>
    <p>Email: <a href="mailto:dakotachantz@gmail.com?Subject=Hello%20World">dakotachantz@gmail.com</a></p>
    <p>Company: ${data.company}</p>
    <p>Website: <a href="${data.blog}">${data.blog}</a></p>
    </div>
`

    const story =
        `
 <h2>The Story</h2>
<div class="story_content">
<p>${data.bio}</p>
    <img src="${data.avatar_url}" alt="avatar picture">
    </div>
 `
    document.querySelector("header").innerHTML = heading;
    document.querySelector(".basics").innerHTML = basics;
    document.querySelector(".story").innerHTML = story;
}




