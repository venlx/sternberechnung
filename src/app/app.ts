import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Star } from '../star/star';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public selectedDate: string = "";
  public star: Star = new Star;
  public allCalculated: boolean = false;

  public calcStar(): void {
    const date = new Date(this.selectedDate);
    this.star.personalityTriangle.point = this.CheckAndGetDigitSum(date.getDate())
    this.star.spiritiualityTriangle.point = this.CheckAndGetDigitSum(date.getMonth() + 1);
    this.star.dutyTriangle.point = this.CheckAndGetDigitSum(date.getFullYear());
    this.star.relationshipTriangle.point = this.CheckAndGetDigitSum(this.star.personalityTriangle.point 
      + this.star.spiritiualityTriangle.point 
      + this.star.dutyTriangle.point);
    this.star.healthTriangle.point = this.CheckAndGetDigitSum(this.star.personalityTriangle.point 
      + this.star.spiritiualityTriangle.point 
      + this.star.dutyTriangle.point
      + this.star.relationshipTriangle.point);

    this.star.personalityTriangle.CalcTriangle(this.star.healthTriangle, this.star.spiritiualityTriangle);
    this.star.spiritiualityTriangle.CalcTriangle(this.star.personalityTriangle, this.star.dutyTriangle);
    this.star.dutyTriangle.CalcTriangle(this.star.spiritiualityTriangle, this.star.relationshipTriangle);
    this.star.relationshipTriangle.CalcTriangle(this.star.dutyTriangle, this.star.healthTriangle);
    this.star.healthTriangle.CalcTriangle(this.star.relationshipTriangle, this.star.personalityTriangle);

    this.star.middle = this.CheckAndGetDigitSum(this.star.personalityTriangle.point 
      + this.star.spiritiualityTriangle.point 
      + this.star.dutyTriangle.point
      + this.star.relationshipTriangle.point 
      + this.star.healthTriangle.point)

    this.allCalculated = true;
  }

  public CheckAndGetDigitSum(value: number): number {
    console.log(value);
    while(value > 22) {
      value = value.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return value;
  }
}
