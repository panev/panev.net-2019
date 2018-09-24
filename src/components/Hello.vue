<template>
    <div>
        <img v-bind:src="currentPhoto">
        <div class="t-himsg">
            <p>My name is Todor &ndash; I’m a 
                <span class="t-role" :style="{color: currentColour}">
                    <span @click="roleUp" class="t-role-up">&#9650;</span>
                        {{ currentText}}
                    <span @click="roleDown" class="t-role-down">&#9660;</span>
                </span> 
                designer
            </p>
            <p>based in Sofia, Bulgaria.</p>
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
                    photoSource: require('@/assets/ux.png'),
                    roleColour: "#A68AFF"
                }, 
                {
                    id: '2',
                    buttonString: "Product",
                    photoSource: require('@/assets/product.png'),
                    roleColour: "#50E3C2"
                }, 
                {
                    id: '3',
                    buttonString: "Visual",
                    photoSource: require('@/assets/visual.png'),
                    roleColour: "#F68EFF"
                }, 
                {
                    id: '4',
                    buttonString: "Interaction",
                    photoSource: require('@/assets/ixd.png'),
                    roleColour: "#FFBC9A"
                }
            ],
            activePhoto: 0
        }
    },

    computed: {
        currentPhoto() {
            return this.roles[this.activePhoto].photoSource;
        },
        currentText() {
            return this.roles[this.activePhoto].buttonString;
        },
        currentColour() {
            return this.roles[this.activePhoto].roleColour;
        }
    },

    methods: {
        roleUp() {
            var active = this.activePhoto + 1;
            
            if (active >= this.roles.length) {
                active = 0;
            }
          
            this.swapPhoto(active);        
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
        }
    }
}
</script>

<style scoped lang="scss">

$visual-colour: #F68EFF;
$ux-colour: #A68AFF;
$product-colour: #50E3C2;
$ixd-colour: #FFBC9A;

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
    margin-top: 50px;
    font-size: 24px;
    color: #2B3E56;
    width: 756px;
    text-align: center;
    margin: 40px auto;
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
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
}

.t-role-down {
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
}

</style>




















