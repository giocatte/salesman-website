<template>
    <label class="burger" for="burger">
        <input type="checkbox" id="burger" @change="handleMenuTrigger" />
        <span></span>
        <span></span>
        <span></span>
    </label>
</template>

<script>
export default {
    methods: {
        handleMenuTrigger(event) {
            this.$emit('menu-trigger', event.target.checked);
        },
    }
};
</script>

<style lang="css" scoped>
.burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
}

.burger input {
    display: none;
}

.burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
}

.burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
}

.burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
}

.burger input:checked~span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
}

.burger input:checked~span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
}

.burger input:checked~span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
}
</style>