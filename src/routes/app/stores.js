import { writable } from "svelte/store";

export const userbase = writable({});
export const authPromise = writable(Promise.resolve({}));
export const user = writable({});
