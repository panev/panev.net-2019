<template>
    <div id="hello" ref="hello" class="grid-container">
        <h1 class="hello-heading section-heading">
            Hi there!
            <div class="heading-ani">

                <transition name="swap-thumb">
                <svg v-if="activePhoto === 0" width="111px" height="105px" viewBox="0 0 111 105" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Hello UX Thumbnail</title>
                    <g id="Group-0" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group-1" transform="translate(-826.000000, -318.000000)">
                            <g id="Group-2" transform="translate(826.000000, 318.000000)">
                                <circle id="Oval-5" fill="#52DBDB" cx="56.5" cy="54.5" r="30"></circle>
                                <ellipse id="Oval-6" fill="#FFFFFF" cx="56.5" cy="54.5" rx="21" ry="21.5"></ellipse>
                                <circle id="Oval-7" fill="#EFEFEF" cx="56.5" cy="54.5" r="10"></circle>
                                <circle id="Oval-01" fill="#EFEFEF" cx="56.5" cy="7.5" r="7.5"></circle>
                                <circle id="Oval-02" fill="#EFEFEF" cx="56.5" cy="100.5" r="4.5"></circle>
                                <circle id="Oval-03" fill="#EFEFEF" cx="104" cy="54" r="7"></circle>
                                <circle id="Oval-04" fill="#EFEFEF" cx="9.5" cy="53.5" r="9.5"></circle>
                                <circle id="Oval-05" fill="#EFEFEF" cx="89.9186047" cy="20" r="4"></circle>
                                <circle id="Oval-06" fill="#EFEFEF" cx="23.6627907" cy="86" r="7"></circle>
                                <circle id="Oval-07" fill="#EFEFEF" cx="90.7790698" cy="87" r="9"></circle>
                                <circle id="Oval-08" fill="#EFEFEF" cx="24.0930233" cy="21" r="4"></circle>
                            </g>
                        </g>
                    </g>
                </svg>
                </transition>

                <transition name="swap-thumb">
                <svg v-if="activePhoto === 1" width="111px" height="111px" viewBox="0 0 111 111" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <circle id="path-1" cx="39.5" cy="39.5" r="36.5"></circle>
                        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="73" height="73" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <circle id="path-3" cx="39.5" cy="39.5" r="36.5"></circle>
                        <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="73" height="73" fill="white">
                            <use xlink:href="#path-3"></use>
                        </mask>
                    </defs>
                    <g id="Product" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group-17" fill-rule="nonzero">
                            <g id="Group-16">
                                <g id="Group-15">
                                    <rect id="Rectangle-Copy-4" fill="#FFFFFF" x="0" y="0" width="111" height="111"></rect>
                                    <g id="product-circle" transform="translate(16.000000, 16.000000)">
                                        <g id="Group-13">
                                            <g id="Group-14">
                                                <circle id="Oval" stroke="#EFEFEF" cx="39.5" cy="39.5" r="39"></circle>
                                                <use id="Oval" stroke="#A68AFF" mask="url(#mask-2)" stroke-width="2" stroke-dasharray="5,5" xlink:href="#path-1"></use>
                                                <circle id="Oval" stroke="#EFEFEF" cx="39.5" cy="39.5" r="39"></circle>
                                                <use id="Oval" stroke="#A68AFF" mask="url(#mask-4)" stroke-width="2" stroke-dasharray="5,5" xlink:href="#path-3"></use>
                                                <path d="M39.5,52 C46.4035594,52 52,46.4035594 52,39.5 C52,32.5964406 46.4035594,27 39.5,27 C32.5964406,27 27,32.5964406 27,39.5 C27,46.4035594 32.5964406,52 39.5,52 Z" id="p-oval-2" fill="#EFEFEF"></path>
                                                <path d="M39.5,42 C40.8807119,42 42,40.8807119 42,39.5 C42,38.1192881 40.8807119,37 39.5,37 C38.1192881,37 37,38.1192881 37,39.5 C37,40.8807119 38.1192881,42 39.5,42 Z" id="p-oval-2" fill="#D8D8D8"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g id="Group" transform="translate(18.000000, 7.000000)">
                                <circle id="p-oval-purple" fill="#A68AFF" cx="75.5" cy="52.5" r="13.5"></circle>
                                <g id="p-oval-target">
                                    <circle id="Oval" fill="#EFEFEF" cx="14.5" cy="14.5" r="14.5"></circle>
                                    <circle id="Oval" fill="#FFFFFF" cx="14.5" cy="14.5" r="8.5"></circle>
                                    <circle id="Oval" fill="#A68AFF" cx="14.5" cy="14.5" r="4.5"></circle>
                                </g>
                                <polygon id="p-rectangle" fill="#D8D8D8" transform="translate(17.427027, 81.431179) rotate(60.000000) translate(-17.427027, -81.431179) " points="6.8585178 70.8740152 27.9758858 70.8936651 27.9955357 91.9883433 6.87816771 91.9686934"></polygon>
                            </g>
                        </g>
                    </g>
                </svg>
                </transition>

                <transition name="swap-thumb">
                <svg v-if="activePhoto === 2" width="111px" height="111px" viewBox="0 0 111 111" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="vd" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group-17" transform="translate(-170.000000, -4.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="Group-16">
                                <g id="Group-15">
                                    <rect id="Rectangle-Copy-5" x="170" y="4" width="111" height="111"></rect>
                                </g>
                            </g>
                        </g>
                        <g id="Group-6" fill-rule="nonzero">
                            <polygon id="vd-particle-4" fill="#2B507D" transform="translate(93.000000, 86.000000) rotate(-90.000000) translate(-93.000000, -86.000000) " points="91 84 95 85.0466324 92.0466324 88"></polygon>
                            <path d="M56,83 C67.5259426,83 80.8592759,73.852459 96,55.557377 C80.8592759,37.852459 67.5259426,29 56,29 C44.4740574,29 31.1407241,37.852459 16,55.557377 C31.1407241,73.852459 44.4740574,83 56,83 Z" id="Oval" fill="#D8D8D8"></path>
                            <path d="M56,83 C67.5259426,83 80.8592759,73.852459 96,55.557377 C80.8592759,37.852459 67.5259426,29 56,29 C44.4740574,29 31.1407241,37.852459 16,55.557377 C31.1407241,73.852459 44.4740574,83 56,83 Z" id="Oval" fill="#EFEFEF"></path>
                            <circle id="Oval" fill="#FFFFFF" cx="56" cy="56" r="16"></circle>
                            <circle id="vd-oval-1" fill="#2B507D" cx="56" cy="56" r="14"></circle>
                            <circle id="vd-oval-2" fill="#FFFFFF" cx="56" cy="56" r="7"></circle>
                            <circle id="vd-particle-1" fill="#EFEFEF" cx="19" cy="31" r="4"></circle>
                            <polygon id="vd-particle-5" fill="#E3E3E3" transform="translate(103.500000, 25.000000) rotate(-90.000000) translate(-103.500000, -25.000000) " points="95.5 17.5 111.5 21.4248717 99.6865298 32.5"></polygon>
                            <polygon id="vd-particle-2" fill="#EFEFEF" transform="translate(30.648151, 91.234754) rotate(-330.000000) translate(-30.648151, -91.234754) " points="28.3518159 88.9257802 32.9225945 88.9476716 32.9444859 93.5437282 28.3737074 93.5218368"></polygon>
                            <polygon id="vd-particle-3" fill="#EFEFEF" transform="translate(62.286343, 13.295595) rotate(-330.000000) translate(-62.286343, -13.295595) " points="57.6936729 8.67764728 66.8352301 8.72143016 66.8790129 17.9135434 57.7374558 17.8697605"></polygon>
                        </g>
                    </g>
                </svg>
                </transition>

                <transition name="swap-thumb">
                <svg v-if="activePhoto === 3" width="111px" height="111px" viewBox="0 0 111 111" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="FE" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Group-8" fill-rule="nonzero">
                            <rect id="Rectangle-Copy-6" x="0" y="0" width="111" height="111"></rect>
                            <circle id="fe-particle-1" fill="#F0F0F0" cx="45" cy="32" r="3"></circle>
                            <circle id="fe-particle-2" fill="#FFBC9A" cx="37" cy="10" r="6"></circle>
                            <polygon id="fe-particle-3" fill="#FFBC9A" transform="translate(70.500000, 29.500000) rotate(-90.000000) translate(-70.500000, -29.500000) " points="62 21 79 25.4481879 66.4481879 38"></polygon>
                            <rect id="Rectangle" fill="#F0F0F0" x="29" y="49" width="54" height="54" rx="2"></rect>
                            <rect id="Rectangle" fill="#FFBC9A" x="35" y="72" width="42" height="24" rx="2"></rect>
                            <circle id="fe-particle-4" fill="#FFBC9A" cx="51.5" cy="58.5" r="3.5"></circle>
                            <circle id="fe-particle-5" fill="#FFFFFF" cx="50.5" cy="88.5" r="1.5"></circle>
                            <circle id="fe-particle-6" fill="#FFFFFF" cx="58" cy="81" r="3"></circle>
                            <rect id="Rectangle" fill="#E3E3E3" transform="translate(55.500000, 52.500000) scale(1, -1) translate(-55.500000, -52.500000) " x="24" y="49" width="63" height="7" rx="2"></rect>
                        </g>
                    </g>
                </svg>
                </transition>

            </div>
        </h1>
        <div class="t-himsg">
            <h2>I'm Todor &ndash; a 
                    <span class="t-role" :style="{color: currentColour}">
                        
                        <span @click="roleUp" class="t-role-up">

                            <svg width="25px" height="17px" viewBox="0 0 25 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="up-arrow" transform="translate(-628.000000, -500.000000)" :style="{fill: currentColour}">
                                    <path d="M638.102027,502.197298 C639.426391,500.431479 641.570607,500.427475 642.897973,502.197298 L651.602027,513.802702 C652.926391,515.568521 652.207545,517 650.001529,517 L630.998471,517 C628.790176,517 628.070607,515.572525 629.397973,513.802702 L638.102027,502.197298 Z" id="Triangle"></path>
                                </g>
                            </svg>

                        </span>
                        
                        {{ currentText }}

                        <span @click="roleDown" class="t-role-down">
                            
                            <svg width="25px" height="17px" viewBox="0 0 25 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="down-arrow" transform="translate(-628.000000, -571.000000)" :style="{fill: currentColour}">
                                    <path d="M638.102027,574.197298 C639.426391,572.431479 641.570607,572.427475 642.897973,574.197298 L651.602027,585.802702 C652.926391,587.568521 652.207545,589 650.001529,589 L630.998471,589 C628.790176,589 628.070607,587.572525 629.397973,585.802702 L638.102027,574.197298 Z" id="Triangle-Copy" transform="translate(640.500000, 580.000000) rotate(-180.000000) translate(-640.500000, -580.000000) "></path>
                                </g>
                            </svg>

                        </span>

                    </span> 
                designer based in Sofia, Bulgaria.
            </h2>
        </div>
    </div>
</template>

<script>
export default {

    name: 'Hello',
    data: function() {
        return {
            roles: [
                {
                    id: '1',
                    buttonString: "User Experience",
                    roleColour: "#52DBDB",
                    role: "UX"
                }, 
                {
                    id: '2',
                    buttonString: "Product",
                    roleColour: "#A68AFF",
                    role: "PD"
                }, 
                {
                    id: '3',
                    buttonString: "Visual",
                    roleColour: "#2B507D",
                    role: "VD"
                }, 
                {
                    id: '4',
                    buttonString: "Front-end",
                    roleColour: "#FFBC9A",
                    role: "IXD"
                }
            ],
            activePhoto: 0,
            helloAreaStart: 0,
            helloAreaEnd: 0   
        }
    },

    computed: {

        currentText() {
            return this.roles[this.activePhoto].buttonString;
        },
        currentColour() {
            return this.roles[this.activePhoto].roleColour;
        }
    },

    methods: {

        roleUp() {

            // Ivo wrote this optimisation that can be applied to roleDown and swapPhoto can be omitted, but I'm not smart enough to understand it.
            this.activePhoto = (this.activePhoto + 1) % this.roles.length;    
        },
        
        roleDown() {
            var active = this.activePhoto - 1;
      
            if (active < 0) {
                active = this.roles.length - 1;
            }            

            this.swapPhoto(active);        
        },
        
        swapPhoto(imageIndex) {
            this.activePhoto = imageIndex;
        },
        
        getHelloArea() {
            this.helloAreaStart = this.$refs.hello.offsetTop;
            this.helloAreaEnd = this.$refs.hello.offsetTop + this.$refs.hello.offsetHeight;
            this.$emit('helloAreaStartCalculated', this.helloAreaStart)
            this.$emit('helloAreaEndCalculated', this.helloAreaEnd)
        }
    },
    mounted() {
        this.getHelloArea();
        console.log(this.helloAreaStart)
    }
}
</script>

<style scoped lang="scss">
@import '@/scss/core.scss';

#hello {
    padding-top: $nav-height;
}

