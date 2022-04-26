const Test = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <progress
        className="w-56 progress progress-primary"
        value="0"
        max="100"
      />
      <progress
        className="w-56 progress progress-primary"
        value="10"
        max="100"
      />
      <progress
        className="w-56 progress progress-primary"
        value="40"
        max="100"
      />
      <progress
        className="w-56 progress progress-primary"
        value="70"
        max="100"
      />
      <progress
        className="w-56 progress progress-primary"
        value="100"
        max="100"
      />
    </div>
  )
}
export default Test
