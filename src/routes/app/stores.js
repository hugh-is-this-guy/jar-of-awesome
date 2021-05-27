import { writable } from "svelte/store"

export const userbase = writable({})
export const authPromise = writable(Promise.resolve({}))
export const user = writable({})

export const showModal = writable(false)
export const awesomes = writable([])
