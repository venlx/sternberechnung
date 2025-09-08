export class Triangle{
    public point: number = 0;
    public leftMiddle: number = 0;
    public rightMiddle: number = 0;
    public bottomMiddle: number = 0;
    public leftIntersection: number = 0;
    public rightIntersection: number = 0;

    public CalcTriangle(left: Triangle, right: Triangle): void {
      this.leftIntersection = this.CheckAndGetDigitSum(this.point + left.point);
      this.leftMiddle = this.CheckAndGetDigitSum(this.point + this.leftIntersection);
      this.rightIntersection = this.CheckAndGetDigitSum(this.point + right.point);
      this.rightMiddle = this.CheckAndGetDigitSum(this.point + this.rightIntersection);
      this.bottomMiddle = this.CheckAndGetDigitSum(this.rightIntersection + this.leftIntersection);
    }
  
    public CheckAndGetDigitSum(value: number): number {
    console.log(value);
    while(value > 22) {
      value = value.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    return value;
  }
}