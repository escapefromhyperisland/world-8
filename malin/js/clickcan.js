AFRAME.registerComponent("clickcan", {
    init: function() {
        let el = this.el;
        this.clickcanhide = function() {
            alert("clicked");
        }
        this.el.addEventListener("click", this.clickcanhide);
    },
    remove: function() {
        this.el.removeEventListener("click", this.clickcanhide);
    }
})