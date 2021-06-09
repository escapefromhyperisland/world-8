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
                alert('You made it!');
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