<section class="job">

<em>Algoritmia de Programacion</em>

# Tarea Nro. 3

<em>Agosto 10.2022 <span>|</span> Guillermo Mestas</em>

## Mi primer programa en Python
```python
print('Hola Mundo')
```

## Suma de dos numeros ingresados
```python
num1 = float(input('Ingrese el numero 1: '))
num2 = float(input('Ingrese el numero 2: '))
sum = num1 + num2

print(f'La suma es: {sum}')
```

## Conversion entre tipos de datos
```python
j, k = 6, 4.456734

print('Definimos 2 numeros,')
print(f'j = {str(j)}')
print(f'k = {str(k)}')
```

```python
c, v = '15.21', '16.672354'
b = float(c) + float(v)

print(b)
```

## Manejo de Cadenas
```python
mensaje1 = 'Hola' + ' ' + 'Mundo'
print(mensaje1)
```

## Listas
```python
frutas = ['naranja', 'manzana', 'pera', 'banana', 'kiwi', 'manzana', 'banana']
print(frutas[4])
```

## Tuplas
```python
lenguajes = ('Python', 'Java', "C", "C++")
print(lenguajes[0])
```

## Diccionarios
```python
d = {
    'Hola': 123,
    'C': 1456,
    'Zeta': 1974
}

print(d['Hola'])
print(d['Zeta'])
```

## Ejercicios
```python
name = input('¿Como te llamas? ')
print(f'{name.upper()} tiene {str(len(name))} letras')
```

```python
weight = input('¿Cual es tu peso en Kg? ')
height = input('¿Cual es tu alture en metros? ')
bmi = round(float(weight) / float(height) ** 2, 2)

print(f'Tu indice de masa corporal es: {str(bmi)}')
```

</section>
