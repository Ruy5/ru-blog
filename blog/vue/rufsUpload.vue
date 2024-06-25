<template>
    <input v-model="uploadUrl" type="text">
    <button>123</button>
    <div>{{ downloadUrl }}</div>
</template>

<script setup>
import rufs from "rufs"
const uploadUrl = ref("")
const downloadUrl = ref(0)
const uploadFile = () => {
    const res = await rufs.simpleUpload(uploadUrl.value, "pt")
    downloadUrl.value = res.url
}
</script>