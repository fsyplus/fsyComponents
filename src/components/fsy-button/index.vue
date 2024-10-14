<template>
    <div>
      <slot/>
      <span>
        我是title:{{ title }}
      </span>
    </div>
  </template>
  <script>
  export default{
      name: 'fsyButton',
      props:{
        title:{
          type:String,
          default:()=>{
            return ""
          }
        }
      }
    }
  </script>
  <style scoped>
    div {
      width: 150px;
      height: 40px;
      line-height: 40px;
      border: 2px solid #999;
      text-align: center;
      color: #fff;
      font-weight: bold;
      background: blue;
    }
  </style>
