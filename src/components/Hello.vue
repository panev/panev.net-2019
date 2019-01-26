<template>
    <div id="hello" ref="hello" class="grid-container">
        <h1 class="hello-heading section-heading">
            Hi there!
            <div class="heading-ani">
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
                    roleColour: "#F68EFF",
                    role: "VD"
                }, 
                {
                    id: '4',
                    buttonString: "Interaction",
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
        opacity: 0.0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.0;
        transform: scale(1.1);
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

.text-ani-enter-active,
.text-ani-leave-active {
    animation: textInOut 0.5s;
}

@keyframes textInOut {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(0);
        opacity: 0;
    }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}





svg {
    overflow: visible;
}





















</style>




















