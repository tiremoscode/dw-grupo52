public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola Mundo - Grupo 52");
        // int valor1 = 10;
        // int valor2 = 20;
        // int operacionSuma = valor1 + valor2;
        // int operacionResta = valor1 - valor2;
        double valor1 = 10;
        double valor2 = 20;
        int value1 = 10;
        int value2 = 20;

        double operacionSuma = valor1 + valor2;
        double operacionResta = valor1 - valor2;
        double operacionMulti = valor1 * valor2;
        double operacionDiv = valor1 / valor2;

        int operaSuma = value1 + value2;
        int divisionInt = value1 / value2;
        double divisionDouble = (double) value1 / value2;

        System.out.println("La Suma es igual a: " + operacionSuma);
        System.out.println("La Resta es igual a: " + operacionResta);
        System.out.println("La Multiplicacion es igual a: " + operacionMulti);
        System.out.println("La Division es igual a: " + operacionDiv);

        System.out.println("La suma es igual a: " + operaSuma);
        System.out.println("La division sin casteo es igual a: " + divisionInt);
        System.out.println("La division con casteo es igual a: " + divisionDouble);

    }
}