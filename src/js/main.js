import '../scss/main.scss';
import Ztextify from '../js/ztext.js';

var ztxt = new Ztextify(".hero-text", {
    depth: "72px",
    layers: 8,
    fade: false,
    direction: "forwards",
    event: "scroll",
    eventRotation: "35deg"
});