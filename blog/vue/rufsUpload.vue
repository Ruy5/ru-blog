<template>
    <button @click="() => {uploadUrl = 'http://feli.top:1024/simplefile/upload'}">简单文件上传</button>
    <button @click="() => {uploadUrl = 'http://feli.top:1024/m3u8/upload'}">m3u8文件上传</button>
    <input style="border: solid 1px red; width: 100%; padding: 5px;" v-model="uploadUrl" type="text">
    <button @click="uploadFile">上传</button>
    <div>{{ downloadUrl }}</div>
</template>

<script setup>
import {ref} from "vue"
import rufs from "rufs"
const uploadUrl = ref("")
const downloadUrl = ref("")
const uploadFile = async () => {
    const res = await rufs.simpleUpload(uploadUrl.value, "pt")
    downloadUrl.value = res.data.url
}
</script>

<style scoped>
button{
    border: solid 1px blue;
    margin: 10px;
}
</style>