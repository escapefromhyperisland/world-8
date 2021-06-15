const correctPassword = 'future'
const correctCode = '835'
let haveMarker = false
let passwordIsCorrect = false
let codeIsCorrect = false

const correct = new Audio("./assets/audios/correct.mp3")
const wrong = new Audio("./assets/audios/wrong.mp3")
const background = new Audio("./assets/audios/background.mp3")
background.volume = 0.2;
background.loop = true;
let musicIsPlaying = true;


function handleMusic () {
    const musicIcon = document.querySelector('#music-icon')
    musicIsPlaying? background.pause() : background.play();
    musicIsPlaying? musicIcon.className = 'fas fa-volume-mute fa-xs' : musicIcon.className = 'fas fa-volume-down fa-xs';
    musicIsPlaying = !musicIsPlaying;
}

function closePopup() {
    background.play()
    document.querySelector('#popup').style.visibility = 'hidden'
    document.querySelector('#info-button').style.visibility = 'visible'
    document.querySelector('#music-button').style.visibility = 'visible'
}

function displayPopup() {
    document.querySelector('#popup').style.visibility = 'visible'
    document.querySelector('#info-button').style.visibility = 'hidden'
}

function goToNextWorld() {
    window.parent.postMessage('nextLevel')
}

window.addEventListener('keydown', function(e){
    if(e.code === 'Space') { 
        const player = document.querySelector('#player')
        const playerPosition = player.getAttribute('position')
        const down = 1.5
        
        playerPosition.y = down

        player.setAttribute('position', playerPosition)
    }
});

window.addEventListener('keyup', function(e){
    if (e.code === 'Space') {
        const player = document.querySelector('#player')
        const playerPosition = player.getAttribute('position')
        const up = 3

        playerPosition.y = up

        player.setAttribute('position', playerPosition)
    }
})

AFRAME.registerComponent('keyboard-functions', {

    init: function () {

        // for referencing issues
        let self = this;

        // input event triggered when user presses enter
        this.el.addEventListener('superkeyboardinput', function (event) {
            // text also accessible via: self.el.getAttribute('super-keyboard')['value']
            let input = event.detail.value;

            // clear the input bar (since keyboard is not disappearing)
            self.el.setAttribute('super-keyboard', 'value', '');

            // handle password
            if (input === correctPassword) {
                correct.play()
                document.querySelector('#button').setAttribute('gltf-model', 'https://media.githubusercontent.com/media/escapefromhyperisland/world-8/main/elin/assets/models/green-button.glb')
                document.querySelector('#button').flushToDOM()
                passwordIsCorrect = true
            } else {
                wrong.play()
                document.querySelector('#button').setAttribute('gltf-model', 'https://media.githubusercontent.com/media/escapefromhyperisland/world-8/main/elin/assets/models/red-button.glb')
                document.querySelector('#button').flushToDOM()
                passwordIsCorrect = false
            }
        });

        // dismiss event triggered when user closes keyboard
        this.el.addEventListener('superkeyboarddismiss', function (event) {
            // repurpose close functionality to clear all input text without submitting
            self.el.setAttribute('super-keyboard', 'value', '');
        });
    },

    tick: function (time, timeDelta) {
        // force keyboard to remain visible even after input or dismiss events triggered
        if (!this.el.object3D.visible)
            this.el.object3D.visible = true;
    }

})

AFRAME.registerComponent('numpad-keyboard-functions', {

    update: function () {

        let self = this;

        // input event triggered when user presses enter
        this.el.addEventListener('superkeyboardinput', function (event) {
            
            let number = event.detail.value;
            
            self.el.setAttribute('super-keyboard', 'value', '');

            if (number == correctCode) {
                correct.play()
                const briefcaseWrapper = document.querySelector('#briefcase-wrapper')
                briefcaseWrapper.innerHTML = 
                    '<a-entity id="briefcase" gltf-model="#briefcase" position="-2.8 1 3.1" rotation="0 180 0" scale="0.5 0.5 0.5" animation-mixer="clip: *; loop: once; clampWhenFinished: true"></a-entity>'
                briefcaseWrapper.flushToDOM()
                
                codeIsCorrect = true

                document.querySelector('#numpad').setAttribute('visible', 'false')
                document.querySelector('#numpad').flushToDOM()
            }
            else {
                wrong.play()
            }
        });

        this.el.addEventListener('superkeyboarddismiss', function (event) {
            self.el.setAttribute('super-keyboard', 'value', '');
        });
    },

    tick: function (time, timeDelta) {
        if (!this.el.object3D.visible && !codeIsCorrect)
            this.el.object3D.visible = true;
    }

})

AFRAME.registerComponent('dot-function', {

    update: function () {

        this.el.addEventListener('click', function (event) {

            const dotsAnswer = ['black', 'white', 'white', 'white', 'white',
                                'black', 'white', 'white', 'white', 'white',
                                'white', 'white', 'black', 'white', 'white',
                                'black', 'white', 'white', 'black', 'white',
                                'black', 'white', 'white', 'white', 'white']
            
            if (this.getAttribute('color') === 'white' && haveMarker) {
                this.setAttribute('color', 'black');           
            }
            else if (this.getAttribute('color') === 'black' && haveMarker) {
                this.setAttribute('color', 'white');
            }

            const dots = Array.from(document.querySelectorAll('.dot'))
            const dotsColors = dots.map(dot => dot.getAttribute('color'))

            if (JSON.stringify(dotsColors)==JSON.stringify(dotsAnswer)) {
                correct.play()
            } 
        })
    }

})

AFRAME.registerComponent('marker-function', {

    update: function () {
        
        this.el.addEventListener('click', function (event) {
            haveMarker = true
            this.setAttribute('visible', 'false')
            this.flushToDOM()
        })
    }

})

AFRAME.registerComponent('the-button-function', {

    update: function () {
        
        this.el.addEventListener('click', function (event) {
            if (this.getAttribute('gltf-model').includes('green')) {
                document.querySelector('#aftertexts').style.visibility = 'visible'
                document.querySelector('#crawl').style.animation = 'crawl 20s linear forwards'
                document.querySelector('#next-world-btn').style.animation = 'fadeIn 2s ease 7s forwards'
            }
        })
    }

})