.hello-heading {
    margin-top: 250px;
    position: relative;


    & .heading-ani {
        width: 111px;
        height: 111px;
        position: absolute;
        right: 30%;
        bottom: 10px;

        & svg {
            position: absolute;
            left: 0;
            transform-origin: center;
        }
    }
}

.swap-thumb-enter-active {
    animation: swap-thumb 0.5s reverse;
}
.swap-thumb-leave-active {
    animation: swap-thumb 0.5s;
}


@keyframes swap-thumb {
    0% {
        transform: rotate(0deg) scale(1);
        opacity: 1;
    }
    
    100% {
        transform: rotate(360deg) scale(0);
        opacity: 0;
    }
}

.visual-colour {
    background: $visual-colour;
}

.ux-colour {
    background-color: $ux-colour;
}

.product-colour {
    background-color: $product-colour;
}

.ixd-colour {
    background-color: $ixd-colour;
}

.t-himsg {
    grid-column: 1 / 13;
    margin-top: 50px;
    font-size: $type-small-heading;
    color: $wl-black;
    text-align: center;
    margin: 40px auto;
    margin-bottom: 150px;
}

.t-role {
    position: relative;
    text-align: center;
    display: inline-block;
    font-weight: bold;
}

.t-role-up,
.t-role-down {
    width: 20px;
    height: 20px;
    position: absolute;
    cursor: pointer;
    padding: 5px;
    box-sizing: content-box;
    user-select: none;
    &:hover {
        cursor: pointer;
    }

    & svg {
        transition: 0.3s;
    }
}

