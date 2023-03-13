import {Component} from "@angular/core"

export const SQUARES = [
  "Rektangel",
  "Kvadrat",
  "Parallelogram",
]

@Component({
  selector: "app-geometry",
  templateUrl: "./geometry.component.html",
  styleUrls: ["./geometry.component.css"],
})
export class GeometryComponent {
  height: number | undefined
  width: number | undefined
  square: "Rektangel" | "Kvadrat" | "Parallelogram" | undefined
  result: string | undefined

  squares: string[] = SQUARES

  calculate() {
    if (this.height !== undefined && this.width !== undefined && this.square !== undefined) {
      if (this.square === "Rektangel") {
        this.result = `Arealet er: ${this.height * this.width} og omkredsen er: ${2 * (this.height + this.width)}`
      } else if (this.square === "Kvadrat") {
        this.result = `Arealet er: ${this.height * this.width} og omkredsen er: ${4 * this.height}`
      } else if (this.square === "Parallelogram") {
        this.result = `Arealet er: ${this.height * this.width} og omkredsen er: ${2 * (this.height + this.width)}`
      }
    } else {
      this.result = "Alle fælter skal udfyldes!"
    }
  }
}
