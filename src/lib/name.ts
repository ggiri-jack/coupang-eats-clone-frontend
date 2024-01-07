export const hideName = (name: string) => {
  return name.charAt(0) + name.slice(1).replace(/[\uAC00-\uD7AFa-zA-Z]/g, '*')
}