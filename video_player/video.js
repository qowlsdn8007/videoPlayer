


export default function video() {
    const $video = document.createElement('video');
    $video.setAttribute('width', 300);
    $video.setAttribute('controls', "");
    document.body.appendChild($video);

    this.render = () => {
        //$video.innerHTML = `<video controls width="250"></video>`;
    }
    this.render();
}