/* It creates a class called UserPerformance for use as a model for the API call. */
class UserPerformance {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}
export default UserPerformance;
