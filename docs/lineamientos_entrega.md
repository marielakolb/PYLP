# Lineamientos y convenciones para la entrega de los ejercicios

En esta sección podrán encontrar los lineamientos y convenciones que se debe respetar al realizar distintas actividades referidas a las entregas de los ejercicios.

- Creación de Issues de tipo `epic` para aglutinar los ejercicios de las distintas unidades.

- Creación de Issues para cada ejercicio.

- Creación de la branch para resolver el ejercicio

- convencion de nombre de los archivos

- Convencion de nombre del Pull Request

Para la resolución de los ejercicios vamos a seguir un patron de 1-1-1-1

```
1 ejercicio -> 1 issue -> 1 archivo -> 1 pull request
```

## Issues

Los issues son los componentes que vamos a utilizar para representar tanto los trabajos practicos como los ejercicios de los mismos.

Los issues para los trabajos practicos, van a contener un label especial que será asignado por la cátedra, que se denomina `epic`.

> ⚠️ El momento de creación de los issues será consensuada con la cátedra para mantener limpio el repositorio en todo momento


## Creacion de issues

> 💡 Para crear un issue debe ir al [repositorio oficial de la catedra](https://github.com/PYLP-UNaM/PYLP). En la pestaña de [Issues](https://github.com/PYLP-UNaM/PYLP/issues). Click en el boton `New issue`.

## Creacion de issues para los ejercicios de un tema

Cada tema plantea una serie de ejercicios los cuales se deberán resolver y entregar a traves del mecanismo de PR.

Para ello será necesario que el alumno cree un issue por cada ejercicio planteado. Siguiendo las siguientes convenciones.

**Titulo**

```
Ejercicio <N> - <Apellido> <1erNombre>#(En caso que el apellido se repita)
```

**Descripcion** *\*opcional*
```
<Enunciado del ejercicio>
```

## Creacion de issues de tipo `epic` para cada TP

Cada issue de tipo `epic` aglutinará los ejercicios referidos un tema en concreto.

**Temas**

`TP1 (PascalFC), MPI, OpenMP, Haskell, Prolog`

**Titulo**

El titulo del issue deberá respetar la siguiente convención

```sh
TP <TEMA> - <Apellido> <1erNombre>#(En caso que el apellido se repita)
```

**Descripcion**

La descripción del issue sera un checklist de los ejercicios del tema correspondiente, que a su vez serán issues en el repositorio siguiendo las convenciones de la seccion correspondiente.

```
- [ ] #[ISSUE_ID] Ejercicio[N]
- [ ] #[ISSUE_ID] Ejercicio[N]
...
- [ ] #[ISSUE_ID] Ejercicio[N]
```

> 💡 Recuerde que la etiqueta `epic` sera asignada por el personal de catedra

## Creación de branch para la resolucion de ejercicios

La branch creada para resolver un ejercicio siempre debe tener como origen la rama `master`.

Se recomienda enfáticamente nombrar la rama siguiendo la siguiente convencion

```sh
tp<tema>_ej<nro>
```

con ello el comando para la creacion de rama quedaría:

``` bash
# asegurandonos siempre que partimos de master
git checkout -b tp<tema>_ej<nro>
```



