const correctPassword = "mother earth"
let passwordIsCorrect = false

AFRAME.registerComponent('clickevent', {
    init: function() {
        let el = this.el;
        this.clickcanhide = function() {

            this.attributes.visible.value = false;

            let barrels = [document.getElementById("oilOne"), document.getElementById("oilTwo"), document.getElementById("oilThree"), document.getElementById("oilFour"), document.getElementById("oilFive"), document.getElementById("oilSix")];
            barrels = barrels.filter(function (el) {
                return el.attributes.visible.value === "true";
              });
            if (barrels.length == 0) {
                let videoplay = document.getElementById("videomessage");
                videoplay.attributes['visible'].value = "true";
                let speechhide = document.getElementById("startbubble");
                speechhide.attributes['visible'].value = "false";
                let speechshow = document.getElementById("finishbubble");
                speechshow.attributes['visible'].value = "true";
                // let newmusic = document.getElementById("darkforestsound");
                // newmusic.attributes.src.value = "null";
                // let changemusic = document.getElementById("musicfactory");
                // changemusic.attributes.src.value = "assets/musicfactory.mp3";
                // let tryit = document.getElementById("changemusic");
                // tryit.components.sound.playSound();

            }
        }
        this.el.addEventListener('click', this.clickcanhide);
    },
    remove: function() {
        this.el.removeEventListener('click', this.clickcanhide);
    }
})

AFRAME.registerComponent('keyboard-input', {
    init: function () {

        let self = this;
        this.el.addEventListener('superkeyboardinput', function (event) {
            let input = event.detail.value;
            self.el.setAttribute("super-keyboard", "value", "");

            if (input === correctPassword) {
                let teleport = document.getElementById("teleport");
                teleport.attributes.visible.value = "true";
                teleport.attributes.class.value = "clickable";
                let finishpopup = document.getElementById("finalimage");
                finishpopup.attributes.visible.value = "true";
                passwordIsCorrect = true
            } else {
                alert('Wrong password, try again!');
                passwordIsCorrect = false
            }
        });

        this.el.addEventListener('superkeyboarddismiss', function (event) {
            self.el.setAttribute("super-keyboard", "value", "");
        });
    },

    tick: function (time, timeDelta) {
        if (!this.el.object3D.visible)
            this.el.object3D.visible = true;
    }

})

AFRAME.registerComponent('click-nextlevel', {
    init: function() {
        let el = this.el;
        this.clickcanhide = function() {
            alert('You will now be teleported to the next level!');
            window.parent.postMessage('nextLevel')
        }
        this.el.addEventListener('click', this.clickcanhide);
    },
    remove: function() {
        this.el.removeEventListener('click', this.clickcanhide);
    }
})