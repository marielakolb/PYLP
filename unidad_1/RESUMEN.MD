# Referencias Rapidas

Esta es una referencia ultra liviana de los componentes principales de PascalFC debe descartarse como referencia principal para cualquier busqueda profunda referirse a:
  - [Manual del Lenguaje](./docs/)
  - [Guía de Usuario](./docs/)

# Ciclo de vida de un proceso

![](./img/process_lifecycle.png)

## creación

un proceso se crea con su definicion formal.

```pascal
// sintaxix de la definicion de un proceso

process type <nombre>[argumentos];
begin
  secuencia de instrucciones
end;

// ejemplo

process type proceso;
begin
  writeln('soy un proceso');
end;
```

## ejecución

un proceso entra en estado ejecutable cuando se hace define una variable y se realiza la invocación de la misma.

```pascal
// programa principal
var
proceso_1 : proceso;
begin
cobegin
  proceso_1;
coend;
end;
```

# Semaforos

## Declaracion e Inicializacion

## Utilizacion

# Otras Referencias rapidas

```pascal
// declaracion de un array
// array index_type{index_type} of type
var p: array[1..max] of proc;

```
