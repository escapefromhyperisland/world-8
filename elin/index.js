AFRAME.registerComponent('keyboard-functions', {

    init: function () {
        // for referencing issues
        let self = this;

        // set up event listeners

        // input event triggered when user presses enter
        this.el.addEventListener('superkeyboardinput', function (event) {
            let text = event.detail.value;

            // text also accessible via: self.el.getAttribute("super-keyboard")["value"]

            console.log("Input: " + text);

            // clear the input bar (since keyboard is not disappearing)
            self.el.setAttribute("super-keyboard", "value", "");

            // handle password
            if(text === "home") {
                console.log("You saved the world!")
            } else {
                alert("WRONG PASSWORD.... TRY AGAIN")
            }
        });

        // dismiss event triggered when user closes keyboard
        this.el.addEventListener('superkeyboarddismiss', function (event) {
            // repurpose close functionality to clear all input text without submitting
            console.log("Input cleared.");
            self.el.setAttribute("super-keyboard", "value", "");
        });
    },

    tick: function (time, timeDelta) {
        // force keyboard to remain visible even after input or dismiss events triggered
        if (!this.el.object3D.visible)
            this.el.object3D.visible = true;
    }

});