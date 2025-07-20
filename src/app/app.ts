import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public selectedDate: string = "";
  // Variables to hold the calculated star points
  // Personal Star Point
  public topLeftPoint: number = 0;
  public topLeftLeftMiddle: number = 0;
  public topLeftRightMiddle: number = 0;
  public topLeftIntersection: number = 0;
  public topLeftMiddleIntersection: number = 0;
  // Spiritual Star Point
  public topPoint: number = 0;
  public topLeftMiddle: number = 0;
  public topRightMiddle: number = 0;
  public topRightIntersection: number = 0;
  public topMiddleIntersection: number = 0;
	// Career Star Point
  public topRightPoint: number = 0;
  public topRightLeftMiddle: number = 0;
  public topRightRightMiddle: number = 0;
  public bottomRightIntersection: number = 0;
  public topRightMiddleIntersection: number = 0;
  // Relationship Star Point
  public bottomRightPoint: number = 0;
  public bottomRightLeftMiddle: number = 0;
  public bottomRightRightMiddle: number = 0;
  public bottomIntersection: number = 0;
  public bottomRightMiddleIntersection: number = 0;
	// Health Star Point
  public bottomLeftPoint: number = 0;
  public bottomLeftLeftMiddle: number = 0;
  public bottomLeftRightMiddle: number = 0;
  public bottomLeftIntersection: number = 0;
  public bottomLeftMiddleIntersection: number = 0;
  public middle: number = 0;

  public allCalculated: boolean = false;

  public CalculateStar(): void {
    const date = new Date(this.selectedDate);
    // Star Points Calculation
    this.topLeftPoint = this.CheckAndGetDigitSum(date.getDate());
    this.topPoint = this.CheckAndGetDigitSum(date.getMonth() + 1);
    this.topRightPoint = this.CheckAndGetDigitSum(date.getFullYear());
    this.bottomRightPoint = this.CheckAndGetDigitSum(this.topLeftPoint + this.topPoint + this.topRightPoint);
    this.bottomLeftPoint = this.CheckAndGetDigitSum(this.topLeftPoint + this.topPoint + this.topRightPoint + this.bottomRightPoint);
    // Star Intersections Calculation
    this.topLeftIntersection = this.CheckAndGetDigitSum(this.topLeftPoint + this.topPoint);
    this.topRightIntersection = this.CheckAndGetDigitSum(this.topPoint + this.topRightPoint);
    this.bottomRightIntersection = this.CheckAndGetDigitSum(this.topRightPoint + this.bottomRightPoint);
    this.bottomIntersection = this.CheckAndGetDigitSum(this.bottomRightPoint + this.bottomLeftPoint);
    this.bottomLeftIntersection = this.CheckAndGetDigitSum(this.bottomLeftPoint + this.topLeftPoint);

    this.allCalculated = true;
  }

  public CheckAndGetDigitSum(value: number): number {
    if(value > 22) {
      return value.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return value;
  }
}
