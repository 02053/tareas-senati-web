<section class="job">

<em>Algoritmia de Programacion</em>

# 3. Subir la transcripcion de los codigos

<em>Agosto 10.2022 <span>|</span> Guillermo Mestas</em>

## Mi primer programa en Python:

```python
print('Hola Mundo')
```

Salida:

```shell
> Hola Mundo
```

## Suma de dos numeros ingresados:

```python
num1 = float(input('Ingrese el numero 1: '))
num2 = float(input('Ingrese el numero 2: '))
sum = num1 + num2

print(f'La suma es: {sum}')
```

Salida:

```shell
> Ingrese el numero 1: 12
  Ingrese el numero 2: 3
  La suma es: 15.0
```

## Conversion entre tipos de datos:

Ejercicio 01

```python
j, k = 6, 4.456734

print('Definimos 2 numeros:')
print(f'j = {str(j)}')
print(f'k = {str(k)}')
```

Salida:

```shell
> Definimos 2 numeros:
  j = 6
  k = 4.456734
```

Ejercicio 02

```python
c, v = '15.21', '16.672354'
b = float(c) + float(v)

print(b)
```

Salida:

```shell
> 31.882354
```

## Manejo de Cadenas:

```python
mensaje1 = 'Hola' + ' ' + 'Mundo'
print(mensaje1)
```

Salida:

```shell
> Hola Mundo
```

## Listas:

```python
frutas = ['naranja', 'manzana', 'pera', 'banana', 'kiwi', 'manzana', 'banana']
print(frutas[4])
```

Salida:

```shell
> kiwi
```

## Tuplas:

```python
lenguajes = ('Python', 'Java', "C", "C++")
print(lenguajes[0])
```

Salida:

```shell
> Python
```

## Diccionarios:

```python
d = {
    'Hola': 123,
    'C': 1456,
    'Zeta': 1974
}

print(d['Hola'])
print(d['Zeta'])
```

Salida:

```shell
> 123
  1974
```

## Ejercicios:

Ejercicio 01

```python
name = input('¿Como te llamas? ')
print(f'{name.upper()} tiene {str(len(name))} letras')
```

Salida:

```shell
> ¿Como te llamas?: Guillermo Daniel Mestas Alvarez
  GUILLERMO DANIEL MESTAS ALVAREZ tiene 31 letras
```

Ejercicio 02

```python
weight = input('¿Cual es tu peso en Kg? ')
height = input('¿Cual es tu alture en metros? ')
bmi = round(float(weight) / float(height) ** 2, 2)

print(f'Tu indice de masa corporal es: {str(bmi)}')
```

Salida:

```shell
> ¿Cual es tu peso en Kg?: 58.9
  ¿Cual es tu alture en metros?: 1.73
  Tu indice de masa corporal es: 19.68
```

</section>
