import { defineStore } from 'pinia'

export const data = defineStore('data', {
    state: () => ({
        loading: false,

    }),
    actions: {
        async getData() {
            const url = "/strapi/todo"
            const { data, error }: any = await useFetch(url, { method: 'get' })
            // then
            if (data.value) {
            }
            // catch
            if (error.value) {
            }
        },
    },
})