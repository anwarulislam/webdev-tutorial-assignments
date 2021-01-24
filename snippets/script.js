var app = new Vue({
    el: '#app',
    data: {
        gistUrl: 'https://gist.github.com/anwarulislam/247e19ea282d1bb82cbad45489635fdb'
    },
    render: function () {
        var el = document.getElementById('scr')

        console.log(this.gistUrl)

        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', this.gistUrl)
        el.appendChild(recaptchaScript)

    }
})