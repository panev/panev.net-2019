<template>
    <div id="hello" ref="hello" class="grid-container">
        <h1 class="hello-heading section-heading">
            Hi there!
            <div class="heading-ani">
                <img src="@/assets/homeHello.svg" alt="heading thumbnail" style="height: 105px;">
            </div>
        </h1>
        <div class="t-himsg">
            <h2>I'm Todor &ndash; a 
                    <span class="t-role" :style="{color: currentColour}">
                        
                        <span @click="roleUp" class="t-role-up">
                            <img src="@/assets/arrowUp.svg" alt="up arrow" :style="{fill: currentColour}">
                        </span>
                        
                        {{ currentText }}
                        
                        <span @click="roleDown" class="t-role-down">
                            <img src="@/assets/arrowDown.svg" alt="down arrow" :style="{fill: currentColour}">
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
                    roleColour: "#52DBDB"
                }, 
                {
                    id: '2',
                    buttonString: "Product",
                    roleColour: "#A68AFF"
                }, 
                {
                    id: '3',
                    buttonString: "Visual",
                    roleColour: "#F68EFF"
                }, 
                {
                    id: '4',
                    buttonString: "Interaction",
                    roleColour: "#FFBC9A"
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


</style>




















