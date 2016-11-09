export const createUser = (userInfo) => {
    const li = document.createElement('li');
    li.classList.add('user');
    const domStr = `
        <div class="user-icon">
            <img src="${userInfo.avatar_url}" alt="">
        </div>
        <div class="user-content">
            <p class="user-name">${userInfo.login}</p>
            <p class="user-location">${userInfo.location || 'earth?'}</p>
            <p class="user-email">${userInfo.email || '- -！'}</p>
        </div>
        <div>
            <div class="islike">
                <a href="#" data-like="dislike" class="dislike"></a>
            </div>
            <div class="user-bye">
                
            </div>
        </div>
    `
    li.innerHTML = domStr;
    return li;
}