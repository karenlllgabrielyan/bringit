class MyPromise {
  constructor(executor) {
    this.onResolve = null;
    this.onReject = null;
    this.isResolved = false;
    this.isRejected = false;
    this.resolvedValue = null;
    this.rejectedReason = null;

    const resolve = (value) => {
      if (this.isResolved || this.isRejected) return;
      this.isResolved = true;
      this.resolvedValue = value;
      if (this.onResolve) {
        this.onResolve(value);
      }
    };

    const reject = (reason) => {
      if (this.isResolved || this.isRejected) return;
      this.isRejected = true;
      this.rejectedReason = reason;
      if (this.onReject) {
        this.onReject(reason);
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolve) {
    this.onResolve = onResolve;
    if (this.isResolved) {
      this.onResolve(this.resolvedValue);
    }
    return this;
  }

  catch(onReject) {
    this.onReject = onReject;
    if (this.isRejected) {
      this.onReject(this.rejectedReason);
    }
    return this;
  }
}