.t-role-up {
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
}

.t-role-down {
    bottom: -38px;
    left: 50%;
    transform: translateX(-50%);
}


#Oval-01,
#Oval-02,
#Oval-03,
#Oval-04,
#Oval-05,
#Oval-06,
#Oval-07,
#Oval-08 {
    animation: sunscale 2s infinite;
    transform-origin: center;
}

#Oval-01 {animation-delay: 2.6s}
#Oval-02 {animation-delay: 1.5s}
#Oval-03 {animation-delay: 0.3s}
#Oval-04 {animation-delay: 0.5s}
#Oval-05 {animation-delay: 2.2s}
#Oval-06 {animation-delay: 0.0s}
#Oval-07 {animation-delay: 0.7s}
#Oval-08 {animation-delay: 1.1s}

@keyframes sunscale {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        opacity: 0;
        transform: scale(1.1);
    }

    100% {
        opacity: 1;
    }
}

#Oval-5 {
    animation: heartscale 2s infinite;
    transform-origin: center center;
}

@keyframes heartscale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}


#p-oval-1,
#p-oval-2 {
    animation: aniOvals 7s infinite;
    transform-origin: 50% 50%;
}

@keyframes aniOvals {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
}

#Product {
    animation: rotateProduct 7s infinite linear;
    transform-origin: center;
}

