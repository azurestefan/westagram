//댓글 추가 기능
const replyText = document.querySelector('.reply_text');
const replyBtn = document.querySelector('.post_reply_button');
const replyList = document.querySelector('.reply');

function upload(incomingReply){
    const list = document.createElement('li');
    const para = document.createElement('p');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const img = document.createElement('img');
    span.className='reply_author';
    span.innerText = 'Andreas';
    para.innerText = incomingReply;
    img.src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
    list.appendChild(span);
    list.appendChild(para);
    list.appendChild(img); 
    replyList.appendChild(list);
}

function mouseClick(){
    upload(replyText.value);
    replyText.value=null;
}

replyBtn.addEventListener('click', mouseClick);