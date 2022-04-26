/// <reference types="@tarojs/taro" />

declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

declare namespace JSX {
  interface IntrinsicElements {
    import: React.DetailedHTMLProps<
      React.EmbedHTMLAttributes<HTMLEmbedElement>,
      HTMLEmbedElement
    >
  }
}

// declare global {
//   namespace JSX {
//     interface Element extends React.ReactElement<any, any> {}
//     interface ElementClass extends React.Component<any> {
//       render(): React.ReactNode
//     }
//     interface ElementAttributesProperty {
//       props: {}
//     }
//     interface ElementChildrenAttribute {
//       children: {}
//     }
//     interface IntrinsicElements {
//       import: React.DetailedHTMLProps<
//         React.EmbedHTMLAttributes<HTMLEmbedElement>,
//         HTMLEmbedElement
//       >
//     }
//     interface IntrinsicAttributes extends React.Attributes {}
//     interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
//   }
// }

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'rn'
      | 'tt'
      | 'quickapp'
      | 'qq'
      | 'jd'
  }
}
