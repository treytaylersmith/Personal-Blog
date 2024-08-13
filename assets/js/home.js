const usernameInputEl = $('#username');
const titleInputEl = $('#title-input');
const blogInputEl = $('#blog-input');
const blogPostFormEl = $('#blog-post-form');
const colorSwitchEl = $('#color');
const body = $('#body');

function updateLocalStorage(post) {
    console.log(post);
    let storedBlog = JSON.parse(localStorage.getItem('blog'));
    if(!storedBlog){
        storedBlog = [];
    }
    storedBlog.push(post);
    localStorage.setItem('blog', JSON.stringify(storedBlog));
}

function handleSubmit(event){
    event.preventDefault();

    if((usernameInputEl.val() === '')||(titleInputEl.val() === '')||(blogInputEl.val() === '')){
        window.alert('Please fill out form before submitting');
        return;
    }
    const post = {
        username: usernameInputEl.val(),
        title: titleInputEl.val(),
        text: blogInputEl.val()
    };
    console.log(post);
    updateLocalStorage(post);

    window.location.href = "./blog.html";
}

function switchColorScheme(event){
    event.preventDefault();
    console.log('Color Button Pressed');
    if(body.hasClass('light')){
        body.removeClass('light')
        body.addClass('dark');
    }
    else{
        body.removeClass('dark').addClass('light');
    }
}

$(document).ready(() =>{

    
    body.addClass('light');

    colorSwitchEl.on('click',switchColorScheme);

    blogPostFormEl.on('submit', handleSubmit);


});