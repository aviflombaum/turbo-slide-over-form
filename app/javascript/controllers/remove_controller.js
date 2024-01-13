import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["element"];
  static values = { add: String, remove: String, animate: Boolean };

  connect() {}

  remove(e) {
    e.preventDefault();
    if (this.hasAnimateValue && this.animateValue) {
      this.elementTargets.forEach((element) => {
        if (this.hasRemoveValue) {
          this.removeValue.split(" ").forEach((klass) => {
            element.classList.remove(klass);
          });
        } else {
          element.classList.remove("animate-fade-in");
        }
        if (this.hasAddValue) {
          this.addValue.split(" ").forEach((klass) => {
            element.classList.add(klass);
          });
        } else {
          element.classList.add("animate-fade-out");
        }
      });
    }
    this.elementTargets.forEach((element) => {
      setTimeout(() => element.remove(), 500);
    });
  }
}
