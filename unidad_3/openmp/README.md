# OpenMP 

es un ...

## Componentes del estandar

## Funciones


## Tipos de datos


## Constantes


## compilando los archivos

para compilar el archivo fuente `.cpp` se debe ejecutar el comando `mpicxx`.
 
debemos usar la opcion `-fopenmp` para indicarle que es un archivo que usa `OpenMP`

con la opcion `-o` le damos el nombre que queremos al ejecutable.

```sh
mpicxx -fopenmp <archivo_fuente.cpp> -o <archivo_ejecutable>
```

## Ejecutando los archivos

Para ejecutar los programas corremos :

```sh
./<nombre_archivo>
```