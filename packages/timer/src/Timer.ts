export class Timer {
  private static readonly SECOND = 1000
  private static readonly MINUTE = 60 * this.SECOND
  private static readonly HOUR = 60 * this.MINUTE
  private static readonly DAY = 24 * this.HOUR

  static day(value = 1) {
    return Timer.DAY * value
  }

  static hour(value = 1) {
    return Timer.HOUR * value
  }

  static minute(value = 1) {
    return Timer.MINUTE * value
  }

  static second(value = 1) {
    return Timer.SECOND * value
  }
}
