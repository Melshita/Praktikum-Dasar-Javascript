let TB = 1.7
let BB = 90

let BMI = BB / (TB * TB)

if (BMI > 30){
    console.log("status berat badan Rhodey adalah kegemukan / obesitas")
} else if (BMI <= 29.9 && bmi >= 25){
    console.log("status berat badan Rhodey adalah kelebihan berat badan")
} else if (BMI <= 24.9 && BMI >= 18.5){
    console.log("status berat badan Rhodey adalah normal / ideal")
} else if (BMI < 18.5){
    console.log("status berat badan Rhodey adalah kekurangan berat badan")
}