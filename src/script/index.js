


const password = {
    a: 'IJ',
    b: 'BIJE',
}
let passwordInput = document.querySelector('#password')
let passwordSubmit = document.querySelector('#passwordCheck')
const modalText = document.querySelector('#modalText')
const passwordAskContainer = document.querySelector('#passwordAsk')
const questionContainer = document.querySelector('#question')
let q = 1
let mywindow = document.querySelector('#test')
const buttonContainer = document.querySelector('.button')
let yourName = ''

const yesButtonInitiator = {
    normal: (text)=> {
       return  `<button class="p-right" onclick="q = q+1; myQuestion()">${text ? text : 'Ok'}</button>`
    },
    moveButton: (text)=> {
        return `<button class="p-right" onmouseover="move()">${text ? text : 'Ok'}</button>`
    },
}

const cancelButtonInitiator = {
    moveButton: (text)=> {
        return `<button class="cancelButton" onmouseover="move()">${text ? text : 'Tidak'}</button>`
    },
    normal: (text)=> { 
       return `<button class="cancelButton" onclick="q = q+1; myQuestion()">${text ? text : 'Tidak'}</button>`
    },
}

passwordSubmit.addEventListener('click',() => {
    if (passwordInput.value.toUpperCase() == password.a || passwordInput.value.toUpperCase() == password.b) {
        myQuestion()
    } else {
        alert('password salah')
    }
})
 

function addanimation(){
    var element = document.getElementById("test");
    element.classList.add("myanimated");
 }

function move(){
    let kali=20;
    addanimation();
    let random1=(mywindow.offsetTop+(Math.floor(Math.random() * 10)-5)*kali);
    let random2=(mywindow.offsetLeft+(Math.floor(Math.random() * 10)-5)*kali);
    if(random1>0 && random1<33)random1=33+20;
    if(random1<0 && random1>-33)random1=-33-20;
    if(random2>0 && random2<83)random2=83+20;
    if(random2<0 && random2>-83)random2=-83-20;
    if(random1==0 && random2==0)random1=-100;
    mywindow.style.top  = random1 + 'px';
    mywindow.style.left = random2 + 'px';
    if(random1<0 || ((random1+mywindow.clientHeight)>window.innerHeight)){
        mywindow.style.top = "calc(50% - "+mywindow.clientHeight/2+"px)";
    }
    if(random2<0  || ((random2+mywindow.clientWidth)>window.innerWidth)){
        mywindow.style.left = "calc(50% - "+mywindow.clientWidth/2+"px)";
    }
}
function specialQuestion(text) {
    buttonContainer.classList.add('hide')
    modalText.innerHTML = `<p>${text}</p>
    <div class="form">
        <form onsubmit="return false;">
            <input id="name" type="text">
            <button type="submit" onclick="saveName();q = q+1; myQuestion()">Lanjut</button>
        </form>
    </div>
    `
}

function saveName() {
    yourName = document.querySelector('#name').value
    console.log(yourName)
}

function questionContent(text, yesText) {
    buttonContainer.classList.remove('hide')
    modalText.innerHTML = `<p>${text}<p>`
    buttonContainer.innerHTML = yesButtonInitiator.normal(yesText)
};

function questionContentReverse(text, yesText) {
    buttonContainer.classList.remove('hide')
    modalText.innerHTML = `<p>${text}</p>`
    buttonContainer.innerHTML = yesButtonInitiator.moveButton(yesText)
};

function voiceOverContent(text) {
    modalText.innerHTML = `<p>${text}</p>
    <audio controls autoplay>
    <source src="./src/vnku.ogg" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>`
}

function videoContent(text, url) {
    modalText.innerHTML = `<p>${text}</p>
    <div class="video">
    <video controls autoplay>
    <source src="${url}" type="audio/mpeg">
  Your browser does not support the audio element.
  </video>
    </div>`
}

function videoContent2(url) {
    mywindow.innerHTML = `
    <div >
    <video class="video2" controls autoplay onended="myQuestion()">
    <source src="${url}" type="audio/mpeg">
  Your browser does not support the audio element.
  </video>
    </div>`
    mywindow.classList.remove('secret')
}

function ending() {
    mywindow.classList.add('secret')
    mywindow.innerHTML = `
    <div class="header">
    <div onclick="alert('Jangan keluar dulu dong:(')" class="red header-circle"></div>
    <div class="yellow header-circle"></div>
    <div class="green header-circle"></div>
</div>
<div class="header-content" >
    <div id="modalText">
<p>    Habis.. Semoga kamu seneng ya</p>
    </div>
    <div class="button">
    <button class="p-right" onclick="q = q+1; myQuestion()">Selesai</button>
    </div>
</div>
    `

}

