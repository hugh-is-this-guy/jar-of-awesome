import { writable } from "svelte/store"

export const userbase = writable({})
export const authPromise = writable(Promise.resolve({}))
export const user = writable(false)

export const showModal = writable(false)
export const title = writable("")
export const note = writable("")
export const itemId = writable("")

export const awesomes = writable([])
export const todos = writable([])
export const expandAll = writable(true)

export const list = writable("done")
