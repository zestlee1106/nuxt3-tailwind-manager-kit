export default defineEventHandler((event) => {
  return `success - ${new Date().toLocaleTimeString()}`
})
