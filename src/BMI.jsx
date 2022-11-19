export default function BMI(weight, height) {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);
    const bmi = parsedWeight / Math.pow(parsedHeight, 2);
    return bmi >= 18.5 && bmi <= 24.9 ? "Normal" :
        bmi >= 25.0 && bmi <= 29.9 ? "Sobrepeso" :
        bmi >= 30 && bmi <= 39.9 ? "Obesidade" :
        "Obesidade grave"
}