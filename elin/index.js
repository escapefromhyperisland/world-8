const correctPassword = "correct"
const correctCode = "1"
let haveMarker = false
let passwordIsCorrect = false
let codeIsCorrect = false

AFRAME.registerComponent('keyboard-functions', {

    init: function () {

        // for referencing issues
        let self = this;

        // input event triggered when user presses enter
        this.el.addEventListener('superkeyboardinput', function (event) {
            // text also accessible via: self.el.getAttribute("super-keyboard")["value"]
            let input = event.detail.value;

            // clear the input bar (since keyboard is not disappearing)
            self.el.setAttribute("super-keyboard", "value", "");

            // handle password
            if (input === correctPassword) {
                document.querySelector("#button").setAttribute("gltf-model", "/assets/models/green-button.glb")
                document.querySelector("#button").flushToDOM()
                passwordIsCorrect = true
            } else {
                alert("WRONG PASSWORD.... TRY AGAIN")
                document.querySelector("#button").setAttribute("gltf-model", "/assets/models/red-button.glb")
                document.querySelector("#button").flushToDOM()
                passwordIsCorrect = false
            }
        });

        // dismiss event triggered when user closes keyboard
        this.el.addEventListener('superkeyboarddismiss', function (event) {
            // repurpose close functionality to clear all input text without submitting
            self.el.setAttribute("super-keyboard", "value", "");
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
            
            self.el.setAttribute("super-keyboard", "value", "");

            if (number == correctCode) {
                
                const briefcaseWrapper = document.querySelector("#briefcase-wrapper")
                briefcaseWrapper.innerHTML = 
                    '<a-entity id="briefcase" gltf-model="#briefcase" position="-2.8 1 3.1" rotation="0 180 0" scale="0.5 0.5 0.5" animation-mixer="clip: *; loop: once; clampWhenFinished: true"></a-entity>'
                briefcaseWrapper.flushToDOM()
                
                codeIsCorrect = true

                document.querySelector("#numpad").setAttribute("visible", "false")
                document.querySelector("#numpad").flushToDOM()
            }
        });

        this.el.addEventListener('superkeyboarddismiss', function (event) {
            self.el.setAttribute("super-keyboard", "value", "");
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
            if (this.getAttribute('color') === 'white' && haveMarker) {
                this.setAttribute('color', 'black');
            }
            else if (this.getAttribute('color') === 'black' && haveMarker) {
                this.setAttribute('color', 'white');
            }
        })
    }

})

AFRAME.registerComponent('marker-function', {

    update: function () {
        
        this.el.addEventListener('click', function (event) {
            haveMarker = true
            this.setAttribute("visible", "false")
            this.flushToDOM()
        })
    }

})