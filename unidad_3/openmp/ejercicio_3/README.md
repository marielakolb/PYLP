# ejercicio 3

## Enunciado

Crear un algoritmo que realice el producto escalar de dos vectores donde el tamaño de los vectores es de NH (cantidad de hilos lanzados) por 5.

Para realizar la distribucion de los datos se deberá hacer uso de la paralelización de bucles mediante el uso de `#pragma omp paralell for`. Deberá decidir cual de los planificadores es el adecuado para dicha tarea.

Cada proceso ira haciendo el producto de los elementos de los vectores que en las iteraciones que se les asigne y almacenadolos en una variable privada `producto`.

Luego para reunir los resultados locales se deberán probar las siguientes alternativas:

1. Usando una Variable compartida `total`

- Resuelve el problema con `#pragma omp critical` a la hora de escribir la variable compartida.
- Resuelve el problema con `#pragma omp atomic` a la hora de escribir la variable compartida.

2. Usando una clausula de comparticion `reduction`

## Objetivos

- Aprender a usar `#pragma omp parallel for`.
- Aprender a usar `#pragma omp critical`.
- Aprender a usar `#pragma omp atomic`.
- Aprender a usar la clausula `reduction`