function gifContent(text) {
    modalText.innerHTML = `<p>${text}</p>
    <img src="./src/vhug.gif">`
}

function hiddenAudio() {
    modalText.innerHTML += `
    <audio controls autoplay style="display:none;">
    <source src="https://andikasujanadi.github.io/somebody/opening.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>`
}

function questionContentAddCancelButton(text) {
    buttonContainer.innerHTML += cancelButtonInitiator.moveButton(text)
}

function removeMusic() {
    document.querySelector('#openingSong').innerText = '<p></p>'
}
document.querySelector('#openingSong').innerHTML = `
        <audio controls autoplay style="display: none;">
            <source src="./src/opening.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>`

function moveQuestionContentAddCancelButton(yesText) {
    mywindow.style.top = "50%"
    mywindow.style.left = "50%"
    buttonContainer.innerHTML = yesButtonInitiator.normal(yesText)
}

function myQuestion() {
    passwordAskContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    
    if(q == 1) {
        specialQuestion('Wah bener..., Tapi aku masih belum percaya nih. Ketik nama kamu dulu ya. ')
    } else if(q == 2) {
        questionContent(`Tetot... Nama kamu bukan ${yourName}. Disini... nama kamu itu sayangnya jeje 😋`)
    } else if(q == 3) {
        questionContent('Your support system is ready...')
    } else if(q == 4) {
        questionContent('hello..., Jeje disini!')
    } else if(q == 5) {
        questionContent('Jeje ingin memberikan semangat nih buat Kamu')
    } else if(q == 6) {
        questionContent('Here we go...!')
    } else if(q == 7) {
        questionContent('Tanggal 4 Juni... Sekali lagi, Pertarunganmu bakal dimulai...')
    } else if(q == 8) {
        questionContent('tahun ini lombanya berat banget ya?')
    } else if(q == 9) {
        questionContent('Mulai dari kebumian yang bukan passion kamu...')
    } else if(q == 10) {
        questionContent('Terus robot yang disuruh cari tema lagi kan?, soalnya lombanya bakalan beda...')
    } else if(q == 11) {
        questionContent('Maaf ya..., Aku gak bisa ngasih saran apa-apa buat kamu...')
    } else if(q == 12) {
        questionContent('Tapi.. kamu masih kuat kan? Semangat! keduanya udah didepan mata, belum lagi ujian kenaikan kelas kamu nih')
    } else if(q == 13) {
        questionContent('Aku disini cuma bisa ngasih semangat dan terus berdoa buat kamu.')
    } else if(q == 14) {
        questionContent('okay.. Jeje disini bakal semangatin sayangnya')
    } else if(q == 15) {
        removeMusic()
        voiceOverContent('Jeje ninggalin vn nih buat kamu, dengar yaa...')    
    } else if(q == 16) {
        questionContent('Disini.. Si merah sma Si coklat semangatin juga loh...!')
    } else if(q == 17) {
        questionContent('Katanya "Cemumut ya mami... disini kita berdoa juga loh"')
    } else if(q == 18) {
        questionContent('Aku punya pertanyaan nih buat kamu...')
    } else if(q == 19) {
        questionContent('Udah Senyum belom?', 'udah') // question
        questionContentAddCancelButton("Belum")
    } else if(q == 20) {
        moveQuestionContentAddCancelButton()
        questionContent('Tambah sayang?', 'iya') // question
        questionContentAddCancelButton("Engga")
    } else if(q == 21) {
        moveQuestionContentAddCancelButton()
        questionContent('agak maksa ya? hheheh....', 'Lanjut') // question
    } else if(q == 22) {
        moveQuestionContentAddCancelButton()
        questionContentReverse('udah semangat?', 'udah') // question
        buttonContainer.innerHTML += cancelButtonInitiator.normal('belum')
    } else if(q == 23) {
        moveQuestionContentAddCancelButton()
        videoContent('kalo belum semangat..., pernah mikir gak gimana ekspresi aku kalo ngomong sayang ke kamu? nih videonya.', './src/vid.mp4')
    } else if(q == 24) {
        moveQuestionContentAddCancelButton('Lanjut')
        gifContent('Bi... Semangat!')
    } else if(q == 25) {
        moveQuestionContentAddCancelButton('Lanjut')
        questionContent('Tetap sama aku ya..!', 'iya') // question
        hiddenAudio()
        questionContentAddCancelButton("Engga")
    } else if(q == 26) {
        moveQuestionContentAddCancelButton('Selesai')
        videoContent2('./src/video.mp4')
        q = 27
    } else if(q == 27) {
        ending()
    } else if ( q == 28) {
        mywindow.style.transform = 'translate(-500px, 1000px)'
        mywindow.style.transition = 'transform 0.9s'
    }
}

