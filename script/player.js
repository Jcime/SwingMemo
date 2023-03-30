const player = {

    init : function() {

    },

    play : function() {

    },

    pause : function() {

    },

    seekTo : function(time) {

    },

    getCurrentTime : function() {

    }

}

class PlayerYoutube  {

    player = "";

    init(onReady,videoId='RY4Ir-wkQ_w') {

        var objectPlayerYoutubeInstance = this;

        objectPlayerYoutubeInstance.player = new YT.Player('playerYoutube', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        events: {
            'onReady': onReady,
            'onStateChange': this.onPlayerStateChange
        },
        playerVars : {autoplay:1,loop:1,controls:0,iv_load_policy:3,modestbranding:1,rel:0,showinfo:0}
        });
        
    }

    getNativePlayer() {
        return this.player;
    }

    loadVideoById(id) {
        this.player.loadVideoById(id);
    }

    onPlayerStateChange(event) {
        console.log("onPlayerStateChange");
    }

    getDuration() {
        return this.player.getDuration();
    }

    play() {
        this.player.playVideo();
    }

    pause() {
        this.player.pauseVideo();
    }

    isPaused(){
        return this.player.getPlayerState() != 1;
    }

    seekTo(time,seekAhead = true) {
        this.player.seekTo(time, true);
    }

    getCurrentTime() {
        return this.player.getCurrentTime();
    }

    setPlaybackRate(rate) {
        this.player.setPlaybackRate(rate);
    }

}

class PlayerHtml5  {

    init() {
        this.videoElement = $("#main_video");
    }

    play() {
        this.videoElement.trigger("play");
    }

    pause() {
        this.videoElement.trigger("pause");
    }

    isPaused(){
        return this.videoElement.get(0).paused;
    }

    seekTo(time) {
        this.videoElement.prop('currentTime',time);
    }

    getCurrentTime() {
        return this.videoElement.get(0).currentTime;
    }

    setPlaybackRate(rate) {
        this.videoElement.get(0).playbackRate = rate;
    }

}