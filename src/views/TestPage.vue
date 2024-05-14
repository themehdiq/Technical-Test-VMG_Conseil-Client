<template>
    <div>
        <img v-if="src" :src="src" alt="Avatar" class="h-96 w-96" />
        <div v-else class="avatar no-image"></div>

        <div :style="{ width: size + 'em' }">
            <label class="button primary block" for="single">
                {{ uploading ? 'Uploading ...' : 'Upload' }}
            </label>
            <input style="visibility: hidden; position: absolute" type="file" id="single" accept="image/*"
                @change="uploadAvatar" :disabled="uploading" />
        </div>
    </div>
</template>