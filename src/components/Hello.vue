<template>
    <div>
        <img v-bind:src="currentPhoto">
        <br>
        <button @click="photoUp">UP</button>
        <button @click="photoDown">DOWN</button>
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
                    photoSource: require('@/assets/ux.png')
                }, 
                {
                    id: '2',
                    buttonString: "Product",
                    photoSource: require('@/assets/product.png')
                }, 
                {
                    id: '3',
                    buttonString: "Visual",
                    photoSource: require('@/assets/visual.png')
                }, 
                {
                    id: '4',
                    buttonString: "Interaction",
                    photoSource: require('@/assets/ixd.png')
                }
            ],
            activePhoto: 0
        }
    },
    computed: {
        currentPhoto() {
            return this.roles[this.activePhoto].photoSource;
        }
    },
    methods: {
        photoUp() {
            var active = this.activePhoto + 1;
            
            if (active >= this.roles.length) {
                active = 0;
            }
          
            this.swapPhoto(active);        
        },
        
        photoDown() {
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

</style>
