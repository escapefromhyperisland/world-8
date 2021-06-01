AFRAME.registerComponent('keyboard-functions', {

    init: function () {
        
        let isPasswordCorrect = false

        // for referencing issues
        let self = this;

        // input event triggered when user presses enter
        this.el.addEventListener('superkeyboardinput', function (event) {
            // text also accessible via: self.el.getAttribute("super-keyboard")["value"]
            let text = event.detail.value;

            // clear the input bar (since keyboard is not disappearing)
            self.el.setAttribute("super-keyboard", "value", "");

            // handle password
            if (text === "correct") {
                document.querySelector("#button").setAttribute("gltf-model", "/assets/models/green-button.glb")
                isPasswordCorrect = true
            } else {
                alert("WRONG PASSWORD.... TRY AGAIN")
                document.querySelector("#button").setAttribute("gltf-model", "/assets/models/red-button.glb")
                isPasswordCorrect = false
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

    init: function () {
        
        let isNumbersCorrect = false

        // for referencing issues
        let self = this;

        // input event triggered when user presses enter
        this.el.addEventListener('superkeyboardinput', function (event) {
            // text also accessible via: self.el.getAttribute("super-keyboard")["value"]
            let number = event.detail.value;

            // clear the input bar (since keyboard is not disappearing)
            self.el.setAttribute("super-keyboard", "value", "");

            // handle numbers
            if (number === "123") {
                //This is what to put on #briefcase animation when the number code is correct: animation-mixer="clip: *; loop: once; clampWhenFinished: true"
                document.querySelector("#briefcase").setAttribute("animation-mixer", "clip: *; loop: once; clampWhenFinished: true")
                alert("hello")
                isNumbersCorrect = true
            } else {
                
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

AFRAME.registerComponent('dot-function', {

    init: function () {
        this.el.addEventListener('click', function (event) {
            if (this.getAttribute('color') === 'white') {
                this.setAttribute('color', 'black');
            }
            else if (this.getAttribute('color') === 'black') {
                this.setAttribute('color', 'white');
            }
        })
    }

})