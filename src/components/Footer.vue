<template>
    <div id="footer-container">
        <h4>//GYM NAME HERE//</h4>
        <h4>Copyright</h4>
        <h4>By Sie Chan</h4>
    </div>
</template>

<script>
    export default {
        name: "page-footer",
    }
</script>

<style scoped>
#footer-container {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 10vh;
    border-top: 2px solid #426A5A;
}
h4 {
    
    margin-top: 9vh;
    margin-bottom: 5vh;
    font-size: 10px;
}
</style>