# react-prompt-viewer

[![Npm Version][npm-version-image]][npm-version-url]
[![License][license-image]][license-url]

# Usage
### install
```npm i react-prompt-viewer```

### include
```javascript
import React from 'react'
import { prompt } from 'react-prompt-viewer'

class Component extends React.Component {
    
  render() {
    return <Prompt content="hello world"/>
  }
}
```



### expected

<p align="center"  >
    <img style="max-width: 500px" src="https://github.com/birariro/react-prompt-viewer/blob/master/image/helloworld.png?raw=true"/>
</p>

```javascript
<Prompt content={content}  animation='right-show' />
```
<p align="center">
    <img style="max-width: 500px" src="https://github.com/birariro/react-prompt-viewer/blob/master/image/animation.gif?raw=true"/>
</p>

### props
```javascript
<Prompt content={"hello world"} 
        width="200px" 
        title={"prompt"} 
        theme={"dark"} 
        align={"center"} 
        animation='right-show' 
        speed={15}
/>
```


[license-image]: http://img.shields.io/npm/l/react-prompt-viewer.svg
[license-url]: LICENSE
[npm-version-image]: https://img.shields.io/npm/v/react-prompt-viewer.svg
[npm-version-url]: https://www.npmjs.com/package/react-prompt-viewer