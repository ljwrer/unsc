const placeholderText = 'email'
export const Input = () => <input type="email" placeholder={placeholderText} />

const A = (props: any, { slots }: any) => (
  <>
    <h1>{slots.default ? slots.default() : 'foo'}</h1>
    <h2>{slots.bar?.()}</h2>
  </>
)

export const App = {
  setup() {
    const slots = {
      bar: () => <span>B</span>,
    }
    return () => (
      <A v-slots={slots}>
        <div>A</div>
      </A>
    )
  },
}
