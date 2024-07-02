<template>
    <div class="waterfall-container">
        <FsWaterFall :gap="20" :column="4" :request="requestData" :page-size="30">
            <template #item="{ item }">
                <img :src="item.url" alt="图片" class="image" lazy @click="showPreImg(item.url)"></img>

            </template>
        </FsWaterFall>
        <div>
            <dialog ref="preImg" @click="handleBackdropClick" style="border: 0px solid red;">
                <img :src="preImgUrl" alt="" style="height: 80vh;">
            </dialog>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue"
import FsWaterFall from "rui-v3/packages/waterfall/lib/waterfall.vue";

const preImg = ref(null)
const preImgUrl = ref(null)

const showPreImg = (imgUrl) => {
    preImgUrl.value = imgUrl
    setTimeout(() => {
        preImg.value.showModal()
    }, 1);
}

const closePreImg = () => {
    preImg.value.close()
}

const handleBackdropClick = (event) => {
    const dialog = preImg.value;
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );

    if (!isInDialog) {
        closePreImg();
    }
};

const urlToBase64 = async (imageUrl) => {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error('Error converting image URL to Base64:', error);
    }
}

const requestData = async () => {
    let res = [
        {
            id: 2,
            url: "/zs/web测试省一.png",
            width: 6144,
            height: 4513
        },
        {
            id: 3,
            url: "/zs/大学生计算机设计大赛_rotated.jpg",
            width: 1920,
            height: 1440
        },
        {
            id: 4,
            url: "/zs/蓝桥杯java国二.jpg",
            width: 2480,
            height: 3508
        },
        {
            id: 5,
            url: "/zs/嵌入式测试国二.png",
            width: 3188,
            height: 4513
        },
        {
            id: 6,
            url: "/zs/软件著作权登记证书(2021R11L2663430).jpg",
            width: 2480,
            height: 3360
        },
        {
            id: 7,
            url: "/zs/数据分析大赛国三.png",
            width: 1250,
            height: 1767
        },
        {
            id: 8,
            url: "/zs/区块链开发与运维国二.jpg",
            width: 1440,
            height: 1080
        },
        {
            id: 9,
            url: "/zs/2021年技能大赛省三_00.png",
            width: 1871,
            height: 1323
        },
        {
            id: 1,
            url: "/zs/IMG_20230928_230538_rotated.jpg",
            width: 4000,
            height: 3000,
        },
    ]

    // for(let item of res) {
    //     item.url = await urlToBase64(item.url)
    // }

    return res
};
</script>

<style scoped lang="scss">
.waterfall-container {
    width: 100%;
    height: 500px;

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
:deep(.fs-waterfall-content){
    scrollbar-width: none;
}
</style>