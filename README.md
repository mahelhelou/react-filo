# Filo ProjeA

A project for Filo startup.

## Add External Scripts to React

```js
useEffect(() => {
  const script = document.createElement('script')
  script.src = { bundledScript }
  script.async = true
  document.body.appendChild(script)
  return () => {
    // document.body.removeChild(script)
    // document.body.appendChild(script)
  }
}, [])
```
