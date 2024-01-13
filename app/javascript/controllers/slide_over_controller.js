import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slideOver"];

  connect() {
    this.slideOverTarget.classList.add("translate-x-full");
    setTimeout(() => {
      this.slideOverTarget.classList.remove("translate-x-full");
      this.slideOverTarget.classList.add(
        "transform",
        "transition",
        "ease-in-out",
        "duration-300",
        "sm:duration-700",
        "translate-x-0"
      );
    }, 100);
  }

  slideOut() {
    this.slideOverTarget.classList.remove("translate-x-0");
    this.slideOverTarget.classList.add(
      "transform",
      "transition",
      "ease-in-out",
      "duration-300",
      "sm:duration-700",
      "translate-x-full"
    );
  }
}