#p-rectangle {
    animation: heartscale 1s infinite linear;
    transform-origin: 50% 50%;
}

#p-oval-purple {
    animation: heartscale 2s infinite linear;
    transform-origin: 50% 50%;
}

#p-oval-target {
    animation: heartscale 3s infinite linear reverse;
    transform-origin: 50% 50%s;
}

@keyframes rotateProduct {
    0% {
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }

    50% {
        opacity: 0.6;
        transform: rotate(180deg) scale(0.85);

    }

    100% {
        opacity: 1;
        transform: rotate(360deg) scale(1);

    }
}

#vd-oval-2 {
    animation: aniIris 1s infinite;
    animation-delay: 1.5s;
    transform-origin: 50% 50%;
}

#vd-oval-1 {
    animation-delay: 0.5s;
    animation: aniIris 2s infinite;
    transform-origin: 50% 50%;
}

@keyframes aniIris {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}

#vd-particle-1,
#vd-particle-2,
#vd-particle-3,
#vd-particle-4,
#vd-particle-5 {
    animation: aniParticles 1.5s infinite;
    transform-origin: 50% 50%;
    opacity: 0;
}

#vd-particle-1 {
    animation-delay: 0.3s;
}

#vd-particle-2 {
    animation-delay: 0.6s;
}

#vd-particle-3 {
    animation-delay: 0s;
}

#vd-particle-4 {
    animation-delay: 1s;
}

#vd-particle-5 {
    animation-delay: 0.45s;
}



@keyframes aniParticles {
    0% {
        transform: scale(0.5) rotate(0deg);
        opacity: 0;
    }

    60% {
        opacity: 1;
    }

    100% {
        transform: scale(1.3) rotate(20deg);
        opacity: 0;
    }
}

#fe-particle-1,
#fe-particle-2,
#fe-particle-3,
#fe-particle-4,
#fe-particle-5,
#fe-particle-6 {
    animation: aniParticlesUp 2s infinite;
    transform-origin: 50% 50%;
    opacity: 0;
}

#fe-particle-1 {
    animation-delay: 0.3s
}

#fe-particle-2 {
    animation-delay: 0s
}

#fe-particle-3 {
    animation-delay: 0.7s
}

#fe-particle-4 {
    animation-delay: 1.3s
}

#fe-particle-5 {
    animation-delay: 1.0s
}

#fe-particle-6 {
    animation-delay: 0.5s
}

@keyframes aniParticlesUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        transform: translateY(-20px) rotate(10deg);
        opacity: 0;
    }
}







svg {
    overflow: visible;
}






















</style>




















